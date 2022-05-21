//Работа с if-else



// const compareNumber = number => {
//     if (number === 0) {
//         return console.log("Верно");
//     } else return console.log("Неверно");
// }

// const compareNumber = number => !number ? console.log("Верно") : console.log("Неверно");
// compareNumber(0)



//
// Работа с логическими переменными
//


// const trueOrFalse = (test) => !test ? console.log("Верно") : console.log("Неверно");
    
// trueOrFalse(1)
// trueOrFalse(0)



//
//Работа с && (и) и || (или)
//

//#1
// let a = 2;

// if (a > 0 && a < 5) {
//      console.log("Верно");
// } else console.log("Неверно");


//#2
// if (a === 0 || a === 2) {
//     (a += 7);
// } else {a /= 10}
// console.log(a);


//#3
// const a = 3;
// const b = 6;

// if (a >= 1 && b >= 3) {
//     console.log(a+b);
// } else console.log(a - b);

//#4
// const a = 3;
// const b = 6;

// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     console.log('Верно');
// }else console.log("Неверно");

//
//На switch-case
//


//#1
// const num = 4;
// let result;

// switch (num) {
//     case 1:
//         result = 'зима'
//         break;

//       case 2:
//         result = 'весна'
//         break;

//       case 3:
//         result = 'лето'
//         break;
    
//         case 4:
//         result = 'осень'
//         break;

//     default: "undefined"
//         break;
// }
// console.log(result);

//
//Общие задачи
//

//#1
// const day = 23;

// if (day >= 1 && day <= 10) {
//     console.log('1 - декада');
// } else if (day > 10 && day <= 20) {
//     console.log('2 - декада');
// } else if (day > 20 && day <= 31) {
//     console.log('3 - декада');
// } else console.log('неверное количество дней');


//#2
// const month = 2;


// if (month > 2 && month <= 5) {
//     console.log('весна');
// } else if (month > 5 && month <= 8) {
//     console.log('лето');
// } else if (month > 8 && month <= 11) {
//     console.log('осень');
// } else if (month > 0 && month < 3 || month === 12  ) {
//     console.log('зима');
// } else console.log('неверное количество месяцев');



//#3

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else console.log(i);
// }


//#4

// const str = 'abcde'
// if (str[0] === 'a') console.log('da');
// else console.log('net');

//#5

// const str = '12345'
// if (str[0] == 1 || str[0] == 2 || str[0] == 3) console.log('da');
// else console.log('net');

//#6

// const str = '567'

// let number = 0;
// for (num of str) {
//     number += +num
// }
// console.log(number);

//#7

// const numbers = '123321'

// let firstPart = numbers.slice(0, 3).split('').reduce((a,b) => +a + +b, 0)
// let secondPart = numbers.slice(3, ).split('').reduce((a,b) => +a + +b, 0)

// firstPart == secondPart ? console.log('da'): console.log('net');

////////////////////////////////////////////////////
//////////////////// Циклы ////////////////////////
////////////////////////////////////////////////////


// #1

// const increaseNum = (numFrom, numTo) => {
    
//     for (let i = numFrom; i <= numTo; i++) {
//        return console.log(i);
//     }
     
// }
// increaseNum( 0, 100 );

// const sum = (str) => str.split('').reduce((a,b) =>  +a + +b, 0)
// console.log(sum('334'));
// let i = 0
// while (i < 100) {
//     i++
//     console.log(i);
// }


//#3



// const onlyOddNum = (numFrom, numTo) => {
// for (let i = numFrom; i <= numTo; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// }

// onlyOddNum(0 , 100)

//#4

// const sumOfNum = (firstNum, lastNum) => {
//     let result = 0;
//         for (let i = firstNum; i <= lastNum; i++) {
//         result += i
//             }
//     return result;
// }
// console.log(sumOfNum(1, 100));

// #5 -

// const factorial = (num) => {
//     let result = 1;
//     for (let i = num; i > 0; i--) {
//         result = result * i
//     }
//     return result
// }

// console.log(factorial(3)); //6
// console.log(factorial(4)); //24
// console.log(factorial(5)); //120

// #6

// const cloneNum = (num, amount) => {
//     let result='';
// for (let i = 0; i < amount ; i++) {
//     result +=num;
    
//     }
//     return +result
// }

// const cloneNum = (num, amount) => +(num+'').repeat(amount)

// console.log(cloneNum(5, 9));

// #7

// const numCycle = () => {
//     for (let i = 0; i <= 300; i++) {
//         if (i % 2 === 0  && i % 12 === 0  && i !== 48 && (i / 12) % 2 !== 0) {
//             console.log('oooops');
//         } else if (i % 2 !== 0 && i % 3 !== 0) {
//             console.log('hola');
//         } else if (!i) {
//             console.log('zero');
//         }
//     }
// }

// numCycle()

////////////////////////////////////////////
///////////// Работа с for для массивов/////
///////////////////////////////////////////

// #1
// const someArr = [1, 2, 3, 6, 4, 5];
// const arrPrint = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
//     return arr
// }

