const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  const users = [
    "Ibrohim",
    "Zokir",
    "Shuhrat",
    "Dilshod",
    "Kamron",
    "Alisher",
    "Furqat",
    "Nurislom",
    "Xudoberdi",
    "Ismoiljon",
    "Asad",
    "Erkin",
    "Umid",
  ];
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
