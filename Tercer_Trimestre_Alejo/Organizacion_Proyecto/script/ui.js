import { tasks, toggleTask, deleteTask } from "./state.js";

export function renderTasks() {
    const list = document.getElementById("task-list");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.title;

        if (task.completed) {
            li.classList.add("completed");
        }

        li.addEventListener("click", () => {
            toggleTask(index);
            renderTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteTask(index);
            renderTasks();
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}