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
