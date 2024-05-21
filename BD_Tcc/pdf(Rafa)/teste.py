import fitz  # PyMuPDF
import io
from PIL import Image
from pdfminer.high_level import extract_text_to_fp
from pdfminer.layout import LAParams
from io import StringIO
import os
import json

# Função para extrair texto de uma página específica do PDF usando pdfminer.six
def extract_text_from_page(pdf_path, page_number):
    output_string = StringIO()
    with open(pdf_path, 'rb') as pdf_file:
        extract_text_to_fp(pdf_file, output_string, laparams=LAParams(), page_numbers=[page_number])
    return output_string.getvalue()

# Cria a pasta para imagens se não existir
image_folder = 'images'
if not os.path.exists(image_folder):
    os.makedirs(image_folder)

# Abre o arquivo PDF
pdf_path = 'enem.pdf'
pdf_document = fitz.open(pdf_path)

# Lista para armazenar as questões
questions = []

# Variável para armazenar todo o texto extraído
all_text = ""

# Percorre todas as páginas do PDF
for page_number in range(len(pdf_document)):
    # Extrai imagens da página atual
    page = pdf_document.load_page(page_number)
    images = page.get_images(full=True)
    
    # Lista para armazenar os caminhos das imagens da página
    image_paths = []
    
    for img_index, img in enumerate(images):
        xref = img[0]
        base_image = pdf_document.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image = Image.open(io.BytesIO(image_bytes))
        
        # Nome do arquivo de imagem baseado no número da página e índice da imagem
        image_filename = f"image_page{page_number + 1}_img{img_index + 1}.{image_ext}"
        image_path = os.path.join(image_folder, image_filename)
        image.save(image_path)
        
        # Adiciona o caminho da imagem à lista
        image_paths.append(image_path)
    
    # Extrai o texto da página atual
    text = extract_text_from_page(pdf_path, page_number)
    
    # Adiciona o texto extraído ao texto total
    all_text += text
    
    # Supondo que o formato do texto siga um padrão conhecido para as questões
    # Se necessário, ajuste a lógica de parsing conforme o formato real do texto
    question_blocks = text.split('\n\n')  # Simples separação por blocos duplos de nova linha
    for i, block in enumerate(question_blocks):
        lines = block.split('\n')
        if len(lines) > 1:  # Um bloco deve ter pelo menos um enunciado e alternativas
            question_number = len(questions) + 1
            enunciado = lines[0]
            alternativas = '\n'.join(lines[1:])
            
            # Adiciona a questão à lista
            questions.append({
                "questao": f"questao {question_number}",
                "enunciado": enunciado,
                "alternativas": alternativas,
                "image": image_paths[i] if i < len(image_paths) else ""
            })

# Nome do arquivo de saída para JSON
output_json_filename = 'enem_questions.json'

# Salva as questões em um arquivo JSON
with open(output_json_filename, 'w', encoding='utf-8') as output_file:
    json.dump(questions, output_file, ensure_ascii=False, indent=4)

print("Extração de texto e imagens concluída! JSON salvo como 'enem_questions.json'.")

# Salva o texto em um arquivo TXT
output_text_filename = 'enem_text.txt'
with open(output_text_filename, 'w', encoding='utf-8') as text_file:
    text_file.write(all_text)

print("Texto extraído salvo como 'enem_text.txt'.")
