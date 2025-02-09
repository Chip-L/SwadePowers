const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.get("/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "resources", `${filename}.json`);

  console.log({ filename, filePath });

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }
    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
