# TypeScript readonly

摘要：在本教程中，你将学习如何使用 TypeScript 的 readonly 访问修改器，将类属性标记为不可变的属性。

TypeScript 提供了 readonly 修改器，**允许你标记一个类的属性为不可变的。只有在以下两个地方之一才能对只读属性进行赋值：**

- **在属性声明中。**
- **在同一个类的构造函数中。**

要把一个属性标记为不可变的，你可以使用 readonly 关键字。下面显示了如何在 Person 类中声明一个只读属性：

```ts
class Person {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}
```

在这个例子中，`birthDate` 属性是一个只读属性，在 `Person` 类的构造函数中被初始化。

下面的尝试重新分配 `birthDate` 属性会导致错误：

```ts
let person = new Person(new Date(1990, 12, 25));
person.birthDate = new Date(1991, 12, 25); // Compile error
```

像其他访问修饰符一样，你可以像这样把 readonly 的声明和初始化合并到构造函数中：

```ts
class Person {
    constructor(readonly birthDate: Date) {
        this.birthDate = birthDate;
    }
}
```

## Readonly vs. const

下面显示了 readonly 和 const 之间的区别：


 - | readonly | const
---------|----------|---------
 用于  | 类型属性 | 变量
 初始化 | 在声明中或者同一个类的构造函数中 | 在声明中

## 总结

- 使用只读访问修饰符来标记一个类属性为不可变的。
- 一个只读的属性必须作为声明的一部分或在同一个类的构造函数中被初始化。
