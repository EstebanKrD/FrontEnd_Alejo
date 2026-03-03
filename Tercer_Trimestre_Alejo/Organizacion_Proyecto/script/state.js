export let tasks = [];

export function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasks() {
    const data = localStorage.getItem("tasks");
    if (data) {
        tasks.length = 0;
        JSON.parse(data).forEach(t => tasks.push(t));
    }
}

export function addTask(title) {
    tasks.push({
        title: title,
        completed: false
    });
    saveTasks();
}

export function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
}

export function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
}