abstract class AnimalUseCase{
 abstract makeSound():void;
}
//polymorphism can be achieve either on runtime or compile time using method overloading and method orveriding respectively
class DomesticAnimal extends AnimalUseCase{
    makeSound(): void {
        console.log("Animal making sound")
    }
    
}

class Cat extends DomesticAnimal{
    makeSound(): void {
        console.log("Meow Meow Meow")
    }
}

class Cow extends DomesticAnimal{
    makeSound(): void {
        console.log("Cow Cow Cow")
    }
}

const domesticAnimal=new DomesticAnimal();
const cat=new Cat();
const cow=new Cow();
//calling the same method using different objects we can make sound of different animals in different ways
domesticAnimal.makeSound()
cat.makeSound()
cow.makeSound()