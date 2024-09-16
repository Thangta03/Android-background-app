const { exec } = require('child_process');
const os = require('os');

function changeBackground(imagePath) {
    const platform = os.platform();

    if (platform === 'win32') {
        const command = `reg add "HKEY_CURRENT_USER\\Control Panel\\Desktop" /v Wallpaper /t REG_SZ /d ${imagePath} /f && RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    } else if (platform === 'linux') {
        const command = `gsettings set org.gnome.desktop.background picture-uri "file://${imagePath}"`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    } else {
        const command = `adb shell 'am start -a android.intent.action.VIEW -d file://${imagePath} -t image/*'`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    }
}

// Example usage
const imagePath = "/path/to/your/image.jpg";
changeBackground(imagePath);
