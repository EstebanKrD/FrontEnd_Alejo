const estudiantes = [
    {
        id: 1,
        nombre: "Juan Pérez",
        edad: 18,
        correo: "juan.perez@email.com",
        activo: true,
        notas: [4.5, 3.8, 4.0],
    },
    {
        id: 2,
        nombre: "María Gómez",
        edad: 20,
        correo: "maria.gomez@email.com",
        activo: true,
        notas: [5.0, 4.7, 4.9],
    },
    {
        id: 3,
        nombre: "Carlos Rodríguez",
        edad: 19,
        correo: "carlos.rodriguez@email.com",
        activo: false,
        notas: [3.0, 2.8, 3.5],
    },
    {
        id: 4,
        nombre: "Laura Martínez",
        edad: 21,
        correo: "laura.martinez@email.com",
        activo: true,
        notas: [4.2, 4.0, 3.9],
    },
];

function obtenerActivos(estudiantes) {
    return estudiantes.filter((estudiante) => {
        return estudiante.activo;
    });
}

function buscarEstudiante(estudianteId, estudiantes) {
    return estudiantes.find((estudiante) => estudiante.id === estudianteId);
}

function calcularPromedio(estudiante) {
    let suma = 0;
    estudiante.notas.forEach((nota) => (suma += nota));
    return suma / estudiante.notas.length;
}

function calcularPromedioReduce(estudiante) {
    const suma = estudiante.notas.reduce((acc, cur) => {
        acc += cur;
    }, 0);

    return suma / estudiante.notas.length;
}