abstract class BankUseCase{
   abstract deposit(amount:number):void
   abstract withdraw(amount:number):void
}
//the reason we use encapsulation is to prevent unauthorized parties' direct access to them
//like in this case we have used saving balance variable as private so that only properties inside the same class can have direct access to it
//inorder to access it outside the class we have to implement the setter and getter method for it so that we can add logic to it while setting private properties 
class BankMember extends BankUseCase{
   private _savingBalance:number;
   public get savingBalance():number{
      return this._savingBalance;
   }
   public set savingBalance(amount: number){
          this._savingBalance=amount
   }
   constructor(savingBalance: number){
      super();
      this._savingBalance=savingBalance
   }
   public deposit(amount: number): void {
       this._savingBalance+=amount
   }
   public withdraw(amount: number): void {
       if(this.savingBalance < amount){
          console.log("Insufficent balance");
          return ;
       }
       this._savingBalance-=amount
   }
}


let member = new BankMember(50000);
console.log("Deposit fund");
member.deposit(500);
console.log(`Saving Balance ${member.savingBalance}`)
member.savingBalance=0
console.log("Withdraw fund");
member.withdraw(500);
console.log(`Saving Balance ${member.savingBalance}`)


