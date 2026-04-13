interface Calificacion {
  materia: string;
  categoria: "tarea" | "quices" | "examen";
  nota: number;
  estudianteId: number;
}

function calcularPromedio(
  calificaciones: Calificacion[],
  estudianteId: number
): { tarea: number; quices: number; examen: number } {
  const delEstudiante = calificaciones.filter(
    (c) => c.estudianteId === estudianteId
  );

  const promedioPorCategoria = (categoria: Calificacion["categoria"]) => {
    const filtradas = delEstudiante.filter((c) => c.categoria === categoria);
    if (filtradas.length === 0) return 0;
    return filtradas.reduce((total, c) => total + c.nota, 0) / filtradas.length;
  };

  return {
    tarea: promedioPorCategoria("tarea"),
    quices: promedioPorCategoria("quices"),
    examen: promedioPorCategoria("examen"),
  };
}

const calificaciones: Calificacion[] = [
  { materia: "Matemáticas", categoria: "tarea", nota: 85, estudianteId: 1 },
  { materia: "Matemáticas", categoria: "quices", nota: 90, estudianteId: 1 },
  { materia: "Matemáticas", categoria: "examen", nota: 80, estudianteId: 1 },
  { materia: "Español", categoria: "tarea", nota: 75, estudianteId: 2 },
  { materia: "Español", categoria: "quices", nota: 80, estudianteId: 2 },
  { materia: "Español", categoria: "examen", nota: 70, estudianteId: 2 },
];
const resultado = calcularPromedio(calificaciones, 1);
console.log(resultado);