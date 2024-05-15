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
// const num = 50;

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

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// Результатом логических операций явлется значение 'Bollean'
// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }


// const hamburger = 2;
// const fries = 1;

// if (hamburger === 3 && fries) {
//     console.log('Я сыт!');
// } else {
//     console.log('Мы уходим!');
// }


// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// // Оператор возвращает первое неверное значение
// console.log(hamburger === 3 && cola && fries)

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Я сыт!');
// } else {
//     console.log('Мы уходим!');
// }


// ЦИКЛЫ
// автоматизация процесса

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

// присвоить единицу i и пока i меньше 8 увеличивать i на 1 
// как только i достигнет значения 7, прекратить операцию. 
for (let i = 1; i < 8; i++) {
    console.log(i);
}