// Завдання 8
//// - У змінній day дано якесь число від 1 до 31.
////   Потрібно визначити, у яку половину(декаду) місяця
////   потрапляє це число (у першу, другу чи третю).

let day = +prompt('Ввести число місяця від 1 до 31');
if (day < 1) {
    console.log('Некоректне число...');
} else if (day <= 10) {
    console.log('Перша декада місяця');
} else if (day > 10 && day <= 20) {
    console.log('Друга декада місяця');
} else if (day > 20 && day <= 31) {
    console.log('Третя декада місяця');
}