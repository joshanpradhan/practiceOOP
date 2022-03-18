"use strict";
class StaticMembers {
    static greeting() {
        console.log(StaticMembers.person);
    }
}
StaticMembers.person = "Joshan";
class SecondStaticMembers extends StaticMembers {
    static print() {
        console.log(StaticMembers.person);
    }
}
// console.log(SecondStaticMembers.person) error as it is protected
SecondStaticMembers.print();
