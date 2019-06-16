require("dotenv").config();
const axios = require('axios');
var Spotify = require('node-spotify-api');
var moment = require('moment');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var pointer = process.argv[3];

switch(command){

    /* ---- CONCERTS ---- */
    case "concert-this":
        console.log(pointer + "'s next show is:");
        //create query string
        var fullQuery = "https://rest.bandsintown.com/artists/" + pointer + "/events?app_id=codingbootcamp"

        // create axios request
        axios.get(fullQuery).then(
        function(response) {
            console.log(response.data[0].venue.name);
            console.log(response.data[0].venue.city + ", " + response.data[0].venue.country);
            console.log(moment(response.data[0].datetime).format('MM DD YYYY'));
        
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

    /* ---- SONGS ---- */ 
    case "spotify-this-song":
        console.log("Hamsters are searching for your track. Hold please...");
        // create spotify search
        spotify
            .search({ type: 'track', query: pointer, limit: 1 })
            .then(function(response) {
                console.log(response.tracks.items[0].artists[0].name);
                console.log(pointer);
                console.log(response.tracks.items[0].preview_url);
                console.log(response.tracks.items[0].album.name);

            })
            .catch(function(err) {
            console.log(err);
        });
        break;
    
    /* ---- MOVIES ---- */
    case "movie-this":

    var fullQuery="http://www.omdbapi.com/?apikey=trilogy&t="+pointer;
        console.log("you're looking for a movie");
        axios.get(fullQuery).then(
            function(response) {
                //console.log(response);
                console.log("Title: "+response.data.Title);
                console.log("Year: "+response.data.Year);
                console.log("IMDB Rating: "+response.data.Ratings[0].Value);
                console.log("Rotten Tomatoes Rating: "+response.data.Ratings[1].Value);
                console.log("Country: "+response.data.Country);
                console.log("Language: "+response.data.Language);
                console.log("Plot: "+response.data.Plot);
                console.log("Actors: "+response.data.Actors);
            
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

    /* ---- RUN FROM FILE ---- */
    case "do-what-it-says":
        console.log("you're bossy");
        break;
    default:
        console.log("you've done something WRONG");

}

