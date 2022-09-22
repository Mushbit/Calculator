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
    // If previous entry us a number, add number as string
    myExpression[myExpression.length] = this.value
    if (para.lastChild && para.lastChild.className === 'num') {
        para.lastChild.textContent += this.value
    } else {
        const span = document.createElement('span');
        span.setAttribute('class', 'num');
        span.textContent += ' ' + this.value;
        para.appendChild(span);
        console.log(myExpression);
    }
}


function printOperatorOnDisplay() {
    myExpression[myExpression.length] = this.value
    if (para.lastChild && para.lastChild.className !== 'Operator') {
        const span = document.createElement('span');
        span.setAttribute('class', 'Operator');
        span.textContent += ' ' + this.name;
        para.appendChild(span);
    }
    console.log(myExpression);
}


function clearDisplay() {
    while (para.hasChildNodes()) {
        para.removeChild(para.firstChild)
    }
    myExpression = [];
}

function operate() {
    for (let i = 0; i < myExpression.length; i++) {
        if (regexMultiply.test(myExpression[i]) || regexDivide.test(myExpression[i])) {
            console.log(myExpression)
            console.log(myExpression[i](myExpression[i-1], myExpression[i+1]))
            return myExpression[i](myExpression[i-1], myExpression[i+1])
        }
    }
    
    for (let i = 0; i < myExpression.length; i++) {
        if (myExpression ===  add || myExpression === subtract) {
            myExpression[i]
            console.log(myExpression[i])
            console.log(myExpression[i](myExpression[i-1], myExpression[i+1]))
            return myExpression[i](myExpression[i-1], myExpression[i+1])
        }
    }     
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