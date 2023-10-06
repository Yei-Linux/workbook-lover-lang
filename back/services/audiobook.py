from models.AudioBook import AudioBook
from bson import json_util
import json

def save_audiobook(audio_book: AudioBook, db):
    audio_book_res = db["audio_book"].insert_one(audio_book)
    audio_book_created = db["audio_book"].find_one(
        {"_id": audio_book_res.inserted_id}
    )
    parse_res = json.loads(json_util.dumps(audio_book_created))
    return parse_res