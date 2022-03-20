"use strict";
//Base class
class Person {
    constructor(personName, address, mobileNo) {
        this.personName = personName;
        this.address = address;
        this.mobileNo = mobileNo;
    }
}
//Derive Teacher from base class Person
class Teacher extends Person {
    constructor(personName, address, mobileNo) {
        super(personName, address, mobileNo);
    }
    display() {
        console.log(`Name:${this.personName}\nAddress:${this.address}\nMobile No:${this.mobileNo}\n`);
    }
}
let teacher = new Teacher("Joshan", "Ilam", 98179009181);
teacher.display();
