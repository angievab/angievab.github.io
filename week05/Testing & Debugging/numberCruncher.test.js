'use strict';

/*function factorsOf(n) {
    const factors = [];
    for (let i=1; i <= n ; i++) { // change on this line
        if (n/i === Math.floor(n/i)){
        factors.push(i);
        }
    }
    return factors;
}*/
//refactor
/*function factorsOf(n) {
    const factors = [];
    for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
        if (n%i === 0){
        factors.push(i,n/i);
        }
    }
    return factors.sort((a,b) => a - b);
    
}*/
function factorsOf(n) {
    if(Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if(n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if(!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
        if (n%i === 0){
        factors.push(i,n/i);
        }
    }
    return factors.sort((a,b) => a - b);
}
test('factors of 12', () => {
    expect(factorsOf(12)).toEqual([1,2,3,4,6,12]);
});
test('2 is prime', () => {
    expect(isPrime(2)).toBe(true);
});

test('10 is not prime', () => {
    expect(isPrime(10)).not.toBe(true);
});


/*function isPrime(n) {
    return factorsOf(n).length === 2;
}*/
//Try & catch
function isPrime(n) {
try{
    return factorsOf(n).length === 2;
} catch(error) {
    return false;
}
}

    test('non-numerical data returns not prime', () => {
        expect(isPrime('two')).toBe(false);
    });
    
    test('non-integer numbers return not prime', () => {
        expect(isPrime(1.2)).toBe(false);
    });
    
    test('negative numbers return not prime', () => {
        expect(isPrime(-1)).toBe(false);
    });

    function squareRoot(number) {
        'use strict';
        if (number < 0) {
            throw new RangeError("You can't find the square root of negative numbers")
        }
        return Math.sqrt(number);
    };
    
    test('square root of 4 is 2', () => {
    expect(squareRoot(4)).toBe(2);
    });
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