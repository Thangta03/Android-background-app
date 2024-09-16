import os

def create_note():
    title = input("Enter the title of the note: ")
    content = input("Enter the content of the note: ")
    with open(f"{title}.txt", "w") as file:
        file.write(content)
    print("Note created successfully.")

def view_note():
    title = input("Enter the title of the note to view: ")
    if os.path.exists(f"{title}.txt"):
        with open(f"{title}.txt", "r") as file:
            content = file.read()
        print("Note content:")
        print(content)
    else:
        print("Note not found.")

def delete_note():
    title = input("Enter the title of the note to delete: ")
    if os.path.exists(f"{title}.txt"):
        os.remove(f"{title}.txt")
        print("Note deleted successfully.")
    else:
        print("Note not found.")

def main():
    while True:
        print("1. Create a note")
        print("2. View a note")
        print("3. Delete a note")
        print("4. Exit")
        choice = input("Enter your choice: ")
        if choice == "1":
            create_note()
        elif choice == "2":
            view_note()
        elif choice == "3":
            delete_note()
        elif choice == "4":
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
