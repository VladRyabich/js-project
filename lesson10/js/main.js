// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

function displayObject() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;

    const person = {
        name: name,
        surname: surname,
        age: age
    };

    const objectContainer = document.getElementById('object-container');
    const stingInfoPerson = JSON.stringify(person);
    objectContainer.innerHTML = `<p>${stingInfoPerson}</p>`;
}

// ========================================================================================================
// є сторінка, на якій є блок, в якому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки
// буде додавати до неї +1

let divNumber=document.createElement('div');
divNumber.classList.add('divNumber');
let numberN=localStorage.getItem('count') || 0;
if(!numberN){
    localStorage.setItem('count', JSON.stringify(numberN))
    divNumber.innerHTML=`${numberN}`
} else {
    let numberSum = JSON.parse(numberN);
    numberSum++;
    localStorage.setItem('count', JSON.stringify(numberSum));
    divNumber.innerHTML=`Кількість перезавантажень сторінки: ${numberSum}`
}
document.body.appendChild(divNumber);

// ========================================================================================================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про
// відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

const currentDateTime = new Date().toLocaleString();
let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push(currentDateTime);
localStorage.setItem('sessions', JSON.stringify(sessions));

// =======================================================================================================
//// зробити масив на 100 об'єктів та дві кнопки prev next
//// при завантажені сторінки з'являються перші 10 об'єктів.
//// При натисканні next виводяться настпні 10 об'єктів
//// При натисканні prev виводяться попередні 10 об'єктів

const objects = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Object ${i + 1}`,
    value: Math.random() * 100,
}));
const objectContainer = document.querySelector('.object-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentPage = 0;
const objectsPerPage = 10;
function renderObjects(page) {
    objectContainer.innerHTML = '';
    const startIndex = page * objectsPerPage;
    const endIndex = startIndex + objectsPerPage;
    const objectsToRender = objects.slice(startIndex, endIndex);
    objectsToRender.forEach((obj) => {
        const objectCard = document.createElement('div');
        objectCard.classList.add('object-card');
        objectCard.innerHTML = `
          <h3>Object ${obj.id}</h3>
          <p>Name: ${obj.name}</p>
          <p>Value: ${obj.value.toFixed(2)}</p>
        `;
        objectContainer.appendChild(objectCard);
    });
    prevBtn.disabled = page === 0;
    nextBtn.disabled = endIndex >= objects.length;
}
prevBtn.addEventListener('click', () => {
    currentPage--;
    renderObjects(currentPage);
});
nextBtn.addEventListener('click', () => {
    currentPage++;
    renderObjects(currentPage);
});
renderObjects(currentPage);

//========================================================================================================
//// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
////   щоб при натисканні на кнопку зникав елемент з id="text".

const textElement = document.getElementById('text');
const hideButton = document.getElementById('hideButton');

hideButton.addEventListener('click', function() {
    textElement.style.display = 'none';
});

//========================================================================================================
//// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
////   інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const ageInput = document.getElementById('ageInput');
const checkAgeButton = document.getElementById('checkAgeButton');
const ageMessage = document.getElementById('ageMessage');

checkAgeButton.addEventListener('click', function() {
    const age = parseInt(ageInput.value);

    if (isNaN(age) || age < 0) {
        ageMessage.textContent = 'Введіть коректний вік.';
    } else if (age < 18) {
        ageMessage.textContent = 'Ви неповнолітній.';
    } else {
        ageMessage.textContent = 'Ви повнолітній.';
    }
});

//========================================================================================================
//// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
////     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
////     (Додатковачастина для завдання)

const rowsInput = document.getElementById('rowsInput');
const colsInput = document.getElementById('colsInput');
const contentInput = document.getElementById('contentInput');
const createTableButton = document.getElementById('createTableButton');
const tableContainer = document.getElementById('tableContainer');

createTableButton.addEventListener('click', function() {
    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);
    const content = contentInput.value;

    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('td');
            cell.textContent = content;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
});