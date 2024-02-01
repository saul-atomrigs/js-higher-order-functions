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
