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
    return (operation==='add') ? add(x, y)
        : (operation==='subtract') ? subtract(x, y)
        : (operation==='multiply') ? multiply(x, y)
        : divide(x, y);
};

function display(value) {
    DISPLAY.textContent += value;
}

//storing values for later evaluation
let firstNum = '';
let secondNum = '';
let operationSign = '';
//mode tells us that calculation haven't began yet
let mode = 0;

BUTTONS.forEach(button => button.addEventListener('click', function() {
    let buttonID = button.getAttribute('id');
    let value = document.getElementById(buttonID).textContent;
    if (buttonID === 'clear') {
        DISPLAY.textContent = '';
        firstNum = '';
        secondNum = '';
    } else if (buttonID==='add' || buttonID==='subtract' || buttonID==='divide' || buttonID==='multiply') {
        //pressing operation sign
        display(value);
        firstNum = Number(firstNum);
        operationSign = buttonID;
        //turn on calculation, waiting for second number
        mode = 1;
    
    } else if (buttonID==='operate') {
        //pressing equal sign
        DISPLAY.textContent = '';
        secondNum = Number(secondNum);
        DISPLAY.textContent = operate(operationSign, firstNum, secondNum);
        mode = 0;
    } else { 
        //pressing a number
        display(value);
        if (mode === 1) {
            secondNum += value;
        } else {
            firstNum += value;
        }
    }
}));

/* what to improve:
-- make it possible to do multiple operations without pressing equal sign
(each pair evaluated at a time, not a whole expression);
-- round numbers with log decimals;
-- handle pressing '=' before entering all numbers or operator
-- handle dividing by zero
*/