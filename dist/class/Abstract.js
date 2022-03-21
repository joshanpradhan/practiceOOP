"use strict";
// abstract are usually used to define common behaviors for derived classes to extend.
// use can only use abract method if you define the class as abstract and also any class that extends the abstract class have to implement the abstract method defined inside it
class AbstractProperty {
}
class Abstract extends AbstractProperty {
    getName() {
        console.log("Joshan Pradhan");
    }
    getAddress() {
        return "Phikkal, Ilam";
    }
    getPhoneNumber() {
        return 9817922101;
    }
}
let a = new Abstract();
a.getName();
console.log(a.getAddress());
console.log(a.getPhoneNumber());
