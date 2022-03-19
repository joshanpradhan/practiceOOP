"use strict";
class BankUseCase {
}
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
