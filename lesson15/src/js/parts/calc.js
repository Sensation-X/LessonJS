function calc() {
    //Калькулятор

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;
    let start = 0;

    persons.addEventListener('input', function () {
        persons.value = persons.value.replace(/\D/g, "");
        personsSum = +this.value;

        total = (daysSum + personsSum) * 4000;
        let end = total * place.options[place.selectedIndex].value;

        if (persons.value == '' || restDays.value == '' || persons.value[0] == 0 || restDays.value[0] == 0) {
            totalValue.innerHTML = 0;
        } else if (start < end) {
            let interval = setInterval(function () {
                start += 100;
                totalValue.innerHTML = start;
                if (start == end) {
                    clearInterval(interval);
                }
            }, 5);
        } else if (start > end) {
            let interval = setInterval(function () {
                start -= 100;
                totalValue.innerHTML = start;
                if (start == end) {
                    clearInterval(interval);
                }
            }, 5);
        } else {
            totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }
    });

    restDays.addEventListener('input', function () {
        restDays.value = restDays.value.replace(/\D/g, "");
        daysSum = +this.value;

        total = (daysSum + personsSum) * 4000;
        let end = total * place.options[place.selectedIndex].value;

        if (persons.value == '' || restDays.value == '' ||  persons.value[0] == 0 || restDays.value[0] == 0) {
            totalValue.innerHTML = 0;
        } else if (start < end) {
            let interval = setInterval(function () {
                start += 100;
                totalValue.innerHTML = start;
                if (start == end) {
                    clearInterval(interval);
                }
            }, 5);
        } else if (start > end) {
            let interval = setInterval(function () {
                start -= 100;
                totalValue.innerHTML = start;
                if (start == end) {
                    clearInterval(interval);
                }
            }, 5);
        } else {
            totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }
    });

    place.addEventListener('change', function () {

        let a = total;
        let end = a * this.options[this.selectedIndex].value;

        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else if (start < end) {
            let interval = setInterval(function () {
                start += 100;
                totalValue.innerHTML = start;
                if (start == end) {
                    clearInterval(interval);
                }
            }, 5);
        } else {
            let interval = setInterval(function () {
                start -= 100;
                totalValue.innerHTML = start;
                if (start == end) {
                    clearInterval(interval);
                }
            }, 5);
        }
    });
}

module.exports = calc;