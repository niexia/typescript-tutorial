# TypeScript Optional Parameters

摘要：在本教程中，你将学习如何为函数使用 TypeScript 的可选参数。

在 JavaScript 中，即使函数指定了参数，你也可以调用不传递任何参数的函数。因此，默认情况下，JavaScript 支持可选参数。

在 TypeScript 中，编译器检查每个函数调用，并在以下情况下发出错误：

1. 参数数量与函数中指定的参数数量不同。
2. 或者参数类型与函数参数类型不兼容。

由于编译器彻底检查传递的参数，因此你需要注释可选参数以指示编译器在省略这些参数时不发出错误。

**要使一个函数参数变为可选项，请在该名称后使用 `？`**。例如：

```ts
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
```

它是如何工作的：

- 首先，在 `c` 参数后面使用 `?`。
- 其次，通过使用 `typeof c !== 'undefined'` 表达式来检查是否将参数传递给函数。

:::warning
请注意，如果你使用表达式 `if(c)` 来检查参数是否已初始化，则会发现空字符串或 0 将被视为 `undefined`。
:::

**可选参数必须在参数列表中的必需参数后面出现。**

例如，如果你将 `b` 参数设为可选，并且 `c` 参数为必需，则 TypeScript 编译器会发出错误：

```ts
function multiply(a: number, b?: number, c: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
```

Error：

```ts
error TS1016: A required parameter cannot follow an optional parameter.
```

## 总结

- 使用 `parameter?:type` 语法使参数变为可选。
- 使用表达式 `typeof(parameter) !== 'undefined'` 来检查参数是否已初始化。
