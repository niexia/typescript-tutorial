# TypeScript Static Methods and Properties

摘要：在本教程中，你将学习 TypeScript 的静态属性和方法。

## 静态属性

**与实例属性不同，静态属性是在一个类的所有实例中共享的。**

要声明一个静态属性，你要使用 `static` 关键字。要访问一个静态属性，你要使用 `className.propertyName` 语法。例如：

```ts
class Employee {
    static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
    }
}
```


在这个例子中，`headcount` 是一个静态属性，初始化为 0。每当一个新的对象被创建时，它的值就会增加 1。

下面创建了两个 `Employee` 对象，并显示了 `headcount` 属性的值。它按照预期返回 2：

```ts
let john = new Employee('John', 'Doe', 'Front-end Developer').
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.headcount); // 2

```

## 静态方法

**与静态属性类似，静态方法也是在类的实例间共享的。要声明一个静态方法，你要在方法名称前使用 `static` 关键字**。比如：

```ts
class Employee {
    private static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
    }

    public static getHeadcount() {
        return Employee.headcount;
    }
}
```

在这个例子中：

- 首先，将 `headcount` 静态属性的访问修饰符从 `public` 改为 `private`，这样，如果不创建一个新的 `Employee` 对象，它的值就不能在类之外被改变。

- 第二，添加 `getHeadcount()` 静态方法，返回 `headcount` 静态属性的值。

要调用一个静态方法，你要使用 `className.staticMethod()` 语法。例如：

```ts
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.getHeadcount); // 2

```

在实践中，你会发现包含许多静态属性和方法的库，如 `Math` 对象。它有 `PI`、`E`、...静态属性和 `abs()`、`round()` 等静态方法。

## 总结

- 静态属性和方法是由一个类的所有实例共享的。
- 在一个属性或方法前使用 `static` 关键字使其成为静态的。
