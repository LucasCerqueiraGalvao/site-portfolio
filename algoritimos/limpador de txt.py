import re

def remove_extra_blank_lines(file_path, save_as_new=False):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    cleaned_lines = []
    previous_line_empty = False

    for line in lines:
        if line.strip() == '':
            if not previous_line_empty:
                cleaned_lines.append(line)
                previous_line_empty = True
        else:
            cleaned_lines.append(line)
            previous_line_empty = False

    output_file_path = file_path
    if save_as_new:
        output_file_path = file_path.replace('.html', '_cleaned.html')

    with open(output_file_path, 'w', encoding='utf-8') as file:
        file.writelines(cleaned_lines)

# Exemplo de uso
html_file_path = r'C:\Users\Lenovo\Desktop\site\site-portfolio\index.html'
css_file_path = r'C:\Users\Lenovo\Desktop\site\site-portfolio\assets\css\style.css'
js_file_path = r'C:\Users\Lenovo\Desktop\site\site-portfolio\assets\js\script.js'

# Processar arquivos
remove_extra_blank_lines(html_file_path, save_as_new=True)  # Salva como novo arquivo
remove_extra_blank_lines(css_file_path)  # Salva por cima do arquivo original
remove_extra_blank_lines(js_file_path)   # Salva por cima do arquivo original
