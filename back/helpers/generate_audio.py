from gtts import gTTS
from TTS.api import TTS
from pydub import AudioSegment

import PyPDF2

def gtts_handler(pdf_content: str,language: str,destination: str):
    myobj = gTTS(text=pdf_content, lang=language, slow=False)
    myobj.save(destination)
    return

def tts_handler(pdf_content: str,language: str, destination: str): 
    tts = TTS(model_name="tts_models/en/ljspeech/vits", progress_bar=True, gpu=False)
    tts.tts_to_file(pdf_content, file_path=destination)

def read_pdf(file_name: str,source_filename: str):
    file = open(file_name,'rb')
    pdf_reader = PyPDF2.PdfReader(file)
    metadata = pdf_reader.metadata
    title = metadata.title if metadata.title != None else source_filename
    num_pages = len(pdf_reader.pages)
    
    pdf_content = ''

    for num in range(0,num_pages):
        page = pdf_reader.pages[num]
        content = page.extract_text()
        list_content = [pdf_content,content]
        pdf_content = " ".join(list_content)

    return title, pdf_content

def get_mp3_duration(destination: str):
    audio = AudioSegment.from_file(destination)
    return audio.duration_seconds

async def handler_genera_audio(file_name, destination, source_filename):
    language = 'en'
    title, pdf_content = read_pdf(file_name, source_filename)
    
    retries = 3
    for i in range(retries):
        try:
            tts_handler(pdf_content,language, destination)
        except KeyError as e:
            if i < retries - 1:
                print(f"Retry number {retries}")
                continue
            else:
                raise
        break

    duration = get_mp3_duration(destination)

    return { "title": title, "duration": duration, "audio_url": "", "transcription": pdf_content }