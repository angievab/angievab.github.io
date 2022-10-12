/*class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}

const leo = new Turtle('Leonardo');
//<< Turtle { name: 'Leonardo' }

leo.name;
<< 'Leonardo'

leo.sayHi();
<< 'Hi dude, my name is Leonardo'

Turtle.prototype;
<< Turtle {}

Turtle.prototype.weapon = 'Hands';
<< 'Hands'

Turtle.prototype.attack = function(){
    return `Feel the power of my ${this.weapon}!`;
    }
    << [Function]

    const raph = new Turtle('Raphael');

    raph.name
    << 'Raphael'
    
    raph.sayHi()
    << 'Hi dude, my name is Raphael'
    
    raph.weapon
    << 'Hands'
    
    raph.attack()
    << 'Feel the power of my Hands!'

    raph.constructor.prototype;
    << Turtle { attack: [Function], weapon: 'Hands' }

    Object.getPrototypeOf(raph);
<< Turtle { attack: [Function], weapon: 'Hands' }
raph.__proto__
<< Turtle { attack: [Function], weapon: 'Hands' }

Turtle.prototype.isPrototypeOf(raph)
<< true

const don = new Turtle('Donatello');
<< Turtle { name: 'Donatello' }

don.weapon;
<< 'Hands'

leo.weapon;
<< 'Hands'

leo.attack();
<< 'Feel the power of my Hands!'
Turtle.prototype.weapon = 'Feet';
<< 'Feet'

leo.attack();
<< 'Feel the power of my Feet!'

raph.attack();
<< 'Feel the power of my Feet!'

don.attack();
<< 'Feel the power of my Feet!'

leo.weapon = 'Katana Blades';
<< 'Katana Blades';

raph.weapon = 'Sai';
<< 'Sai'

don.weapon = 'Bo Staff';
<< 'Bo Staff'

leo
<< Turtle { name: 'Leonardo', weapon: 'Katana Blades' }

leo.attack();
<< 'Feel the power of my Katana Blades!'

Turtle.prototype.eat = function() {
    return 'Mmm, this ${this.food} tastes great!';
}

const mike = new Turtle('Michelangelo');

mike.eat();
<< 'Mmm, this Pizza tastes great!'

mike.weapon = 'Nunchakus';
<< 'Nunchuks'

mike.attack();
<< 'Feel the power of my Nunchakus!'

//Modified class

class Turtle {
    constructor(name,color) {
        this.name = name;
        let _color = color;
        this.setColor = color => { return _color = color; }
        this.getColor = () => _color;
    }
}

raph = new Turtle('Raphael','Red');
<< Turtle { name: 'Raphael', setColor: [Function], getColor: [Function] }

raph.getColor();
<< 'Red'

raph.setColor(4);
<< 4


this.setColor = (color) => {
if(typeof color === 'string'){
    return _color = color;
    } else {
        throw new Error('Color must be a string');
    }
}

raph.setColor(4);
<< Error: Color must be a string

Object.getPrototypeOf(raph)
<< Turtle {}

Object.getPrototypeOf(Object.getPrototypeOf(raph))
<< {}

Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(raph)))
<< null

raph.makePizza();
<< TypeError: raph.makePizza is not a function

Turtle.prototype.propertyIsEnumerable('eat');
<< true

Object.prototype.propertyIsEnumerable('toString');
<< false

Object.prototype.propertyIsEnumerable('propertyIsEnumerable');
<< false

//Class modified again

class Turtle {
    constructor(name) {
        this.name = name;
        }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }

    swim() {
        return `${this.name} paddles in the water`;
    }
}

class NinjaTurtle extends Turtle {
    constructor(name) {
        super(name);
        this.weapon = 'hands';
    }
    attack() { return `Feel the power of my ${this.weapon}!` } 
}


class Turtle {
    // other turtle methods here

    toString() {
        return `A turtle called ${this.name}`;
    }
}

raph.toString();
<< 'A turtle called Raphael'

const turtles = ['Leonardo', 'Donatello', Michaelangelo', 'Raphael'];

turtles.first();
<< 'Leonardo'

turtles.last();
<< 'Raphael'
*/