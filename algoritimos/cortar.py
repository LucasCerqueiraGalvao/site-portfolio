from PIL import Image

def resize_and_crop(input_image_path, output_image_path, crop_width, crop_height):
    """
    Redimensiona e corta a imagem para as dimensões especificadas.
    """
    with Image.open(input_image_path) as img:
        width, height = img.size
        
        # Calcular a proporção de aspecto desejada
        target_ratio = crop_width / crop_height
        img_ratio = width / height

        if img_ratio > target_ratio:
            # A imagem é mais larga do que a proporção desejada, ajuste a largura
            new_height = crop_height
            new_width = int(new_height * img_ratio)
        else:
            # A imagem é mais alta do que a proporção desejada, ajuste a altura
            new_width = crop_width
            new_height = int(new_width / img_ratio)
        
        # Redimensionar a imagem
        img = img.resize((new_width, new_height), Image.LANCZOS)
        
        # Calcular a posição para cortar a imagem
        left = (new_width - crop_width) / 2
        top = (new_height - crop_height) / 2
        right = (new_width + crop_width) / 2
        bottom = (new_height + crop_height) / 2
        
        # Cortar a imagem
        cropped_img = img.crop((left, top, right, bottom))
        
        # Salvar a imagem cortada
        cropped_img.save(output_image_path)
        print(f"Imagem redimensionada e cortada salva como: {output_image_path}")

# Caminho da imagem de entrada e saída
input_path = r"C:\Users\Lenovo\Desktop\site\site\vcard-personal-portfolio\algoritimos\imagem1.png"
output_path = r"C:\Users\Lenovo\Desktop\site\site\vcard-personal-portfolio\algoritimos\imagem-cut.png"

# Dimensões desejadas
crop_width = 600
crop_height = 450

# Chama a função para redimensionar e cortar a imagem
resize_and_crop(input_path, output_path, crop_width, crop_height)


