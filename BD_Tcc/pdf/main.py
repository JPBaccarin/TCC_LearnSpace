from pdf_utils import extrairTextoDoPDF
from questao_utils import extrairQuestoesENEM
from imagem_utils import extrairImagensDoPDF
import json

def main():
    # Caminho do arquivo PDF do ENEM
    caminho_arquivo = "BD_Tcc/pdf/enem_2020__dia_1.pdf"
    ano_enem = 2020

    # Extrair texto do PDF do ENEM
    texto_pdf = extrairTextoDoPDF(caminho_arquivo)

    # Extrair imagens do PDF do ENEM
    imagens_pdf = extrairImagensDoPDF(caminho_arquivo)

    # Extrair questões do PDF do ENEM
    questoes_enem = extrairQuestoesENEM(texto_pdf, imagens_pdf)

    # Salvar as questões em um arquivo JSON
    with open('enem_questions.json', 'w', encoding='utf-8') as json_file:
        json.dump(questoes_enem, json_file, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    main()
