function obtenerUsuario(usuarioId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: 1,
                name: "Alejo",
                age: 22,
            };

            if (usuarioId === 1) {
                resolve(user);
            } else {
                reject("El usuario no existe");
            }
        }, 3000);
    });
}

function obtenerProductos(usuario) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productos = ["Lápiz", "Lapicero"];
            resolve(productos);
        }, 2000);
    });
}

function calcularPromedio(productos) {
    return new Promise((res) => {
        setTimeout(() => {
            res(10000);
        }, 3000);
    });
}

// Callback Hell
function main() {
    obtenerUsuario(1)
        .catch((err) => {
            console.log(err);
        })
        .then((user) => {
            console.log("Se obtiene el usuario");
            return obtenerProductos(user);
        })
        .then((productos) => {
            console.log("Se obtienen los productos");
            return calcularPromedio(productos);
        })
        .then((promedio) => {
            console.log("Se calcula el promedio de los productos");
            console.log(promedio);
            return promedio;
        });
}

main();