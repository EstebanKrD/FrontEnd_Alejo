interface CampoFormulario {
  nombre: string;
  tipo: "texto" | "numero" | "email";
  valor: string | number | boolean;
  requerido: boolean;
}

function validarCampos(campos: CampoFormulario[]): string[] {
  const invalidos: string[] = [];

  campos.forEach((campo) => {
    if (campo.tipo === "numero") {
      if (typeof campo.valor !== "number") {
        invalidos.push(campo.nombre);
      }
    } else if (campo.tipo === "email") {
      if (typeof campo.valor !== "string" || !campo.valor.includes("@")) {
        invalidos.push(campo.nombre);
      }
    } else if (campo.tipo === "texto") {
      if (typeof campo.valor !== "string" || campo.valor === "") {
        invalidos.push(campo.nombre);
      }
    }
  });

  return invalidos;
}

const texto: CampoFormulario = {
  nombre: "nombre",
  tipo: "texto",
  valor: "Juan",
  requerido: true,
};
const numero: CampoFormulario = {
  nombre: "edad",
  tipo: "numero",
  valor: 30,
  requerido: true,
};
const email: CampoFormulario = {
  nombre: "correo",
  tipo: "email",
  valor: "juan@example.com",
  requerido: true,
};

console.log(validarCampos([texto, numero, email])); // Debería retornar un array vacío eso significa que todo quedo ok

const emailInvalido: CampoFormulario = {
  nombre: "correoInvalido",
  tipo: "email",
  valor: "juanexample.com",
  requerido: true,
};
console.log(validarCampos([texto, numero, email, emailInvalido])); // Debería retornar un array con el nombre del campo inválido
