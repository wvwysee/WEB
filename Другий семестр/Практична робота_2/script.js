function inputData() {
    const name = prompt("Введіть ваше ім'я:");
    const age = Number(prompt("Введіть ваш вік:"));
    const city = prompt("Введіть ваше місто:");
    return { name, age, city };
}

function createSurvey(name, age, city) {
    
    const isAdult = age >= 18;

    return { name, age, city, isAdult };
}

function displaySurvey(surveyData) {
    console.log("Дані анкети:", surveyData);
    alert(`Ім'я: ${surveyData.name}, Вік: ${surveyData.age}, Місто: ${surveyData.city}, Повнолітній: ${surveyData.isAdult ? "Так" : "Ні"}`);

    document.getElementById("resultName").textContent = surveyData.name;
    document.getElementById("resultAge").textContent = surveyData.age;
    document.getElementById("resultCity").textContent = surveyData.city;
    document.getElementById("resultIsAdult").textContent = surveyData.isAdult ? "Так" : "Ні";
    document.getElementById("surveyResult").style.display = "block";
}

// Отримання даних користувача
const userData = inputData();
const survey = createSurvey(userData.name, userData.age, userData.city);
displaySurvey(survey);

// Калькулятор температур
function runTemperatureCalculator() {
    const temperature = Number(prompt("Введіть температуру:"));
    const conversion = prompt("Введіть напрямок конвертації (C to F або F to C):").toUpperCase();

    let result;
    if (conversion === "C TO F") {
        result = celsiusToFahrenheit(temperature);
        alert(`${temperature}°C = ${result}°F`);
        console.log(`${temperature}°C = ${result}°F`);
    } else if (conversion === "F TO C") {
        result = fahrenheitToCelsius(temperature);
        alert(`${temperature}°F = ${result}°C`);
        console.log(`${temperature}°F = ${result}°C`);
    } else {
        alert("Невірний напрямок конвертації.");
    }
}

// Додавання подій для кнопки
document.getElementById("runCalculator").addEventListener("click", runTemperatureCalculator);

// Функції для конвертації температур
function createConverter(factor, offset) {
    return function(temperature) {
        return temperature * factor + offset;
    };
}

const celsiusToFahrenheit = createConverter(9/5, 32);
const fahrenheitToCelsius = createConverter(5/9, -32 * (5/9));