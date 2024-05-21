import fitz  # PyMuPDF
import io
from PIL import Image

# Abre o arquivo PDF
pdf_document = fitz.open('enem.pdf')

# Percorre todas as páginas do PDF
for page_number in range(len(pdf_document)):
    page = pdf_document.load_page(page_number)
    images = page.get_images(full=True)
    
    # Percorre todas as imagens da página
    for img_index, img in enumerate(images):
        xref = img[0]
        base_image = pdf_document.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        image = Image.open(io.BytesIO(image_bytes))
        
        # Salva a imagem com um nome baseado no número da página e índice da imagem
        image_filename = f"image_page{page_number + 1}_img{img_index + 1}.{image_ext}"
        image.save(open(image_filename, "wb"))
        print(f"Imagem salva como {image_filename}")

print("Extração de imagens concluída!")