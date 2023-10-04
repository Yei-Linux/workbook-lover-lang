from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from starlette.background import BackgroundTask

import uvicorn
import os

from helpers.file import unique_id, save_upload_file, remove_file
from services.generate_audio import handler_genera_audio

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/generate-audio")
async def generate_audio(file: UploadFile = File(...)):
    id = unique_id()
    file_name_doc = f"{id}.pdf"
    file_name_audio = f"{id}.mp3"

    destination_doc = os.path.join('files',file_name_doc)
    destination_audio = os.path.join('files',file_name_audio)

    save_upload_file(file,destination_doc)
    await handler_genera_audio(destination_doc,destination_audio)
    remove_file(destination_doc)
    
    return FileResponse(destination_audio,background=BackgroundTask(remove_file, destination_audio))

if __name__ == '__main__':
    uvicorn.run("main:app",reload=True)