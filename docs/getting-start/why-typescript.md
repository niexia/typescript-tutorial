# 为什么选择  TypeScript

摘要：在本教程中，你将了解为什么要使用 TypeScript 而不是 JavaScript，以避免“动态类型”产生的问题。

## 为什么使用 TypeScript

用 TypeScript 有两个主要原因：

- TypeScript 添加了一个类型系统，以帮助你避免 JavaScript 中动态类型的许多问题。
- TypeScript 实现了 JavaScript 的未来功能，也就是 ES Next，所以你今天就可以使用它们。

**本教程重点讨论第一个原因。**

## 理解 JavaScript 中的动态类型

JavaScript是动态类型的。与Java或C#等静态类型的语言不同，**值具有类型而不是变量**。比如说：

```js
"Hello"
```

从这个值可以看出，它的类型是字符串。另外，下面的值是一个数字。

```js
2020
```

看下面的例子：

```js
let box;
box = "hello";
box = 100;
```

变量 `box` 的类型根据分配给它的值而改变。

为了在运行时找出 `box` 变量的类型，你可以使用 typeof 操作符：

```js
let box;
console.log(typeof(box)); // undefined

box = "Hello";
console.log(typeof(box)); // string

box = 100;
console.log(typeof(box)); // number
```

在这个例子中，第一条语句定义了这个变量，但没有赋值。它的类型是 `undefined`。

然后，我们将 "Hello"分配给`box`变量并输出其类型。现在`box`变量的类型变成了`string`。

最后，我们将 100 分配给`box`变量。这一次，`box`变量的类型变成了`number`。

**正如你所看到的，一旦赋值，变量的类型就会改变。**

而且你不需要明确地告诉 JavaScript 类型。JavaScript 会自动从值中推断出类型。

动态类型提供了灵活性。然而，它们也导致了一些问题。

## 动态类型的问题

假设你有一个函数，根据一个 id 返回一个 `product` 对象。

```js
function getProduct(id){
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5
  }
}
```

下面使用`getProduct()`函数来检索 id 为 1 的产品，并显示其数据：

```js
const product = getProduct(1);
console.log(`The product ${product.Name} costs $${product.price}`);
```

输出：

```text
The product undefined costs $99.5
```

这并不是我们所期望的那样。

这段代码的问题是，产品对象没有 `Name` 属性。它的名字属性中的第一个字母 n 是小写的。

**然而，你只有在运行脚本时才能知道它。**

引用对象上不存在的属性是在 JavaScript 中工作时常见的问题。

下面的例子定义了一个新函数，将 product 信息输出到控制台。

```js
const showProduct = (name, price)  => {
  console.log(`The product ${name} costs ${price}$.`);
};
```

```js
const product = getProduct(1);
showProduct(product.price, product.name);
```

输出：

```text
The product 99.5 costs $Awesome Gadget 1
```

这次我们把参数以错误的顺序传递给`showProduct()`函数。这是你在使用 JavaScript 时经常遇到的另一个常见问题。

这就是 TypeScript 发挥作用的原因。

## TypeScript 如何解决动态类型的问题

为了解决引用一个对象上不存在的属性的问题，你要做以下步骤：

首先，用一个 interface 定义产品对象的“形状”。注意，你将在后面的教程中学习 interface 的知识。

```ts
interface Product{
    id: number,
    name: string,
    price: number
};
```

第二，明确使用 `Product` 类型作为`getProduct()`函数的返回类型。

```ts
function getProduct(id) : Product{
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5
  }
}
```

当你引用一个不存在的属性时，代码编辑器会立即告诉你：

```ts
const product = getProduct(1);
console.log(`The product ${product.Name} costs $${product.price}`);
```

代码编辑器在 `Name` 属性上突出显示了以下错误：

<img src="https://www.typescripttutorial.net/wp-content/uploads/2020/09/why-typescript-error.png"/>

而当你把鼠标光标悬停在错误上时，你会看到一个提示，帮助你解决这个问题：

<img src="https://www.typescripttutorial.net/wp-content/uploads/2020/09/why-typescript-hint.png"/>

为了解决以错误的顺序传递参数的问题，你可以明确地给函数参数分配类型：

```ts
const showProduct = (name: string, price:number)  => {
  console.log(`The product ${name} costs ${price}$.`);
};
```

而当你向`showProduct()`函数传递错误的参数类型时，你会收到一个错误。

```ts
const product = getProduct(1);
showProduct(product.price, product.name);
```

<img src="https://www.typescripttutorial.net/wp-content/uploads/2020/09/why-typescript-error-in-function-arguments.png"/>

## 总结

- JavaScript 是动态类型的。它提供了灵活性，但也产生了许多问题。
- TypeScript 为 JavaScript 添加了一个可选的类型系统来解决这些问题。
