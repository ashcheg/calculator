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

function roundNum(num) {
    return Number(Math.round(num+'e'+2)+'e-'+2);
}

//storing values for later evaluation
let firstNum = '';
let secondNum = '';
let operationSign = '';
//mode tells us that calculation haven't began yet
let mode = false;
//tracking when equal sign can perform opeartion
let equalOn = false;

BUTTONS.forEach(button => button.addEventListener('click', function() {
    let buttonID = button.getAttribute('id');
    let value = document.getElementById(buttonID).textContent;
    if (buttonID === 'clear') {
        DISPLAY.textContent = '';
        firstNum = '';
        secondNum = '';
    } else if (buttonID==='add' || buttonID==='subtract' || buttonID==='divide' || buttonID==='multiply') {
        firstNum = Number(firstNum);
        if (!(secondNum==='')) {
            //calculate previous result and start new calculation
            DISPLAY.textContent = '';
            secondNum = Number(secondNum);
            DISPLAY.textContent = roundNum(operate(operationSign, firstNum, secondNum));
            //update first number
            firstNum = DISPLAY.textContent;
            //display new operation
            display(value);
            //reset second number
            secondNum = '';
        } else {
            display(value);
        }
        //save operation name
        operationSign = buttonID;
        //turn on calculation, waiting for second number
        mode = true;
        equalOn = false;
    
    } else if (buttonID==='operate') {
        if (equalOn) {
            //pressing equal sign
            DISPLAY.textContent = '';
            firstNum = Number(firstNum);
            secondNum = Number(secondNum);
            if (secondNum===0) {
                DISPLAY.textContent = 'division by zero';
                firstNum = '';
                secondNum = '';
            } else {
                DISPLAY.textContent = roundNum(operate(operationSign, firstNum, secondNum));
            }
            mode = false;
            equalOn = false;
        }
    } else { 
        if (DISPLAY.textContent === 'division by zero') {
            DISPLAY.textContent = '';
        }
        //pressing a number
        display(value);
        if (mode) {
            secondNum += value;
            equalOn = true;
        } else {
            firstNum += value;
        }
    }
}));

/* 
what to improve:
-- better css style for display text with error messages
-- maybe write a reset function for properties of firstNum, secondNum, mode, equalOn ...
*/