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
            <button class="btn btn-edit">Edit</button></td>
        `;
        tbody.appendChild(tableRow);
    }

    static removeFromList(e) {
        console.log(e.target.classList.contains('btn-del'));
        console.log(e.target.parentElement.parentElement.remove());
    }

    static clearFields() {
        document.querySelector('#taskName').value = '';
        document.querySelector('#startHour').value = '';
        document.querySelector('#startMin').value = '';
        document.querySelector('#endHour').value = '';
        document.querySelector('#endMin').value = '';
    }
}


//************************  Events  *************************** 

document.querySelector('#btn-save').addEventListener('click', (e) => {
    e.preventDefault();

    const tstName = document.querySelector('#taskName').value;
    let startHr = parseInt(document.querySelector('#startHour').value);
    let startMin = parseInt(document.querySelector('#startMin').value);
    const endHr = document.querySelector('#endHour').value;
    const endMin = document.querySelector('#endMin').value;

    if ((startHr >= 0 && startHr <= 23) && (startMin >= 0 && startMin <= 59)) {
        let task = new Task(tstName, startHr, startMin, endHr, endMin);
        UI.addToList(task);
        Storage.addToStorage(task);
        UI.clearFields();

    } else {
        console.log('min 0- 59 and hr 0 - 23');
    }
});


document.querySelector('.taskList').addEventListener('click', UI.removeFromList);
//************************  end of events  *************************** 


class Storage {

    static getTasks() {
        let tasks;
        if (localStorage.getItem('tasks') === null)
            tasks = [];
        else
            tasks = JSON.parse(localStorage.getItem('tasks'));
        return tasks;
    }

    static addToStorage(task) {
        const tasks = getTasks();
        console.log(Array.isArray(tasks));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log('This i now saved in database');
    }

    static getFromStorage() {
        return localStorage.getItem('task');
    }

}
