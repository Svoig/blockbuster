const express= require("express");
const router = express.Router();
const bodyParser = require("body-parser");

//Require movieGetter
const mg = require("./movieGetter.js");

//Need to inspect the body!
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true} ));

router.get("/getmovies", function(req, res, next) {
    console.log("REQUEST TO /getmovies");
    if(mg.activeMovies.length === 2) {
        console.log("Length was 2! Sending these: ", mg.activeMovies);
        res.send(mg.activeMovies);
    } else {
        mg.getMovie()
        .then( () => mg.getMovie()
            .then( () => {
                console.log("Length was not 2. Reran getMovie and sending: ", mg.activeMovies);
                res.send(mg.activeMovies)
                }
            )
        )
        .catch(function(err) {
            throw new Error(err);
        });
    }
});

module.exports = router;