//? moderate
//- Create an object called bankAccount with:
const bankAccount = {
  owner: 'Justin',
  balance: 0,
  deposit: function(amount) {
    bankAccount.balance += amount;
  },
  withdraw: function(amount) {
    bankAccount.balance -= amount;
  }
};
bankAccount.deposit(20);
console.log(bankAccount);

bankAccount.withdraw(10);
console.log(bankAccount);