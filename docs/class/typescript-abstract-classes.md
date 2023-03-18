# TypeScript Abstract Classes

摘要：在本教程中，你将学习 TypeScript 的抽象类。

## TypeScript 抽象类介绍

**抽象类通常用于定义派生类扩展的通用行为。与[普通类](./typescript-class)不同，抽象类不能直接实例化。**

为了声明一个抽象类，你使用 `abstract` 关键字：

```ts
abstract class Employee {
    //...
}
```

通常情况下，一个抽象类包含一个或多个抽象方法。

**抽象方法不包含实现。它仅定义了方法的签名，而不包括方法体。抽象方法必须在派生类中实现。**

下面显示了拥有 `getSalary()` 抽象方法的 `Employee` 抽象类：

```ts
abstract class Employee {
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getSalary(): number
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
```

在 `Employee` 类中：

- 构造函数声明了 `firstName` 和 `lastName` 属性。
- `getSalary()` 方法是一个抽象方法。派生类将根据 `employee` 的类型来实现逻辑。
- `getFullName()` 和 `compensationStatement()` 方法包含详细的实现。请注意，`compensationStatement()` 方法调用 `getSalary()` 方法。


因为 `Employee` 类是抽象的，你不能从中创建一个新的对象。下面的语句会导致一个错误：

```ts
let employee = new Employee('John','Doe');
```

Error：

```ts
error TS2511: Cannot create an instance of an abstract class.
```

下面的 `FullTimeEmployee` 类继承于 `Employee` 类：

```ts
class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}
```

在这个 `FullTimeEmployee` 类中，salary 是在构造函数中设置的。因为 `getSalary()` 是 `Employee` 类的一个抽象方法，`FullTimeEmployee` 类需要实现这个方法。在这个例子中，它只是返回工资（salary），没有任何计算。

下面是同样继承自 `Employee` 类的 `Contractor` 类：

```ts
class Contractor extends Employee {
    constructor(
      firstName: string,
      lastName: string,
      private rate: number,
      private hours: number
    ) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}
```

在 `Contractor` 类中，构造函数初始化了费率（rate）和小时（hours）。`getSalary()` 方法通过将费率与小时相乘来计算工资。

下面首先创建一个 `FullTimeEmployee` 对象和一个 `Contractor` 对象，然后向控制台显示赔偿声明：

```ts
let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);

console.log(john.compensationStatement());
console.log(jane.compensationStatement());
```

输出：

```ts
John Doe makes 12000 a month.
Jane Doe makes 16000 a month.
```

**当你想在一些相关的类之间共享代码时，使用抽象类是一个好的做法。**

## 总结

- **抽象类不能被实例化。**
- **一个抽象类至少有一个抽象方法。**
- **要使用一个抽象类，你需要继承它并提供抽象方法的实现。**
