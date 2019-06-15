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
        var fullQuery = "https://rest.bandsintown.com/artists/" + pointer + "/events?app_id=codingbootcamp"
        console.log(fullQuery);
        axios.get(fullQuery).then(
        function(response) {
            console.log(response);
        })
        .catch(function(error) {
            if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
            } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
            } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
            }
            console.log(error.config);
        });

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

