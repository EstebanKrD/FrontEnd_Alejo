import { getState, setState } from "./state.js";
import { loadUsers } from "./service.js";

async function changePage(newPage) {
    setState("page", newPage);
    await loadUsers();
    render();
}

export function addPrevPageBtnEvent() {
    const btn = document.getElementById("prevBtn");
    btn.addEventListener("click", async () => {
        const page = getState("page");
        changePage(page - 1 > 0 ? page - 1 : 0);
    });
}

export function addNextPageBtnEvent() {
    const btn = document.getElementById("nextBtn");
    btn.addEventListener("click", async () => {
        const page = getState("page");
        const total = getState("total");
        const limit = getState("limit");
        const maxPages = Math.ceil(total / limit) - 1;
        const newPage = page + 1;
        changePage(newPage <= maxPages ? newPage : maxPages);
    });
}

export function addFirstPageBtnEvent() {
    const btn = document.getElementById("firstBtn");
    btn.addEventListener("click", async () => {
        changePage(0);
    });
}

export function addLastPageBtnEvent() {
    const btn = document.getElementById("lastBtn");
    btn.addEventListener("click", async () => {
        const total = getState("total");
        const limit = getState("limit");
        const maxPages = Math.ceil(total / limit) - 1;
        changePage(maxPages);
    });
}

export function addJumpForwardBtnEvent() {
    const btn = document.getElementById("jumpForwardBtn");
    btn.addEventListener("click", async () => {
        const page = getState("page");
        const total = getState("total");
        const limit = getState("limit");
        const maxPages = Math.ceil(total / limit) - 1;
        let newPage = page + 5;
        if (newPage > maxPages) newPage = maxPages;
        changePage(newPage);
    });
}

export function addJumpBackBtnEvent() {
    const btn = document.getElementById("jumpBackBtn");
    btn.addEventListener("click", async () => {
        const page = getState("page");
        let newPage = page - 5;
        if (newPage < 0) newPage = 0;
        changePage(newPage);
    });
}

export function addLimitSelectEvent() {
    const select = document.getElementById("limitSelect");
    select.addEventListener("change", async (e) => {
        setState("limit", parseInt(e.target.value));
        setState("page", 0);
        await loadUsers();
        render();
    });
}

function getUserCard(user) {
    return `
    <div class="user-card">
        <img class="avatar" src="${user.image}" alt="${user.name}">
        <h2>${user.name}</h2>
        <p><strong>HP:</strong> ${user.hp}</p>
        <p><strong>Ataque:</strong> ${user.attack}</p>
        <p><strong>Tipos:</strong> ${user.types}</p>
        <p><strong>Habilidades:</strong> ${user.abilities}</p>
    </div>`;
}

export function render() {
    const container = document.getElementById("container");
    container.innerHTML = "";

    const users = getState("users");
    users.forEach((user) => {
        container.innerHTML += getUserCard(user);
    });

    const page = getState("page");
    const total = getState("total");
    const limit = getState("limit");
    const maxPages = Math.ceil(total / limit);

    document.getElementById("pageIndicator").textContent =
        `Página ${page + 1} de ${maxPages}`;

    // Deshabilitar botones en los límites
    document.getElementById("prevBtn").disabled = page === 0;
    document.getElementById("firstBtn").disabled = page === 0;
    document.getElementById("jumpBackBtn").disabled = page === 0;
    document.getElementById("nextBtn").disabled = page >= maxPages - 1;
    document.getElementById("lastBtn").disabled = page >= maxPages - 1;
    document.getElementById("jumpForwardBtn").disabled = page >= maxPages - 1;
}