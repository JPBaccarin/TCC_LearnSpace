import os
from pikepdf import Pdf, PdfImage

# Diretório onde o script está sendo executado
pasta_script = os.path.dirname(os.path.abspath(__file__))
#Não esqueça de trocar o caminho do arquivo
arquivo_pdf = '/home/kali/Documents/Testes/pdf/geo_teste.pdf'

arquivo = Pdf.open(arquivo_pdf)

for pagina_num, pagina in enumerate(arquivo.pages):
    for nome, imagem in pagina.images.items():
        try:
            imagem_salvar = PdfImage(imagem)
            nome_imagem = f"pagina_{pagina_num}_imagem_{nome}.png"
            caminho_imagem = os.path.join(pasta_script, nome_imagem)
            imagem_salvar.extract_to(fileprefix=caminho_imagem)
        except Exception as e:
            print(f"Erro ao processar a imagem {nome} na página {pagina_num}: {e}")
            continue