// const arrPrint = (arr) => arr.join(' ');

// console.log(arrPrint(someArr));

// #2

// const arrSum = (arr) => {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i]
        
//     }
//     return result
// }

// const arrSum = (arr) => arr.reduce((a, v) => a + v, 0)

// console.log(arrSum(someArr));


///////////////////////////////////////////////////////
///////////////////////Задачи общие.
//////////////////////////////////////////////////////

// #1

// const someArr = [2, 5, 9, 15, 0, 4];

// const columNums = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 3 && arr[i]<10) {
//             console.log(arr[i]);
//         }
//     }
// }

// const columNums = (arr) => arr.map(a => a > 3 && a < 10 ? console.log(a) : "")

// columNums(someArr)


// #2

// const someArr = [2, -5, 9, -15, 0, 4];

// const sumPositiveNum = (arr) => {
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             result += arr[i]
//         }
//     }
//     return result
// }


// const sumPositiveNum = (arr) => arr.filter((num) => num > 0).reduce((a,b) => a+b, 0)

// console.log( sumPositiveNum(someArr));



// #3

// const someArr = [ 1, 2, 5, 9, 4, 13, 4, 10];

// const findNum = (arr, numToFind) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === numToFind) {
//             console.log('Yes');
//             break;
//         }
//     }
// }

// const findNum = (arr, numToFind) => arr.filter((a) => a === numToFind ? console.log('Yes') : '')
// const findNum = (arr, numToFind) => arr.includes(numToFind) ? console.log('Yes') : '';

// console.log(findNum(someArr, 4));


// #4

// const someArr = [10, 20, 30, 50, 235, 4421, 3000];

// const firstValueNum = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let str = arr[i] + '';
//         if (str[0].includes(1) || str[0].includes(2) || str[0].includes(5)) {
//            console.log(arr[i]);
//        }
//     }
// }

// const firstValueNum = (arr) =>
//     arr.map((a) => (a + "")[0].includes(1) || (a + "")[0].includes(2) || (a + "")[0].includes(5) ? console.log(a) : '' )

//  firstValueNum(someArr);


// #5

// const someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const dashStr = (array) => {
//     let string = '-';
//     for (let i = 0; i < array.length; i++) {
//         string += array[i] + "-"
//     }
//     return string;
// }

// const dashStr = (array) => `-${array.join('-')}-`

// console.log(dashStr(someArr));


// #6

// const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
// const printText = (arg, where = document.querySelector('.test')) =>
//     where.insertAdjacentHTML("beforeEnd", arg + '<br>');

// const daysWeek = (arr, funcPrint) => {
//     const div = document.querySelector(".test");

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'Сб' || arr[i] === 'Вс') {
//             funcPrint(arr[i].bold(), div);
//         } else {
//             funcPrint(arr[i], div);
//         }
//     }
// }


// const daysWeek = (arr, funcPrint) =>
//     arr.map((day) => day === 'Сб' || day === 'Вс'
//         ? funcPrint(day.bold())
//         : funcPrint(day))

// daysWeek(week, printText);


// #7

// const today = new Date().getDay();
// const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

// const printText = (arg, where = document.querySelector('.test')) =>
//     where.insertAdjacentHTML("beforeEnd", arg + '<br>');

// const currentDayOfWeek = (arr, funcPrint, currentDay) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (i === currentDay-1) {
//             funcPrint(arr[i].italics());
//         } else {
//             funcPrint(arr[i]);

//         }
//     }
// }

// const currentDayOfWeek = (arr, funcPrint, today) =>
//     arr.map((day, id) =>  id === today-1 
//         ? funcPrint(day.italics().bold())
//         : funcPrint(day))


// currentDayOfWeek(week, printText, today)


// #8

// const divisionNum = (num, divisionTimes, divisionToNum) => {
//     let amountOfdivision = 0;
//     let result = 0;
//     for (let i = num; i >= divisionToNum; i /= divisionTimes) {
//         result = i;
//         amountOfdivision++
//     }
//     console.log(amountOfdivision);
//     console.log(result);
//     return result
// }

// divisionNum(1000, 2, 50);



// #9

// const findIntegers = (fromNum, toNum) => {
//     const arrNumbers = [];
//     for (let i = fromNum; i <= toNum; i++) {
//         arrNumbers.push(i)
        
//     }
//     return arrNumbers
// }
// console.log(findIntegers(1,20));


//#10

// let inputNumb = +prompt('Enter number')

// const sequenceNumb = (num) => {
//     const  arrayNumb = [num] 

//     while (num !== 1) {

//         if (num % 2 === 0) {
//             console.log('(делим на 2)', num = num / 2);
//             arrayNumb.push(num)
//         } else if (num % 2 !== 0) {
//             console.log('(умножаем на 3 + 1)', num = num * 3 + 1);
//             arrayNumb.push(num)

//         }
//     }

//     return arrayNumb
// }

// console.log(sequenceNumb(inputNumb));