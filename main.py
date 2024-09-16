import os
import subprocess

def change_background(image_path):
    # Use adb to change the Android phone background
    command = f"adb shell 'am start -a android.intent.action.VIEW -d file://{image_path} -t image/*'"
    subprocess.run(command, shell=True)

# Example usage
image_path = "/path/to/your/image.jpg"
change_background(image_path)
