from pikepdf import PdfImage

def extrairImagensDaPagina(pagina):
    imagens = []

    for imagem_ref in pagina.images.keys():
        imagem = pagina.images[imagem_ref]
        if isinstance(imagem, PdfImage):
            imagens.append(imagem)

    return imagens
