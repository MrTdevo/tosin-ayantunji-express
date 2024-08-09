const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const app = express();
let PORT = process.env.PORT || 3001;
app.use(express.json());

app.get("/api/notes", async (req, res) => {
  // console.log({ req, res });
  const dbFile = await fs.readFile(path.join(__dirname, "db/db.json"), {
    charset: "UTF8",
  });
  // console.log(dbFile);

  const database = await res.status;
  console.log(database);

  // dbFile.then((db) => {
  //   console.log(db);
  //   // response.status.json goes here
  // });

  res.status(200).send(dbFile);
});

app.listen(PORT, () => {
  console.log(
    `expressjs server listening for request on http://localhost:${PORT}`
  );
});
