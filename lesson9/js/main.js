//- створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let tagDivBlock = document.createElement('div');
tagDivBlock.innerText = 'Test this text block';
tagDivBlock.classList.add('wrap', 'collapse', 'alpha', 'beta');
tagDivBlock.style.background = 'skyblue';
tagDivBlock.style.color = 'darkorange';
tagDivBlock.style.fontSize = '24px';
document.body.appendChild(tagDivBlock);
let tagDivBlockClone = tagDivBlock.cloneNode(true);
document.body.appendChild(tagDivBlockClone);

// =========================

// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let headerArray = ['Main', 'Products', 'About us', 'Contacts'];

const headerList = document.createElement('ul');
document.body.appendChild(headerList);

for (const headerItem of headerArray) {
    const li = document.createElement('li');
    li.innerText = headerItem;
    headerList.appendChild(li);
}

// =========================

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// - Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// - За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// - Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const courseInfoBlock = document.createElement('div');
document.body.appendChild(courseInfoBlock);

for (const courseItem of coursesAndDurationArray) {
    const block = document.createElement('div');
    block.classList.add('item');

    const titleElement = document.createElement('h2');
    titleElement.classList.add('heading');
    titleElement.innerText = courseItem.title;

    const numberOfMonth = document.createElement('p');
    numberOfMonth.classList.add('description');
    numberOfMonth.innerText = `Duration: ${courseItem.monthDuration} months`;

    block.append(titleElement, numberOfMonth);
    courseInfoBlock.appendChild(block);
    document.body.appendChild(courseInfoBlock);
}

// =========================

//- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

const simpsonsArrayBlock = document.createElement('div');
simpsonsArrayBlock.classList.add('simpsons-array-block');
document.body.appendChild(simpsonsArrayBlock);

for (const member of simpsons) {
    const memberBlock = document.createElement('div');
    memberBlock.classList.add('member-block');
    memberBlock.classList.add('member');

    const memberPhoto = document.createElement('img');
    memberPhoto.classList.add('member-photo');
    memberPhoto.src = member.photo;
    memberPhoto.alt = `${member.name} ${member.surname}`;

    const memberTextBlock = document.createElement('div');
    memberTextBlock.classList.add('member-text-block');

    const memberName = document.createElement('h2');
    memberName.classList.add('member-name');
    memberName.innerText = `${member.name} ${member.surname}`;

    const memberAge = document.createElement('h3');
    memberAge.classList.add('member-age');
    memberAge.innerText = `Вік: ${member.age}`;

    const memberInfoTitle = document.createElement('h3');
    memberInfoTitle.classList.add('member-biography');
    memberInfoTitle.innerText = 'Біографія:';

    const memberInfo = document.createElement('p');
    memberInfo.classList.add('member-info');
    memberInfo.innerHTML = member.info;

    memberTextBlock.append(memberName, memberAge, memberInfoTitle, memberInfo);
    memberBlock.append(memberPhoto, memberTextBlock);
    simpsonsArrayBlock.appendChild(memberBlock);
    document.body.appendChild(simpsonsArrayBlock);
}

// =========================

//Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

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

const courseArrayBlock = document.createElement('div');
courseArrayBlock.classList.add('course-array-block');
document.body.appendChild(courseArrayBlock);

for (const courseItem of coursesArray) {
    const courseBlock = document.createElement('div');
    courseBlock.classList.add('course-block');

    const courseTitle = document.createElement('h2');
    courseTitle.classList.add('course-title');
    courseTitle.innerText = courseItem.title;

    const courseMonthDuration = document.createElement('p');

    courseMonthDuration.classList.add('course-month-duration');
    courseMonthDuration.innerHTML = `<b>Duration of months:</b> ${courseItem.monthDuration} months`;
    const courseHourDuration = document.createElement('p');

    courseHourDuration.classList.add('course-hour-duration');
    courseHourDuration.innerHTML = `<b>Duration of hours:</b> ${courseItem.hourDuration} hours`;

    const durationBlock = document.createElement('div');
    durationBlock.classList.add('duration-block');
    durationBlock.append(courseMonthDuration, courseHourDuration);

    const courseModuleList = document.createElement('ul');
    courseModuleList.classList.add('course-module-list');

    const titleModules = document.createElement('li');
    titleModules.innerText = 'Modules:'
    titleModules.classList.add('title-modules');
    courseModuleList.appendChild(titleModules);

    for (const courseModuleItem of courseItem.modules) {
        const moduleItem = document.createElement('li');
        moduleItem.classList.add('course-module-item');
        moduleItem.innerHTML = courseModuleItem;

        courseModuleList.appendChild(moduleItem);
    }

    courseBlock.append(courseTitle, durationBlock, courseModuleList);
    courseArrayBlock.appendChild(courseBlock);
    document.body.appendChild(courseArrayBlock);
}