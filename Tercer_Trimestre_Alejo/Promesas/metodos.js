const promesa1 = new Promise((res) => {
    setTimeout(() => res("promesa1"), 3000);
});

const promesa2 = new Promise((res) => {
    setTimeout(() => res("promesa2"), 1000);
});

const promesa3 = new Promise((res) => {
    setTimeout(() => res("promesa3"), 5000);
});

const promesa4 = new Promise((res) => {
    setTimeout(() => res("promesa4"), 500);
});

const primeraPromesa = Promise.race([promesa1, promesa2, promesa3, promesa4]);

primeraPromesa.then((res) => console.log(res));

const todasLasPromesas = Promise.all([promesa1, promesa2, promesa3, promesa4]);

todasLasPromesas.then((res) => {
    console.log(res);
});