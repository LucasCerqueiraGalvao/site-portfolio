from PIL import Image

# Abre a imagem PNG
image_path = 'C:\\Users\\Lenovo\\Desktop\\site\\Site-Portifolio\\algoritimos\\logo.png'
image = Image.open(image_path).convert("RGBA")

# Carrega os dados da imagem
data = image.getdata()

# Cria uma nova lista para os novos dados de imagem
new_data = []

# Percorre cada pixel da imagem
for item in data:
    # Verifica se o pixel é branco (r=255, g=255, b=255)
    if item[:3] == (255, 255, 255):
        # Se for branco, torna-o transparente (a=0)
        new_data.append((255, 255, 255, 0))
    else:
        # Caso contrário, mantém o pixel original
        new_data.append(item)

# Atualiza a imagem com os novos dados
image.putdata(new_data)

# Salva a nova imagem
output_path = 'C:\\Users\\Lenovo\\Desktop\\site\\Site-Portifolio\\algoritimos\\imagem_transparente.png'
image.save(output_path, "PNG")

print(f"Imagem salva em {output_path}")
