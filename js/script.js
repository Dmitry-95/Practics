/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

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

    if (a != null && b != null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        
    }
  
 
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




