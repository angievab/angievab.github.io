/*const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }    
}

const Dice = function(sides=6){
    this.sides = sides;
    this.roll = function() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

const redDice = new Dice();
//<< Dice { sides: 6, roll: [Function] }

redDice instanceof Dice
//<< true

redDice.sides
//<< 6

redDice.roll()
//<< 4

class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }

    static description() {
        return 'A way of choosing random numbers'
    }
}

const blueDice = new Dice(20);
//<< Dice { sides: 20 }

// Using constructor function - noDice is just set to undefined without any warning
const noDice = Dice();
noDice
//<< undefined

// Using class - an error is thrown
const noDice = Dice();
//<< TypeError: Class constructor Dice cannot be invoked without 'new'

blueDice.constructor
//<< [Function: Dice]

const literalObject = {};
//<< {}
literalObject.constructor
//<< [Function: Object]

const greenDice = new redDice.constructor(10);

greenDice instanceOf Dice
//<< true

//Modified class

class Dice {
constructor(sides=6){    
    Object.defineProperty(this, 'sides', {
        get() {
        return `This dice has ${sides} sides`;
        },
        set(value) {
        if(value > 0) {
            sides = value;
            return sides;
        } else {
            throw new Error('The number of sides must be positive');
        }
        }
    });

    this.roll = function() {
        return Math.floor(sides * Math.random() + 1)
    }
    }
}

const yellowDice = new Dice;

yellowDice.sides
<< "This dice has 6 sides"

yellowDice.sides = 10;
<< 10

yellowDice.sides
<< "This dice has 10 sides"

yellowDice.sides = 0;
<< Error: "The number of sides must be positive"
*/