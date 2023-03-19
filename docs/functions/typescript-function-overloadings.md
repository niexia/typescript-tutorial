# TypeScript Function Overloadings

摘要：在本教程中，你将学习 TypeScript 中的函数重载。

## TypeScript 函数重载介绍

在 TypeScript 中，函数重载允许你建立一个函数的参数类型和结果类型之间的关系。

:::warning
请注意，TypeScript 的函数重载与其他静态类型语言（如 C# 和 Java）所支持的函数重载不同。
:::

让我们从一些简单的函数开始：

```ts
function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}
```

在这个例子中：

- addNumbers() 函数返回两个数字的总和。
- addStrings() 函数返回两个字符串的拼接。

可以使用[联合类型](../basis-types/union-type) 来定义函数参数和结果的类型范围：

```ts
function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}
```

然而，联合类型并不能准确地表达参数类型和结果之间的关系。

`add()` 函数告诉编译器它将接受数字或字符串，并返回一个数字或字符串。**但它未能描述当参数为数字时函数返回一个数字，当参数为字符串时函数返回一个字符串。**

为了更好地描述函数使用的类型之间的关系，TypeScript 支持函数重载。例如：

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
   return a + b;
}
```

在这个例子中，我们向 `add()` 函数添加了两个重载。第一个重载告诉编译器当参数是数字时，`add()` 函数应该返回一个数字。第二个重载也是同样的道理，但是针对字符串。

**每个函数重载定义了 `add()` 函数支持的类型组合。它描述了参数和它们返回结果之间的映射关系。**

现在，当你调用 `add()` 函数时，代码编辑器会提示有一个可用的重载函数，如下图所示：

<img src="/typescript-function-overloadings.png" />

## 带有可选参数的函数重载

**当你重载一个函数时，必须保证所需参数的数量相同。如果一个重载有比另一个更多的参数，则必须将额外的参数设置为可选项。**例如：

```ts
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

```

`sum()` 函数接受两个或三个数字。第三个参数是可选的。如果你不将其设置为可选，将会出现错误。

## 方法重载

**当一个函数是一个类的属性时，它被称为一个方法（method）**。TypeScript 也支持方法重载。比如说。

```ts
class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}
```

`count()` 函数根据传入的参数数量可以返回数字或数组：

```ts
let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array
```

输出：

```ts
1
[
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20     
]
```

## 总结

- TypeScript 函数重载允许你描述函数的参数类型和结果之间的关系。
