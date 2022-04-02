const DISPLAY = document.getElementById('display');
const BUTTONS = Array.from(document.querySelectorAll('button'));

function add(x, y) {
    return x+y;
};

function subtract(x, y) {
    return x-y;
};

function multiply(x, y) {
    return x*y;
};

function divide(x, y) {
    return x/y;
};

function operate(operation, x, y) {
    return operation(x, y);
};

function display(e) {
    let buttonID = e.target.getAttribute('id');
    let value = document.getElementById(buttonID).textContent;
    DISPLAY.textContent = value;
}

BUTTONS.forEach(button => button.addEventListener('click', display));