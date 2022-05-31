// 1. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), которая возвращает
// подстроку, состоящую из указанного количества символов.

// let str = 'Каждый охотник желает знать';

// const delete_characters = (str, length) => str.slice(0, length);

// console.log(delete_characters(str, 15));


// 2. Вставить тире между словами строки
// Напишите функцию insert_dash(str), которая принимает строку str в
// качестве аргумента и вставляет тире (-) между словами. При этом все
// символы строки необходимо перевести в верхний регистр.

// let str = "HTML JavaScript PHP";

// const insert_dash = (str) => str.split(' ').join('-').toUpperCase()

// console.log(insert_dash(str));


// 3. Сделать первую букву строки прописной
// Напишите функцию, которая принимает строку в качестве аргумента и
// преобразует регистр первого символа строки из нижнего регистра в верхний.

// let str = "string not starting with capital";

// const cursive_letter = (str) => str[0].toUpperCase() + str.slice(1);

// console.log(cursive_letter(str));

// 4. Первая буква каждого слова заглавная
// Напишите функцию capitalize(str), которая возвращает строку, в которой
// каждое слово начинается с заглавной буквы.

// let str = "каждый охотник желает знать";

// const capitalize = (str) =>
//     str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')

// console.log(capitalize(str));


// 5. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве
// аргумента строку и и заменяет регистр каждого символа на противоположный.
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ
// оХоТнИк».

// let str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

// const change_register = (str) =>
//     str.split('').map((el) => el.toUpperCase() === el
//         ? el.toLowerCase()
//         : el.toUpperCase())
//         .join('');

// console.log(str);
// console.log(change_register(str));


// 6. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку,
// очищенную от всех не буквенно-цифровых символов.

// let str = "every., -/ hunter #! wishes ;: {} to $ % ^ & *know";

// const remove_char = (str) =>
//     str.match(/[a-zA-Z\d ]/gi).join('').split(' ').filter(Boolean).join(' ');

// console.log(remove_char(str));


// 7. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной
// длины числовое значение с дополнительным знаком «+» или « -« в
// зависимости от передаваемого аргумента.


// const zeros = (num, len, sign) => {
//     let arr = (num + '').split('')
//     let result = [...arr];

//     for (let i = 0; i < len - arr.length; i++) {
//         if (sign === '+') {
//                 result.push('0')
//             } else  {
//                 result.unshift('0')
//             }
//     }
            
//     return sign + result.join('')
// }

// console.log(zeros(256, 6, '+'));
// console.log(zeros(256, 6, '-'));


// 8. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки
// без учёта регистра символов.

// const comparison = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

// console.log(comparison('AsdFgH', 'asdfgh'));


// 9. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая
// осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра
// символов.

// const insensitive_search = (str1, str2) =>
//     str1.toLowerCase().includes(str2.toLowerCase())

// console.log(insensitive_search('sdfgsdrgrsFJCJgJd AsdFgH ffYITditF AsdFgH YTIDytDyt dYDytfyFyfuiF','AsdFgH'));

// 10. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания
// составных слов строки в CamelCase, при котором несколько слов пишутся
// слитно без пробелов, при этом каждое слово внутри строки пишется с
// заглавной буквы.

// let str = "hEllo world";

// const initCap = (str) =>
//     str[0].toLowerCase()
//     + str.toLowerCase().split(' ')
//         .map((word) => word[0].toUpperCase() + word.slice(1))
//         .join('').slice(1)

// console.log(initCap(str));


// 11. Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая преобразует стиль написания
// составных слов строки из CamelCase в snake_case, при котором несколько
// слов разделяются символом подчеркивания (_), причём каждое слово пишется
// с маленькой буквы.

// let string = "snakeCaseToCamelCase"

// const initSnake = (str) =>
//     str.split('')
//         .map((letter) =>
//             letter.toUpperCase() === letter
//                 ? '_' + letter.toLowerCase()
//                 : letter)
//         .join('')

// console.log(initSnake(string));


// 12. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую
// определённое количество раз.

// const repeatStr = (str, n) => str.repeat(n);

// console.log(repeatStr('AQw', 5));


// 13. Получить имя файла
// Напишите функцию path(pathname), которая вовращает имя файла
// (подстрока после последнего символа "\" ) из полного пути к файлу.


// let pathname = "/home/user/dir/file.txt";

// const path = (str) => str.split('/').slice(-1).join('')

// const path = (str) => str.split('/').pop()

