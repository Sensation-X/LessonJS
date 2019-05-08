let age = document.getElementById('age');

function showUser(surname, name, age) {
    alert("Пользователь " + surname + " " + name + ", её возраст " + this.value);
}

showUser.call(age, 'Головач', 'Лена');