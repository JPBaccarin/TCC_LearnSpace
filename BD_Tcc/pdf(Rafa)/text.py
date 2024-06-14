from pdfminer.high_level import extract_text
# Extrai o texto do arquivo PDF
text = extract_text('BD_Tcc/pdf(Rafa)/caotinhoso.pdf')

# Define o nome do arquivo de saída
output_filename = 'livro2.txt'

# Abre um arquivo de saída em modo de escrita e salva o texto extraído
with open(output_filename, 'w', encoding='utf-8') as f:
    f.write(text)

print(f'Texto extraído e salvo em {output_filename}')