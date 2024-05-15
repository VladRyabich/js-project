//// - Знайти та вивести довижину настипних стрінгових значень
let strArrValue = ['hello world', 'lorem ipsum', 'javascript is cool'];
strArrValue.forEach((item) => console.log(item.length));

//// - Перевести до великого регістру наступні стрінгові значення
////       'hello world', 'lorem ipsum', 'javascript is cool'
strArrValue.forEach((item) => console.log(item.toUpperCase()));

//// - Перевести до нижнього регістру настипні стрінгові значення
////     'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strArrUpValue = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
strArrUpValue.forEach((item) => console.log(item.toLowerCase()));

//// - Є "брудна" стрінга let str = ' dirty string   ' .
////   Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   ';
console.log(dirtyStr.trim());

//=============================================================================================================================
//// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let stringToarray = (str) => str.split(' ');

let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str);
console.log(arr);

//=============================================================================================================================
//// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strArrNumbers = arrNumbers.map(num => num.toString());
console.log(strArrNumbers);

//=============================================================================================================================
/* - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
 let nums = [11,21,3];
 sortNums(nums,'ascending') // [3,11,21]
 sortNums(nums,'descending') // [21,11,3]
*/
let nums = [11, 21, 3];

//// Варіант 1
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         return arr.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         return arr.sort((a, b) => b - a);
//     } else {
//          throw new Error('The direction is incorrect!');
//     }
// }

//// Варіант 2
let sortNums = (arr, direction) => (direction === 'ascending' || direction === 'direction') ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
////Відпишіть який варіант краще робити? і яка буде читабільніша? дякую)

console.log(sortNums(nums, 'ascending')); //[3, 11, 21]
console.log(sortNums(nums, 'descending')); //[21, 11, 3]

//=============================================================================================================================
/*
- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];*/
/*
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 */

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let filterForMoreThanFiveMonths = coursesAndDurationArray
    .sort((a, b) => a.monthDuration - b.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((course, index) => ({id: index + 1, ...course}));
console.log(filterForMoreThanFiveMonths);

//=============================================================================================================================
/*
 описати колоду карт (від 6 до туза без джокерів)
{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}
 */
const cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
const value = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

let deckOfCards = [];
for (const suitItem of cardSuit) {
    for (const valueItem of value) {
        let color = (suitItem === 'spade' || suitItem === 'clubs') ? 'black' : 'red';
        deckOfCards.push({
            cardSuit: suitItem,
            value: valueItem,
            color: color
        });
    }
}

console.log('Deck of cards:', deckOfCards);

// - знайти піковий туз
let spadeAceCard = deckOfCards.find(card => card.cardSuit === 'spade' && card.value === 'ace')
console.log('Spade ace:', spadeAceCard);

//// - всі шістки
let allSixes = deckOfCards.filter(cards => cards.value === '6');
console.log('All sixes:', allSixes);

//// - всі червоні карти
let allRedCards = deckOfCards.filter(cards => cards.color === 'red');
console.log('All red cards:', allRedCards);

////  - всі буби
let allDiamondsCards = deckOfCards.filter(cards => cards.cardSuit === 'diamond');
console.log('All diamonds:', allDiamondsCards);

//// - всі трефи від 9 та більше
let cardsClubsNineOrMore = deckOfCards.filter(cards => cards.cardSuit === 'clubs' && value.indexOf(cards.value) >= value.indexOf('9'));
console.log('All clubs from 9 and more:', cardsClubsNineOrMore);

//=============================================================================================================================
/*
Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
 */

const groupingCardsBySuits = deckOfCards.reduce((acc, card) => {
        acc[card.cardSuit].push(card);
        return acc;
    }, {spade: [], diamond: [], heart: [], clubs: []}
);

console.log('Grouping cards by suits:', groupingCardsBySuits);

//=============================================================================================================================

//// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//// --написати пошук всіх об'єктів, в який в modules є sass
const modulesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log('Courses with "sass" module:', modulesWithSass)

//// --написати пошук всіх об'єктів, в який в modules є docker
const modulesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log('Courses with "docker" module:', modulesWithDocker);