# Type Assertions

摘要：在本教程中，你将学习 TypeScript 中的类型断言。

## TypeScript 中的类型断言介绍

类型断言指示 TypeScript 编译器将一个值作为一个指定的类型。它使用 as 关键字来做到这一点。

```ts
expression as targetType
```

**类型断言也称为类型缩小。它允许您从[联合类型](../basis-types/union-type)中缩小类型**。让我们看下面这个简单的函数：

```ts
function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
```

`getNetPrice()` 函数接受 `price`、`discount` 和 `format` 参数，并返回一个 `number | string` 的联合类型的值。

如果 `format` 为 `true`，`getNetPrice()` 返回一个格式化的字符串净价。否则，它返回净价为一个数字。

下面使用 `as` 关键字来指示编译器，分配给 `netPrice` 的值是一个字符串：

```ts
let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice);
```

输出：

```ts
$95
```

类似地，下面使用 `as` 关键字来指示编译器，`getNetPrice()` 函数的返回值是一个数字：

```ts
let netPrice = getNetPrice(100, 0.05, false) as number;
console.log(netPrice);
```

输出：

```ts
95
```

**请注意，一个类型断言并不带有任何[类型转换](./type-casting)。它只是告诉编译器应该将哪种类型应用于值，以进行类型检查。**

## 另一种类型断言语法

你也可以使用角括号语法<>来断言一个类型，像这样：

```ts
<targetType> value
```

例如：

```ts
let netPrice = <number>getNetPrice(100, 0.05, false);
```

注意，**你不能在某些库中使用角括号语法 `<>`**，例如 React。出于这个原因，你应该使用 `as` 关键字进行类型断言。

## 总结

- 类型断言指示编译器将一个值视为指定的类型。
- 类型断言不进行任何类型转换。
- 类型断言使用 `as` 关键字或尖括号 `<>` 语法。
