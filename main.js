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


// Циклы


// #1

const increaseNum = (numFrom, numTo) => {
    
    for (let i = numFrom; i <= numTo; i++) {
       return console.log(i);
    }
     
}
increaseNum( 0, 100 );


// let i = 0
// while (i < 100) {
//     i++
//     console.log(i);
// }


//#3

// for (let i = 0; i <= 100; i++) {
    // if (i % 2 === 0) {
    //     console.log(i);
    // }
// }

// let i = 0
// while (i < 100) {
//     i++
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


//#4

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
    
// }