
# TypeScript Functions

摘要：在本教程中，你将学习 TypeScript 函数，以及如何使用类型注解来执行函数的类型检查。

## TypeScript 函数介绍

TypeScript 函数是可读性、可维护性和可重用性代码的构建块。

与 JavaScript 一样，你可以使用 `function` 关键字在 TypeScript 中声明函数：

```ts
function name(parameter: type, parameter:type,...): returnType {
   // do something
}

```

不同于 JavaScript，**TypeScript 允许你在函数的参数和返回值中使用[类型注解](../basis-types/type-annotations)**。

让我们看下面的 `add()` 函数示例：

```ts
function add(a: number, b: number): number {
    return a + b;
}

```

在此示例中，`add()` 函数接受两个具有 `number` 类型的参数。

当调用 `add()` 函数时，TypeScript 编译器将检查传递给函数的每个参数以确保它们是数字。

在 `add()` 函数示例中，只能传递数字进入其中，而不能传递其他类型的值。

以下代码会导致错误，因为它将两个字符串而不是两个数字传递到了 `add()` 函数中：

```ts
let sum = add('10', '20');
```

Error：

```ts
error TS2345: Argument of type '"10"' is not assignable to parameter of type 'number'
```

**函数参数的类型也可以在函数体内用于类型检查。**

括号后面的 `: number` 表示返回类型。在这种情况下，`add()` 函数返回一个数值类型的值。

**当一个函数有返回类型时，TypeScript 编译器会检查每个 `return` 语句是否与返回类型兼容，以确保返回值符合要求。**

如果一个函数不返回任何值，则可以使用 `void` 类型作为返回类型。`void` 关键字表示该函数不会返回任何值。例如：

```ts
function echo(message: string): void {
    console.log(message.toUpperCase());
}
```

**空值会阻止函数内部的代码返回一个值，并阻止调用代码将函数的结果分配给一个变量。**

当你没有注释返回类型时，TypeScript 将尝试推断出适当的类型。例如：

```ts
function add(a: number, b: number) {
    return a + b;
}
```

在这个例子中，TypeScript 编译器试图推断 `add()` 函数的返回类型为 `number` 类型，这是预期的。

**然而，如果一个函数有不同分支返回不同类型，则 TypeScript 编译器可能会推断 `union` 类型或 `any` 类型。**

**因此，在尽可能多地添加类型注解到函数时非常重要。**

## 总结

- 使用函数参数和返回值的类型注解来保持调用代码一致，并确保在函数体中进行类型检查。
