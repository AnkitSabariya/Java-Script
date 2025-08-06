class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ₹${amount}`);
  }

  checkBalance() {
    console.log(`Balance: ₹${this.#balance}`);
  }
}

const acc = new BankAccount();
acc.deposit(1000);
acc.checkBalance();  // Output: Balance: ₹1000
// acc.#balance; Error: Private field
class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}