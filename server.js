const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const readNotes = () => {
  const data = fs.readFileSync(path.join(__dirname, "db/db.json"), "utf8");
  return JSON.parse(data);
};
const writeNotes = (notes) => {
  fs.writeFileSync(
    path.join(__dirname, "db/db.json"),
    JSON.stringify(notes, null, 2)
  );
};

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/api/notes", (req, res) => {
  console.log(`${req.method} request to retrieved notes`);
  const notes = readNotes();
  res.status(200).json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  const notes = readNotes();

  if (!id) {
    return res.status(400).send("Note ID is required!");
  }

  console.log(`${req.method} request to retrieved a single note`);

  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json("Not found!");
  }

  res.status(200).json(note);
});

app.post("/api/notes", (req, res) => {
  console.log(`${req.method} request to add a note`);
  const notes = readNotes();

  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    notes.push(newNote);
    writeNotes(notes);

    return res.status(201).json({
      status: "success",
      data: newNote,
    });
  } else {
    return res.status(400).json(" title and text");
  }
});
app.delete("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  let notes = readNotes();
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex === -1) {
    return res.status(404).json("Note not found!");
  }

  notes.splice(noteIndex, 1);
  writeNotes(notes);

  return res.status(200).json({
    status: "success",
  });
});

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
