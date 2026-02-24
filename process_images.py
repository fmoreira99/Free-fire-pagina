import os
from PIL import Image

def remove_background_advanced(image_path):
    print(f"Procesando: {image_path}")
    try:
        img = Image.open(image_path).convert("RGBA")
        datas = img.getdata()

        new_data = []
        # Umbral para detectar blanco o gris muy claro (típico de fondos o cuadrículas)
        # Si los tres canales R, G, B son mayores a 220, es probable que sea fondo
        # O si son muy similares entre sí (grises) y están en el rango de la cuadrícula
        
        for item in datas:
            # item es (R, G, B, A)
            r, g, b, a = item
            
            # 1. Detectar Blanco Puro o casi blanco
            if r > 235 and g > 235 and b > 235:
                new_data.append((255, 255, 255, 0))
            # 2. Detectar Grises de cuadrícula fake PNG (usualmente alrededor de 190-210)
            elif 180 < r < 225 and 180 < g < 225 and 180 < b < 225 and abs(r-g) < 5 and abs(g-b) < 5:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)

        img.putdata(new_data)
        
        # Guardar siempre como PNG para mantener transparencia
        base_path = os.path.splitext(image_path)[0]
        output_path = base_path + ".png"
        
        img.save(output_path, "PNG")
        
        # Si el original era webp, lo borramos para no tener duplicados
        if image_path.lower().endswith(".webp"):
            os.remove(image_path)
            
        print(f"Finalizado: {output_path}")
    except Exception as e:
        print(f"Error procesando {image_path}: {e}")

# Procesar TODA la carpeta public/rewards
folder_path = os.path.join(os.getcwd(), "public", "rewards")
if os.path.exists(folder_path):
    for filename in os.listdir(folder_path):
        if filename.lower().endswith((".png", ".webp")):
            full_path = os.path.join(folder_path, filename)
            remove_background_advanced(full_path)
else:
    print(f"No se encontró la carpeta: {folder_path}")


