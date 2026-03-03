function getUserCard(user) {
    return `<article class="user-card">
    <div class="user-header">
        <h2>${user.name}</h2>
        <span>@${user.username}</span>
    </div>

    <div class="user-content">
        <div class="info-block">
            <strong>Contacto</strong>
            📧 ${user.email}
            <br />
            📞 ${user.phone}
            <br />
            🌐 ${user.website}
        </div>

        <div class="info-block">
            <strong>Dirección</strong>${user.address.street}, $
            {user.address.suite}
            <br />${user.address.city}
            <br />
            ZIP: ${user.address.zipcode}
        </div>

        <div class="info-block company">
            <strong>${user.company.name}</strong>
            <em>${user.company.catchPhrase}</em>
            <small>${user.company.bs}</small>
        </div>
    </div>
</article>`;
}

export function printUsers(users) {
    users.forEach((user) => {
        const card = getUserCard(user);
        const container = document.getElementById("container");
        container.innerHTML += card;
    });
}