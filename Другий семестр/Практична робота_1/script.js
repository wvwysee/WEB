function fillSurvey() {
    let name = prompt("Введіть ваше ім'я:");
    let age = prompt("Введіть ваш вік:");
    age = Number(age);
    let isStudent = prompt("Ви студент? (true/false):");
    isStudent = isStudent.toLowerCase() === 'true';
    let hobby = prompt("Ваше хобі:");
    let height = prompt("Ваш зріст у метрах (наприклад, 1.75):");
    height = parseFloat(height);

    addSurvey(name, age, isStudent, hobby, height);

    alert(`Тип змінної name: ${typeof name}\nТип змінної age: ${typeof age}\nТип змінної isStudent: ${typeof isStudent}\nТип змінної hobby: ${typeof hobby}\nТип змінної height: ${typeof height}`);
    console.log("Анкета користувача:", { name, age, isStudent, hobby, height });
}

function addSurvey(name, age, isStudent, hobby, height) {
    document.getElementById("userName").value = name;
    document.getElementById("userAge").value = age;
    document.getElementById("userStudent").value = isStudent;
    document.getElementById("userHobby").value = hobby;
    document.getElementById("userHeight").value = height;
}