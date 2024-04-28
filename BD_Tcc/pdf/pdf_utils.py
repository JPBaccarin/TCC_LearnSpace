from pikepdf import Pdf


def extrairTextoDoPDF(caminho_arquivo):
    with open(caminho_arquivo, 'rb') as arquivo:
        pdf_texto = ""
        pdf_reader = Pdf.open(arquivo)

        for pagina in pdf_reader.pages:
            pdf_texto += pagina.extract_text()

    return pdf_texto


def extrairImagensDoPDF(caminho_arquivo):
    imagens = []

    with Pdf.open(caminho_arquivo) as pdf:
        for pagina in pdf.pages:
            imagens_pagina = extrairImagensDaPagina(pagina)
            imagens.extend(imagens_pagina)

    return imagens
