class StaticMembers {
    protected static person:string="Joshan";
    static greeting(){
        console.log(StaticMembers.person)
    }

}
class SecondStaticMembers extends StaticMembers{
   static print(){
        console.log(StaticMembers.person)
    }
}
// console.log(SecondStaticMembers.person) error as it is protected
SecondStaticMembers.print()
