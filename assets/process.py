import os
from PIL import Image

SRC = "/app/assets"
GUIA = os.path.join(SRC, "guia", "Guia Menú")
OUT = "/app/frontend/public/images"
os.makedirs(OUT, exist_ok=True)

def key_to_transparent(img, tol=42):
    img = img.convert("RGBA")
    px = img.load()
    w, h = img.size
    bg = px[2, 2][:3]
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if abs(r - bg[0]) < tol and abs(g - bg[1]) < tol and abs(b - bg[2]) < tol:
                px[x, y] = (r, g, b, 0)
    return img

def autocrop_alpha(img):
    bbox = img.getchannel("A").getbbox()
    return img.crop(bbox) if bbox else img

manual = Image.open(os.path.join(SRC, "manual.jpeg"))
W, H = manual.size
print("manual size", W, H)

# Green logo on cream (section 01)
logo = manual.crop((int(W*0.36), int(H*0.055), int(W*0.74), int(H*0.155)))
logo = key_to_transparent(logo)
logo = autocrop_alpha(logo)
logo.save(os.path.join(OUT, "logo-green.png"))
print("logo-green", logo.size)

# White logo on dark green (left panel)
wlogo = manual.crop((int(W*0.02), int(H*0.135), int(W*0.32), int(H*0.24)))
wlogo = key_to_transparent(wlogo)
wlogo = autocrop_alpha(wlogo)
wlogo.save(os.path.join(OUT, "logo-white.png"))
print("logo-white", wlogo.size)

# Mascot line illustration (top right)
mascot = manual.crop((int(W*0.70), int(H*0.03), int(W*1.0), int(H*0.27)))
mascot = key_to_transparent(mascot, tol=36)
mascot = autocrop_alpha(mascot)
mascot.save(os.path.join(OUT, "mascot.png"))
print("mascot", mascot.size)

# Product photos
photos = {
    "LA APERA.png": "la-apera.jpg",
    "Alitas bbq.jpg": "alitas-bbq.jpg",
    "Alitas buffalo.jpg": "alitas-buffalo.jpg",
    "Chicken pops.png": "chicken-pops.jpg",
    "Crispy tenders.jpg": "crispy-tenders.jpg",
    "Nuestras salsas.png": "salsas.jpg",
}
for src_name, out_name in photos.items():
    im = Image.open(os.path.join(GUIA, src_name)).convert("RGB")
    im.thumbnail((1100, 1600), Image.LANCZOS)
    im.save(os.path.join(OUT, out_name), quality=84, optimize=True)
    print(out_name, im.size)
