"use strict";
import { greet, add, multiply, sumAll } from "./utils.js";
import { user, numbers } from "./data.js";

console.log("Модульний код підключено!");
console.log("User data:", user);
console.log("Numbers array:", numbers);

greet(user.name);
console.log("10 + 5 =", add(10, 5));
console.log("10 * 5 =", multiply(10, 5));
console.log("Сума чисел:", sumAll(...numbers));

const { name, age, city } = user;
console.log(`Користувач: ${name}, Вік: ${age}, Місто: ${city}`);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Об'єднаний масив:", combined);

const app = document.getElementById("app");
if (app) {
    app.innerHTML = `
        <p>Користувач: ${name}, Вік: ${age}, Місто: ${city}</p>
        <p>Сума чисел: ${sumAll(...numbers)}</p>
    `;
} else {
    console.error("Елемент #app не знайдено!");
}

//
function invertNumbersFromString(...input) {
    const inverted = input.map(n => -n);
    console.log("Інвертовані числа числа:", inverted.join(", "));
}

// ===Виклик===
invertNumbersFromString(6, 65, 666);
