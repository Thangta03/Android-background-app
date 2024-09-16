# Android-background-app

## Purpose

This repository contains code for changing the background of an Android device using ADB commands and a note-taking application, both implemented in JavaScript and Python.

## Background Changer

### JavaScript (`main.js`)

The `main.js` script demonstrates how to change the background of an Android, Windows, or Linux device by specifying the path to an image file.

Example usage:
```javascript
const imagePath = "/path/to/your/image.jpg";
changeBackground(imagePath);
```

### Python (`main.py`)

The `main.py` script demonstrates how to change the background of an Android, Windows, or Linux device by specifying the path to an image file.

Example usage:
```python
image_path = "/path/to/your/image.jpg";
change_background(image_path);
```

## Note-Taking App

This repository also includes a note-taking app implemented in both Python and JavaScript.

### Instructions

#### Python Note-Taking App

1. Run the `note_taking_app.py` script.
2. Follow the on-screen prompts to create, view, or delete notes.

#### JavaScript Note-Taking App

1. Run the `note_taking_app.js` script using Node.js.
2. Follow the on-screen prompts to create, view, or delete notes.

### Examples

#### Creating a Note

Python:
```
Enter the title of the note: MyNote
Enter the content of the note: This is a sample note.
Note created successfully.
```

JavaScript:
```
Enter the title of the note: MyNote
Enter the content of the note: This is a sample note.
Note created successfully.
```

#### Viewing a Note

Python:
```
Enter the title of the note to view: MyNote
Note content:
This is a sample note.
```

JavaScript:
```
Enter the title of the note to view: MyNote
Note content:
This is a sample note.
```

#### Deleting a Note

Python:
```
Enter the title of the note to delete: MyNote
Note deleted successfully.
```

JavaScript:
```
Enter the title of the note to delete: MyNote
Note deleted successfully.
```
