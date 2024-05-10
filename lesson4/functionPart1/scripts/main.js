//// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(lth, wth) {
    if (lth > 0 && wth > 0) {
        return lth * wth;
    }
    return 'Error';
}

let areaRectangle = rectangle(10, 20);
console.log(areaRectangle);

//// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(num) {
    if (num > 0) {
        let pi = 3.14;
        return pi * (num * num);
    }
    return 'Error';
}

let areaCircle = circle(5);
console.log(areaCircle);

//// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(rad, hgt) {
    if (rad > 0 && hgt > 0) {
        let pi = 3.14;
        return 2 * pi * (rad * rad) + 2 * pi * rad * hgt;
    }
    return 'Error';
}

let areaCylinder = cylinder(4,7);
console.log(areaCylinder);

//// - створити функцію яка приймає масив та виводить кожен його елемент
function arrFunction (array) {
    for (const arrItem of array) {
        console.log(arrItem);
    }
}

let newArray = ['green', 'yellow', 'red'];
arrFunction(newArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphFunction(text) {
    document.write(`<p>${text}</p>`)
}

paragraphFunction('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quibusdam.');

//// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(itemText) {
    document.write(`<ul>
                        <li>${itemText}</li>
                        <li>${itemText}</li>
                        <li>${itemText}</li>
                    </ul>`);
}

list('vlad');

//// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
////   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function loopList(numItems, text) {
    document.write(`<ul>`);
        for (let i = 0; i < numItems; i++) {
            document.write(`<li>${text}</li>`);
        }
    document.write(`</ul>`);
}

loopList(5, 'Text Test');

//// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function buildingList(...primitiveEl) {
    document.write(`<ul>`);
        for (let i = 0; i < primitiveEl.length; i++) {
            document.write(`<li>${primitiveEl[i]}</li>`);
        }
    document.write(`</ul>`);
}

let primArr = [24, false, 'buy', null];
buildingList(...primArr);

//// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function usersArr(users) {
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
// function smallNumber(numArr) {
//     let minNum = numArr[0];
//     for (const numArrElement of numArr) {
//         if (numArrElement < minNum) {
//             minNum = numArrElement;
//         }
//     }
//     console.log(minNum);
// }

function smallNumber(numArr) {
    let minNum = numArr[0];
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] < minNum) {
            minNum = numArr[i];
        }
    }
    return console.log(minNum);
}

let numbers = [223, 433, 239, 154, 765, 682, 238, 490, 126];
smallNumber(numbers);

//// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
////   Приклад sum([1,2,10]) //->13

function sum(arr) {
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
function swap(arr, index1, index2) {
    swapIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = swapIndex;

    return console.log(arr);

}

let swapNum = [11, 22, 33, 44];
swap(swapNum, 0, 1);

//// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//     Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250-
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[0].currency === exchangeCurrency) {
            let result = sumUAH / currencyValues[0].value;
            console.log(result);
            break
        } else if (currencyValues[1].currency === exchangeCurrency) {
            let result = sumUAH / currencyValues[1].value;
            console.log(result);
            break
        } else {
            console.log('Некоректно введена валюта!');
            break
        }
    }
} // Довго сидів над цим завданням. Вийшло зробити так. Думаю це не правильний варіант.
  // Якщо можна фітбек по ньому, і показати як було б логічно побудувати функцію.

exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');