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

