function main() {
    'use strict';
    var num = '33721',
    a = num[0] * num[1] * num[2] * num[3] * num[4];
console.log(a);
var x = a ** 3;
console.log(String(x).substr(0, 2)); // две первые цифры
}
// console.log(String(x).substr(-2)); две последние цифры
main();