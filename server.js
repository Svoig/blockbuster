const express = require("express");
const app = express();
const request = require("request");

const port = process.env.PORT || 8000;

app.test = function() {
  const url = "http://www.omdbapi.com/?t=Pure+Luck&y=&plot=short&r=json";
  request(url, function(req, res) {
    return res.body;
    console.log("Response: ", res.body);
  });
}

app.listen(port, function() {
  console.log("Blockbuster is running on http://localhost:" + port);
});

module.exports = app;
