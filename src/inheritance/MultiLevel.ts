class ClassA{
    fullName(){
        console.log("Print fullname")
    }
}
//Class B inherits all the properties of Class A
//Now class B have class A properties access as well
class ClassB extends ClassA{
    mobileNo(){
        console.log("Print mobile no");
    }
}

//Class C inherits all the properties of Class B
//Now class C have class A and class B properties access as well
class ClassC extends ClassB{
    address(){
        console.log("Print address");
    }
}
let classC=new ClassC();
classC.fullName();
classC.mobileNo();
classC.address();



