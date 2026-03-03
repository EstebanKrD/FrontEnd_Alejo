import { printUsers } from "./dom.js";

async function loadUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
}

async function showUsers() {
    const users = await loadUsers();
    printUsers(users);
}

const showUsersBtn = document.getElementById("showUsersBtn");
showUsersBtn.addEventListener("click", showUsers);