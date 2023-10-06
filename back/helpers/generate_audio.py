from gtts import gTTS
from TTS.api import TTS

import PyPDF2

def gtts_handler(pdf_content: str,language: str,destination: str):
    myobj = gTTS(text=pdf_content, lang=language, slow=False)
    myobj.save(destination)
    return

def tts_handler(pdf_content: str,language: str, destination: str):
    tts = TTS(model_name="tts_models/en/ljspeech/vits", progress_bar=True, gpu=False)
    tts.tts_to_file(pdf_content, file_path=destination)
    return

async def handler_genera_audio(file_name, destination):
    file = open(file_name,'rb')
    pdf_reader = PyPDF2.PdfReader(file)
    num_pages = len(pdf_reader.pages)
    language = 'en'
    pdf_content = ''

    for num in range(0,num_pages):
        page = pdf_reader.pages[num]
        content = page.extract_text()
        list_content = [pdf_content,content]
        pdf_content = " ".join(list_content)
    
    tts_handler(pdf_content,language, destination)

    return { "title": "", "duration": 3600, "audio_url": "", "transcription": pdf_content }