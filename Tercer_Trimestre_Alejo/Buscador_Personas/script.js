const spinner = document.getElementById("spinner");
const usuarios = [
    { id: 1, name: "Alejandro Gómez", email: "alejandro.gomez@example.com" },
    { id: 2, name: "María Fernanda López", email: "maria.lopez@example.com" },
    { id: 3, name: "Carlos Andrés Ruiz", email: "carlos.ruiz@example.com" },
    { id: 4, name: "Laura Daniela Martínez", email: "laura.martinez@example.com" },
    { id: 5, name: "Juan Sebastián Torres", email: "juan.torres@example.com" },
    { id: 6, name: "Mariany", email: "mariany.123@example.com" },
    { id: 7, name: "Estefa Alias Comadre", email: "tefa.123@example.com" }
];

// realiza la simulación a un server
function buscarUsuarioPorId(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const usuario = usuarios.find(u => u.id === id);

            if (usuario) {
                resolve(usuario);
            } else {
                reject("Usuario no encontrado 😂");
            }

        }, 2000);

    });
}

// aqui es donde podemos manipular el doom
const btnBuscar = document.getElementById("btnBuscar");
const inputId = document.getElementById("inputId");
const resultado = document.getElementById("resultado");

btnBuscar.addEventListener("click", () => {

    const id = parseInt(inputId.value);

    if (!id) {
        resultado.innerHTML = "Ingresa un ID válido 😒";
        return;
    }

    // Estado de carga
    resultado.innerHTML = "";
    spinner.classList.remove("oculto");


    buscarUsuarioPorId(id)
        .then(usuario => {
            resultado.innerHTML = `
                <p><strong>ID:</strong> ${usuario.id}</p>
                <p><strong>Nombre:</strong> ${usuario.name}</p>
                <p><strong>Email:</strong> ${usuario.email}</p>
            `;
        })
        .catch(error => {
            resultado.innerHTML = error;
        })
        .finally(() => {
            spinner.classList.add("oculto");
            inputId.value = "";
        });


});
