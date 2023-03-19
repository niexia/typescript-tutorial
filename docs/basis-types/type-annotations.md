# 理解 TypeScript 类型注解

摘要：在本教程中，你将学习TypeScript中的类型注解（type annotations)。

# TypeScript 里的类型注解是什么

TypeScript使用类型注解来明确指定标识符如变量、函数、对象等的类型。

TypeScript在标识符后使用语法`:type`作为类型注解
，其中`type`可以是任何有效的类型。

一旦一个标识符被注解了一个类型，它只能作为那个类型使用。如果标识符被用作不同的类型，TypeScript编译器将发出一个错误。

## 变量和常量中的类型注解

下面的语法显示了如何为变量和常量指定类型注解：

```ts
let variableName: type;
let variableName: type = value;
const constantName: type = value;
```

在这种语法中，类型注解在变量或常量名称之后，前面有一个冒号（`:`）。

下面的例子对一个变量使用了 `number` 注解。

```ts
let counter: number;
```

在这之后，你只能给`counter`变量分配一个数字。

```ts
counter = 1;
```

如果你给`counter`变量赋值一个字符串，你会得到一个错误：

```ts
let counter: number;
counter = 'Hello'; // 编译错误
```

Error：

```ts
Type '"Hello"' is not assignable to type 'number'.
```

在一个声明语句中，你可以为一个变量使用类型注解并对它进行初始化，就像这样：

```ts
let counter: number = 1;
```

在这个例子中，我们为`counter`变量使用 `number` 注解，并将其初始化为1。

下面展示了基本类型注解的其他例子：

```ts
let name: string = 'John';
let age: number = 25;
let active: boolean = true;
```

在这个例子中，`name`变量得到 `string` 类型，`age`变量得到 `number` 类型，`active`变量得到 `boolean` 类型。

## 类型注解的例子

### Array

为数组类型设置注解，你可以使用特定的类型，它后面跟着一个方括号`: type[]`：

```ts
let arrayName: type[];
```

例如，下面声明的是一个字符串数组:

```ts
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
```

### Object

要为一个对象指定一个类型，你可以使用对象类型注解。比如说：

```ts
let person: {
   name: string;
   age: number
};

person = {
   name: 'John',
   age: 25
}; // valid
```

在这个例子中，`person` 对象只接受一个有两个属性的对象：`string` 类型的 `name` 和 `number` 类型的`age`。

### Function 参数和返回值类型

下面展示了一个带有参数类型注解和返回类型注解的函数注解:

```ts
let greeting : (name: string) => string;
```

在这个例子中，你可以把任何接受字符串并返回字符串的函数赋值给`greeting`变量。

```ts
greeting = function (name: string) {
    return `Hi ${name}`;
};

```

下面会导致一个错误，因为分配给 `greeting` 变量的函数与它的函数类型不匹配：

```ts
greeting = function () {
    console.log('Hello');
};
```

Error:

```ts
Type '() => void' is not assignable to type '(name: string) => string'. Type 'void' is not assignable to type 'string'.
```

## 总结

- 使用语法为`:[type]`的类型注解来明确指定一个变量、函数、函数返回值等的类型。
