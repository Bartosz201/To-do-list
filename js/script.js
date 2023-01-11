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
            <li class="list__item ${task.done ? "list__item--done": ""}">
                ${task.content}
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    }

    const addedNewTask = () =>{
        const newTaskElement = document.querySelector(".js-newTask").value.trim();
        tasks.push({
            content: newTaskElement,
            done: false,
        });
        console.log(tasks)
    }

    const init = () => {
        render();

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (event) =>{
            event.preventDefault();
            addedNewTask();
            render();

        })

    }
    init();
}