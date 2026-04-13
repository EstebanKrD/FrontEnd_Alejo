type NumeroOCaderna = number | string;
type B = boolean;
type C = NumeroOCaderna | B; // tipo de dato que puede ser numero, cadena o booleano

const ejemplo: NumeroOCaderna = 1234; // tambien se puede usar string
const ejemplo2: B = true;
const ejemplo3: NumeroOCaderna[] = [1234, "hola"]; // array de numero o cadena
const ejemplo4: C = 1234; // tambien se puede usar string o booleano
const ejemplo5: C = true; // tambien se puede usar string o booleano
const name: string | null | number = 1

interface PersonaEjemplo {
    name: string;
    age: number;
    email: string;
    web?: string; // propiedad opcional
}

const persona: PersonaEjemplo = {
    name: "Esteban Cardona",
    age: 25,
    email: "esteban.cardona@example.com"

};

/*
UX - Experiencia de usuario
UI - Interfaz de usuario
CX - Experiencia del cliente
DX - Experiencia del desarrollador
*/

// Type Narrowing -> type

type NumeroOCadena = number | string | boolean | null | undefined
type V = boolean
type CL = NumeroOCadena | B

const ejemplo6: NumeroOCadena = "Hola"
const ejemplo8: NumeroOCadena = 1
const ejemplo7: B = true
const ejemploe4: NumeroOCadena[] = [1, 2, 3, "", ""]
const ejemplo56: C = true
const names: string | null | number = 1

type Persona2 = {
    name: string;
    age: number;
    email: string;
    phone: string;
    web?: string;
}

interface Persona {
    name: string;
    age: number;
    email: string;
    phone: string;
    web?: string;
}

const personas: Persona[] = [{
    name: "Alejo",
    age: 23,
    email: "alejo@mail.com",
    phone: "+57 320323926893",
    web: "xagh"
}];

/*
UX -> Experiencia de usuario
CX -> Experiencia de cliente
DX -> Experiencia de desarrollador
 */

// Type Narrowing -> type