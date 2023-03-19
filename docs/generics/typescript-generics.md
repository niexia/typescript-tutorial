# TypeScript Generics

摘要：在本教程中，你将学习 TypeScript 泛型，允许你使用类型作为形式参数。

## TypeScript 泛型介绍

**TypeScript 泛型允许你编写可重用和通用形式的函数、类和接口**。在本教程中，你将专注于**开发泛型函数**。

通过一个简单的例子来解释 TypeScript 泛型会比较容易。

假设你需要开发一个函数，返回 number 数组中的一个随机元素。

下面的 `getRandomNumberElement()` 函数将一个数字数组作为参数，并从数组中返回一个随机元素：

```ts
function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
```

为了获得一个数组的随机元素，你需要：

- 首先找到随机索引。
- 根据随机指数获取随机元素。

为了找到数组的随机索引，我们使用了 `Math.random()`，它返回一个 0 到 1 之间的随机数，将其与数组的长度相乘，并对结果应用 `Math.floor()`。

下面展示了如何使用 `getRandomNumberElement()` 函数：

```ts
let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));
```

假设你需要从一个 string 数组中获得一个随机元素。这一次，你可以想出一个新的函数：

```ts
function getRandomStringElement(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
```

`getRandomString()` 函数的逻辑与 `getRandomNumberElement()` 函数中的逻辑相同。

这个例子展示了如何使用 `getRandomStringElement()` 函数：

```ts
let colors = ['red', 'green', 'blue'];
console.log(getRandomStringElement(colors));
```

后来你可能需要在一个对象的数组中获得一个随机元素。**每次你想从一个新的数组类型中获得一个随机元素时，创建一个新的函数是不可扩展的。**

## 使用 any 类型

解决这个问题的一个办法是将数组参数的类型设置为 `any[]`。通过这样做，你只需要写一个可以处理任何类型的数组的函数：

```ts
function getRandomAnyElement(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
```

`getRandomAnyElement()` 对任何类型的数组都有效，包括数字、字符串、对象等的数组：

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let colors = ['red', 'green', 'blue'];

console.log(getRandomAnyElement(numbers));
console.log(getRandomAnyElement(colors));
```

**这个解决方案运行良好。然而，它有一个缺点。**

**它不允许你强制执行返回元素的类型。换句话说，它不是类型安全的。**

**一个更好的解决方案是使用泛型来避免代码的重复，同时保留类型。**

## TypeScript 泛型函数来拯救

下面显示了一个泛型函数，它从 T 类型的数组中返回随机元素：

```ts
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
```

这个函数使用了**类型变量 `T`。`T` 允许你在调用函数时捕获提供的类型**。同时，该函数使用 `T` 类型变量作为其返回类型。

这个 `getRandomElement()` 函数是通用的，因为它可以与任何数据类型一起工作，包括字符串、数字、对象、...

**按照惯例，我们使用字母 `T` 作为类型变量。然而，你可以自由地使用其他字母，如 A、B、C，...**

## 调用一个泛型函数

下面展示了如何使用 `getRandomElement()` 来处理一个数字数组：

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement<number>(numbers);
console.log(randomEle);

```

这个例子显式地将 `number` 作为 `T` 类型传递给 `getRandomElement()` 函数。

在实践中，**你会使用类型推断来推断参数的类型。这意味着你让 TypeScript 编译器根据你传递的参数类型自动设置 T 的值**，像这样：

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement(numbers);
console.log(randomEle);
```

在这个例子中，我们没有明确地将 `number` 类型传递给 `getRandomElement()`。编译器只是查看参数并将 T 设置为其类型。

现在，getRandomElement() 函数也是类型安全的。例如，如果你把返回的值分配给一个字符串变量，你会得到一个错误。

```ts
let numbers = [1, 5, 7, 4, 2, 9];
let returnElem: string;
returnElem = getRandomElement(numbers);  // compiler error
```

## 具有多种类型的泛型函数

以下是如何开发具有两个类型变量 `U` 和 `V` 的泛型函数的示例：

```ts
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}
```

merge() 函数将类型为 `U` 和 `V` 的两个对象合并。它将两个对象的属性合并成一个单独的对象。

类型推断会将 `merge()` 函数返回值推断为 `U` 和 `V` 的交集类型，即 `U & V`。

以下是如何使用 merge() 函数来合并两个对象的示例：

```ts
let result = merge(
    { name: 'John' },
    { jobTitle: 'Frontend Developer' }
);

console.log(result);
```

输出：

```ts
{ name: 'John', jobTitle: 'Frontend Developer' }
```

## TypeScript 泛型的优点

以下是 TypeScript 泛型的优点：

- 利用编译时的类型检查。
- 消除类型转换。
- 允许你实现泛型算法。

## 总结

- 使用 TypeScript 泛型来开发可重用的、通用的和类型安全的函数、接口和类。
