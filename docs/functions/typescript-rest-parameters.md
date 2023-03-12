# TypeScript Rest Parameters

摘要：在本教程中，你将学习有关 TypeScript rest 参数的知识，它允许你将无限数量的参数表示为数组。

**rest 参数允许函数接受指定类型的零个或多个参数**。在 TypeScript 中，rest 参数遵循以下规则：

- 一个函数只有一个 rest 参数。
- rest 参数出现在参数列表的最后。
- rest 参数的类型是[数组类型](../basis-types/array-type)。

要声明一个 rest 参数，请使用三个点作为前缀，并使用数组类型作为类型注解来命名该变量：

```ts
function fn(...rest: type[]) {
   //...
}
```

下面例子展示了如何使用 rest 参数：

```ts
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
```

在这个例子中，`getTotal()` 计算了传入它的数字的总和。

由于 numbers 参数是一个 rest 参数，你可以传递一个或多个数字来计算总和：

```ts
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
```

在本教程中，你已经学习了 TypeScript rest 参数，它允许你将无限数量的参数表示为数组。
