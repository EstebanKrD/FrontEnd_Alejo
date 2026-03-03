async function saludar(nombre) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (nombre === "Esteban") {
                res("Nombre correcto");
            } else {
                rej();
            }
        }, 1000);
    });
}

async function main() {
    try {
        const respuesta = await saludar("Esteban");
        console.log(respuesta);
        console.log("Hola");
    } catch {
        console.log("Ocurrió un error");
    }
}

main();