const myEx = ['1', '/', '2', '-', '5', '8', '*', '3', '-', '3'];

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

function findAddSub(arr) {
    return arr.findIndex(el => el === '+' || el === '-')
}

function findMulDiv(arr) {
    return arr.findIndex(el => el === '*' || el === '/')
}

function operate(arr) {
    let result = 0;
    while (arr.includes( '*' || '/' )) {
        
    }

    while (arr.includes( '+' || '-' )) {

    }
    for (let i = 0; i < arr.length; i++) {

        if (arr.includes('*')) {

            result = multiply(+arr[i-1], +arr[i+1]);
            arr.splice(i-1, 3, result);

        } else if (arr.includes('/')) {

            result = divide(+arr[i-1], +arr[i+1]);
            arr.splice(i-1, 3, result);

        }

    }

    for (let i = 0; i < arr.length; i++) {

        if (arr.includes('+')) {

            result = add(+arr[i-1], +arr[i+1]);
            arr.splice(i-1, 3, result);

        } else if (arr.includes('-')) {

            result = subtract(+arr[i-1], +arr[i+1]);
            arr.splice(i-1, 3, result);

        }

    }

}