// 1. Используя метод map() напишите код, который получает из массива строк
// новый массив, содержащий их длины.

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// const lengthItemArr = (arr) => arr.map((item) => item.length)

// console.log(lengthItemArr(vegetables));

// alert( vegetableLength ); // 7,4,7,8

// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19].
// Использую метод reduce() напишите функцию currentSums(numbers),
// которая возвращает новый массив из такого же числа элементов, в
// котором на каждой позиции будет находиться сумма элементов массива
// numbers до этой позиции включительно.

// let numbers = [2, 3, 5, 7, 11, 13, 17]
// // ваш код
// const currentSums = (arr) => {
//     const result = [];
//     arr.reduce((a, b, i) => result[i] = a + b, 0)
    
//     return result;
// }

// console.log(currentSums(numbers)); // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13,
// //2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]

// 3. Напишите код, который получает из массива чисел новый массив,
// содержащий пары чисел, которые в сумме должны быть равны семи:
// (0:7), (1:6) и т.д.

// var arr = [0, 1, 2, 3, 4, 5, 6, 7];

// const sumSeven = (numbers) => {
//     let result = [];

//     for (let i = 0; i < numbers.length; i++) {
//         let first = numbers[i];

//         for (let j = i + 1; j < numbers.length; j++) {
//             let second = numbers[j];
//             if (first + second === 7) {
//             let num = `${first}:${second}`
//                 result.push(num);
//             }
//         }
//     }
//     return result
// }

// console.log(sumSeven(arr));


// 4. Перед вами переменная, содержащая строку. Напишите код, создащий
// массив, который будет состоять из первых букв слов строки str.

// var str = "Каждый охотник желает знать, где сидит фазан.";
// // Ваш код

// const foo =( arr) => arr.split(' ').map((el) => el[0] )

// console.log(foo(str)); // [К,о,ж,з,г,с,ф]


// 5. Перед вами переменная, содержащая строку. Напишите код, создащий
// массив, который будет состоять из строк, состоящих из предыдущего,
// текущего и следующего символа строки str.

// var str = "JavaScript";

// const foo = (arr) =>
//     arr.split('').map((el, i) => arr.substring(i - 1, i + 2))
    
// console.log(foo(str));; // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt]

// 6. Напишите код, преобразующий массив цифр, которые располагаются
// неупорядоченно, в массив цифр расположенных по убыванию их
// значений.

// var numerics = [5, 7, 2, 9, 3,-11, 1, 8];
// // Ваш код
// // const foo = (num) => num.sort().reverse();
// const foo = ( num) => num.sort((a,b) => b - a)


//  console.log(foo(numerics));; // [9,8,7,5,3,2,1]

// 7. Напишите код, объединяющий три массива цифр, и располагающий
// цифры, в полученном массиве, в порядке убывания их значений.

// var a = [1,2,3];
// var b = [4,5,6];
// let c = [7,8,9];

// const getArr = (a, b, c) => a.concat(b,c).reverse();
// // const getArr = (a, b, c) => [...a, ...b, ...c].reverse();

// console.log(getArr(a, b, c)); // [9,8,7,6,5,4,3, 2, 1]

// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите
// сумму элементов этого массива. Массив, конечно же, может быть
// произвольным. Показать решение.

// let arrX2 =  [[1, 2, 3], [1, 2, 3], [4, 5], [6], [4, 5], [6]];

// const newArr = (arr) => {
//     let res = [];
    // arr.map((a2) => a2.map((a3)=> res.push(a3) ))
    // return res.reduce((sum, nextEl) => sum + nextEl, 0 )
// }

// const newArr = (arr) => { 
    // let res = [].concat(...arr);
    // return res.reduce((sum, nextEl) => sum + nextEl, 0 )
// }

// const newArr = (arr) => 
// arr.reduce((a, b) => a.concat(b)).reduce((c,v) => c + v,0);

// console.log(newArr(arrX2));

// 9. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7,
//     8]]]. Найдите сумму элементов этого массива. Массив, конечно же,
//     может быть произвольным

// let arrX3 = [[[1, 2], [3, 4]], [[5, 6], [7,8]]];

// const newArr =(arr) => {
//     let res = [];
//     arr.map((a2) => a2.map((a3)=> a3.map((a4) => res.push(a4)) ))
//     return res.reduce((sum, nextEl) => sum + nextEl, 0 )
// }

// const newArr =(arr) => {
//     let res = [].concat(...arr);
//     return res.reduce((a, b) => a.concat(b)).reduce((c,v) => c + v,0);
// }

// const newArr = (arr) => arr.flat(2).reduce((c,v) => c + v,0)

// console.log(newArr(arrX3));


// 10. Дан массив с числами. Не используя метода reverse переверните его
// элементы в обратном порядке.

// var numerics = [9,8,7,5,3,2,1];

// const myReverse = (arr) => {
//     let res = []
//     arr.map((a) => res.unshift(a) )
//     return res
// }

// console.log(myReverse(numerics));

// 11. Дан массив с числами. Узнайте сколько элементов с начала массива
// надо сложить, чтобы в сумме получилось больше 10-ти.

// var numerics = [2,4,3,1,3,2,1];

// const count = (arr) => {
//     let qwe = 0;
//     let asd =[];
//     for (let i = 0; i < arr.length; i++) {
//         if(qwe < 10) {
//             qwe += arr[i];
//             asd.push(arr[i]);
//         }
//     }
//     return asd.length
// }

// console.log(count(nMoustacheumerics));

// 12. Сделайте функцию arrayFill, которая будет заполнять массив
// заданными значениями. Первым параметром функция принимает
// значение, которым заполнять массив, а вторым - сколько элементов
// должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x',
// 'x', 'x', 'x'].

// const arrayFill = (el, amount) => (el+'').repeat(amount).split('')

//  console.log(arrayFill('x', 5));

// 13 - 14. Создайте объект и скопируйте данный объект с помощью: Object.assign()
// и spread оператора. Изменить любое свойство в копии объекта, и
// проверить не изменился ли исходный.

// const obj = { name: 'Andrey', age: 28, moustache: true, };

// let newObj = Object.assign({} , obj);
// newObj.moustache = false;

// console.log(newObj);
// console.log(obj);

// let obj2 = {...obj};
// obj2.moustache = false;

// console.log(obj2);
// console.log(obj);

// 15. Написать функцию которая будет принимать n-ое количество аргументов,
// в качестве результата функция будет возвращать сумму всех четных
// элементов. Для решения использовать цикл for (... of ...).

// const evenЕlem = (...arg) => 
// arg.map((a) => a%2 === 0 ? a : 0).reduce((a,b) => a + b, 0)


// console.log(evenЕlem(1, 44, 33, 2, 23, 5, 67, 77, 66, 9));

// 16. Написать функцию, которая принимает слово и возвращает true, если
// слово является палиндромом.

// const palindrom = (str) =>  
// str === str.split('').reverse().join(''); 

// console.log(palindrom('дед'));

// 17. Написать функцию которая будет принимать два массива, и в качестве
// результата будет возвращать только те значения которые есть и в первом
// и во втором массиве.


// const sameArr = (arr1, arr2) => {
//     let newArr = new Set(arr1.concat(arr2));
//     return [...newArr];
// }

// console.log(sameArr([2,3,6,1,22,7,3], [2,3,3,9,3,8,3]));