let counter = 0;
const span = document.getElementById("counter");

function refreshValue() {
    span.textContent = counter;
}

function decrement() {
    counter--;
    refreshValue();
}

function increment() {
    counter++;
    refreshValue();
}

function clearCounter() {
    counter = 0;
    refreshValue();
}