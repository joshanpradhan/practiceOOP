"use strict";
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
let a = new Abstract;
a.getName();
console.log(a.getAddress());
console.log(a.getPhoneNumber());
