interface HistorialUsuario {
  tipo: "nombre" | "contrasena" | "correo";
  valor: string;
}

function contarCambios(cambios: HistorialUsuario[]): { nombre: number; correo: number; contrasena: number } {
    let nombre = 0;
    let correo = 0;
    let contrasena = 0;

    cambios.forEach((cambio) => {
        if (cambio.tipo === "nombre") {
            nombre++;
        } else if (cambio.tipo === "correo") {
            correo++;
        } else if (cambio.tipo === "contrasena") {
            contrasena++;
        }
    });

    return { nombre, correo, contrasena };
}

const historial: HistorialUsuario[] = [
    { tipo: "nombre", valor: "Juan" },
    { tipo: "correo", valor: "juan@example.com" },
    { tipo: "contrasena", valor: "123456" }
];
const resultado = contarCambios(historial);
console.log(resultado);