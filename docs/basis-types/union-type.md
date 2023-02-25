# TypeScript union Type

摘要：在本教程中，你将学习 TypeScript `union` 类型，它允许你在一个变量中存储一个或几个类型的值。

## TypeScript union 类型介绍

有时，你会遇到一个函数，它期望的参数是一个数字或一个字符串。比如说：

```ts
function add(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
```

在这个例子中，`add()` 函数将会计算其参数的和，如果它们是数字。

如果参数是字符串，则 `add()` 函数将它们连接成一个字符串。

如果参数既不是数字也不是字符串，则 `add()` 函数会抛出一个错误。

**`add()` 函数的参数的问题在于它们具有 `any` 类型。这意味着你可以调用带有既不是数字也不是字符串的参数的函数，TypeScript 不会报错。**

这段代码将被成功编译，但会在运行时引发错误：

```ts
add(true, false);
```

**为了解决这个问题，你可以使用 TypeScript 的联合类型。联合类型允许你将多个类型合并为一个类型。**

例如，下面的变量是数字或字符串的类型：

```ts
let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
result = false; // a boolean value, not OK
```

联合类型描述了一个值可以是几种类型中的一种，而不仅仅是两种。例如，`number | string | boolean` 是一个可以是 number、string 或 boolean 的值的类型。

回到 add() 函数的例子，你可以这样把参数的类型从 any 改为 union：

```ts
function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
```

## 总结

- TypeScript 联合类型允许你在一个变量中存储一个或多个类型的值。