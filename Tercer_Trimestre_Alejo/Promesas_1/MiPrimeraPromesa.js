function saludar(nombre) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (nombre === "Esteban") {
                resolve("Hola Esteban, bienvenido");
            } else {
                reject("No te conozco");
            }

        }, 2000);

    });
}

saludar("Esteban")
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });

