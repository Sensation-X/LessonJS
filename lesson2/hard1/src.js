function main() {
    'use strict';

// ЗАДАНИЕ 1) Создать массив week и записать в него дни недели в виде строк
// ·        Вывести на экран все дни недели
// ·        Каждый из них с новой строчки
// ·        Выходные дни - жирным шрифтом
// ·        Текущий день - курсивом (пока можно задать текущий день вручную,
//          без работы с объектом даты)


    let week = ['Понедельник', 'Втортник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        parentElem = document.body;

    for (let i = 0; i < week.length; i++) {
        let createSpan = document.createElement('span');
        createSpan.innerHTML = `${week[i]}<br/>`;
        parentElem.appendChild(createSpan);
        if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
            createSpan.innerHTML = `${week[i].bold()}<br/>`;
        } else if (week[i] == 'Пятница') {
            createSpan.innerHTML = `${week[i].italics()}<br/>`;
        }
    }

}
main();

