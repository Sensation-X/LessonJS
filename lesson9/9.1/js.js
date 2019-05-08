let age = document.getElementById('age');

function showUser(surname, name, age) {
    this.age = age;
    alert("Пользователь " + surname + " " + name + ", её возраст " + this.value);
}

showUser.call(age, 'Головач', 'Лена');