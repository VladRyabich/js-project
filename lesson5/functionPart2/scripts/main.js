//// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangle = (lth, wth) =>   lth * wth;
console.log(rectangle(10,20));

//// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circle = (num) => 3.14 * num * num;
console.log(circle(5));

//// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinder = (rad, hgt) => 2 * 3.14 * (rad * rad) + 2 * 3.14 * rad * hgt;
console.log(cylinder(4, 7));

//// - створити функцію яка приймає масив та виводить кожен його елемент
const arrFunction = (array) => {
  for (const arrItem of array) {
    console.log(arrItem);
  }
}
arrFunction(['green', 'yellow', 'red']);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraphFn = (text) => document.write(`<p>${text}</p>`);
paragraphFn('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quibusdam.');

//// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const list = (itemText) => {
  document.write(`<ul>
                       <li>${itemText}</li>
                       <li>${itemText}</li>
                       <li>${itemText}</li>
                  </ul>`);
}
list('vlad');

//// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
////   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const loopList = (numItems, text) => {
  document.write(`<ul>`);
  for (let i = 0; i < numItems; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
}
loopList(5, 'Text Test');

//// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const buildingList = (...primitiveEl) => {
  document.write(`<ul>`);
  for (let i = 0; i < primitiveEl.length; i++) {
    document.write(`<li>${primitiveEl[i]}</li>`);
  }
  document.write(`</ul>`);
}

let primArr = [24, false, 'buy', null];
buildingList(...primArr);

//// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const usersArr = (users) => {
  document.write(`<div class="wrap">`);
  for (let i = 0; i < users.length; i++) {
    document.write(`<div class="card">
                                <h3><span>ID USER:</span> ${users[i].id}</h3>
                                <h2><span>Name:</span> ${users[i].name}</h2>
                                <h2><span>Age:</span> ${users[i].age} years</h2>
                            </div>`);
  }
  document.write(`</div>`);
}

let users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Alice", age: 25 },
  { id: 3, name: "Bob", age: 35 },
  { id: 4, name: "Emily", age: 28 },
  { id: 5, name: "Michael", age: 40 },
  { id: 6, name: "Sophia", age: 22 },
  { id: 7, name: "David", age: 33 },
  { id: 8, name: "Emma", age: 27 },
  { id: 9, name: "James", age: 38 },
  { id: 10, name: "Olivia", age: 31 },
  { id: 11, name: "Isabella", age: 29 },
  { id: 12, name: "William", age: 36 }
];

usersArr(users);

// - створити функцію яка повертає найменьше число з масиву
const smallNumber = (numArr) => {
  let minNum = numArr[0];
  for (const numArrElement of numArr) {
    if (numArrElement < minNum) {
      minNum = numArrElement;
    }
  }
  return console.log(minNum);
}

let numbers = [223, 433, 239, 154, 765, 682, 238, 490, 126];
smallNumber(numbers);

//// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return console.log(total);
}

let arr = [1, 2, 10];
sum(arr);
//// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
////   Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
  let swapIndex = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = swapIndex;

  return console.log(arr);
}

let swapNum = [11, 22, 33, 44];
swap(swapNum, 0, 1);

//// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//     Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250-
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
  for (const currValue of currencyValues) {
    if (currValue.currency === exchangeCurrency) {
      return sumUAH / currValue.value;
    }
  }
  console.log('Некоректно введено валюта!')
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));