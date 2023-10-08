from models.AudioBook import AudioBook
from bson import json_util
from bson.objectid import ObjectId
import json

def save_audiobook(audio_book: AudioBook, db):
    audio_book_res = db["audio_book"].insert_one(audio_book)
    audio_book_created = db["audio_book"].find_one(
        {"_id": audio_book_res.inserted_id}
    )
    parse_res = json.loads(json_util.dumps(audio_book_created))
    return parse_res

def find_audiobooks(search: str ,db, page: int, size: int):
    try: 
        audiobooks = []
        query = { "title": {"$regex": f"{search}"} } if search != "" else {}

        cursor_collection_row = db["audio_book"].find(query, {"_id":1, "title": 1, "duration": 1}).skip(page*size).limit(size)
        total = len(list(db["audio_book"].find(query, {"_id":1, "title": 1, "duration": 1})))
        current_page = page + 1
        total_pages = round(total / size)
        metadata = {
            "total_items": total,
            "total_pages": total_pages,
            "page": current_page,
            "size": size,
            "next_page": min([current_page + 1, total_pages]),
            "prev_page": max([current_page - 1, 1])
        }

        cursor_collection_row_parsed = json.loads(json_util.dumps(cursor_collection_row))
        for audiobook in cursor_collection_row_parsed:
            audiobooks.append(audiobook)
        return audiobooks, metadata
    except KeyError as e:
        print(e)
        return []
    
def find_audiobook_by_id(id: str,db):
    try:
        audiobook_cursor = db["audio_book"].find_one(
            {"_id": ObjectId(id)}
        )
        audiobook = json.loads(json_util.dumps(audiobook_cursor))
        return audiobook
    except KeyError as e:
        print(e)
        return None