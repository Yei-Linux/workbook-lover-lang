from pydub import AudioSegment
import boto3
from dotenv import dotenv_values

import PyPDF2

def tts_polly_handler(pdf_content: str,language: str, destination: str): 
    secret = dotenv_values(".env")["AWS_ACCESS_SECRET"]
    key = dotenv_values(".env")["AWS_ACCESS_KEY"]
    region = dotenv_values(".env")["AWS_REGION"]

    free_version = pdf_content[0:1500]

    polly_client = boto3.session.Session( aws_access_key_id= key, aws_secret_access_key= secret, region_name = region).client('polly')
    response = polly_client.synthesize_speech(VoiceId='Joanna',
                OutputFormat='mp3', 
                Text = free_version)

    file = open(destination, 'wb')
    file.write(response['AudioStream'].read())
    file.close()

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
            tts_polly_handler(pdf_content,language, destination)
        except KeyError as e:
            if i < retries - 1:
                print(f"Retry number {retries}")
                continue
            else:
                raise
        break

    duration = get_mp3_duration(destination)

    return { "title": title, "duration": duration, "audio_url": "", "transcription": pdf_content }