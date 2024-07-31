# tosin-ayantunji-express Note Taker Application
# Description
The Note Taker Application is a simple web-based tool for creating, viewing, and managing notes. Users can save and delete notes, and view the details of saved notes. The application interacts with a backend API to store and retrieve notes.

# Table of Contents
Installation
Usage
API Endpoints
License
Contributing

# Installation
- Clone the Repository:


Navigate to http://localhost:3000 in your web browser.
# Landing Page: 
- The landing page contains a link to the notes page. Click on the link to navigate to the notes page.

# Notes Page:
- The notes page displays existing notes in the left-hand column.
- The right-hand column contains fields to enter a new note's title and text.

# Create a New Note:
- Enter a title and text for the new note.
- The "Save Note" and "Clear Form" buttons will appear in the navigation.
- Click "Save Note" to save the new note.
- The saved note will appear in the left-hand column.

# View an Existing Note:
- Click on a note in the left-hand column to view its details in the right-hand column.
- A "New Note" button will appear in the navigation to create a new note.
- Delete a Note:

Click the delete button (trash can icon) next to a note in the left-hand column to delete it.
# API Endpoints
- GET /api/notes

Fetch all saved notes.
- POST /api/notes

# Save a new note.
- Request body should contain title and text.
- DELETE /api/notes/


# Delete a note by ID.
No response body.

# License
This project is licensed under the MIT License. See the LICENSE file for details.