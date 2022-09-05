import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (evento) => {
    const list = document.querySelector("[data-list]");
    const task = createTask(evento);
    list.appendChild(task);

}



const createTask = (evento) => {
    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');

    const task = document.createElement("li");
    task.classList.add("card");
    input.value = ' ';
    // backticks

    const taskObj = {
        value,
        dateFormat
    }

    taskList.push(taskObj);
    // si cerramos la pestaña los datos no persisten
    // sessionStorage.setItem("tasks", JSON.stringify(taskObj)); 

    localStorage.setItem('tasks', JSON.stringify(taskList));
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerHTML = value;

    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // taskContent.appendChild(deleteIcon());

    // const content = ` 
    // <i class="fas fa-trash-alt trashIcon icon"></i>`
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;

    task.appendChild(taskContent);
    taskContent.appendChild(dateElement);
    task.appendChild(deleteIcon())
    return task;

    //   task.innerHTML = content;

}

