# TypeScript Class

摘要：在本教程中，你将了解到 TypeScript 类。

## TypeScript 类的介绍

JavaScript 没有像 Java 和 C# 等其他编程语言那样的类概念。在 ES5 中，您可以使用构造函数和原型继承来创建一个“类”。

例如，要创建一个具有三个属性 `ssn`、`firstName` 和 `lastName` 的 `Person` 类，您可以使用以下构造函数：

```ts
function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}
```

接下来，您可以定义一个原型方法，通过连接名字和姓氏来获取人的全名，就像这样：

```ts
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
```

接下来，你可以通过创建一个新对象来使用 Person 类：

```ts
let person = new Person('171-28-0926','John','Doe');
console.log(person.getFullName());
```

它将向控制台输出一下以下内容：

```ts
John Doe
```

ES6 允许你定义一个类，它只是一种语法糖，用于创建构造函数和原型继承：

```ts
class Person {
    ssn;
    firstName;
    lastName;

    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

在类的语法中，构造函数被明确定义并放置在类内部。以下代码添加了 `getFullName()` 方法：

```ts
class Person {
  ssn;
  firstName;
  lastName;

  constructor(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

使用 `Person` 类与使用 `Person` 构造函数是相同的：

```ts
let person = new Person('171-28-0926','John','Doe');
console.log(person.getFullName());
```

TypeScript 类为类的属性和方法添加了类型注解。以下是 TypeScript 中的 Person 类示例：

```ts
class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
```

当您为属性、构造函数和方法注解类型时，TypeScript 编译器将执行相应的类型检查。

例如，你不能用 `number` 来初始化 ssn。下面的代码将导致错误：

```ts
let person = new Person(171280926, 'John', 'Doe');
```

## 总结

- 使用 class 关键字在 TypeScript 中定义一个类。
- TypeScript 利用 ES6 类语法并添加类型注解使得该类更加健壮。
