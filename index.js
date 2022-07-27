const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>healthcheck</h1>");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
