
//// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію
//// про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
const sessions = JSON.parse(localStorage.getItem('sessions')) || [];
const sessionsContainer = document.getElementById('sessions-container');
sessions.forEach((session, index) => {
    const sessionContainer = document.createElement('div');
    sessionContainer.classList.add('session');
    const sessionHeading = document.createElement('h2');
    sessionHeading.textContent = `Сесія ${index + 1}`;
    const sessionDateTime = document.createElement('p');
    sessionDateTime.textContent = `Дата і час: ${session}`;
    sessionContainer.appendChild(sessionHeading);
    sessionContainer.appendChild(sessionDateTime);
    sessionsContainer.appendChild(sessionContainer);
});