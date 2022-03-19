interface IAnimal {
  move(): void;
  walk(): void;
  eat(): void;
  fight(): void;
}
interface IDog {
    bark(): void;
  }
class Animal implements IAnimal {
  move(): void {
    console.log("Animal moving");
  }
  walk(): void {
    console.log("Animal walking");
  }
  eat(): void {
    console.log("Animal eating");
  }
  fight(): void {
    console.log("Animal fighting");
  }
}
class Dog extends Animal implements IDog{
    bark(): void {
        console.log("Dog barking");
    }
}

let dog = new Dog();

console.log("Dog "+ dog.bark())
console.log("Dog "+ dog.move())
console.log("Dog "+ dog.walk())
console.log("Dog "+ dog.eat())
console.log("Dog "+ dog.fight())
