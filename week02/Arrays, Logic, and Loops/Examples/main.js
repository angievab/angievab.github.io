// //creating array literals
// const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];
// //removing
// delete avengers[3];

// //merging arrays
// avengers.concat(['Hulk','Hawkeye', 'Black Widow']);
// //Slicing and Splicing
// The slice() method creates a subarray; effectively chopping 
// out a slice of an original array, starting at one position 
// and finishing at another.
// avengers.slice(2,4) // starts at the third item (index of 2) and finishes at the fourth (the item with index 4 is not included)

// //Converting Sets to Arrays
// const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');

// shoppingSet

//switch statements
if (number === 4) {
    console.log('You rolled a four');
    } else if (number === 5) {
    console.log('You rolled a five');
    } else if(number === 6){
    console.log('You rolled a six');
    } else {
    console.log('You rolled a number less than four');
    }
// //or:
// switch (number) {
//     case 4:
//     console.log('You rolled a four');
//     break;
//     case 5:
//     console.log('You rolled a five');
//     break;
//     case 6:
//     console.log('You rolled a six');
//     break;
//     default:
//     console.log('You rolled a number less than four');
//     break;
// }
// //looping over arrays
// for(let i=0, max=avengers.length; i < max; i++){
//     console.log(avengers[i]);
//     }

// for(const value of avengers){
//         console.log(value);
//  }  
// //looping over Sets
// const letters = new Set('hello');
// for(const letter of letters) {
//     console.log(letter);
// }
// //looping over maps
// const romanNumerals = new Map();
// romanNumerals.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');

// romanNumerals

// for(const key of romanNumerals.keys()) {
//     console.log(key);
// }

// for(const value of RomanNumerals.values()) {
//     console.log(value);
// }

// for(const [key,value] of RomanNumerals.entries()) {
//     console.log(`${key} in Roman numerals is ${value}`);
// }