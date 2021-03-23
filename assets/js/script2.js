"use strict";

// function log(){
//     this.desc = "logger";
//     console.log(this);
// }
// new log();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    setCountOfMovies: () => {
        personalMovieDB.count = +prompt('how many movies have you watched?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('how many movies have you watched?', '');
        }
    },

    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('last film?', ''),
                b = prompt('rate?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('done');
                i--;
            }
        }
    },

    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log("просмотреномало фильмов");
        } else if (personalMovieDB.count < 30) {
            console.log("любитель");
        } else if (personalMovieDB.count >= 30) {
            console.log("киноман");
        } else {
            console.log("error2");
        }
    },

    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGeneres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`ваш любимый жанр под номером: ${i}`, '');

            if (genre == '' || genre == null) {
                console.log('вы вели некоректные данные, повторите пожалуйста');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Like genre ${i + 1} - ${item}`);
        });
    },

    writeYourGeneres2: () => {
        for (let i = 1; i <= 1; i++) {
            let genres = prompt('введите выши жанры через запятую', '').toLowerCase();

            if (genres == '' || genres == null) {
                console.log('вы вели некоректные данные, повторите пожалуйста');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
            }
        }
        personalMovieDB.genres.sort();

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Like genre ${i + 1} - ${item}`);
        });
    }

};



function sortArrNumber() {
    let count = +prompt('введите размер массива', '');
    let arr = [];

    while (count == '' || count == null || isNaN(count)) {
        console.log("вы не ввели число или нажали отменна, а так нельзя)");
        count = +prompt('введите размер массива', '');
    }
    for (let i = 0; i < count; i++) {
        arr[i] = prompt(`введите ${i + 1} из ${count} число`, '');
    }

    arr.sort(compareNum);

    function compareNum(a, b) {
        return a - b;
    }

    console.log(arr);

}

















// function AVG(){
//     let avg = 0;
//     console.log(arguments.lenght);
//     for (let i = 0; i< arguments.lenght; i++)
//     { avg += arguments[i];
//     }
//     return avg / arguments.lenght;
// }
// console.log(AVG(5,10,15,20));