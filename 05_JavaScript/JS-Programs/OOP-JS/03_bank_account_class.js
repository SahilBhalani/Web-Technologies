//* BankAccount Class with Deposit and Withdrawl
class BankAccount{
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        console.log(`A/c No. : ${accountNumber}`);
        console.log(`Opening Balance: ${balance}`);
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}`);
    }

    withdraw(amount){
        if(amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: $${amount}`);
        } else {
            console.log(`Want to withdrawn: $${amount}`);
            console.log(`Insufficient balance`);
        }
    }
    displayBalance() {
        console.log(`Account Balance: $${this.balance}`);
    }
}

const account = new BankAccount('SB-123', 1500);

account.deposit(500);
account.withdraw(400);
account.displayBalance();
account.withdraw(1800);
account.displayBalance();
account.withdraw(1600);
account.displayBalance();