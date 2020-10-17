"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
            while (personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const   a = prompt('Один из последних фильмов?', ''),
                    b = +prompt('На сколько оцените его?', ''); 
        
            if (a != null && b != null && a != '' && b != '' && a.length < 10 ) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30){
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка sdfsdf');
        }
    },
    showMyDB: function(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        } 
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: function(){
        let i = 0;
        while(i < 3){
            const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if(genre != '' && genre != null){
                personalMovieDB.genres[i] = genre;
            } else {
                i--;
            }
            i++;
        }
        personalMovieDB.genres.forEach((genre, i) => {
            console.log(`Любимый жанр ${i + 1} - ${genre}`);
        });
    }
}; 

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
