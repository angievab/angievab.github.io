//Alert
/*function amIOldEnough(age){
    if (age < 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    }
    else {
        return 'Yep, come on in!';
    }
}*/
 //Using the Console
/*function amIOldEnough(age){
    console.log(age);
        if (age < 12) {
        console.log(`In the if with ${age}`);
        return 'No, sorry.';
        } else if (age < 18) {
        console.log(`In the else-if with ${age}`);
        return 'Only if you are accompanied by an adult.';
        } else {
        console.log(`In the else with ${age}`);
        return 'Yep, come on in!';
    }
}*/
 //Debugging
function amIOldEnough(age){
    debugger;
        if (age < 12) {
        debugger;
        return 'No, sorry.';
        } else if (age < 18) {
        debugger;
        return 'Only if you are accompanied by an adult.';
        } else {
        debugger;
        return 'Yep, come on in!';
    }
}

amIOldEnough(16);

//error objects
/*const error = new Error();
const error = new TypeError('You need to use numbers in this function');*/

//Throwing Exceptions
/*throw 2;
throw 'Up';
throw { toys: 'out of pram' };
throw new Error('Something has gone badly wrong!');

function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError("You can't find the square root of negative numbers")
    }
    return Math.sqrt(number);
};*/
// Try & Catch
/*function imaginarySquareRoot(number) {
    'use strict';
    try {
        return String(squareRoot(number));
    } catch(error) {
        return squareRoot(-number)+'i';
    }
}*/
//Try Catch and Finally
/*function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch(error) {
        answer = squareRoot(-number)+"i";
    } finally {
        return `+ or - ${answer}`;
    }
}*/