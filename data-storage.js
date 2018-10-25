const fs = require("fs");




function getSingleMovie(id, callback){
    getMovies((movies) => {
        let movie = movies.find((x)=> x.id == id);

        callback(movie)
    });
}

function getMovies(callback){
    fs.readFile("./data/movies.json", (err, data)=>{
        let movies = JSON.parse(data);

        callback(movies.movies);
    });
}


function getSinglePerson(id, callback){

    getPeople((people)=>{
        let person = people.find((x)=> x.id == id);

        callback(person)
    });
}

function getPeople(callback){

    fs.readFile("./data/people.json", (err, data)=>{
        let people = JSON.parse(data);

        callback(people.people);
    });
}




function addPerson(person){

    getPeople((people)=>{

        console.log("in person write got "+people)
        let id = people.length + 1;

        person.id = id
        people.push(person);

        fs.writeFile("./data/people.json",JSON.stringify({people:people},null,4),(err)=>{
            if(err){
                console.log("writing to file in to add person failed")
            }
        })
    })
}
function addPersonLike(personId,movieId){

}

function addMovie(movie){
    getMovies((movies)=>{
        let id = movies.length + 1;

        movie.id = id
        movies.push(movie);

        fs.writeFile("./data/movies.json", JSON.stringify({movies:movies},null,4), (err)=>{
            if(err){
                console.log("writing to file in to add movie failed")
            }
        })
    })
}
function addMovieLike(movieId,personId){

}

function addLike(personId, movieId){
    //get persons array
    //reference perosn in array with personId
    //add new id to movie likes of person

    //get movies array
    //reference perosn in array with moviesId
    //add new id to movie likes of person

    //write new person array to file
    //write new movie array to file
}


module.exports = {
    getSingleMovie,
    getMovies,
    getSinglePerson,
    getPeople,

    addPerson,
    addMovie,
    addLike
}