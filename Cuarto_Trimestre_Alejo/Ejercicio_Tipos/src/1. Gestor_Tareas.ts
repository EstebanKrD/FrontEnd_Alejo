type TaskStatus = "pendiente" | "en_progreso" | "finalizada"
interface Task {
id: number,
description: string,
isComplete: boolean,
status: TaskStatus
}
function getPendingAndProgressTasks(tasks: Task[]): Task[] {
return tasks.filter((task) => task.status != "finalizada");
}