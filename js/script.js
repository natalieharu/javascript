"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    while (numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const   a = prompt('Один из последних фильмов?', ''),
                b = +prompt('На сколько оцените его?', ''); 
    
        if (a != null && b != null && a != '' && b != '' && a.length < 10 ) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    
    }
}
// rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30){
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка sdfsdf');
    }
}
// detectPersonalLevel();


function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    } 
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    let i = 0;
    while(i < 3){
        const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        personalMovieDB.genres[i] = genre;
        i++;
    }
    console.log(personalMovieDB); 
}
writeYourGenres();