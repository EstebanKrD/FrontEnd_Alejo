const promise = new Promise((resolver, rechazar) => {
    setTimeout(() => {
        const numero = Math.random();

        if (numero > 0.5) {
            resolver("La promesa se resolvió");
        } else {
            rechazar("La promesa se rechazó");
        }
    }, 3000);
});

promise
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((mensaje) => {
        console.log(mensaje);
    })
    .finally(() => {
        console.log("La promesa finalizó");
    });

console.log("Sigue el programa");