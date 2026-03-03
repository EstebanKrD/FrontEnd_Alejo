var a = "";
let b = "Juan";
const PI = 3.14;
const name = "Alejo";
let active = true;
console.log(typeof active);
active = "HOLA";
console.log(typeof active);

console.log();

const lista = [1, 12.1, "Alejo", true, {}, null, undefined];
/*

Tipos
string
boolean
number -> -12, 11, 12.141
[] -> Listas, no arrays
object
prototype
null
undefined
*/

function fn(){
    let b = 12;
    b;
    if (true) {
        for(const x  of []) {
            a;
            var a = 23;
        }
    }
}