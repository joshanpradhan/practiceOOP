"use strict";
class Animal {
    move() {
        console.log("Animal moving");
    }
    walk() {
        console.log("Animal walking");
    }
    eat() {
        console.log("Animal eating");
    }
    fight() {
        console.log("Animal fighting");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog barking");
    }
}
let dog = new Dog();
console.log("Dog " + dog.bark());
console.log("Dog " + dog.move());
console.log("Dog " + dog.walk());
console.log("Dog " + dog.eat());
console.log("Dog " + dog.fight());
