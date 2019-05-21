function modal() {
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
}

module.exports = modal;