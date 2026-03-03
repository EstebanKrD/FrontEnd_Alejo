let leftSide = "";
let rightSide = "";
let operator = "";
let operatorSelected = false;

function refreshDisplay() {
    const display = document.getElementById("display");
    display.textContent = leftSide + operator + rightSide;
}

function addNumber(numero) {
    if (operatorSelected) {
        rightSide += numero;
    } else {
        leftSide += numero;
    }
    refreshDisplay();
}

function clearDisplay() {
    leftSide = "";
    rightSide = "";
    operator = "";
    operatorSelected = false;
    refreshDisplay();
}

function addOperator(operador) {
    if (leftSide === "") return;
    operator = operador;
    operatorSelected = true;
    refreshDisplay();
}

function showResult(result) {
    const display = document.getElementById("display");
    display.textContent = result;

    leftSide = result.toString();
    rightSide = "";
    operator = "";
    operatorSelected = false;
}

function calculateResult() {
    const left = parseFloat(leftSide);
    const right = parseFloat(rightSide);
    let result = "";

    switch (operator) {
        case "+":
            result = left + right;
            break;

        case "-":
            result = left - right;
            break;

        case "*":
            result = left * right;
            break;

        case "/":
            if (right === 0) {
                showResult("ERROR");
                return;
            }
            result = left / right;
            break;
    }

    showResult(result);
}
