let utils = [
    "Lápiz",
    "Lapicero",
    "Borrador",
    "Sacapuntas",
    "Cuaderno",
    "Regla",
    "Compás",
    "Corrector",
];

// ForEach -> Recorre la lista
utils.forEach((elemento) => console.log(elemento));

// Map -> Cambia cada elemento
const enunciados = utils.map((elemento) => "El útil es: " + elemento);

// Filter -> Filtrar
const filtered = utils.filter((elemento) => elemento[0] === "L");
console.log(filtered);

// Find
const found = utils.find((elemento) => elemento[0] === "Z");
console.log(found);

// Reverse
utils.reverse();

// Agregar elemento
utils.push("Calculadora", "Tijera", "Mouse", "Marcador");
console.log(utils);

// Eliminar último elemento
const ultimoElementoEliminado = utils.pop();
console.log(ultimoElementoEliminado);

// Eliminar elementos en masa
console.log(utils);
const deleted = utils.splice(3, 2);
console.log(deleted);
console.log(utils);

// Eliminar uno solo
utils = utils.filter((elemento, index) => index !== 3 || index !== 6);