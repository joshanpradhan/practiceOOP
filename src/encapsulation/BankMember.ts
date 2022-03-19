abstract class BankUseCase{
   abstract deposit(amount:number):void
   abstract withdraw(amount:number):void
}

class BankMember extends BankUseCase{
   private _savingBalance:number;
   public get savingBalance():number{
      return this._savingBalance;
   }
   public set savingBalance(amount:number){
          this._savingBalance=amount
   }
   constructor(savingBalance:number){
      super();
      this._savingBalance=savingBalance
   }
   public deposit(amount:number): void {
       this._savingBalance+=amount
   }
   public withdraw(amount:number): void {
       if(this.savingBalance < amount){
          console.log("Insufficent balance");
          return ;
       }
       this._savingBalance-=amount
   }
}

let member=new BankMember(50000);
console.log("Deposit fund");
member.deposit(500);
console.log(`Saving Balance ${member.savingBalance}`)
member.savingBalance=0
console.log("Withdraw fund");
member.withdraw(500);
console.log(`Saving Balance ${member.savingBalance}`)


