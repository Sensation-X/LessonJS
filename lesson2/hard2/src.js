function main() {
    'use strict';

// ЗАДАНИЕ 2) Создать массив arr = []
//       Записать в него 7 любых многозначных чисел в виде строк
//       Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)


let arr = ['1995', '324', '6794', '7368', '5358', '39885', '7241'];
console.log(arr);
let arrNum = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) == 3 || arr[i].charAt(0) == 7) {
        arrNum.push(arr[i]);
    }
}

console.log(arrNum);
}
main();

