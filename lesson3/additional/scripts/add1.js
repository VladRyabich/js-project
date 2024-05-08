/*
--створити масив з:
    - з 5 числових значень
    - з 5 стічкових значень
    - з 5 значень стрічкового, числового та булевого типу
    - та вивести його в консоль

    -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
 */
let numbers = [1, 13, 27, 55, 77];

let carBrands = ['BMW', 'Nissan', 'Audi', 'Mazda', 'Kia'];

let players = [
    {
        nickname: 'zeroNess1',
        age: 21,
        status: true
    },
    {
        nickname: 'aRIFureta',
        age: 27,
        status: false
    },
    {
        nickname: 'LegoLas',
        age: 29,
        status: true
    },
    {
        nickname: 'ShaMan',
        age: 30,
        status: true
    },
    {
        nickname: 'Sugar',
        age: 21,
        status: false
    }
];

console.log(numbers, carBrands, players);
console.log('');

/*
- є масив [2,17,13,6,22,31,45,66,100,-18] :
    1. перебрати його циклом while
    2. перебрати його циклом for
    3. перебрати циклом while та вивести  числа тільки з непарним індексом
    4. перебрати циклом for та вивести  числа тільки з непарним індексом
    5. перебрати циклом while та вивести  числа тільки парні  значення
    6. перебрати циклом for та вивести  числа тільки парні  значення
    7. замінити кожне число кратне 3 на слово "okten"
    8. вивести масив в зворотньому порядку.
    9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
 */
//1. перебрати його циклом while
let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

document.write(`<div>`);
let i = 0;
while (i < nums.length) {
    document.write(`${nums[i]}`);
    i++
}
document.write(`</div>`);

//2. перебрати його циклом for
document.write(`<div>`);
for (i = 0; i < nums.length; i++) {
    document.write(`${nums[i]}`)
}
document.write(`</div>`);

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
document.write(`<ul>`);
let a = 0;
while (a < nums.length) {
    if (a % 2 !== 0) {
        document.write(`<li>${nums[a]}</li>`);
    }
    a++;
}
document.write(`</ul>`);

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
document.write(`<ul>`);
for (a = 0; a < nums.length; a++) {
    if (a % 2 !== 0) {
        document.write(`<li>${nums[a]}</li>`);
    }
}
document.write(`</ul>`);

// 5. перебрати циклом while та вивести  числа тільки парні  значення
document.write(`<ul>`);
let b = 0;
while (b < nums.length) {
    if (b % 2 === 0) {
        document.write(`<li>${nums[b]}</li>`);
    }
    b++
}
document.write(`</ul>`);

// 6. перебрати циклом for та вивести  числа тільки парні  значення
document.write(`<ul>`);
for (b = 0; b < nums.length; b++) {
    if (b % 2 === 0) {
        document.write(`<li>${nums[b]}</li>`);
    }
}
document.write(`</ul>`);

// 7. замінити кожне число кратне 3 на слово "okten"
document.write(`<ul>`);
for (let num of nums) {
    if (num % 3 === 0) {
        num = 'okten';
        document.write(`<li>${num}</li>`);
    } else {
        document.write(`<li>${num}</li>`);
    }
}
document.write(`</ul>`);

// 8. вивести масив в зворотньому порядку.
document.write(`<ul>`);
for (let d = nums.length - 1; d >= 0; d--) {
    document.write(`<li>${nums[d]}</li>`);
}
document.write(`</ul>`);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
document.write(`<ul>`);
let e = nums.length - 1;
while (e >= 0) {
    document.write(`<li>${nums[e]}</li>`);
    e--;
}
document.write(`</ul>`);

document.write(`<ul>`);
let f = nums.length - 1;
while (f >= 0) {
    if (f % 2 !== 0) {
        document.write(`<li>${nums[f]}</li>`);
    }
    f--;
}
document.write(`</ul>`);

document.write(`<ul>`);
for (let g = nums.length - 1; g >= 0; g--) {
    if (g % 2 !== 0) {
        document.write(`<li>${nums[g]}</li>`);
    }
}
document.write(`</ul>`);

