const express = require("express");
const app = express();
const request = require("request");

const mg = require("./movieGetter.js");

const port = (process.env.PORT || 8000);


app.listen(port, function() {
  console.log("Blockbuster is running on http://localhost:" + port);
});

mg.getMovie();


