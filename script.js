let myExp = [0];

let display = document.querySelector('.display')

document.addEventListener('keydown', e => console.log(e.key))

const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', e => pushKey(e.target.value)))


const buttonAllClear = document.querySelector('.allClearBtn');
buttonAllClear.addEventListener('click', allClear)

const buttonClear = document.querySelector('.clearBtn');
buttonClear.addEventListener('click', clear)

const buttonReturn = document.querySelector('.returnBtn');
buttonReturn.addEventListener('click',  () => {
    if (!(lastInputIsNaN(1))) operate()
})

function pushKey(key) {
    console.log(key === '-')
    console.log(!(lastInputIsNaN(2)))
    console.log(myExp.length)
    if (checkOutputLength() < 35) {
        if (key === '.' && myExp.length === 0) {
            myExp.push('0' + key)
        } else if (key === '.' && !(lastInputIsNaN(1)) && !(myExp[myExp.length -1].includes('.'))) {
            myExp[myExp.length - 1] += key;
        } else if (key === '-' && (!(lastInputIsNaN(2)) || myExp.length === 0)) {
            myExp.push(key);
        } else if (myExp[myExp.length - 1] === '-' && !(currentInputIsOperator(key)) && lastInputIsNaN(2)) {
            myExp[myExp.length - 1] += key;
        } else if ( lastInputIsNaN(1) || currentInputIsOperator(key)) {
            if (!(currentInputIsOperator(key) && lastInputIsNaN(1)) && key != '.') myExp.push(key)
        } else if (typeof(myExp[0]) === 'number' && myExp[1] === undefined){
            allClear();
            myExp.push(key);
        } else {
            myExp[myExp.length - 1] += key;
        }
    } else {
        alert('Error, Expression too long')
    }
    refreshDisplay()
    console.log(myExp)
}

function lastInputIsNaN(n) {
    return isNaN(+myExp[myExp.length - n]);
}

function currentInputIsOperator(key) {
    return isNaN(key);
}
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function checkAddSub() {
    return myExp.some(el => el === '+' || el === '-' );
}

function checkMulDiv() {
    return myExp.some(el => el === '*' || el === '/' );
}

function findAddSub() {
    return myExp.findIndex(el => el === '+' || el === '-');
}

function findMulDiv() {
    return myExp.findIndex(el => el === '*' || el === '/');
}

function refreshDisplay() {
    display.textContent = myExp.join(' ');
}


function checkOutputLength() {
    let count = 0;
    myExp.forEach(el => {
        count += 0.5;
        for (let i = 0; i < el.length; i++) {
            count += 1;
        }
    })
    console.log(count)
    return count;
}

function operate() {

    let i = 0;
    let result = 0;

    while (checkMulDiv()) {
        i = findMulDiv();
        if (myExp[i] === '*') {
            result = multiply(+myExp[i-1], +myExp[i+1])
            myExp.splice(i-1, 3, result);
            console.log(myExp)
        } else {
            result = divide(+myExp[i-1], +myExp[i+1])
            myExp.splice(i-1, 3, result); 
            console.log(myExp)
        }
    }
    
    while (checkAddSub()) {
        i = findAddSub();
        if (myExp[i] === '+') {
            result = add(+myExp[i-1], +myExp[i+1])
            myExp.splice(i-1, 3, result);
            console.log(myExp)
        } else {
            result = subtract(+myExp[i-1], +myExp[i+1])
            myExp.splice(i-1, 3, result); 
            console.log(myExp)
        }
    }
    myExp[0] = Math.round(myExp * 100000) / 100000;
    refreshDisplay()
}

function allClear() {
    myExp.splice(0, myExp.length,);
    refreshDisplay()
}

function clear() {
    if (myExp[myExp.length -1] === '') {
        myExp.pop()   
        myExp[myExp.length -1] = myExp[myExp.length -1].substring(0, myExp[myExp.length -1].length -1);
    } else if (typeof myExp[myExp.length -1] === 'number') {
        myExp.pop()
    } else {
        myExp[myExp.length -1] = myExp[myExp.length -1].substring(0, myExp[myExp.length -1].length -1);
        if (myExp[myExp.length -1] === '') {
            myExp.pop();
        }
    }
    console.log(myExp)
    refreshDisplay()
}