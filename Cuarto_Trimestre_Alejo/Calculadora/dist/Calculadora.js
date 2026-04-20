"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class calculadora {
    sumar(a, b) {
        return a + b;
    }
    restar(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }
    calcular(operacion, a, b) {
        switch (operacion) {
            case 'sumar':
                return this.sumar(a, b);
            case 'restar':
                return this.restar(a, b);
            case 'multiplicar':
                return this.multiplicar(a, b);
            case 'dividir':
                return this.dividir(a, b);
            default:
                throw new Error("Operación no válida");
        }
    }
}
const calc = new calculadora();
console.log(calc.calcular('sumar', 5, 3));
console.log(calc.calcular('restar', 5, 3));
console.log(calc.calcular('multiplicar', 5, 3));
console.log(calc.calcular('dividir', 5, 3));
