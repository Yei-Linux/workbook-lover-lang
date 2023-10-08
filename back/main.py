from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from starlette.background import BackgroundTask
from dotenv import dotenv_values
from pymongo import MongoClient
from typing import Union

import uvicorn
import os

from helpers.file import unique_id, save_upload_file, remove_file
from helpers.generate_audio import handler_genera_audio
from models.AudioBook import AudioBook
from services.audiobook import save_audiobook, find_audiobooks, find_audiobook_by_id
from proxy.aws import upload_file_s3

config = dotenv_values(".env")
app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(config["DB_ATLAS_URI"])
    app.database = app.mongodb_client[config["DB_NAME"]]
    print("Database Connected Succesfully")

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/api/audiobooks/{id}")
async def get_aubiobook_by_id(id):
    db = app.database
    audiobook = find_audiobook_by_id(id,db)
    return {"data": audiobook}

@app.get("/api/audiobooks")
async def get_audiobooks(search: str = "", page: int = 1, size: int = 10):
    db = app.database
    audiobooks, metadata = find_audiobooks(search,db, page-1,  size)
    return {"data": audiobooks, "metadata": metadata}

@app.post("/api/audiobooks")
async def generate_audiobook(file: UploadFile = File(...)):
    id = unique_id()
    file_name_doc = f"{id}.pdf"
    file_name_audio = f"{id}.mp3"

    db = app.database

    destination_doc = os.path.join('files',file_name_doc)
    destination_audio = os.path.join('files',file_name_audio)

    save_upload_file(file,destination_doc)
    audio_book_model = await handler_genera_audio(destination_doc,destination_audio,source_filename=file.filename.replace(".pdf", ""))
    remove_file(destination_doc)

    s3_url = upload_file_s3(destination_audio)
    if (s3_url == None):
        return {"data": {}, "error": True}
    
    audio_book_model["audio_url"] = s3_url
    audio_book = save_audiobook(audio_book_model,db)
    remove_file(destination_audio)
    
    return { "data" : audio_book, "error": False }

if __name__ == '__main__':
    uvicorn.run("main:app",reload=True)