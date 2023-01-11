{
    const tasks = []

    const removeTask = () => {
        const removeButons = document.querySelectorAll(".js-remove")

        removeButons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                tasks.splice(index, 1)
                render();
            });
        });
    }

    const toggleDoneTask = () => {
        const toggleDoneButons = document.querySelectorAll(".js-done")

        toggleDoneButons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                tasks[index].done = !tasks[index].done
                render();
            });
        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item ${task.done ? "list__item--done" : ""}">
                <button class="list__button js-done">zrobione</button>${task.content}<button class="list__buton js-remove">usuń</button>
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
        removeTask();
        toggleDoneTask();
    }

    const addedNewTask = (newTaskElement) => {
        tasks.push({
            content: newTaskElement,
            done: false,
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskElement = document.querySelector(".js-newTask").value.trim();
        if (newTaskElement === "") {
            return
        }
        addedNewTask(newTaskElement);
        document.querySelector(".js-newTask").value = "";
        render();
    }

    const init = () => {
        render();
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit)

    }
    init();
}