"use strict";

// ПРАКТИКА Ч1. НАЧИНАЕМ СОЗДАВАТЬ ПРИЛОЖЕНИЕ.

// const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('Как вы его оцениваете?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('Как вы его оцениваете?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// УСЛОВИЯ

// Если 4 равняется 4 тогда сообщение 'Ok!' должно отобразиться в консоли.
// if (4 == 4) {
//     console.log('Ok!');
// }

// Если 4 не равняется 4 тогда сообщение 'Error!' должно отобразиться в консоли.
// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }


// Если переменная num меньше 49 - это ошибка, 
// если больше - это много, если равняется - это ок!
// const num = 50;

// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// Тернарный оператор

// Если условие верно, тогда ок! если нет, тогда error!
// (num === 50) ? console.log('Ok!'): console.log('Error!');

// switch - модификация конструкции if
// const num = 51;

// switch (num) {
//     case 49:
//         console.log('Неверно!');
//         break;
//     case 100:
//         console.log('Неверно!');
//     case 50:
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }