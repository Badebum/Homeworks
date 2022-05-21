
// #1

// const squareNum = (number) => number**2

// console.log(squareNum(5));

// #2

// const amountNumber = (a, b) => a + b;

// console.log(amountNumber(5 , 1));

// #3

// const calculations = (num1, num2, num3) => (num1 - num2) / num3;

// console.log(calculations(33,5,2));

// #4

// const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// const dayOfWeek = (day, arrWeek) => arrWeek[day - 1];

// console.log(dayOfWeek(5, weekDays));

// #5

// const numEqual = (value1, value2) => value1 === value2;

// console.log(numEqual(2,2));

// #6

// const numEqual = (value1, value2) => (value1 + value2) > 10;

// console.log(numEqual(20,20));

// #7

// const valueNum = (num) => num > 0 ? true : false;

// console.log(valueNum(5));
// console.log(valueNum(-5));

// #8

// const isNumberInRange = (num) => num > 0 && num < 10;

// console.log(isNumberInRange(8));

// #9

// const rgb = (r = 0, g = 0, b = 0) => `color: rgb(${r},${g},${b});`;

// console.log(rgb(255, 46, 15));

// #10

// const squareNum = (num) => num ** 2;

// const plusOne = (num) => num+1;

// const calculationsAndCallback = (number, funcSquare, funcPlus) =>
//     number % 2 === 0 ? funcSquare(number) : funcPlus(number);

// console.log(calculationsAndCallback(7, squareNum, plusOne));

// #11  ????????

// const mult = (num1 = 1, num2 = 1, num3 = 2) => {
//     for (let i = 0; i < num3; i++) {
//         console.log(num1 * num2);
//     }
// }

// console.log(mult(2,3,2));


// #12

// const filterWords = (str1, str2, str3) => {
//     const wordsArr = [str1, str2, str3];
//     return wordsArr.sort().join(', ')
// }

// const filterWords = (str1, str2, str3) => [str1, str2, str3].sort().join(', ');

// console.log(filterWords('gamma', 'alfa', 'beta' ));


// #13

// const isNumberInRange = (num) => num > 0 && num < 10;

// const arrayNumbers = [2, 55, 13, 48, 7, 69, 5, 555, 7, 9, 12, 14, 6]

// const filterArrNumbers = (arr, filterForNum) => {
//     const newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (filterForNum(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return console.log(newArr);
// };

// const filterArrNumbers = (arr, filterForNum) =>  arr.map((elem) => filterForNum(elem) ? elem : '').filter(Boolean);

// console.log(filterArrNumbers(arrayNumbers, isNumberInRange));


// №14

// const getDigitsSum = (num) => {
//       let str = num+"";
//       let sum = 0;
//       for (let i = 0; i < str.length; i++) {
//         sum += +str[i];
//       }
//       return sum;
//     }
    
// const getDigitsSum = (num) => (num+"").split('').reduce((a,b) => +a + +b, 0);

// console.log(getDigitsSum(332));

// #15

// const getDigitsSum = (num) => (num+"").split('').reduce((a,b) => +a + +b, 0);

// const allYerasDamnDozen = (numStart,numFinal, damnDozen , getDigitsSum) => {
//     let result = [];
//     for (let i = numStart; i <= numFinal; i++) {
//         if (getDigitsSum(i) === damnDozen){
//             result.push(i)
//         }
//     }
//     return result
// }

// console.log(allYerasDamnDozen(1, 2022, 13 , getDigitsSum));

// #16

// const isEven = (num) => num % 2 === 0;

// #17

// const arrNum = [5, 2, 5, 76, 0, 33, 12, 1, 7, 566, 3, 22, 123, 9];

// const onlyEvenNum = (arr, func) => arr.map((a) => func(a) ? a : '').filter(Boolean);

// console.log(onlyEvenNum(arrNum, isEven));


// #18

// const getDivisors = (num) => {
//     const result = [];
//     for (let i = 0; i < num; i++) {
//         if (num % i === 0) {
//             result.push(i)
//         }
//     }
//     return result
// }


// console.log(getDivisors(555, 0));


// #19
// const arrNum = [5, 2, 5, 76, 0, 33, 12, 1, 7, 566, 3, 22, 123, 9];

// const recursia = (arr, i) => {
//  if (i == arr.length) return;
  
//   console.log(arr[i]);
//   recursia(arr, i + 1);
// }

// recursia(arrNum, 0);


// #20



// const recSum = (num, stopNum) => {
//     let sum = 0;
//     let arr = (num + '').split('');
//     for (let i = 0; i < arr.length; i++) {
//         sum += parseInt(arr[i]);
//     }

//     if (sum > stopNum) {
//         return recSum(sum, stopNum)
//     }else  return sum

    
// }

// const recSum = (num, stopNum) =>
//     (num + '').split('').reduce((a,b) => (sum = (+a + +b)) < stopNum ? sum : recSum(sum, stopNum))

// console.log(recSum(951753, 9));