function form() {

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
}

module.exports = form;