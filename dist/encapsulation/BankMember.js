"use strict";
class BankUseCase {
}
//the reason we use encapsulation is to prevent unauthorized parties' direct access to them
//like in this case we have used saving balance variable as private so that only properties inside the same class can have direct access to it
//inorder to access it outside the class we have to implement the setter and getter method for it so that we can add logic to it while setting private properties 
class BankMember extends BankUseCase {
    constructor(savingBalance) {
        super();
        this._savingBalance = savingBalance;
    }
    get savingBalance() {
        return this._savingBalance;
    }
    set savingBalance(amount) {
        this._savingBalance = amount;
    }
    deposit(amount) {
        this._savingBalance += amount;
    }
    withdraw(amount) {
        if (this.savingBalance < amount) {
            console.log("Insufficent balance");
            return;
        }
        this._savingBalance -= amount;
    }
}
let member = new BankMember(50000);
console.log("Deposit fund");
member.deposit(500);
console.log(`Saving Balance ${member.savingBalance}`);
member.savingBalance = 0;
console.log("Withdraw fund");
member.withdraw(500);
console.log(`Saving Balance ${member.savingBalance}`);
