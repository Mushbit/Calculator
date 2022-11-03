const myExp = [0];

let display = document.querySelector('.display')
//document.addEventListener('keydown', e => {
//    console.log(e.key)
//})
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log(e.target.value === '-')
        console.log(!(lastInputIsNaN(2)))
        console.log(myExp.length)
        if (e.target.value === '.' && myExp.length === 0) {
            myExp.push('0' + e.target.value)
        } else if (e.target.value === '.' && !(lastInputIsNaN(1)) && !(myExp[myExp.length -1].includes('.'))) {
            myExp[myExp.length - 1] += e.target.value;
        } else if (e.target.value === '-' && (!(lastInputIsNaN(2)) || myExp.length === 0)) {
            myExp.push(e.target.value);
        } else if (myExp[myExp.length - 1] === '-' && !(currentInputIsOperator(e)) && lastInputIsNaN(2)) {
            myExp[myExp.length - 1] += e.target.value;
        } else if ( lastInputIsNaN(1) || currentInputIsOperator(e)) {
            if (!(currentInputIsOperator(e) && lastInputIsNaN(1)) && e.target.value != '.') myExp.push(e.target.value)
        } else if (typeof(myExp[0]) === 'number' && myExp[1] === undefined){
            allClear();
            myExp.push(e.target.value);
        } else {
            myExp[myExp.length - 1] += e.target.value;
        }
        
        refreshDisplay()
        console.log(myExp)

    })
})


const buttonAllClear = document.querySelector('.allClearBtn');
buttonAllClear.addEventListener('click', allClear)

const buttonClear = document.querySelector('.clearBtn');
buttonClear.addEventListener('click', clear)

const buttonReturn = document.querySelector('.returnBtn');
buttonReturn.addEventListener('click',  () => {
    if (!(lastInputIsNaN(1))) operate()
})


function lastInputIsNaN(n) {
    return isNaN(+myExp[myExp.length - n]);
}

function currentInputIsOperator(e) {
    return isNaN(e.target.value);
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
    }
    refreshDisplay()
}