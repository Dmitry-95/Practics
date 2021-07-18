/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
const numberOfFilms = 'Сколько фильмов уже посмотрели?';
+prompt(numberOfFilms, "10");

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
   const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = b;
}

if (numberOfFilms == '') {
    prompt(numberOfFilms);
     
}

console.log( personalMovieDB);


// do {
//     console.log(a);
//     a++;
// }
// while (a <= 56)

// for(let i=1; i<3;i++) {
//     if (i=){
//         // break;
//         continue;
//     }

//     console.log(i);
// }



// // const num = 50;
// // switch(num) {
// //     case 50:
// //         console.log('Нетушки');
  
// //     case 51:
// //         console.log('Еcc');
    
// //     default:
// //         console.log('Еще');
   
// // }

// // let a = 50;
// // while (a <= 56) {
// //     console.log(a);
// //     a++;
// // }
// do {
//     console.log(a);
//     a++;
// }
// while (a <= 56)

// for(let i=3; i<=7;i++) {
//     console.log(a);
//     a++;
// }

// for(let i=1; i<10;i++) {
//     if (i===6){
//         // break;
//         continue;
//     }

//     console.log(i);
// }




