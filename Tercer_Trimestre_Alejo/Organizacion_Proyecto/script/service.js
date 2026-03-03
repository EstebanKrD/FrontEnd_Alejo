import { tasks, saveTasks } from "./state.js";

export async function loadTasksFromAPI() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );

        const data = await response.json();

        data.forEach((t) => {
            tasks.push({
                title: t.title,
                completed: t.completed
            });
        });

        saveTasks();

    } catch (error) {
        alert("Error cargando tareas");
    }
}