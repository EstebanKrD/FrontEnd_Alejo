function obtenerNumero(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(10);
        })
    }, 2000)
}

function multiplicadorPorDos(numero){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(numero * 2);
        }, 2000)
    })
}

obtenerNumero()
.then((num) => {
    return multiplicadorPorDos(num);
})

.then((resutado) => {
    console.log(resutado);
})

.catch((error) => {
    console.log(error);
})

// ¿Qué imprime?
// R/ undefined

// ¿Por qué?
// por que la cuando el primer .then 
// llama a la funcion que puede devolver una promesa,
// pero en este caso no se retorna

// ¿Qué faltó?
// Faltó retornar la promesa dentro del primer .then()
// para que pase el resultado al siguiente .then

// ¿Qué retorna realmente .then() ?
// retorna una nueva promesa.