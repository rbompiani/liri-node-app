require("dotenv").config();
const axios = require('axios');
var Spotify = require('node-spotify-api');
var moment = require('moment');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var pointer = process.argv[3];

switch(command){
    case "concert-this":
        console.log("you're looking for a concert");
        break;
    case "spotify-this-song":
        console.log("you're looking for a song");
        break;
    case "movie-this":
        console.log("you're looking for a movie");
        break;
    case "do-what-it-says":
        console.log("you're bossy");
        break;
    default:
        console.log("you've done something WRONG");

}