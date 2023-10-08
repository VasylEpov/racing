function generateTable() {
    const numRacers = parseInt(document.getElementById('numRacers').value) || 0;
    const numRaces = parseInt(document.getElementById('numRaces').value) || 0;

    if (numRacers <= 0 || numRaces <= 0) {
        alert("Будь ласка, введіть дійсні значення для кількості спортсменів та заїздів.");
        return;
    }

    const table = document.getElementById('raceTable');
    table.innerHTML = ''; // Очистимо таблицю перед генерацією нової

    // Додаємо заголовок таблиці
    const headerRow = table.insertRow();
    headerRow.insertCell().textContent = 'Спортсмен';
    for (let i = 1; i <= numRaces; i++) {
        headerRow.insertCell().textContent = `Заїзд ${i} (Місце / Бали)`;
    }
    headerRow.insertCell().textContent = 'Підсумок';

    // Додаємо рядки для кожного спортсмена
    for (let i = 1; i <= numRacers; i++) {
        const racerRow = table.insertRow();
        racerRow.insertCell().textContent = i;

        for (let j = 1; j <= numRaces * 2; j++) {
            const cell = racerRow.insertCell();
            cell.contentEditable = true;

            // Додаємо обробник подій для підрахунку підсумкових балів
            if (j % 2 === 0) {
                cell.addEventListener('input', () => updateTotal(cell));
            }
        }

        // Пуста комірка для підсумку
        racerRow.insertCell();
    }
}

function calculatePoints() {
    const table = document.getElementById('raceTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const racerRow = rows[i];
        const cells = racerRow.getElementsByTagName('td');

        let totalPoints = 0;

        for (let j = 1; j <= cells.length - 2; j += 2) {
            const place = parseInt(cells[j].innerText) || 0;
            const points = parseInt(cells[j + 1].innerText) || 0;

            // Врахування кількості балів залежно від місця в перегонах
            switch (place) {
                case 1:
                    totalPoints += 25;
                    break;
                case 2:
                    totalPoints += 22;
                    break;
                case 3:
                    totalPoints += 20;
                    break;
                case 4:
                    totalPoints += 18;
                    break;
                case 5:
                    totalPoints += 16;
                    break;
                case 6:
                    totalPoints += 15;
                    break;
                case 7:
                    totalPoints += 14;
                    break;
                case 8:
                    totalPoints += 13;
                    break;
                case 9:
                    totalPoints += 12;
                    break;
                case 10:
                    totalPoints += 11;
                    break;
                case 11:
                    totalPoints += 10;
                    break;
                case 12:
                    totalPoints += 9;
                    break;
                case 13:
                    totalPoints += 8;
                    break;
                case 14:
                    totalPoints += 7;
                    break;
                case 15:
                    totalPoints += 6;
                    break;
                case 16:
                    totalPoints += 5;
                    break;
                case 17:
                    totalPoints += 4;
                    break;
                case 18:
                    totalPoints += 3;
                    break;
                case 19:
                    totalPoints += 2;
                    break;
                case 20:
                    totalPoints += 1;
                    break;
                default:
                    // Неправильне місце - нічого не робимо
                    break;
            }

            // Записуємо місце та бали в відповідні комірки
            cells[j].innerText = place;
            cells[j + 1].innerText = totalPoints;
        }

        // Записуємо підсумкові бали в останню комірку
        cells[cells.length - 1].innerText = totalPoints;
    }

    // Сортування рядків за підсумковими балами та за останнім заїздом
    const sortedRows = Array.from(rows).slice(1);
    sortedRows.sort((a, b) => {
        const pointsA = parseInt(a.cells[a.cells.length - 1].innerText) || 0;
        const pointsB = parseInt(b.cells[b.cells.length - 1].innerText) || 0;

        // Порівняння за останнім заїздом, якщо загальна кількість балів однакова
        if (pointsA === pointsB) {
            const lastRaceA = parseInt(a.cells[a.cells.length - 2].innerText) || 0;
            const lastRaceB = parseInt(b.cells[b.cells.length - 2].innerText) || 0;
            return lastRaceB - lastRaceA;
        }

        return pointsB - pointsA;
    });

    // Оновлення таблиці з відсортованими рядками
    for (let i = 0; i < sortedRows.length; i++) {
        table.tBodies[0].appendChild(sortedRows[i]);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    generateTable(); // Автоматично генеруємо таблицю при завантаженні сторінки
});

function updateTotal(cell) {
    let totalPoints = 0;
    const racerRow = cell.parentNode;
    const cells = racerRow.getElementsByTagName('td');

    for (let j = 1; j <= cells.length - 2; j += 2) {
        const place = parseInt(cells[j].innerText) || 0;
        const points = parseInt(cells[j + 1].innerText) || 0;

        // Врахування кількості балів залежно від місця в перегонах
        switch (place) {
            case 1:
                totalPoints += 25;
                break;
            case 2:
                totalPoints += 22;
                break;
            case 3:
                totalPoints += 20;
                break;
            case 4:
                totalPoints += 18;
                break;
            case 5:
                totalPoints += 16;
                break;
            case 6:
                totalPoints += 15;
                break;
            case 7:
                totalPoints += 14;
                break;
            case 8:
                totalPoints += 13;
                break;
            case 9:
                totalPoints += 12;
                break;
            case 10:
                totalPoints += 11;
                break;
            case 11:
                totalPoints += 10;
                break;
            case 12:
                totalPoints += 9;
                break;
            case 13:
                totalPoints += 8;
                break;
            case 14:
                totalPoints += 7;
                break;
            case 15:
                totalPoints += 6;
                break;
            case 16:
                totalPoints += 5;
                break;
            case 17:
                totalPoints += 4;
                break;
            case 18:
                totalPoints += 3;
                break;
            case 19:
                totalPoints += 2;
                break;
            case 20:
                totalPoints += 1;
                break;
            default:
                // Неправильне місце - нічого не робимо
                break;
        }
        Цей код додає д   
