{
    const tasks = [
        {
            content: "zrobić pranie",
            done: false,
        },
        {
            content: "kupić chleb",
            done: true,
        },
    ]

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item ${task.done ? "list__item--done" : ""}">
                <button class="js-done">zrobione</button>${task.content}<button class="js-remove">usuń</button>
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
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