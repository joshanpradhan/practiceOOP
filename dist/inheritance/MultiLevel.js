"use strict";
class ClassA {
    fullName() {
        console.log("Print fullname");
    }
}
class ClassB extends ClassA {
    mobileNo() {
        console.log("Print mobile no");
    }
}
class ClassC extends ClassB {
    address() {
        console.log("Print address");
    }
}
let classC = new ClassC();
classC.fullName();
classC.mobileNo();
classC.address();