// console.log(path(pathname));



// 14. Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который сравнивает подстроку
// str1 с окончанием исходной строки str и определяет заканчивается ли строка
// символами подстроки.

// let str = "Каждый охотник желает знать";
// let str1 = "скрипт";
// let str2 = "знать";

// String.prototype.endsWith = function(substring) {
//     return this.split(' ').pop() === substring;
// };

// console.log(String.prototype);
// console.log(str.endsWith(str1));
// console.log(str.endsWith(str2));



// 15. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть
// строки, расположенную после или до указанного символа char в зависимости
// от параметра pos.

// let str = 'Астрономия — Наука о небесных телах';

// const getSubstr = (str, char, pos) => {
//     const positionFrom = str.indexOf(char)

//     return pos === 'after'
//         ? str.substr(positionFrom + 1)
//         : pos === 'before'
//             ? str.substr(0, positionFrom)
//             : 'Error';

// }

// console.log(getSubstr(str, '—', 'after'));
// console.log(getSubstr(str, '—', 'before'));
// console.log(getSubstr(str, '—', 'rabit'));


// 16. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos), которая вставляет
// подстроку substr в указханную позицию pos строки str. По умолчанию
// подстрока вставляется в начало строки.

// let str = 'Астрономия — Наука о небесных телах';
// let str2 = 'REACT';

// const insert = (str1, str2, pos = 0) =>
//     str1.split(' ').splice(pos, 0, str2);


// console.log(insert(str, str2, 3));

// 17. Ограничить длину строки
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если
// она длиннее указанного количества символов n. Усеченная строка должна
// заканчиваться троеточием «...» (если не задан параметр symb) или заданным
// символом symb.

// let str = 'Астрономия — Наука о небесных телах';

// const limitStr = (str, n, symb = '...') =>
//     str.length > n ? str.substr(0, n) + symb : str;

// console.log(limitStr(str, 25, ' и т.д.'));
// console.log(limitStr(str, 25));
// console.log(limitStr(str, 55, ' и т.д.'));


// 18. Поделить строку на фрагменты

// const  cutString = (str, n) =>


// 20. Удалить лишние пробелы из строки
// Напишите функцию strip(str), которая удаляет все лишние пробелы из
// строки str.

// let str = " Max     is a      good    boy ";

// const strip = (str) => str.split(' ').filter(Boolean).join(' ');

// console.log(strip(str));


// 21. Удалить лишние слова из строки
// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки
// str, оставив в ней n слов.

// let str = "Сила тяжести приложена к центру масс тела";

// const cutString = (str, n) =>
//     str.split(' ').slice(0, n);

// console.log(cutString(str, 3));


// 22. Сортировка символов строки по алфавиту
// Напишите функцию alphabetize(str), которая возвращает строку, отсортировав её
// символы в алфавитном порядке.

// let str = 'defghiabcjklmnopqrstu';

// const alphabetize = (str) => str.split('').sort().join('')

// console.log(alphabetize(str));

// let str = ' def ghi abc jkl mno pqr stu';

// const alphabetize = (str) => str.split(' ').sort().join(' ')
// const alphabetize = (str) => str.replace(/\s+/g,'').split('').sort().join('')
// const alphabetize = (str) => str.split(' ').join('').split('').sort().join('')

// console.log(alphabetize(str));


// 23. Найти слово в строке
// Напишите функцию findWord(word, str), которая проверяет, существует ли в
// строке str слова word.

// let str = 'abc def ghi jkl mno pqr stu';


// const findWord = (word, str) => str.split(' ').includes(word);
// // const findWord = (word, str) => str.indexOf(word) !== -1;
    
// console.log(findWord('mno', str));

// 24. Преобразовать строку в массив слов
// Напишите функцию stringToarray(str), которая преобразует строку в
// массив слов.

// let str = 'Каждый охотник желает знать';
// let arr;

// const stringToarray = (str) => arr = str.split(' ');

// stringToarray(str)
// console.log(arr);

// 25. Реализовать объект
// Создать объект с начальным полем title. Добавить поле с ключом description
// начальным значением строкой. Добавить метод addField, который при вызове
// добавляет новое поле в объект с переданным именем и значением
// addField(fieldName, value), добавить метод editField(fieldName, value), который
// меняет указанное свойство объекта. Добавить метод удаление свойства
// deleteField(fieldName), удаляющий указанное поле. Добавить и изменить поля с
// помощью этих методов.

let 