// Завдання 10
//// - Користувач вводить або має два числа.
////   Потрібно знайти та вивести максимальне число з тих двох .
////   Також потрібно врахувати коли введені рівні числа.

let firstNum = +prompt('Введіть перше число');
let secondNum = +prompt('Введіть друге число');

if (firstNum > secondNum) {
    console.log('Максимальне з двох чисел ' + firstNum);
} else if (firstNum < secondNum) {
    console.log('Максимальне з двох чисел ' + secondNum);
} else if (firstNum === secondNum) {
    console.log('Числа рівні між собою');
}