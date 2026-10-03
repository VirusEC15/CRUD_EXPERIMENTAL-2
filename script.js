let id = "";
const input = document.getElementById('input');
const submitbtn = document.getElementById('submitbtn');
const clearAllbtn = document.getElementById('clearAllbtn');
const tablebody = document.getElementById('tablebody');

document.addEventListener("DOMContentLoaded", displaydata);

submitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    managedata();
});

function managedata() {
    let inputdata = input.value.trim();
    if (inputdata === "") {
        alert("Please enter a name");
        return;
    }

    let arr = JSON.parse(localStorage.getItem('names')) || [];

    if (id === "") {
        arr.push(inputdata);
    } else {
        arr[id] = inputdata;
        id = "";
    }

    localStorage.setItem('names', JSON.stringify(arr));
    input.value = "";
    displaydata();
}

function displaydata() {
    let arr = JSON.parse(localStorage.getItem('names')) || [];
    tablebody.replaceChildren();

    arr.forEach((name, index) => {
        const row = document.createElement('tr');
        const numberCell = document.createElement('td');
        const nameCell = document.createElement('td');
        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        numberCell.textContent = String(index + 1);
        nameCell.textContent = name;

        editButton.type = 'button';
        editButton.className = 'action-btn edit';
        editButton.dataset.action = 'edit';
        editButton.dataset.index = String(index);
        editButton.textContent = 'Edit';

        deleteButton.type = 'button';
        deleteButton.className = 'action-btn delete';
        deleteButton.dataset.action = 'delete';
        deleteButton.dataset.index = String(index);
        deleteButton.textContent = 'Delete';

        actionsCell.append(editButton, deleteButton);
        row.append(numberCell, nameCell, actionsCell);
        tablebody.append(row);
    });
}

tablebody.addEventListener('click', (event) => {
    const actionButton = event.target.closest('button[data-action]');
    if (!actionButton) {
        return;
    }

    const index = Number(actionButton.dataset.index);
    if (actionButton.dataset.action === 'edit') {
        editdata(index);
    } else if (actionButton.dataset.action === 'delete') {
        deletedata(index);
    }
});

function editdata(index) {
    let arr = JSON.parse(localStorage.getItem('names'));
    input.value = arr[index];
    id = index;
}

function deletedata(index) {
    let arr = JSON.parse(localStorage.getItem('names'));
    arr.splice(index, 1);
    localStorage.setItem('names', JSON.stringify(arr));
    displaydata();
}
clearAllbtn.addEventListener("click", () => {
    localStorage.removeItem('names');
    displaydata();
});

