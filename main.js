const { exec } = require('child_process');

function changeBackground(imagePath) {
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

// Example usage
const imagePath = "/path/to/your/image.jpg";
changeBackground(imagePath);
