// abstract are usually used to define common behaviors for derived classes to extend.
// use can only use abract method if you define the class as abstract and also any class that extends the abstract class have to implement the abstract method defined inside it

abstract class AbstractProperty{
    abstract  getName():void
    abstract getAddress():string
    abstract getPhoneNumber():number
}

class Abstract extends AbstractProperty{
     getName(): void {
        console.log("Joshan Pradhan")
    }
    getAddress(): string {
        return "Phikkal, Ilam"
    }
    getPhoneNumber(): number {
        return 9817922101;
    }
}

let a= new Abstract();
a.getName();
console.log(a.getAddress());
console.log(a.getPhoneNumber());