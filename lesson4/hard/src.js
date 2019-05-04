function main() {
    'use strict';
    // Задание:
    // 1) У вас есть: function getFriendlyNumbers(start, end) {}
    // Необходимо реализовать функцию которая подсчитывает дружественные числа в заданном диапазоне;
    // ·        Сигнатура функции - getFriendlyNumbers(start, end);
    // ·        start - начало диапазона;
    // ·        end - конец диапазона;
    // 2) Функция должна возвращать массив из пар дружественных чисел
    // Например:
    // ·        Для диапазона от 1 до 300 функция должна вернуть [[220, 284]]
    // ·        Для диапазона от 1 до 100 функция должна вернуть пустой массив
    // ·        Для диапазона от 284 до 500 функция должна вернуть пустой массив
    // 3) В случае, если переданы не правильные аргументы (неправильный тип данных (только числа!), start > end, отрицательный диапазон, дробные числа), функция должна вернуть false.
    // ·        Числа должны находится в правильном порядке
    // ·        [284, 220] – неправильно
    // ·        Пары дружественных чисел не должны повторяться  
    // ·        [[220, 284], [284, 220]] – неправильно
    // 4) Проверить, чтобы все работало и не было ошибок в консоли


    function getFriendlyNumbers(start, end) {
        let arr = [];
        if (typeof (start) != 'number' || typeof (end) != 'number' ||
            start > end || start < 0 || end < 0 ||
            Number.isInteger(start) === false ||
            Number.isInteger(end) === false) {
            return false;
        } else {
            let a, b;
            for (let i = start; i <= end; i++) {
                a = sum(i);
                (a > i && a <= end) ? b = sum(a) : b = 0;
                if (i == b && a != 0) {
                    arr.push([i, a]);
                }
            }
        }
        return arr;
    }

    function sum(c) {
        let x = 0;
        for (let z = 1; z < c; z++) {
            if (c % z == 0) {
                x += z;
            }
        }
        return x;
    }
}
main();
