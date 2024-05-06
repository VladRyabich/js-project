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
    authors: {
        name: 'Tess Gerritsen',
        age: 70
    }
};

let book5 = {
    title: 'Thirteen Reasons Why',
    pageCount: 288,
    genre: 'novel',
    authors: {
        name: 'Jay Asher',
        age: 48
    }
};

let book6 = {
    title: 'The Martian',
    pageCount: 448,
    genre: 'science fiction',
    authors: {
        name: 'Andy Weir',
        age: 51
    }
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
// Два варіанти виведення в консоль. Перший все в один рядок, інший кожен окремо. Відпишіть як правильніше. Дякую

/*
console.log(users[0].password,
            users[1].password,
            users[2].password,
            users[3].password,
            users[4].password,
            users[5].password,
            users[6].password,
            users[9].password,
            users[7].password,
            users[8].password
);
*/
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

/*
let temperatureInfo = [
    monday = {
        morningTemp: 11,
        dayTemp: 22,
        eveningTemp: 19
    },

    tuesday = {
        morningTemp: 11,
        dayTemp: 20,
        eveningTemp: 16
    },

    wednesday = {
        morningTemp: 10,
        dayTemp: 18,
        eveningTemp: 14
    },

    thursday = {
        morningTemp: 7,
        dayTemp: 14,
        eveningTemp: 12
    },

    friday = {
        morningTemp: 13,
        dayTemp: 18,
        eveningTemp: 15
    },

    saturday = {
        morningTemp: 12,
        dayTemp: 17,
        eveningTemp: 14
    },

    sunday = {
        morningTemp: 9,
        dayTemp: 16,
        eveningTemp: 14
    }
];
*/


//Інший варіант, відпишіть в телеграм потім, який варіант буде правильніший. Дякую

/*
let temperatureInfo = [
    {
        id: 'monday',
            morningTemp: 11,
            dayTemp: 22,
            eveningTemp: 19
    },

    {
        id: 'tuesday',
            morningTemp: 11,
            dayTemp: 20,
            eveningTemp: 16
    },

    {
        id: 'wednesday',
            morningTemp: 10,
            dayTemp: 18,
            eveningTemp: 14
    },

    {
        id: 'thursday',
            morningTemp: 7,
            dayTemp: 14,
            eveningTemp: 12
    },

    {
        id: 'friday',
            morningTemp: 13,
            dayTemp: 18,
            eveningTemp: 15
    },

    {
        id: 'saturday',
            morningTemp: 12,
            dayTemp: 17,
            eveningTemp: 14
    },

    {
        id: 'sunday',
            morningTemp: 9,
            dayTemp: 16,
            eveningTemp: 14
    }
];
*/

// Варіант 3

let tempWeekInfo = [
    {
        id: 'monday',
        dayInfo: [
            {timeOfDay: 'morning', temp: 11},
            {timeOfDay: 'day', temp: 22},
            {timeOfDay: 'evening', temp: 19},
            {timeOfDay: 'night', temp: 10}
        ]
    },

    {
        id: 'tuesday',
        dayInfo: [
            {timeOfDay: 'morning', temp: 11},
            {timeOfDay: 'day', temp: 20},
            {timeOfDay: 'evening', temp: 16},
            {timeOfDay: 'night', temp: 9}
        ]
    },

    {
        id: 'wednesday',
        dayInfo: [
            {timeOfDay: 'morning', temp: 10},
            {timeOfDay: 'day', temp: 18},
            {timeOfDay: 'evening', temp: 14},
            {timeOfDay: 'night', temp: 7}
        ]
    },

    {
        id: 'thursday',
        dayInfo: [
            {timeOfDay: 'morning', temp: 7},
            {timeOfDay: 'day', temp: 14},
            {timeOfDay: 'evening', temp: 12},
            {timeOfDay: 'night', temp: 7}
        ]
    },

    {
        id: 'friday',
        dayInfo: [
            {timeOfDay: 'morning', temp: 13},
            {timeOfDay: 'day', temp: 18},
            {timeOfDay: 'evening', temp: 15},
            {timeOfDay: 'night', temp: 10}
        ]
    },

    {
        id: 'saturday',
        dayInfo: [
            {timeOfDay: 'morning', temp: 12},
            {timeOfDay: 'day', temp: 17},
            {timeOfDay: 'evening', temp: 14},
            {timeOfDay: 'night', temp: 11}
        ]
    },

    {
        id: 'sunday',
        dayInfo: [
            {timeOfDay: 'morning', temp: 9},
            {timeOfDay: 'day', temp: 16},
            {timeOfDay: 'evening', temp: 14},
            {timeOfDay: 'night', temp: 11}
        ]
    }
];