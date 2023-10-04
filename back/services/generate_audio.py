from gtts import gTTS
import PyPDF2

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
    
    myobj = gTTS(text=pdf_content, lang=language, slow=False)
    myobj.save(destination)