let temperatureCelsius = parseFloat(prompt("Введіть температуру в градусах за Цельсієм:"));

if ((temperatureCelsius)) {
    let temperatureFahrenheit = (9/5) * temperatureCelsius + 32;
    alert("Температура за Фаренгейтом: " + temperatureFahrenheit.toFixed(2));
} else {
    alert("Введено некоректну температуру!");
}
