import re
from imagem_utils import extrairImagensDaPagina


def extrairInfoQuestao(questao_text, questao_id, imagens_pagina):
    # Adapte a lógica conforme necessário para extrair as informações da questão
    # Exemplo de estrutura de dados para a questão:
    questao_info = {
        "id": questao_id,
        "texto": questao_text,
        "imagens": imagens_pagina  # Adicione lógica para processar as imagens da página
    }

    return questao_info


def extrairQuestoesENEM(texto_pdf, imagens_pdf):
    questoes_enem = []
    questao_id = 1

    for pagina_num, pagina_texto in enumerate(re.split(r'Questão\s+\d+', texto_pdf)[1:], start=1):
        imagens_pagina = imagens_pdf[pagina_num -
                                     1] if pagina_num <= len(imagens_pdf) else []
        questao_info = extrairInfoQuestao(
            pagina_texto, questao_id, imagens_pagina)

        if questao_info:
            questoes_enem.append(questao_info)
            questao_id += 1

    return questoes_enem
