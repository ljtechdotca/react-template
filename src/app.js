const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

const HTML_FILE = path.resolve(".", "dist", "index.html");

console.log({ HTML_FILE });

app.use(express.json());
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE, function (err) {
    if (err) {
      res.status(500).send(err);
    }

    console.log("LOADED", { HTML_FILE });
  });
});
