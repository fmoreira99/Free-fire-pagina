import os

# Configuración
REWARDS_DIR = "public/rewards"
JSX_FILE = "src/RewardsGenerator.jsx"
VERSION = "v=6"
LINKS = [
    'https://omg10.com/4/10193937', 'https://omg10.com/4/10615693', 'https://omg10.com/4/10193957',
    'https://omg10.com/4/10193949', 'https://omg10.com/4/10193955', 'https://omg10.com/4/10193950',
    'https://omg10.com/4/10193953', 'https://omg10.com/4/10193956', 'https://omg10.com/4/10193951',
    'https://omg10.com/4/10147861', 'https://www.effectivegatecpm.com/rcbsrwxv58?key=4252999d93bfecfc4aa4dcf8f91fc03b',
    'https://www.effectivegatecpm.com/wqgi71hemu?key=34a9f666596b818861f49f84becb685e', 'https://www.effectivegatecpm.com/ttb74c8tq8?key=af1a97f37f5a027bd3d0829a26a90e6e',
    'https://www.effectivegatecpm.com/pedjvcva?key=5509ba6b1262369b745cbbc664af8c5d', 'https://www.effectivegatecpm.com/r4495dauq?key=0f15c64a0e85e948409ee9ae93dbff2b',
    'https://www.effectivegatecpm.com/rgtfqwe9?key=17ef86cb7dfb7aaf61b51b12f8f1cdc5', 'https://www.effectivegatecpm.com/d1rfhq04x?key=4f4f9fdf2187e0f0c444b4be9a4a33d0',
    'https://www.effectivegatecpm.com/w0u5v8geyf?key=9cc891f6d793faf25e8f4f4b71b85fb1', 'https://www.effectivegatecpm.com/b3yjr1t700?key=9a9698f66a79ca46b2bee9d3e44f0562'
]
COLORS = ['#FFD700', '#CC66FF', '#FF1A1A', '#00D4FF', '#FFB800', '#8B00FF', '#00FF88', '#FF6B00']

# Obtener lista de imágenes (solo PNG y WebP)
images = [f for f in os.listdir(REWARDS_DIR) if f.lower().endswith(('.png', '.webp'))]
images.sort()

VERSION = "v=7"
new_rewards_data = []

for i, img in enumerate(images):
    # Limpiar nombre del archivo para usar como nombre del premio
    name = img.rsplit('.', 1)[0]
    # Eliminar hashes largos si existen (ejemplo: 01c5668b...)
    if len(name) > 20 and name.isalnum():
        name = "Premio Especial " + str(i+1)
    else:
        name = name.replace('-', ' ').replace('_', ' ').replace('(', '').replace(')', '').title()
    
    link = LINKS[i % len(LINKS)]
    color = COLORS[i % len(COLORS)]
    
    new_rewards_data.append(f"    {{ id: {i+1}, name: '{name.strip()}', image: '/rewards/{img}?{VERSION}', color: '{color}', link: '{link}' }}")


# Construir el bloque de código
jsx_content = "const REWARDS_DATA = [\n" + ",\n".join(new_rewards_data) + "\n];"

# Leer el archivo original
with open(JSX_FILE, "r", encoding='utf-8') as f:
    lines = f.readlines()

# Reemplazar el bloque REWARDS_DATA
start_line = -1
end_line = -1
for i, line in enumerate(lines):
    if "const REWARDS_DATA =" in line:
        start_line = i
    if start_line != -1 and "];" in line:
        end_line = i
        break

if start_line != -1 and end_line != -1:
    new_lines = lines[:start_line] + [jsx_content + "\n"] + lines[end_line+1:]
    with open(JSX_FILE, "w", encoding='utf-8') as f:
        f.writelines(new_lines)
    print(f"Éxito: Se procesaron {len(images)} imágenes.")
else:
    print("Error: No se encontró el bloque REWARDS_DATA en el archivo JSX.")
