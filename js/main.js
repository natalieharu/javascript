"use strict";
function showFirstMessage(text) {
    console.log(text);
}
showFirstMessage('Hello World');

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(5, 5));

// Declaration function
function ret() {
    let num = 50;
    return 50;
}
const anotherNum = ret();
console.log(anotherNum);

// Expression function
const logger = function(){
    console.log('Hello');
};
logger();

// Стрелочные функции
const calc = (a, b) => {
    console.log('1', '5');
    return a + b;
};
calc();

const str = 'test';
console.log(str.toUpperCase());

const logg = "Hello World";
console.log(logg.slice(3, 7));
console.log(logg.substring(3, 7));
console.log(logg.substr(6, 3));

const num = 12.3;
console.log(Math.round(num));

const test = '12.6px';
console.log(parseInt(test));

// Я ввожу число в prompt -> в бд igor: 
// Если число меньше 20, вносишь число иначе false;

const personalMovieDB = {
    count:  0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
function igor(){
    // Ввожу число
    let numb = +prompt('Введите число');

    // isNan = не число
    // !isNan = не не число = число

    if(numb != "" && numb < 20 && !isNaN(numb)){
        personalMovieDB.igor = numb;

    } else{
        personalMovieDB.igor = false;
    }
    console.log(personalMovieDB.igor);
}
igor();