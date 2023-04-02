# TypeScript void type

摘要：在本教程中，你将了解 TypeScript 的 `void` 类型，以及如何使用它作为不返回任何值的函数的返回类型。

## TypeScript void 类型介绍

**`void` 类型表示根本不存在任何类型。它有点像 [`any` 类型](./any-type)的反面。**

通常情况下，你使用 void 类型作为不返回值的函数的返回类型，比如说：

```ts
function log(message): void {
    console.log(messsage);
}
```

**将 `void` 类型作为不返回任何值的函数或方法的返回类型是一种良好的编程实践。这样做可以获得以下好处：**

- **提高代码的清晰度：你无需阅读整个函数体来确定它是否返回任何内容。**
- **确保类型安全：你永远不会将 `void` 返回类型的函数赋值给变量。**

注意，**如果你将 `void` 类型用于变量，你只能将 `undefined` 赋值给该变量。在这种情况下，`void` 类型是没有用处的**。例如：

```ts
let useless: void = undefined;
useless = 1; // error
```

如果没有指定 `-strictNullChecks` 标志，你可以把 `useless` 赋值为 `null`。

```ts
useless = null; // OK if --strictNullChecks is not specified
```

## 总结

- 使用 `void` 类型作为不返回任何值的函数的返回类型。
