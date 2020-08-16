class Task {
    constructor(taskName, startHour, startMinute, endHour, endMinute) {
        this.taskName = taskName;
        this.startHour = startHour;
        this.startMinute = startMinute;
        this.endHour = endHour;
        this.endMinute = endMinute;
    }
}

class UI {
    static addToList(task) {
        const tableRow = document.createElement('tr');
        const tbody = document.querySelector('.taskList');
        tableRow.innerHTML = `
            <td>${task.taskName}</td>
            <td>${task.startHour}:${task.startMinute}</td>
            <td>${task.endHour}:${task.endMinute}</td>
            <td><button class="btn btn-del">Del</button>
        `;
        tbody.appendChild(tableRow);
    }

    static removeFromList(e) {
        if (e.target.classList.contains('btn-del'))
            e.target.parentElement.parentElement.remove();
    }

    static clearFields() {
        document.querySelector('#taskName').value = '';
        document.querySelector('#startHour').value = '';
        document.querySelector('#startMin').value = '';
        document.querySelector('#endHour').value = '';
        document.querySelector('#endMin').value = '';
    }
}

//Add Tasks
document.querySelector('#btn-save').addEventListener('click', (e) => {
    e.preventDefault();

    const tstName = document.querySelector('#taskName').value;
    const startHr = parseInt(document.querySelector('#startHour').value);
    const startMin = parseInt(document.querySelector('#startMin').value);
    const endHr = document.querySelector('#endHour').value;
    const endMin = document.querySelector('#endMin').value;

    const task = new Task(tstName, startHr, startMin, endHr, endMin);
    UI.addToList(task);
    UI.clearFields();

});

//Delete Task
document.querySelector('.taskList').addEventListener('click', (e) => {
    UI.removeFromList(e);
});


/*
class Storage {

    static getTasks() {
        let tasks;
        if (localStorage.getItem('tasks') === null)
            tasks = [];
        else
            tasks = Storage.getFromStorage();
        return tasks;
    }

    static addToStorage(task) {
        const tasks = Storage.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static removeFromStorage() {
        const tasks = Storage.getFromStorage().filter((taskItem) => {
            if (taskItem.startMinute !== 15)
                return taskItem;
        });
        localStorage.removeItem('tasks');
    }

    static getFromStorage() {
        return JSON.parse(localStorage.getItem('tasks'));
    }
}

//have to work validations from here
if ((startHr >= 0 && startHr <= 23) && (startMin >= 0 && startMin <= 59)) {
        const task = new Task(tstName, startHr, startMin, endHr, endMin);
        UI.addToList(task);
        UI.clearFields();

    } else {
        console.log('min 0- 59 and hr 0 - 23');
    }

*/