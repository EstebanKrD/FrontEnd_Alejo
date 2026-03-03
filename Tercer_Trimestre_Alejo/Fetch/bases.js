async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
}

getUsers();