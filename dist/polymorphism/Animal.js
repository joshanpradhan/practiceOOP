"use strict";
class AnimalUseCase {
}
//polymorphism can be achieve either on runtime or compile time using method overloading and method orveriding respectively
class DomesticAnimal extends AnimalUseCase {
    makeSound() {
        console.log("Animal making sound");
    }
}
class Cat extends DomesticAnimal {
    makeSound() {
        console.log("Meow Meow Meow");
    }
}
class Cow extends DomesticAnimal {
    makeSound() {
        console.log("Cow Cow Cow");
    }
}
const domesticAnimal = new DomesticAnimal();
const cat = new Cat();
const cow = new Cow();
domesticAnimal.makeSound();
cat.makeSound();
cow.makeSound();
