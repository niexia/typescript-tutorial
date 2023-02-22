# TypeScript Array Type

摘要：在本教程中，你将学习 TypeScript `array` 类型及其基本操作。

## TypeScript 数组类型介绍

TypeScript `array` 是一个有序的数据列表。要声明一个持有特定类型数值的数组，你可以使用以下语法：

```ts
let arrayName: type[];
```

例如，下面声明的是一个字符串数组：

```ts
let skills: string[];
```

然后你可以在数组中添加一个或多个字符串：

```ts
skills[0] = "Problem Solving";
skills[1] = "Programming";
```

或者使用 `push()` 方法：

```ts
skills.push('Software Design');
```

下面声明了一个变量并将一个字符串数组分配给它：

```ts
let skills = ['Problem Sovling','Software Design','Programming'];
```

在这个例子中，**TypeScript 将 `skills` 数组[推断](./type-inference)为一个字符串数组**。它等同于以下内容：

```ts
let skills: string[];
skills = ['Problem Sovling','Software Design','Programming'];
```

一旦你定义了一个特定类型的数组，TypeScript 将防止你向数组添加不兼容的值。

以下情况将导致一个错误：

```ts
skills.push(100);
```

Error：

```ts
Argument of type 'number' is not assignable to parameter of type 'string'.
```

当你从数组中提取一个元素时，TypeScript 可以进行类型[推断](./type-inference)。比如：

```ts
let skill = skills[0];
console.log(typeof(skill));
```

输出：

```ts
string
```

在这个例子中，我们提取 `skills` 数组的第一个元素，并将其分配给 `skill` 变量。

由于字符串数组中的元素是一个字符串，TypeScript 推断 `skill` 变量的类型为字符串，如输出中所示。

## TypeScript 数组属性和方法

TypeScript 数组可以访问一个 JavaScript 的属性和方法。例如，下面使用`length`属性来获取数组中元素的数量：

```ts
let series = [1, 2, 3];
console.log(series.length); // 3
```

你也可以使用所有有用的数组方法，如 `forEach()`, `map()`, `reduce()`, 和 `filter()`，例如说：

```ts
let series = [1, 2, 3];
let doubleIt = series.map(e => e* 2);
console.log(doubleIt);
```

输出：

```ts
[ 2, 4, 6 ] 
```

## 存储混合类型的值

下面说明了如何声明一个**同时容纳字符串和数字的数组**：

```ts
let scores = ['Programming', 5, 'Software Design', 4]; 
```

在这种情况下，TypeScript 将 `scores` 数组推断为一个 `string | number` 的数组。

它和下面是等价的：

```ts
let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 4]; 
```

## 总结

- 在 TypeScript 中，数组是一个有序的值列表。一个数组可以存储混合类型的值。
- 为了声明一个特定类型的数组，你可以使用 `let arr: type[]` 语法。
