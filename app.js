const express = require("express");
const app = express();

const contacts = [
  {
    id: 1,
    nom: "Vermonden",
    prenom: "Daniel",
    telephones: ["0454565433"],
  },
  {
    id: 2,
    nom: "Dubois",
    prenom: "Jean",
    telephones: ["0234545456"],
  },
];

app.get("/", function (req, res) {
  res.send("Hello CESI");
});
app.get("/api/contacts", function (req, res) {
  res.status(200).json(contacts);
});

module.exports = app;
