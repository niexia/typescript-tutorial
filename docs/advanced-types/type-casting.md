# Type Casting

摘要：在本教程中，你将学习 TypeScript 中的类型转换，它允许你将一个变量从一个类型转换成另一个类型。

JavaScript 没有类型转换的概念，因为变量有动态类型。然而，TypeScript 中的每个变量都有一个类型。**类型转换允许你将一个变量从一个类型转换到另一个类型**。

在 TypeScript 中，你可以使用 `as` 关键字或 `<>` 操作符进行类型转换。

## 使用 as 关键字进行类型转换

以下是通过使用 `querySelector()` 方法选择第一个输入元素

```ts
let input = document.querySelector('input["type="text"]');
```

由于 `document.querySelector()` 方法的返回类型是 `Element` 类型，下面的代码会引起编译器错误：

```ts
console.log(input.value);

```

原因是 Element 类型中不存在 `value` 属性。它只存在于 `HTMLInputElement` 类型上。

**为了解决这个问题，你可以使用类型转换，通过使用 as 关键字将 Element 转换为 `HTMLInputElement`**，像这样：

```ts
let input = document.querySelector('input[type="text"]' ) as HTMLInputElement;

```

现在，`input` 变量的类型是 `HTMLInputElement`。所以访问它的 value 属性不会引起任何错误。下面的代码可以工作：

```ts
console.log(input.value);
```

另一种将 Element 转换为 `HTMLInputElement` 的方法是当你访问该属性时，如下所示：

```ts
let enteredText = (input as HTMLInputElement).value;
```

注意，`HTMLInputElement` 类型扩展了 `HTMLElement` 类型，该类型扩展了 `Element` 类型。当您将 `HTMLElement` 强制转换为 `HTMLInputElement` 时，这种类型转换也称为向下转换（down casting）。

还可以向下转换。比如说：

```ts
let el: HTMLElement;
el = new HTMLInputElement();
```

**在这个例子中，`el` 变量的类型是 `HTMLElement`。但是你可以给它分配一个 `HTMLInputElement` 类型的实例，因为 `HTMLInputElement` 类型是 `HTMLElement` 类型的一个子类。**

将一个变量从 `typeA` 转换为 `typeB` 的语法如下：

```ts
let a: typeA;
let b = a as typeB;
```

## 使用 <> 运算符进行类型转换

除了使用 `as` 关键字外，您还可以使用 `<>` 运算符进行类型转换。例如：

```ts
let input = <HTMLInputElement>document.querySelector('input[type="text"]');

console.log(input.value);
```

使用 `<>` 进行类型转换的语法是：

```ts
let a: typeA;
let b = <typeB>a;
```

## 总结

- 类型转换允许您将一个变量从一种类型转换为另一种类型。
- 使用 `as` 关键字或 `<>` 运算符进行类型转换。
