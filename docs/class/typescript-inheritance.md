# TypeScript Inheritance

摘要：在本教程中，你将了解到 TypeScript 的继承概念，以及如何使用它来重用另一个类的功能。

## TypeScript 继承的介绍

**一个[类](./typescript-class)可以重用另一个类的属性和方法。这在 TypeScript 中被称为继承。**

**继承属性和方法的类被称为子类。而其属性和方法被继承的类被称为父类**。这些名字来自于孩子从父母那里继承基因的性质。

继承允许你重新使用现有类的功能，而不需要重写它。

JavaScript 使用原型继承，而不是像 Java 或 C# 那样的经典继承。ES6 引入了类的语法，这只是原型继承的语法糖。TypeScript 支持像 ES6 那样的继承。

假设你有以下的 Person 类：

```ts
class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

```

要继承一个类，你可以使用 `extends` 关键字。例如，下面的 `Employee` 类继承了 `Person` 类。

```ts
class Employee extends Person {
    //..
}
```

在这个例子中，`Employee` 是一个子类，`Person` 是父类。

## 构造函数

因为 `Person` 类有一个初始化 `firstName` 和 `lastName` 属性的构造函数，你需要在 `Employee` 类的构造函数中通过调用其父类的构造函数来初始化这些属性。

为了在子类的构造函数中调用父类的构造函数，你可以使用 `super()` 语法。例如：

```ts
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string
    ) {
        
        // call the constructor of the Person class:
        super(firstName, lastName);
    }
}
```

以下是创建 `Employee` 类的一个实例：

```ts
let employee = new Employee('John','Doe','Front-end Developer');
```

因为 `Employee` 类继承了 `Person` 类的属性和方法，你可以在 Employee 对象上调用 `getFullName()` 和 `describe()` 方法，如下所示。

```ts
let employee = new Employee('John', 'Doe', 'Web Developer');

console.log(employee.getFullName())。
console.log(employee.describe())。
```

输出：

```ts
John Doe
This is John Doe.
```

## 方法重写

当你在 `employee` 对象上调用 `employee.describe()` 方法时，将执行 Person 类的 `describe()` 方法，该方法显示消息：`This is John Doe`。

如果你希望 `Employee` 类有自己版本的 `describe()` 方法，你可以在 `Employee` 类中这样定义它。

```ts
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string
    ) {

        super(firstName, lastName);
    }

    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}
```

在 `describe()` 方法中，我们使用 `super.methodInParentClass()` 语法调用了父类的 `describe()` 方法。

如果你在 `employee` 对象上调用 `describe()` 方法，`Employee` 类中的 `describe()` 方法会被调用。

```ts
let employee = new Employee('John', 'Doe', 'Web Developer');
console.log(employee.describe());
```

输出：

```ts
This is John Doe.I'm a Web Developer.
```

## 总结

- 使用 `extends` 关键字来允许一个类继承另一个类。
- 在子类的构造函数中使用 `super()` 来调用父类的构造函数。同时，使用 `super.methodInParentClass()` 语法，在子类的方法中调用 `methodInParentClass()`。
