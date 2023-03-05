# TypeScript break

摘要：在本教程中，你将学习 TypeScript 的 `break` 语句来终止一个循环或一个 `switch`。

## 使用 TypeScript 的 break 语句终止循环

`break` 语句允许你终止一个循环，并将程序控制权传递给循环后的下一个语句。

你可以在 `for`、`while` 和 `do...while` 语句中使用 `break` 语句。

以下示例展示了如何在 `for` 循环中使用 `break` 语句：

```ts
let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (var i = 0; i < products.length; i++) {
    if (products[i].price == 900)
        break;
}

// show the products
console.log(products[i]);
```

输出：

```ts
{ name: 'tablet', price: 900 }
```

它是如何工作的：

- 首先，使用 name 和 price 属性初始化产品列表。
- 然后，搜索价格为 900 的产品，一旦找到该产品，就使用 `break` 语句终止该循环。
- 最后，将匹配的产品显示到控制台。

## 使用 break 语句来终止 switch

以下示例返回指定产品的折扣。它使用 `break` 语句来跳出 `switch`：

```ts
let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

let discount = 0;
let product = products[1];

switch (product.name) {
    case 'phone':
        discount = 5;
        break;
    case 'tablet':
        discount = 10;
        break;
    case 'laptop':
        discount = 15;
        break;
}

console.log(`There is a ${discount}% on ${product.name}.`);
```

:::info
请注意，除了循环或 switch 之外，break 语句也可以用来跳出一个 [label](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) 的语句。然而，它在实践中很少使用，所以我们在本教程中不涉及。
:::

## 总结

- 使用 break 语句来终止一个循环或 switch。
