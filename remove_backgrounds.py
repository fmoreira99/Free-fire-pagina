import os
from pathlib import Path
from rembg import remove
from PIL import Image
from tqdm import tqdm
import sys

def process_images(input_dir):
    input_path = Path(input_dir)
    if not input_path.exists():
        print(f"Error: Path {input_dir} does not exist.")
        return

    output_path = input_path / "processed"
    
    # Create output directory if it doesn't exist
    output_path.mkdir(exist_ok=True)
    
    # Supported image extensions
    extensions = ['.jpg', '.jpeg', '.png', '.webp']
    
    # Filter only files that are images and not in the processed folder
    images = [f for f in input_path.iterdir() if f.is_file() and f.suffix.lower() in extensions]
    
    if not images:
        print("No images found to process.")
        return

    print(f"Found {len(images)} images to process.")
    print(f"Processed images will be saved in: {output_path}")
    
    for img_file in tqdm(images, desc="Removing backgrounds"):
        try:
            # Open the image
            input_image = Image.open(img_file)
            
            # Remove the background
            # rembg is very good at identifying characters and removing 
            # both solid colors (white) and fake transparency grids.
            output_image = remove(input_image)
            
            # Save the result as PNG (must be PNG to support transparency)
            output_filename = img_file.stem + ".png"
            dest_file = output_path / output_filename
            
            output_image.save(dest_file)
            
        except Exception as e:
            print(f"Error processing {img_file.name}: {e}")

if __name__ == "__main__":
    # The path provided by the user
    target_directory = r"C:\Users\USUARIO\OneDrive\Escritorio\Free-fire-pagina\src\assets\rewards"
    
    # Check if a custom path was provided as argument
    if len(sys.argv) > 1:
        target_directory = sys.argv[1]
        
    process_images(target_directory)
    print("\n✅ Processing complete! Check the 'processed' folder inside the rewards directory.")
