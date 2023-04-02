# TypeScript 类型推断

摘要：在这个教程中，你将学习 TypeScript 中的类型推断（type inference）。

**类型推断描述了当你没有明确注解类型时，TypeScript 在哪里以及如何推断类型。**

## 基本类型推断

当你声明一个变量时，你可以使用一个类型注解来明确指定它的类型。比如说：

```ts
let counter: number;
```

然而，**如果你将`counter`变量初始化为一个数字，TypeScript 将推断计数器的类型为 `number`**。比如说：

```ts
let counter = 0;
```

它等同于以下声明：

```ts
let counter: number = 0;
```

同样地，当你给一个函数参数赋值时，TypeScript 会将参数的类型推断为默认值的类型。比如说：

```ts
function setCounter(max=100) {
    // ...
}
```

在这个例子中，TypeScript 推断`max`参数的类型是 `number`。

类似地，TypeScript 推断下面的`increment()`函数的返回类型为 `number`。

```ts
function increment(counter: number) {
    return counter++;
}
```

它和下面效果一样：

```ts
function increment(counter: number) : number {
    return counter++;
}
```

## 最佳的通用类型算法

考虑下面的赋值：

```ts
let items = [1, 2, 3, null];
```

**为了推断 `items` 变量的类型，TypeScript 需要考虑数组中每个元素的类型。**

**它使用最佳通用类型算法（common type algorithm）来分析每个候选类型，并选择与所有其他候选类型兼容的类型。**

在这种情况下，TypeScript 选择了数字数组类型（`number[]`）作为最佳通用类型。

如果你在`items`数组中添加一个字符串，TypeScript 将推断`items`的类型为 `number` 和 `string`的数组：`(number | string)[]`。

```ts
let items = [0, 1, null, 'Hi'];
```

**当 TypeScript 无法找到最佳通用类型时，它会返回联合数组类型**。比如说：

```ts
let arr = [new Date(), new RegExp('\d+')];
```

在这个例子中，TypeScript 推断`arr`的类型为`(RegExp | Date)[]`。

## 上下文类型推断

**TypeScript 使用变量的位置来推断它们的类型。这个机制被称为上下文类型推断（contextual typing）**。例如：

```ts
document.addEventListener('click', function (event) {
    console.log(event.button); // 
});
```

在这个例子中，TypeScript 知道 `event` 参数是`MouseEvent`的一个实例，因为是 `click` 事件。

然而，当你把`click`事件改为 `scroll` 事件时，TypeScript 会发出一个错误：

```ts
document.addEventListener('scroll', function (event) {
    console.log(event.button); // compiler error
});
```

Error：

```ts
Property 'button' does not exist on type 'Event'.(2339)
```

TypeScript 知道在这种情况下，事件是一个`UIEvent`的实例，而不是一个`MouseEvent`。而`UIEvent`没有`button`属性，因此，TypeScript 抛出了一个错误。


## 类型推断 vs 类型注解

下面展示了类型推断和类型注解之间的区别：

Type inference 类型推断 | Type annotations 类型注解
-----------------------|------------------------
TypeScript 猜测类型 | 你明确告诉 TypeScript 类型

**在实践中，你应该尽可能地使用类型推断。以下情况下你应该使用类型注解：**

- **当你声明一个变量，但稍后再给它赋值时。**
- **当你需要一个不能被推断的变量时。**
- **当一个函数返回 `any` 类型，并且你需要澄清该值时。**

## 总结

- 在初始化变量、设置参数默认值和确定函数返回类型时，TypeScript 会进行类型推断。
- TypeScript 使用“最佳通用类型算法”选择最佳候选类型，这些类型与所有变量兼容。
- TypeScript 还使用上下文类型推断，根据变量的位置来推断变量的类型。
