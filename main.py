import os
import subprocess

def change_background(image_path):
    platform = os.name

    if platform == 'nt':  # Windows
        command = f'reg add "HKEY_CURRENT_USER\\Control Panel\\Desktop" /v Wallpaper /t REG_SZ /d {image_path} /f && RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters'
        subprocess.run(command, shell=True)
    elif platform == 'posix':  # Linux
        command = f'gsettings set org.gnome.desktop.background picture-uri "file://{image_path}"'
        subprocess.run(command, shell=True)
    else:  # Android
        command = f"adb shell 'am start -a android.intent.action.VIEW -d file://{image_path} -t image/*'"
        subprocess.run(command, shell=True)

# Example usage
image_path = "/path/to/your/image.jpg"
change_background(image_path)
