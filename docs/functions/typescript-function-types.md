# TypeScript Function Types

摘要：在本教程中，你将学习 TypeScript 函数类型，它允许你为函数定义类型。

## TypeScript 函数类型介绍

函数类型由两部分组成：**参数和返回值类型**。在声明函数类型时，你需要使用以下语法指定这两个部分：

```ts
(parameter: type, parameter:type,...) => type
```

以下示例展示了如何声明一个变量，该变量具有接受两个数字并返回一个数字的函数类型：

```ts
let add: (x: number, y: number) => number;
```

在这个例子中：

- 函数类型接受两个参数：`x` 和 `y`，它们的类型是 `number`。
- 返回值的类型是出现在参数和返回类型之间的 fat arrow（`=>`）后面的 number。

:::info
请注意，参数名称（`x` 和 `y`）仅用于提高可读性。只要参数类型匹配，它就是函数的有效类型。
:::

一旦使用函数类型注释变量，就可以将具有相同类型的函数分配给该变量。

TypeScript 编译器会将参数的数量及其类型和返回类型相匹配。

以下示例显示如何将函数分配给 `add` 变量：

```ts
add = function (x: number, y: number) {
    return x + y;
};

```

此外，你还可以声明一个变量并像这样为其分配一个函数：

```ts
let add: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };

```

如果你把类型不匹配的其他函数分配给 `add` 变量，则 TypeScript 会发出错误：

```ts
add = function (x: string, y: string): number {
    return x.concat(y).length;
};
```

在此示例中，我们重新分配了一个不匹配类型的函数到 `add` 函数变量。

## 推断函数类型

TypeScript 编译器可以在等式的一侧有类型时推断出函数类型。这种形式的[类型推断](../basis-types/type-inference)称为上下文类型推断（contextual typing）。例如：

<image src="https://www.typescripttutorial.net/wp-content/uploads/2020/06/TypeScript-Function-Type-Example.png" />

在这个例子中，`add` 函数将采用类型 `(x: number, y:number) => number`。

通过使用类型推断，你可以显著减少注释的代码量。
