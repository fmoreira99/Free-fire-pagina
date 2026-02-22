import os
from PIL import Image

def remove_fake_background(image_path):
    print(f"Procesando: {image_path}")
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    # Colores comunes de "Falso PNG" y blanco puro
    # Blanco, Gris claro (varios tonos de cuadricula)
    targets = [
        (255, 255, 255), # Blanco
        (204, 204, 204), # Gris común 1
        (192, 192, 192), # Gris común 2
        (200, 200, 200), # Gris común 3
        (240, 240, 240), # Casi blanco
    ]
    
    threshold = 15 # Tolerancia para colores similares

    for item in datas:
        # Si el pixel es muy similar a alguno de nuestros objetivos, lo hacemos transparente
        is_bg = False
        for target in targets:
            if abs(item[0] - target[0]) < threshold and \
               abs(item[1] - target[1]) < threshold and \
               abs(item[2] - target[2]) < threshold:
                is_bg = True
                break
        
        if is_bg:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(image_path, "PNG")
    print(f"Finalizado: {image_path}")

# Procesar TODA la carpeta public/rewards
folder_path = os.path.join(os.getcwd(), "public", "rewards")
if os.path.exists(folder_path):
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(".png"):
            full_path = os.path.join(folder_path, filename)
            remove_fake_background(full_path)
else:
    print(f"No se encontró la carpeta: {folder_path}")

