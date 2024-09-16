const fs = require('fs');
const path = require('path');

function createNote() {
    const title = prompt("Enter the title of the note: ");
    const content = prompt("Enter the content of the note: ");
    fs.writeFileSync(`${title}.txt`, content);
    console.log("Note created successfully.");
}

function viewNote() {
    const title = prompt("Enter the title of the note to view: ");
    if (fs.existsSync(`${title}.txt`)) {
        const content = fs.readFileSync(`${title}.txt`, 'utf8');
        console.log("Note content:");
        console.log(content);
    } else {
        console.log("Note not found.");
    }
}

function deleteNote() {
    const title = prompt("Enter the title of the note to delete: ");
    if (fs.existsSync(`${title}.txt`)) {
        fs.unlinkSync(`${title}.txt`);
        console.log("Note deleted successfully.");
    } else {
        console.log("Note not found.");
    }
}

function main() {
    while (true) {
        console.log("1. Create a note");
        console.log("2. View a note");
        console.log("3. Delete a note");
        console.log("4. Exit");
        const choice = prompt("Enter your choice: ");
        if (choice === "1") {
            createNote();
        } else if (choice === "2") {
            viewNote();
        } else if (choice === "3") {
            deleteNote();
        } else if (choice === "4") {
            break;
        } else {
            console.log("Invalid choice. Please try again.");
        }
    }
}

main();
