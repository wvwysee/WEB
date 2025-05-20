// 4.1 Комплексне завдання: Бібліотека користувачів

class User {
    constructor(name, age, profession) {
        this._name = name;
        this._age = age;
        this._profession = profession;
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName) this._name = newName;
    }

    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge > 0) this._age = newAge;
    }

    get profession() {
        return this._profession;
    }
    set profession(newProfession) {
        if (newProfession) this._profession = newProfession;
    }

    display() {
        console.log(`Користувач: ${this._name}, Вік: ${this._age}, Професія: ${this._profession}`);
    }
}

class Admin extends User {
    constructor(name, age, profession, role) {
        super(name, age, profession);
        this.role = role;
    }

    display() {
        console.log(`Адміністратор: ${this.name}, Вік: ${this.age}, Професія: ${this.profession}, Роль: ${this.role}`);
    }
}

// Введення даних через prompt
const userName = prompt("Введіть ім'я користувача:");
const userAge = parseInt(prompt("Введіть вік користувача:"), 10);
const userProfession = prompt("Введіть професію користувача:");

if (isNaN(userAge) || userAge <= 0) {
    alert("Некоректний вік! Будь ласка, введіть число більше 0.");
} else {
    const user = new User(userName, userAge, userProfession);
    user.display();

    document.getElementById("userName").textContent = user.name;
    document.getElementById("userAge").textContent = user.age;
    document.getElementById("userProfession").textContent = user.profession;
}

const admin = new Admin("Ольга", 35, "Розробник", "Головний Адмін");
admin.display();

document.getElementById("adminName").textContent = admin.name;
document.getElementById("adminAge").textContent = admin.age;
document.getElementById("adminProfession").textContent = admin.profession;
document.getElementById("adminRole").textContent = admin.role;

// 4.2 Самостійне завдання: Власний проєкт OOP

class Player {
    constructor(name, age, playsDota, certification) {
        this.name = name;
        this.age = age;
        this.playsDota = playsDota;
        this.certification = certification;
    }

    get playerStatus() {
        return this.playsDota ? "гей" : "натурал";
    }

    display() {
        console.log(`Користувач: ${this.name}, Вік: ${this.age}, Статус: ${this.playerStatus}, Сертифікація: ${this.certification}`);
        alert(`Користувач: ${this.name}\nВік: ${this.age}\nСтатус: ${this.playerStatus}\nСертифікація: ${this.certification}`);
    }
}

// Інтерактивне введення
const playerName = prompt("Введіть ваше ім'я:");
const playerAge = parseInt(prompt("Введіть ваш вік:"), 10);
const playsDota = confirm("Ви граєте в Dota 2?");
const certifications = ["Армянін", "Єврей", "Грузопідцомник"];
let playerCertification;

while (!certifications.includes(playerCertification)) {
    playerCertification = prompt("Оберіть сертифікацію (Армянін, Єврей, Грузопідцомник):");
}

if (isNaN(playerAge) || playerAge <= 0) {
    alert("Некоректний вік! Будь ласка, введіть число більше 0.");
} else {
    const player = new Player(playerName, playerAge, playsDota, playerCertification);
    player.display();

    document.getElementById("playerName").textContent = player.name;
    document.getElementById("playerAge").textContent = player.age;
    document.getElementById("playerStatus").textContent = player.playerStatus;
    document.getElementById("playerCertification").textContent = player.certification;
}