//Base class

class Person{
     personName:string;
     address:string;
     mobileNo:number;
     constructor(personName:string,address:string,mobileNo:number){
         this.personName=personName;
         this.address=address;
         this.mobileNo=mobileNo;
     }
}
//syntax for classed to follow
interface IPerson{
    display():void;
}

//Derive Teacher from base class Person
class Teacher extends Person implements IPerson{

    constructor(personName:string,address:string,mobileNo:number){
        super(personName,address,mobileNo);
    }
    display():void{
        console.log(`Name:${this.personName}\nAddress:${this.address}\nMobile No:${this.mobileNo}\n`)
    }
}
let teacher=new Teacher("Joshan","Ilam",98179009181)
teacher.display();