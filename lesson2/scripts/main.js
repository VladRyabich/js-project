// Завдання 1
//// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let colors = ['Green', 'Orange', 'Pink', 'Red', 'Blue', 'Yellow', 'Purple', 'Gray', 'White', 'Black'];
console.log(colors);


// Завдання 2
//// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 319,
    genre: 'fantasy'
};

let book2 = {
    title: 'Murder on the beach',
    pageCount: 352,
    genre: 'detective'
};

let book3 = {
    title: 'It',
    pageCount: 1344,
    genre: 'horror'
};

// Завдання 3
//// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
////   Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'The Surgeon',
    pageCount: 352,
    genre: 'detective',
    authors: [
        name = 'Tess Gerritsen',
        age = 70
    ]
};

let book5 = {
    title: 'Thirteen Reasons Why',
    pageCount: 288,
    genre: 'novel',
    authors: [
        name = 'Jay Asher',
        age = 48
    ]
};

let book6 = {
    title: 'The Martian',
    pageCount: 448,
    genre: 'science fiction',
    authors: [
        name = 'Andy Weir',
        age = 51
    ]
};


// Завдання 4
//// - Створити масив з 10 об'єктами які описують сутніть "користувач".
////   Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'Oleg',
        username: 'oLed',
        password: 'o77Leg123'
    },

    {
        name: 'Andriy',
        username: 'ANDryu',
        password: 'aDi1nRy5'
    },

    {
        name: 'Olga',
        username: 'OliaWitch',
        password: 'olia0301W'
    },

    {
        name: 'Vladislav',
        username: 'VladOne',
        password: 'Vl22d53'
    },

    {
        name: 'Nikolay',
        username: 'kolyaShtok',
        password: 'rf4rf7755'
    },

    {
        name: 'Linda',
        username: 'lindaStar',
        password: 'Li24St58'
    },

    {
        name: 'Yulia',
        username: 'mYulia',
        password: 'Y33im77'
    },

     {
        name: 'Igor',
        username: 'igorLeg',
        password: 'Legolas27369'
    },

     {
        name: 'Ludmila',
        username: 'ludaPro',
        password: 'Lu97pas1'
    },

    {
        name: 'Yuri',
        username: 'yurAtop',
        password: 'ura04R30'
    }
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[9].password);
console.log(users[7].password);
console.log(users[8].password);

// Завдання 5
//// - описати масив, в якому буде зберігатись інформація про температуру вранці,
////   вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
////   Нормальних варіантів опису - 2.
////   Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperatureInfo = [
    monday = {
        morning: '11 degrees',
        day: '22 degrees',
        evening: '19 degrees'
    },

    tuesday = {
        morning: '11 degrees',
        day: '20 degrees',
        evening: '16 degrees'
    },

    wednesday = {
        morning: '10 degrees',
        day: '18 degrees',
        evening: '14 degrees'
    },

    thursday = {
        morning: '7 degrees',
        day: '14 degrees',
        evening: '12 degrees'
    },

    friday = {
        morning: '13 degrees',
        day: '18 degrees',
        evening: '15 degrees'
    },

    saturday = {
        morning: '12 degrees',
        day: '17 degrees',
        evening: '14 degrees'
    },

    sunday = {
        morning: '9 degrees',
        day: '16 degrees',
        evening: '14 degrees'
    }
];


// Завдання 6
////