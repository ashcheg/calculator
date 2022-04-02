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

function display(value) {
    DISPLAY.textContent = value;
}

BUTTONS.forEach(button => button.addEventListener('click', function() {
    const buttonID = button.getAttribute('id');
    const value = document.getElementById(buttonID).textContent;
    display(value);
}));