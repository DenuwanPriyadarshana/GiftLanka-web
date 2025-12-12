
import hashlib
import os
import requests

files = [
    # (Filename on Wiki, Local Filename)
    ("Leatherman.jpg", "leatherman.jpg"),
    ("Aeropress_setup.jpg", "aeropress.jpg"),
    ("CORDLESS_DRILL.jpg", "dewalt-drill.jpg"),
    ("Bluetooth_Speaker.jpg", "jbl-speaker.jpg"),
    ("DJI_Mavic_3_Cine_-_Front.jpg", "dji-drone.jpg")
]

base_url = "https://upload.wikimedia.org/wikipedia/commons"
save_dir = "public/images"

if not os.path.exists(save_dir):
    os.makedirs(save_dir)

for wiki_name, local_name in files:
    # Handle spaces as underscores for hash calculation? 
    # Wiki usually stores them as spaces in the DB but URLs have underscores.
    # The hash is calculated on the spaces-replaced-by-underscores name usually?
    # Actually, let's verify. 
    # "Bluetooth_Speaker.jpg" -> e0 check previously.
    
    clean_name = wiki_name.replace(" ", "_")
    
    # Calculate MD5
    m = hashlib.md5(clean_name.encode('utf-8')).hexdigest()
    
    # Construct URL: /a/ab/Filename
    url = f"{base_url}/{m[0]}/{m[0:2]}/{clean_name}"
    
    print(f"Attempting: {url}")
    
    try:
        r = requests.get(url, timeout=10, headers={'User-Agent': 'CoolBot/0.0 (https://example.org/coolbot/; coolbot@example.org)'})
        if r.status_code == 200:
            with open(os.path.join(save_dir, local_name), 'wb') as f:
                f.write(r.content)
            print(f"Success: {local_name}")
        else:
            print(f"Failed: {r.status_code} for {wiki_name}")
    except Exception as e:
        print(f"Error: {e}")
