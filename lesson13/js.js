window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    function tabs(tabsTitle, tabsWrapper, tabsContent) {

        let tab = document.getElementsByClassName(tabsTitle),
            info = document.getElementsByClassName(tabsWrapper)[0],
            tabContent = document.getElementsByClassName(tabsContent);

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains(tabsTitle)) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    }
    tabs('info-header-tab', 'info-header', 'info-tabcontent');

    //Timer

    let deadline = '2019-05-28';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()) + ((new Date().getTimezoneOffset()) * 1000 * 60),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60));

        function addZero() {
            if (hours / 10 < 1) {
                hours = '0' + hours;
            }
            if (minutes / 10 < 1) {
                minutes = '0' + minutes;
            }
            if (seconds / 10 < 1) {
                seconds = '0' + seconds;
            }
        }

        addZero();

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {

            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);

    // Плавная прокрутка

    let anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const containerID = anchor.getAttribute('href');
            document.querySelector(containerID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Модалка

    let overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelectorAll('.btn-overlay'),
        opac = 0;

    let myAnimationId = -1,
        myAnimationStopId = -1;

    function myAnimation() {
        clearInterval(myAnimationId);
        myAnimationId = setInterval(frame, 100);

        function frame() {
            if (opac >= 1) {
                document.body.style.overflow = 'hidden';
                clearInterval(myAnimationId);
            } else {
                clearInterval(myAnimationStopId);
                opac = opac + 0.1;
                overlay.style.opacity = opac;
                overlay.style.display = 'block';
            }
        }
    }

    function myAnimationStop() {
        clearInterval(myAnimationStopId);
        myAnimationStopId = setInterval(frame, 40);

        function frame() {
            if (opac <= 0) {
                overlay.style.display = 'none';
                document.body.style.overflow = '';
                clearInterval(myAnimationStopId);
            } else {
                clearInterval(myAnimationId);
                opac = opac - 0.05;
                overlay.style.opacity = opac;
            }
        }
    }

    if (window.navigator.userAgent.toUpperCase().indexOf('.NET') != -1 ||
        window.navigator.userAgent.toUpperCase().indexOf('EDGE') != -1) {

        descriptionBtn.forEach(function (item) {

            item.addEventListener('click', function () {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                overlay.classList.add('fade');
                document.body.style.overflow = 'hidden';
            });

            close.addEventListener('click', function () {
                overlay.style.display = 'none';
                item.classList.remove('more-splash');
                overlay.classList.remove('fade');
                document.body.style.overflow = '';
            });
        });
    } else if (window.navigator.userAgent.toUpperCase().indexOf('ANDROID') != -1 ||
        window.navigator.userAgent.toUpperCase().indexOf('IPHONE') != -1) {

        descriptionBtn.forEach(function (item) {

            item.addEventListener('click', function () {
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });

            close.addEventListener('click', function () {
                overlay.style.display = 'none';
                document.body.style.overflow = '';
            });
        });
    } else {
        close.addEventListener('click', myAnimationStop);

        descriptionBtn.forEach(function (item) {
            item.addEventListener('click', myAnimation);
        });
    }

    //Форма

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы  с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form'),
        formContacts = document.querySelector('.form-contacts'),
        statusMessage = document.createElement('div'),
        input = document.getElementsByName('phone');
        statusMessage.classList.add('status');

    // Валидация 
    for (let i = 0; i < input.length; i++){
        input[i].addEventListener('input', () => {
            input[i].value = input[i].value.replace(/[^0-9+]/,'');
    });
    }

    // Отправка формы
function formSend(elem) {
        elem.addEventListener('submit', (e) => {
            e.preventDefault();
            elem.appendChild(statusMessage);
            let input = elem.getElementsByTagName('input');
            
            function sendData(data) {

                return new Promise(function (resolve, reject){
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    let formData = new FormData(elem);
                    let obj = {};
                    formData.forEach(function(value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);

                    request.send(json);

                    request.addEventListener('readystatechange', () => {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                })
            }
            function clearInp() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

        sendData()
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInp)
        });
        
    }

    formSend(form);
    formSend(formContacts);

    // Слайдер

    // тот слайд в текущий момент
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    // определение текущего слайда и его установка
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    //Калькулятор

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('input', function () {
        persons.value = persons.value.replace(/\D/g, "");
        personsSum = +this.value;

        total = (daysSum + personsSum) * 4000;

        if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }
    });

    restDays.addEventListener('input', function () {
        restDays.value = restDays.value.replace(/\D/g, "");

        daysSum = +this.value;

        total = (daysSum + personsSum) * 4000;

        if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }
    });

    place.addEventListener('change', function () {

        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
});