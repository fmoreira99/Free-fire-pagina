import os
from PIL import Image

def remove_white_background(input_path, threshold=240):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        datas = img.getdata()
        
        new_data = []
        for item in datas:
            # item is (R, G, B, A)
            # If R, G, B are all above threshold, make it transparent
            if item[0] >= threshold and item[1] >= threshold and item[2] >= threshold:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        
        # Save as PNG
        output_path = os.path.splitext(input_path)[0] + ".png"
        img.save(output_path, "PNG")
        print(f"Sucessfully processed: {input_path} -> {output_path}")
        
        # If the original wasn't a png, we can delete the original to keep it clean
        if not input_path.lower().endswith('.png'):
            os.remove(input_path)
            print(f"Removed original: {input_path}")
            
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    base_dir = r"c:\Users\USUARIO\OneDrive\Escritorio\Free-fire-pagina\public\rewards"
    if not os.path.exists(base_dir):
        print(f"Directory {base_dir} does not exist.")
    else:
        for filename in os.listdir(base_dir):
            if filename.lower().endswith((".jpg", ".jpeg", ".webp", ".png")):
                file_path = os.path.join(base_dir, filename)
                remove_white_background(file_path)
