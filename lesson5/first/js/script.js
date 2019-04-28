function main() {
    'use strict';

    // №1)
    let menuItem = document.querySelectorAll('.menu-item'),
        menu = document.querySelector('.menu'),
        a = document.querySelectorAll('.menu-item')[2],
        b = document.querySelectorAll('.menu-item')[1],
        c = b.cloneNode(true);

    menu.insertBefore(a, b);
    c.textContent = 'Пятый пункт';
    menu.appendChild(c);

    // №2
    document.body.style.background = 'url("img/apple_true.jpg") center no-repeat';

    // №3
    let title = document.querySelector('#title');
    title.textContent = 'Мы продаем только подлинную технику Apple';

    // №4
    let column = document.querySelectorAll('.column');
    column[1].removeChild(document.querySelector('.adv'));

    // №5
    document.querySelector('#prompt').textContent = prompt('Как Вы относитесь к технике apple?', '');
}
main();
