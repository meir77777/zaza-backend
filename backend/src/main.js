const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Zaza backend running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "zaza",
    time: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});