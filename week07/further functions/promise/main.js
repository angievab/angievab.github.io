/*const promise = new Promise( (resolve, reject) => {
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});*/

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
const promise = new Promise( (resolve,reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 1) ? resolve(n) : reject(n);
    }, n*1000);
});
//The first argument is simply a function that logs a celebratory message to the console, 
//stating the number rolled (this is passed to the then() method as the variable result). 
//The second argument logs an annoyed message and, again, states the number rolled.
promise.then( result => console.log(`Yes! I rolled a ${result}`), result => console.log(`Drat! ... I rolled a ${result}`) );
//Alternatively, the catch() method can be used to specify what to do if the operation fails instead:
promise.catch( result => console.log(`Drat! ... I rolled a ${result}`));

//The then() and catch() methods can be chained together to form a 
//succinct description of how to deal with the outcome of the promise:
promise.then( result => console.log(`I rolled a ${result}`) )
            .catch( result => console.log(`Drat! ... I rolled a ${result}`) );
            
// paste the following code into your browser console or use JS Bin with ES6/Babel enabled:
/*const dice = {
sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

console.log('Before the roll');

const roll = new Promise( (resolve,reject) => {
    const n = dice.roll();
    if(n > 1){
        setTimeout(()=>{resolve(n)},n*200);
    } else {
        setTimeout(()=>reject(n),n*200);
    }
});

roll.then(result => console.log(`I rolled a ${result}`) )
.catch(result => console.log(`Drat! ... I rolled a ${result}`) );

console.log('After the roll');*/