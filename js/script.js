{
    const tasks = [];

    const removeTask = () => {
        const removeButons = document.querySelectorAll(".js-remove")

        removeButons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                render();
            });
        });
    }

    const toggleDoneTask = () => {
        const toggleDoneButons = document.querySelectorAll(".js-done");

        toggleDoneButons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                tasks[index].done = !tasks[index].done;
                render();
            });
        });
    }

    const focusInput = () => {
        const newTaskElement = document.querySelector(".js-newTask");
        newTaskElement.focus();
    }

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item ">
                <button class="list__button js-done">${task.done ? "✔" : ""}</button>
                <span class="list__text ${task.done ? "list__text--done" : ""}">${task.content}</span>
                <button class="list__button list__button--remove js-remove">🗑</button>
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    }

    const renderButons = () => {
        if (tasks.length > 0) {
            document.querySelector(".js-buttons").innerHTML = `
        <button class="section__button">Ukryj ukończone</button>
        <button class="section__button">Ukończ wszystkie</button>`;
        }
        else {
            document.querySelector(".js-buttons").innerHTML = "";
        }

    }

    const render = () => {
        renderTasks();
        renderButons();

        removeTask();
        toggleDoneTask();
    }

    const addedNewTask = (newTaskElementValue) => {
        tasks.push({
            content: newTaskElementValue,
            done: false,
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskElementValue = document.querySelector(".js-newTask").value.trim();
        if (newTaskElementValue === "") {
            return
        }
        addedNewTask(newTaskElementValue);
        document.querySelector(".js-newTask").value = "";
        render();
        focusInput();
    }

    const init = () => {
        render();
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}