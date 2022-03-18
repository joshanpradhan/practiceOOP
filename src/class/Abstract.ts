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

let a= new Abstract
a.getName();
console.log(a.getAddress());
console.log(a.getPhoneNumber());