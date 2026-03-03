import { loadTasks, addTask } from "./state.js";
import { loadTasksFromAPI } from "./service.js";
import { renderTasks } from "./ui.js";

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const apiButton = document.getElementById("load-api");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value.trim();
    if (!value) return;

    addTask(value);
    input.value = "";
    renderTasks();
});

apiButton.addEventListener("click", async () => {
    await loadTasksFromAPI();
    renderTasks();
});

// Inicialización
loadTasks();
renderTasks();