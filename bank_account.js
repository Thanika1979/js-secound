const account = {
  accountName: "Johnny",
  balance: 100,
  getBalance: function () {
    alert(`Your current balance is ${this.balance} SEK`);
    atm();
  },
  deposit: function () {
    let moneyIn = parseFloat(
      prompt("How much (SEK) would you like to deposit?")
    );
    if (isNaN(moneyIn) || moneyIn <= 0) {
      this.accountError();
      this.deposit();
    } else if (moneyIn) {
      this.balance += moneyIn;
      this.getBalance();
      atm();
    }
  },
  withdrawal: function () {
    let moneyOut = parseFloat(
      prompt("How much (SEK) would you want to withdraw?")
    );
    if (moneyOut > this.balance) {
      alert(
        `Sorry, your current balance is ${this.balance} SEK, please try another amount to withdraw.`
      );
      this.withdrawal();
    } else if (isNaN(moneyOut) || moneyOut <= 0) {
      this.accountError();
      this.deposit();
    } else {
      this.balance -= moneyOut;
      this.getBalance();
    }
    atm();
  },
  getAccountName: function () {
    alert(`Name of account: ${account.accountName}`);
    atm();
  },
  accountError: function () {
    alert("Sorry, invalid answer.");
  },
  exitAccount: function () {
    alert("Thanks for today, bye!");
    self.close();
  },
};

function atm() {
  let choice = parseInt(
    prompt(
      "Hello and welcome to YourBank! Please choose one of the following numbers: 1. See balance 2. Make a deposit 3. Make a withdrawal 4. Get account name 5. Exit"
    )
  );
  if (choice === 1) {
    account.getBalance();
  } else if (choice === 2) {
    account.deposit();
  } else if (choice === 3) {
    account.withdrawal();
  } else if (choice === 4) {
    account.getAccountName();
  } else if (choice === 5) {
    account.exitAccount();
  } else {
    alert("Not a valid answer, please choose by writing number 1-5.");
    atm();
  }
}

atm();

