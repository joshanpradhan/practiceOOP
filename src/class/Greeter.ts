class Greeter{
    greeting:string;
    constructor(message:string="OOP"){
        this.greeting=message
    }
    greet(){
        return "Hello, "+ this.greeting;
    }
}
let greeter1= new Greeter();
console.log(greeter1.greet())