document.write(`<ul>`);
let h = nums.length - 1;
while (h >= 0) {
    if (h % 2 === 0) {
        document.write(`<li>${nums[h]}</li>`);
    }
    h--;
}
document.write(`</ul>`);

document.write(`<ul>`);
for (let k = nums.length - 1; k >= 0; k--) {
    if (k % 2 === 0) {
        document.write(`<li>${nums[k]}</li>`);
    }
}
document.write(`</ul>`);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let number = [57, 23, 89, 42, 6, 77, 31, 15, 98, 10];
console.log('Масив з 10 числових елементів:');
let v = 0;
while (v < number.length) {
    console.log(number[v]);
    v++
}
console.log('');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let colors = ['Зелений', 'Голубий', 'Рожевий', 'Червоний', 'Жовтий', 'Білий', 'Фіолетовий', 'Оранжевий', 'Чорний', 'Сірий']
console.log('Масив з 10 строкрових елементів:');
for (s = 0; s < colors.length; s++) {
    console.log(colors[s])
}
console.log('');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let myArray = [5, "Hello", true, {name: "John", age: 30}, ["apple", "banana"], null, undefined, function () {console.log("This is a function");}, NaN, -12.345];
console.log('Масив з 10 елементів будь-якого типу:');
for (n = 0; n < myArray.length; n++) {
    console.log(myArray[n]);
}
console.log('');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let mixedArray = [5, true, "Hello", 10, false, "World", -3.14, true, "JavaScript", 42];
console.log('За допомогою if та typeof вивести тільки булеві елементи:');
for (m = 0; m < mixedArray.length; m++) {
    if (typeof mixedArray[m] === 'boolean') {
        console.log(mixedArray[m]);
    }
}
console.log('');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
console.log('За допомогою if та typeof вивести тільки числові елементи:');
for (m = 0; m < mixedArray.length; m++) {
    if (typeof mixedArray[m] === 'number') {
        console.log(mixedArray[m]);
    }
}
console.log('');

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
console.log('За допомогою if та typeof вивести тільки рядкові елементи:');
m = 0;
while (m < mixedArray.length) {
    if (typeof mixedArray[m] === 'string') {
        console.log(mixedArray[m]);
    }
    m++
} // пробую різні варіанти циклів
console.log('');

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let newArray = [];

newArray[0] = 'OpenAI';
newArray[1] = 25;
newArray[2] = false;
newArray[3] = '2024';
newArray[4] = true;
newArray[5] = 3.13159;
newArray[6] = 'HTML';
newArray[7] = -10;
newArray[8] = true;
newArray[9] = 'try';

for (const newArrayElement of newArray) {
    console.log(newArrayElement);
}
console.log('');

// - Створити цикл for на 10  ітерацій з кроком 1.
//Вивести поточний номер кроку через console.log та document.write
console.log('Цикл for на 10  ітерацій з кроком 1:');
document.write('Цикл for на 10  ітерацій з кроком 1:');
for (l = 0; l < newArray.length; l++) {
    console.log('Поточний номер кроку: ' + (l + 1));
    document.write(`<p>Поточний номер кроку:</p> ${l + 1} <br>`);
}
document.write('<br>');
console.log('');

// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
console.log('Цикл for на 100 ітерацій з кроком 1:');
document.write('Цикл for на 100 ітерацій з кроком 1:' + '<br>');
for (l = 0; l < 100; l++) {
    console.log('Поточний номер кроку: ' + (l + 1));
    document.write('Поточний номер кроку: ' + (l + 1) + '<br>');
}
document.write('<br>');
console.log('');

// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
console.log('Цикл for на 100 ітерацій з кроком 2:');
document.write('Цикл for на 100 ітерацій з кроком 2:' + '<br>');
for (l = 0; l < 100; l += 2) {
    console.log('Поточний номер кроку: ' + (l + 2));
    document.write('Поточний номер кроку: ' + (l + 2) + '<br>');
}
document.write('<br>');
console.log('');

// - Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки через console.log + document.write
console.log('Цикл for на 100 ітерацій. Тільки парні кроки:');
document.write('Цикл for на 100 ітерацій. Тільки парні кроки:' + '<br>');
for (l = 0; l < 100; l++) {
    if (l % 2 === 0) {
        console.log('Поточний номер кроку: ' + l);
        document.write('Поточний номер кроку: ' + l + '<br>');
    }
}
document.write('<br>');
console.log('');

// - Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки через console.log + document.write
console.log('Цикл for на 100 ітерацій. Тільки непарні кроки:');
document.write('Цикл for на 100 ітерацій. Тільки непарні кроки:' + '<br>');
for (l = 0; l < 100; l++) {
    if (l % 2 !== 0) {
        console.log('Поточний номер кроку: ' + l);
        document.write('Поточний номер кроку: ' + l + '<br>');
    }
}
document.write('<br>');
console.log('');

//// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: "Майстер і Маргарита",
        pages: 384,
        authors: ["Михайло Булгаков"],
        genres: ["фантастика", "сатира"]
    },
    {
        title: "Гаррі Поттер і філософський камінь",
        pages: 332,
        authors: ["Джоан Роулінг"],
        genres: ["фентезі", "пригоди", "детектив"]
    },
    {
        title: "1984",
        pages: 328,
        authors: ["Джордж Орвелл"],
        genres: ["дистопія", "політичний роман"]
    },
    {
        title: "Маленький принц",
        pages: 96,
        authors: ["Антуан де Сент-Екзюпері"],
        genres: ["філософська проза", "пригоди"]
    },
    {
        title: "Ігри розуму",
        pages: 320,
        authors: ["Денніел Канеман", "Амос Тверський"],
        genres: ["психологія", "економіка"]
    },
    {
        title: "Таємниця Шерлока Холмса",
        pages: 240,
        authors: ["Артур Конан Дойль"],
        genres: ["детектив", "містика"]
    },
    {
        title: "Над прірвою у темряві",
        pages: 336,
        authors: ["Стивен Кінг"],
        genres: ["трилер", "жахи"]
    },
    {
        title: "Винні Пух",
        pages: 160,
        authors: ["Алан Александр Мілн"],
        genres: ["дитяча література", "пригоди"]
    },
    {
        title: "Тіні забутих предків",
        pages: 416,
        authors: ["Габріель Гарсія Маркес"],
        genres: ["магічний реалізм", "пригоди"]
    },
    {
        title: "Портрет Доріана Грея",
        pages: 272,
        authors: ["Оскар Уайльд"],
        genres: ["філософська проза", "готичний роман"]
    }
];

// -знайти наібльшу книжку.
let bigBook = books[0];
for (const book of books) {
    if (book.pages > bigBook.pages) {
        bigBook = book;
    }
}
console.log('Найбільша книга:');
console.log(bigBook);
console.log('');

// - знайти книжку/ки з найбільшою кількістю жанрів
let bigGenres = books[0];
for (const bookGenre of books) {
    if (bookGenre.genres.length > bigGenres.genres.length) {
        bigGenres = bookGenre;
    }
}
console.log('Найбільша кількість жанрів у книги:');
console.log(bigGenres);
console.log('');

// - знайти книжку/ки з найдовшою назвою
maxLength = 0;
let longestTitle;
for (const bookTitle of books) {
    if (bookTitle.title.length > maxLength) {
        maxLength = bookTitle.title.length;
        longestTitle = bookTitle;
    }
}
console.log('Книга з найдовшою назвою:');
console.log(longestTitle);
console.log('');

// - знайти книжку/ки які писали 2 автори
let twoAuthors = books[0];
for (const bookAuthors of books) {
    if (bookAuthors.authors.length === 2) {
        twoAuthors = bookAuthors;
    }
}
console.log('Книги з двома авторами:');
console.log(twoAuthors);
console.log('');

// - знайти книжку/ки які писав 1 автор
let oneAuthor = books[0];
for (const bookAuthor of books) {
    if (bookAuthor.authors.length === 1) {
        oneAuthor = bookAuthor;
    }
}
console.log('Книги з одним автором:');
console.log(oneAuthor);