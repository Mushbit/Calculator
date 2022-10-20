const myExp = ['1', '/', '2', '-', '8', '*', '3', '-', '3'];
const exp = ['1', '+', '3']

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

function checkAddSub(arr) {
    return arr.some(el => el === '+' || el === '-' );
}

function checkMulDiv(arr) {
    return arr.some(el => el === '*' || el === '/' )
}

function findAddSub(arr) {
    return arr.findIndex(el => el === '+' || el === '-')
}

function findMulDiv(arr) {
    return arr.findIndex(el => el === '*' || el === '/')
}

function operate(arr) {

    let i = 0;
    let result = 0;

    while (checkMulDiv(arr)) {
        i = findMulDiv(arr);
        if (arr[i] === '*') {
            result = multiply(+arr[i-1], +arr[i+1])
            arr.splice(i-1, 3, result);
            console.log(arr)
        } else {
            result = divide(+arr[i-1], +arr[i+1])
            arr.splice(i-1, 3, result); 
            console.log(arr)
        }
    }
    
    while (checkAddSub(arr)) {
        i = findAddSub(arr);
        if (arr[i] === '+') {
            result = add(+arr[i-1], +arr[i+1])
            console.log(result)
            arr.splice(i-1, 3, result);
            console.log(arr)
        } else {
            result = subtract(+arr[i-1], +arr[i+1])
            console.log(result)
            arr.splice(i-1, 3, result); 
            console.log(arr)
        }
    }
        
}