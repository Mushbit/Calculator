const display = document.querySelector('div.display');
const para = document.createElement('p');
para.setAttribute('class', 'text-box'); 
display.appendChild(para);

const btnReturn = document.querySelector('button.return')
const btnClear = document.querySelector('button.clear')

const operatorButtons = document.querySelectorAll('.operator-buttons button');
const numberButtons = document.querySelectorAll('.number-buttons button');

const regexAdd = /\+/g
const regexSubtract = /\-/g
const regexMultiply = /\*/g
const regexDivide = /\//g


//Calculator functions:


let myExpression = [];


function printNumOnDisplay() {
    // If previous entry is a number, add number as string
    myExpression[myExpression.length] = this.value
    if (para.lastChild && para.lastChild.className === 'num') {
        para.lastChild.textContent += this.value
    } else {
        const span = document.createElement('span');
        span.setAttribute('class', 'num');
        span.textContent += this.value;
        para.appendChild(span);
        console.log(myExpression);
    }
}


function printOperatorOnDisplay() {
    myExpression[myExpression.length] = this.value
    if (para.lastChild && para.lastChild.className !== 'Operator') {
        const span = document.createElement('span');
        span.setAttribute('class', 'Operator');
        span.textContent += ` ${this.value} `;
        para.appendChild(span);
    }
    console.log(myExpression);
}

function operate() {
    let result = 0;

    for (let i = 0; i < myExpression.length; i++) {

        if (myExpression.some(char => char === '*')) {

            result = multiply(+myExpression[i-1], +myExpression[i+1]);
            console.log(result);
            console.log(myExpression[i]);
            para.textContent += result;
            console.log(myExpression);
            myExpression.splice(i-1, 3, result);

        } else if (myExpression.some(char => char === '/')) {

            result = divide(+myExpression[i-1], +myExpression[i+1]);
            console.log(result);
            para.textContent += result;
            myExpression.splice(i-1, 3, result);

        }

    }
    for (let i = 0; i < myExpression.length; i++) {

        if (myExpression.some(char => char === '+')) {

            result = add(+myExpression[i-1], +myExpression[i+1]);
            console.log(result);
            console.log(myExpression[i]);
            para.textContent += result;
            console.log(myExpression);
            myExpression.splice(i-1, 3, result);

        } else if (myExpression.some(char => char === '-')) {

            console.log(subtract(+myExpression[i-1], +myExpression[i+1]))
            result = subtract(+myExpression[i-1], +myExpression[i+1]);
            console.log(result);
            para.textContent += result;
            myExpression.splice(i-1, 3, result);

        }

    }

}

function checkOperator (array, value) {
    return array.find(arrVal => value === arrVal)
}

function clearDisplay() {
    while (para.hasChildNodes()) para.removeChild(para.firstChild)
    myExpression = [];
}




//Math functions:

const add = function(a, b) {
	return a + b;
};


const subtract = function(a, b) {
	return a - b;
};


const multiply = function(a, b) {
    return a * b;
  };


const divide = function(a, b) {
    return a / b;
};




operatorButtons.forEach( function (button) {
    button.addEventListener('click', printOperatorOnDisplay);
});
numberButtons.forEach( function (button) {
    button.addEventListener('click', printNumOnDisplay);
});


btnReturn.addEventListener('click', operate)

btnClear.addEventListener('click', clearDisplay)