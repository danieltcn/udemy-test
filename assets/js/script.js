"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: 56894,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//setCountOfMovies();
//rememberMyFilms();
//writeYourGeneres();
//detectPersonalLevel();
showMyDB(personalMovieDB.privat);

function setCountOfMovies(){
    
    
    numberOfFilms = +prompt('how many movies have you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('how many movies have you watched?', '');
    }
}

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const   a = prompt('last film?', ''),
                b = prompt('rate?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('done');
            i--;
        }
    }
}

function detectPersonalLevel(){
    if ( personalMovieDB.count < 10 ){
        console.log("просмотреномало фильмов");
    } else if ( personalMovieDB.count < 30 ){
        console.log("любитель");
    } else if ( personalMovieDB.count >= 30 ){
        console.log("киноман");
    } else {
        console.log("error");
    }    
}

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
function writeYourGeneres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр под номером: ${i}`, '');
    }
}



