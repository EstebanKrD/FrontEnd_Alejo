export function printUsers(users) {

    const container = document.querySelector("#container");

    container.innerHTML = users.map(user => {

        const imageUrl = user.image && user.image.startsWith("http")
            ? user.image
            : "https://via.placeholder.com/300x250?text=No+Image";

        return `
            <article class="user-card">
                <img 
                    src="${imageUrl}" 
                    alt="${user.name}"
                    onerror="this.src='https://via.placeholder.com/300x250?text=No+Image'"
                >
                <h2>${user.name}</h2>
                <div class="user-content">
                    <div class="info-block">
                        <strong>Sexo:</strong>
                        ${user.sex || "No registrado"}
                    </div>
                    <div class="info-block">
                        <strong>Ocupación:</strong>
                        ${user.occupation || "No registrada"}
                    </div>
                </div>
            </article>
        `;
    }).join("");

}


export function clearUsers() {
    const container = document.querySelector("#container");
    container.innerHTML = "";
}