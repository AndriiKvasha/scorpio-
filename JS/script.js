"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('Как вы его оцениваете?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('Как вы его оцениваете?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);