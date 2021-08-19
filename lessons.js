'use strict';
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

// Функции,урок

// let num = 20;

// function showMessage(text) {
//     console.log(text);
//     console.log(num);
// }

// showMessage('Hello World!');
// console.log(num);

// function calc(a,b) {
//     return (a + b);
// }

// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(7,8));

// let example = function(a, b) {
//     return (a + b);
// };
// console.log(example(4,3));


// function ret() {
//     let num = 50;


//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log('Hello!');
// };

// logger ();

// const calck = (a, b) =>  a + b; 
// console.log(calck(3,2));

// // методы и свойства

// const str = 'teSt';
// const arr = [1, 2, 4];

// console.log(str.toLowerCase());
// console.log(str);

// let fruit = "Some fruit";

// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello World';

// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 3));

// const num2 = 12.2;
// console.log(Math.round(num2));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// Функции callback,урок

// function learnJS (src, callback) {
//     console.log (`Я учу: ${src}`);
//     callback();
// }

// // function done () {
// //     console.log('Красавчик!');
// // }

// let done = () => console.log('Красавчик!');

// learnJS('JavaScript', done);

// Объекты, дуструктуризация объектов

// const options = {
//     name: 'test',
//     width: 1024,
//     height:1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log ('Test');
//     }
// };

// options.makeTest();

// // Деструктуризация
// const {border, bg} = options.colors;
// console.log(border);


// console.log(Object.keys(options).length);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log (`Свойство ${i} имеет значение ${options[key] [i]}`);
//         }
//     } else {
//         console.log (`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log (counter);

// const comod = {
//     color: 'white',
//     style: 'loft',
//     consist: {
//         coat: 2,
//         tShirt:7,
//     }
// };

// for (let propt in comod) {
//     if (typeof comod[propt] === 'object') {
//         for (let p in comod[propt]) {
//             console.log(`Свойство ${p} имеет значение ${comod[propt] [p]}`);
//         }
//     } else {
//         console.log(`Свойство ${propt} имеет значение ${comod[propt]}`);
//     }
// }

// // console.log(Object.keys(comod).length);

// const {coat} = comod.consist;
// console.log(coat);

// Массивы и псевдомассивы

// const arr = [2, 14, 18, 3, 34];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum (a, b) {
//     return a - b;
// }

// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr[2]);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });



// arr.pop();  // убирает последний элемент
// arr.push(10);  // добавляет в конец

// console.log(arr);

// for (let i=0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(',');
// console.log(products);
// products.sort();
// console.log(products.join(';'));

// const lock = [2, 'Nice Day'];
// // lock.push('Yes!');
// // console.log(lock);
// lock.forEach (function (num, p, lock) {
//     console.log(`${p}: ${num} внутри ${lock}`);
// });

// const tic = {
//     name: 'Dima',
//     age: 25,
//     life: {
//         work: 3,
//         chill: 17,
//     }
// };

// // for (let key in tic) {
// //     if (typeof tic[key] === 'object') {
// //         for (let p in tic[key]) {
// //             console.log(`свойство ${p} имеет значение ${tic[key] [p]} `);
// //         }
// //     }
// // }

// tic.game = 'gta';
// console.log(tic);

// let salaries = {
//     John: 100,
// //     Ann: 160,
// //     Pete: 130
// //   };



// // let sum = 0;
// // for (let key in salaries) {
// //     sum += salaries[key];
// // }

// //   console.log(sum);

// // let obj = {
// //     width: 200,
// //     height: 300,
// //     title: "My menu"
// //   };


// // function multiplyNumeric (obj) {
  
// //     for (let key in obj) {
// //         if (typeof obj[key] === 'string') {
// //             let transform = obj[key] += ' is good';
// //             console.log(transform);
// //         }
// //     }
// // }

// // multiplyNumeric (obj);

// // КЛОНИРОВАНИЕ ОБЪЕКТОВ, ПЕРЕДАЧА ПО ССЫЛКЕ И ПО ЗНАЧЕНИЮ

// // let obj = {
// //     width: 200,
// //     height: 300,
// //     title: "My menu"
// //   };

// //   let vog = obj;
// //   vog.width = 500;

// //   console.log (obj.width);
// //   console.log (vog.width);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     }

// };

// // const newNumbers = copy(numbers);

// // newNumbers.a = 10;

// // console.log(numbers);
// // console.log(newNumbers);

// const add = {
//     d: 17,
//     i:20,
// };

// const clone = Object.assign({}, add);
// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a' , 'b', 'c'];
// const newArray = oldArray.slice();  // Клонирование массива

// newArray[1] = 'owedjjj';
// console.log(newArray);
// console.log(oldArray);

// // Новые стандарты ES6/ ES8
// Spread Оператор
// const video = ['youtube', 'vimeo', 'rutube'],
//         blogs = ['wordpress', 'lifejournal' , 'blogger'],
//         inernet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(inernet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newArray = [...array];

// newArray[0] =777;
// console.log(newArray);
// console.log(array);

// const q ={
//     one:1, 
//     two:2,
// };

// const newQ = {...q};

// q.one =7;
// console.log(newQ);
// console.log(q);

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

const soldier ={
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);

// const jonh ={
//     health: 100
// };

// jonh.__proto__ = soldier;  // Устаревший синтаксис

// Object.setPrototypeOf(jonh, soldier);

// console.log(jonh);
jonh.sayHello();
