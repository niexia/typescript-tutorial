# TypeScript object Type

摘要：在本教程中，你将学习关于 TypeScript `object` 类型和如何编写更加准确的 `object` 类型声明。

## TypeScript object type 介绍

**TypeScript 的 object 类型表示所有不在基本类型（primitive types）中的值。**

以下是 TypeScript 中的基本类型：

- `number`
- `bigint`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`

以下是声明一个变量来保存一个对象的示例：

```ts
let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);
```

输出：

```ts
{
  firstName: 'John',       
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer'
}
```

如果你把一个基本类型的值重新分配给 `employee` 对象，你会得到一个错误：

```ts
employee = "Jane";
```

Error：

```ts
error TS2322: Type '"Jane"' is not assignable to type 'object'.
```

`employee` 对象是一个**具有固定属性列表**的 `object` 类型。如果你试图访问一个在 `employee` 对象上不存在的属性，你会得到一个错误：

```ts
console.log(employee.hireDate);
```

Error：

```ts
error TS2339: Property 'hireDate' does not exist on type 'object'.
```


::: warning
请注意，上述语句在 JavaScript 中完全可以正常工作，返回 `undefined`。
:::

**要明确指定 `employee` 对象的属性**，首先要使用以下语法来声明`employee`对象：

```ts
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};
```

然后，你可以将 employee 对象分配给具有所描述属性的字面对象：

```ts
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
```

或者你可以将两种语法结合在同一语句中，像这样：

```ts
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
```

## object vs Object

TypeScript 还有另一种类型叫做 `Object`，其中字母 `O` 大写。了解它们之间的区别非常重要。

`object` 类型表示所有非基本类型的值，而 `Object` 类型描述了所有对象的功能。

例如，`Object` 类型具有可以被任何对象访问的 `toString()` 和 `valueOf()` 方法。

## 空类型 {}

TypeScript 有另一种类型，叫做空类型，用`{}`表示。，它与 `object` 类型非常相似。

**空类型`{}`描述了一个没有自己属性的对象**。如果你试图访问这种对象的属性，TypeScript 将发出一个编译时错误：

```ts
let vacant: {};
vacant.firstName = 'John';
```

Error：

```ts
error TS2339: Property 'firstName' does not exist on type '{}'.
```

但是你可以访问在`Object`类型上声明的所有属性和方法，这些都可以通过原型链在对象上使用。

```ts
let vacant: {} = {};

console.log(vacant.toString());
```

输出：

```ts
[object Object]
```


## 总结

- TypeScript `object` 类型表示所有非基本类型的值
- `Object` 类型描述了所有对象上可用的功能。
- 空类型 `{}` 指的是没有自己的属性的对象。
