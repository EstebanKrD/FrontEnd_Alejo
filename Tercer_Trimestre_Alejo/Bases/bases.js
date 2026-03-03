const promise = new Promise((resolver, rechazar) => {

    setTimeout(() => {
        const numero = Math.random();

        if (numero > 0.5) {
            resolver("Se cumplio la promesa");
        } else {
            rechazar("No se cumplio")
        }
    }, 3000);


});

promise
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((mensaje) => {
        console.log(mensaje)
    })
    .finally(() => {
        console.log("la promesa finalizo")
    });