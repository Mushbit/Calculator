const myExp = [];

let display = document.querySelector('.display')
//document.addEventListener('keydown', e => {
//    console.log(e.key)
//})
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {

    btn.addEventListener('click', e => {
        //if (Last element = operator || button pressed = operator)
        if ( lastInputIsOperator() || currentInputIsOperator(e)) {
            if (!(myExp.length === 0 && currentInputIsOperator(e))) {
                myExp.push(e.target.value)
            }
        } else if (typeof(myExp[0]) === 'number'){
            clear();
            myExp.push(e.target.value);
        } else {;
            myExp[myExp.length - 1] += e.target.value;
        }
        
        refreshDisplay()
})
})

const buttonClear = document.querySelector('.clearBtn');
buttonClear.addEventListener('click', clear)

const buttonReturn = document.querySelector('.returnBtn');
buttonReturn.addEventListener('click', operate)

function lastInputIsOperator() {
    return isNaN(+myExp[myExp.length - 1]);
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
    return myExp.some(el => el === '*' || el === '/' )
}

function findAddSub() {
    return myExp.findIndex(el => el === '+' || el === '-')
}

function findMulDiv() {
    return myExp.findIndex(el => el === '*' || el === '/')
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
            console.log(result)
            myExp.splice(i-1, 3, result);
            console.log(myExp)
        } else {
            result = subtract(+myExp[i-1], +myExp[i+1])
            console.log(result)
            myExp.splice(i-1, 3, result); 
            console.log(myExp)
        }
    }
    
    refreshDisplay()
}

function clear() {
    e => console.log('Im working')
    myExp.splice(0, myExp.length,);
    refreshDisplay()
}