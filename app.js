const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

let data = {};
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "form.html"));
});

app.post("/login", (req, res) => {
  const { name, contact_email, message } = req.body;
  if (name && contact_email && message) {
    data = req.body;
    fs.writeFile(
      path.join(__dirname, "data.txt"),
      JSON.stringify(data, null, 2),
      { flag: "a" },
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send("Error appending data");
        }
      }
    );
    return res.status(200).sendFile(path.join(__dirname, "home.html"));
  }
  res
    .status(404)
    .send("Empty section was detected hence, data isn't stored in the system");
});

app.get("/senddata", (req, res) => {
  res.json(data);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
