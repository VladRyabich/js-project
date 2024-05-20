//// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [];

// Набір юзерів згенеровані в чаті GPT
users.push(new User(7, 'Pepe', 'Frog', 'pepe.frog@meme.com', '111-222-3333'));
users.push(new User(3, 'Doge', 'Shibe', 'doge.shibe@meme.com', '222-333-4444'));
users.push(new User(5, 'Grumpy', 'Cat', 'grumpy.cat@meme.com', '333-444-5555'));
users.push(new User(1, 'Success', 'Kid', 'success.kid@meme.com', '444-555-6666'));
users.push(new User(2, 'Disaster', 'Girl', 'disaster.girl@meme.com', '555-666-7777'));
users.push(new User(8, 'Hide', 'Pain Harold', 'hide.pain.harold@meme.com', '666-777-8888'));
users.push(new User(9, 'Rick', 'Astley', 'rick.astley@never.gonna', '777-888-9999'));
users.push(new User(10, 'Troll', 'Face', 'troll.face@meme.com', '888-999-0000'));
users.push(new User(4, 'Arthur', 'Fist', 'arthur.fist@meme.com', '999-000-1111'));
users.push(new User(6, 'Mocking', 'Spongebob', 'mocking.spongebob@meme.com', '000-111-2222'));

console.log(users);

//// Фільтруємо масив, залишаючи тільки об'єкти з парними id
const filterUsers = users.filter(user => user.id % 2 === 0);

console.log(filterUsers);

//// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// В консолі зразу сортує списки і з першого виведення
users.sort((user1, user2) => user1.id - user2.id);

console.log(users);
console.log('==================================');

//=============================================================================================================================
//// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [];

//Клієнти згенеровані в чаті GPT
clients.push(new Client(1, 'Charlie', 'Davis', 'charlie.davis@example.com', '456-789-0123', ['Product 5']));
clients.push(new Client(2, 'Diana', 'Miller', 'diana.miller@example.com', '567-890-1234', ['Product 3', 'Product 19']));
clients.push(new Client(3, 'Edward', 'Wilson', 'edward.wilson@example.com', '678-901-2345', ['Product 8', 'Product 12', 'Product 16']));
clients.push(new Client(4, 'Fiona', 'Taylor', 'fiona.taylor@example.com', '789-012-3456', ['Product 1', 'Product 14']));
clients.push(new Client(5, 'George', 'Anderson', 'george.anderson@example.com', '890-123-4567', ['Product 7', 'Product 18']));
clients.push(new Client(6, 'Hannah', 'Thomas', 'hannah.thomas@example.com', '901-234-5678', ['Product 9']));
clients.push(new Client(7, 'Pepe', 'Frog', 'pepe.frog@meme.com', '111-222-3333', ['Product 2', 'Product 15', 'Product 20']));
clients.push(new Client(8, 'Doge', 'Shibe', 'doge.shibe@meme.com', '222-333-4444', ['Product 10']));
clients.push(new Client(9, 'Grumpy', 'Cat', 'grumpy.cat@meme.com', '333-444-5555', ['Product 4', 'Product 17', 'Product 11']));
clients.push(new Client(10, 'Success', 'Kid', 'success.kid@meme.com', '444-555-6666', ['Product 6', 'Product 13']));
console.log(clients);

//// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// В консолі показує два раза відсортовані клієнти
clients.sort((a, b) => a.order.length - b.order.length);

console.log(clients);
console.log('==================================');

//// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
////   з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
////   Додати в об'єкт функції:
////   -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
////   -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
////   -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
////   -- changeYear (newValue) - змінює рік випуску на значення newValue
////   -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, brand, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function () {
        console.log(`Модель автомобіля - "${this.model}"`);
        console.log(`Марка автомобіля - "${this.brand}"`);
        console.log(`Рік випуску - "${this.year}"`);
        console.log(`Максимальна швидкість - "${this.maxSpeed}"`);
        console.log(`Об'єм двигуна - "${this.engineCapacity}"`);
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let myCar = new Car ('Qashqai', 'Nissan', 2018, 140, 1.2)

myCar.increaseMaxSpeed(30); //максимальна швидкість збільшена до 170
myCar.changeYear(2021);//змінили рік писуку на 2021

myCar.addDriver({name: 'Vlad', certification: 'A1', age: 27});//додали інформацію про водія

myCar.drive();
myCar.info();

console.log(myCar);
console.log('==================================');
//-- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, brand, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log(`Модель автомобіля - "${this.model}"`);
        console.log(`Марка автомобіля - "${this.brand}"`);
        console.log(`Рік випуску - "${this.year}"`);
        console.log(`Максимальна швидкість - "${this.maxSpeed}"`);
        console.log(`Об'єм двигуна - "${this.engineCapacity}"`);
    }

    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear (newValue) {
        this.year = newValue;
    }

    addDriver (driver) {
        this.driver = driver;
    }
}

let myCar2 = new Car2('Kangoo', 'Renault', 2010, 120, 1.6);

myCar2.increaseMaxSpeed(20);
myCar2.changeYear(2012);

myCar2.addDriver({name: 'Ura', certification: 'A1', age: 52});

myCar2.drive();
myCar2.info();

console.log(myCar2);
console.log('==================================');

//--створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella('Alice', 20, 36),
    new Cinderella('Bella', 22, 37),
    new Cinderella('Cindy', 25, 38),
    new Cinderella('Diana', 19, 39),
    new Cinderella('Eva', 21, 34),
    new Cinderella('Fiona', 23, 36),
    new Cinderella('Grace', 24, 37),
    new Cinderella('Helen', 26, 38),
    new Cinderella('Ivy', 18, 39),
    new Cinderella('Jane', 27, 35) // Створено чатом GPT
];
class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }

    findCinderellaByLoop(cinderellas) {
        for (let cinderella of cinderellas) {
            if (cinderella.footSize === this.foundShoeSize) {
                return cinderella;
            }
        }
    }

    findCinderellaByFind(cinderellas) {
        return cinderellas.find(cinderella => cinderella.footSize === this.foundShoeSize);
    }
}

let prince = new Prince('Charming', 27, 34);

let foundCinderellaByLoop = prince.findCinderellaByLoop(cinderellas);
if (foundCinderellaByLoop) {
    console.log(`Попелюшка знайдена за допомогою циклу: ${foundCinderellaByLoop.name}, Вік: ${foundCinderellaByLoop.age}, Розмір ноги: ${foundCinderellaByLoop.footSize}`);
} else {
    console.log('Попелюшка не знайдена!');
}

let foundCinderellaByFind = prince.findCinderellaByFind(cinderellas);
if (foundCinderellaByFind) {
    console.log(`Попелюшка знайдена за допомогою find: ${foundCinderellaByFind.name}, Вік: ${foundCinderellaByFind.age}, Розмір ноги: ${foundCinderellaByFind.footSize}`);
} else {
    console.log('Попелюшка не знайдена!');
}

console.log('==================================');

//// -Через Array.prototype. створити власний foreach
let arr = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
console.log('ForEach:');
arr.myForEach((element, index) => {
    console.log(`Index: ${index}, Element: ${element}`); // індекс від 0, елементи від 1
});

console.log('==================================');

//// -Через Array.prototype. створити власний filter
Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
console.log('Filter:');
let filteredArr = arr.myFilter(element => element > 1);
console.log(filteredArr); //[2, 3, 4, 5]

console.log('==================================');

//// -Через Array.prototype. створити власний map
Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};
console.log('Map:');
let mappedArr = arr.myMap(element => element * 5);
console.log(mappedArr); //[5, 10, 15, 20, 25]