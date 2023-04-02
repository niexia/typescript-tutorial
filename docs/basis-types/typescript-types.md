# TypeScript 类型

摘要：在本教程中，你将了解 TypeScript 类型和它们的用途。

## 在 TypeScript 中的一个类型是什么

在 TypeScript 中，**类型是一个值所拥有的不同属性和函数的便捷引用方式。**（a type is a convenient way to refer to the different **properties** and **functions** that a **value** has.）

值是你可以分配给一个变量的任何东西，例如，一个数字、一个字符串、一个数组、一个对象和一个函数。

看下面这个值：

```ts
Hello
```

当你看这个值时，你可以说它是一个字符串。而且这个值具有字符串所具有的属性和方法。

例如，`'Hello'`值有一个名为`length`的属性，它返回字符的数量。

```ts
console.log('Hello'.length); // 5
```

它也有许多方法，如`match()`、`indexOf()`和`toLocaleUpperCase()`。比如：


```ts
console.log('Hello'.toLocaleUpperCase()); // HELLO
```

如果你看着`“Hello”`这个值，并通过列出其属性和方法来描述它，那将是很不方便的。

**一种更简短的方法是为值分配一个类型**。在这个例子中，你说`“Hello”`是一个字符串。然后，你就知道可以使用字符串的属性和方法来处理值`“Hello”`。

**总之，在 TypeScript 中：**

- **类型是一个标签，用于描述一个值具有的不同属性和方法。**
- **每个值都有一个类型。**

## TypeScript 中的类型

TypeScript 继承了 JavaScript 的内置类型。TypeScript 的类型分为：

- 基本类型 Primitive types
- 对象类型 Object types

### 基本类型

以下说明了 TypeScript 中的原始类型：


Name | Description
---------|----------
 string | 代表文本数据
 number | 代表数字
 boolean | 有 true 和 false
 null | 只有一个值：null
 undefined | 有一个值：number，它是一个未初始化的变量的默认值
 symbol | 代表一个唯一的常量值

 ### 对象类型

对象类型是指函数、数组、类等。稍后，你将学习如何创建自定义对象类型。

## TypeScript 中类型的目的

**TypeScript 中的类型有两个主要目的：**

- **首先，TypeScript 编译器使用类型来分析你的代码是否有错误。**
- **第二，类型让你可以了解哪些值与变量有关。**

## TypeScript 类型的例子

下面的例子使用 `querySelector()` 方法来选择 `<h1>` 元素。

```ts
const heading = document.querySelector('h1')。
```

TypeScript 编译器知道`heading`的类型是`HTMLHeadingElement`：

<img src="/TypeScript-types-example-1.png"/>

所以它显示了一个`heading`可以访问的`HTMLHeadingElement`类型的方法列表：

<img src="/TypeScript-types-properties-and-methods.png"/>

如果你试图访问一个不存在的属性或方法，TypeScript 编译器将显示一个错误。比如说：

<img src="/TypeScript-types-error.png"/>

## 总结

- TypeScript 中的每个值都有一个类型。
- 类型是一个标签，描述了一个值的属性和方法。
- TypeScript 编译器使用类型来分析你的代码，以寻找 bug 和错误。
