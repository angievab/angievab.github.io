function square(x){
    return x*x;
}
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
//If the number is even, divide it by two
//If the number is odd, multiply it by three and add one
function collatz(n, sequence=[n]) {
    if (n === 1){
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }

    if (n%2 === 0) {
        n = n/2;
    } else { 
        n = 3*n + 1;
    }

    return collatz(n,[...sequence,n]);
}
//collatz(18);

function hypotenuse(a,b) {
    return Math.sqrt(square(a) + square(b));
}

//hypotenuse(3,4);
function sum(array, callback) {
    if(callback) {
        array = array.map(callback);
    }
    return array.reduce((a,b) => a + b );
}
//sum([1,2,3]); // returns 1 + 2 + 3
//sum([1,2,3], square); // returns 1^2 + 2^2 + 3^2
function mean(array) {
    return sum(array)/array.length;
}

//mean([1,2,3];
function variance(array) {
    return sum(array,square)/array.length - square(mean(array))
}

    //variance([1,2,3])
function multiplier(x){
    return function(y){
        return x*y;
    }
}
doubler = multiplier(2);
//doubler(10);
tripler = multiplier(3);

//tripler(10);

function power(x) {
    return function(power) {
        return Math.pow(x,power);
    }
}
twoExp = power(2);
/*<< function (power) {
    return Math.pow(x,power);
}
*/
//twoExp(5);

power(3)(5);

//currying example
function multiplier(x,y) {
    return x * y;
}

const tax = multiplier(0.22,400);

//We could make this function more useful by adding some code at the start that allows it to be curried 
//so it returns another function if only one argument is provided:
function multiplier(x,y) {
    if (y === undefined) {
        return function(z) {
        return x * z;
        }
    } else {
        return x * y;
    }
}
//Now, if you found yourself frequently calculating the tax using the same rate of 22%,
// you could create a new curried function by providing just 0.22 as an argument:
calcTax = multiplier(0.22);
/*<< function (z){
    return x * z;
}*/
//This new function can then be used to calculate the tax, without requiring 0.22 as an argument:
calcTax(400);
