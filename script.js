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

function printNumOnDisplay() {
    if (para.lastChild && para.lastChild.className === 'num') {
        para.lastChild.textContent += this.value
    } else {
        const span = document.createElement('span');
        span.setAttribute('class', 'num');
        console.log(this.value)
        span.textContent += ' ' + this.value;
        para.appendChild(span);
        console.log(para.lastChild.className)
    }
};

function printOperatorOnDisplay() {
    if (para.lastChild && para.lastChild.className !== 'Operator') {
        const span = document.createElement('span');
        span.setAttribute('class', 'Operator');
        console.log(this.value)
        span.textContent += ' ' + this.name;
        para.appendChild(span);
        console.log(para.lastChild.className)
    }
    
}

function clearDisplay() {
    while (para.hasChildNodes()) {
        para.removeChild(para.firstChild)
    }
};

function submitExpression() {
    const myExpression = para.querySelectorAll('span.char');
    return operate()
}

const add = function(aBC) {
	return aBC.reduce((acc, n) => acc + n);
};

const subtract = function(aBC) {
	return aBC.reduce((acc, n) => acc - n);
};

const multiply = function(aBC) {
    return aBC.reduce((acc, n) => acc * n);
  };

const divide = function(aBC) {
    return aBC.reduce((acc, n) => acc / n);
}

function operate(expression) {
    for (let i = 0; i < expression.length; i++) {
        if (regexMultiply.test(expression[i])) {
    
        } else if (regexDivide.test(expression[i])) {

        } else if (regexAdd.test(expression[i])) {

        } else if (regexSubtract.test(expression[i])) {
        
        }
    }
}


operatorButtons.forEach( function (button) {
    button.addEventListener('click', printOperatorOnDisplay);
});
numberButtons.forEach( function (button) {
    button.addEventListener('click', printNumOnDisplay);
});

btnClear.addEventListener('click', clearDisplay)