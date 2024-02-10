# js-higher-order-functions

https://deevyne-dev.hashnode.dev/a-deep-dive-into-javascripts-higher-order-functions-map-foreach-filter-and-reduce

### .map()
``` typescript
// 😕 normal loop
const num = [10, 20, 30];
const num5: number[] = [];
for (let i = 0; i < num.length; i++) {
  num5.push(num[i] * 5);
}

// 🔥 map()
const num2 = [10, 20, 30];
const num6 = num2.map((x) => x * 5);
```

### .forEach()
``` typescript
// ✅ 새 배열 생성 X. 기존 배열을 modify 함.

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

// Using forEach to log personalized greetings
users.forEach((user) => {
  console.log(`Hello, ${user.name}! Your user ID is ${user.id}.`);
});

//Hello, Alice! Your user ID is 1.
//Hello, Bob! Your user ID is 2.
//Hello, Charlie! Your user ID is 3.
```

### .filter()
``` typescript
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
```
