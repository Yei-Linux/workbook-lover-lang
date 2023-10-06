from uuid import uuid4
from typing import Optional
from pydantic import BaseModel, Field

class AudioBook(BaseModel):
    id: str = Field(default_factory=uuid4, alias="_id")
    title: str = Field(...)
    duration: int = Field(...)
    audio_url: str = Field(...)
    transcription: str = Field(...)

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "_id":  "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "title": "Horror's History",
                "duration": 680,
                "audio_url": "",
                "transcription": "..."
            }
        }

