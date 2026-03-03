function pedirPizza(callback) {
    console.log(`Pedir Pizza con Peperonni y Tomate`);
    callback("3013258495");
}

pedirPizza(() => {
    console.log(
        `La pizzeria me llama al número ${numero} y me dice que la pizza está lista`
    );
});

function hola() {
    console.log("Hola");
}

function saludar(name, callback) {
    console.log(`Hola ${name}`);
    callback();
}

saludar("Juan", hola);

function calculator(num1, num2, operar) {
 oeprar(num1, num2);
}

function sumar(num1, num2){
    return num1 + num2;
}