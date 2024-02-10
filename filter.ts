type BankAccount = {
  accountType: string;
  balance: number;
  name: string;
};

const bankAccounts = [
  { accountType: 'savings', balance: 5000, name: 'John James' },
  { accountType: 'current', balance: 10000, name: 'Micheal Obi' },
  { accountType: 'savings', balance: 7500, name: 'Bola Ade' },
  { accountType: 'current', balance: 12000, name: 'Emmanuel John' },
  { accountType: 'savings', balance: 9000, name: 'Faithfulness Alamu' },
];

// 😕 Using for loop
const savingsAccountsForLoop: BankAccount[] = [];

for (let i = 0; i < bankAccounts.length; i++) {
  if (bankAccounts[i].accountType === 'savings') {
    savingsAccountsForLoop.push(bankAccounts[i]);
  }
}

console.log(savingsAccountsForLoop);

/*
[
 { accountType: 'savings', balance: 5000, name: 'John James' },
 { accountType: 'savings', balance: 7500, name: 'Bola Ade' },
 { accountType: 'savings', balance: 9000, name: 'Faithfulness Alamu'},
]
*/

// 🔥 Using filter
const savingsAccountsFilter = bankAccounts.filter(
  (account) => account.accountType === 'savings'
);
console.log(savingsAccountsFilter);
/*
[
 { accountType: 'savings', balance: 5000, name: 'John James' },
 { accountType: 'savings', balance: 7500, name: 'Bola Ade' },
 { accountType: 'savings', balance: 9000, name: 'Faithfulness Alamu'},
]
*/
