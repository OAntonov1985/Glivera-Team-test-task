import { data } from './utils/constants.js';

const tbody = document.getElementById('table-body');

data.map(item => {
    const row = document.createElement('tr');
    row.classList.add('main__content-table-row');

    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.company}</td>
        <td>${item.phone}</td>
        <td>${item.email}</td>
        <td>${item.country}</td>
        <td>
            <span class="status ${item.status.toLowerCase()}">
                ${item.status.charAt(0).toUpperCase() + item.status.slice(1)}
            </span>
        </td>
    `;

    tbody.appendChild(row);
});


const listItems = document.querySelectorAll('.aside__list-item');

listItems.forEach(item => {
    item.addEventListener('click', (event) => {
        listItems.forEach(el => el.classList.remove('isactive'));
        event.currentTarget.classList.add('isactive');
    });
});