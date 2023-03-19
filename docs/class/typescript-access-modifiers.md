# TypeScript Access Modifiers

摘要：在本教程中，你将学习 TypeScript 中的访问修饰符。

**访问修饰符改变了一个类的属性和方法的可见性。TypeScript 提供了三种访问修饰符：**

- **private 私有的**
- **protected 保护的**
- **public 公共的**

请注意，TypeScript 在**编译时**从逻辑上控制访问，**而不是在运行时**。

## private 修饰符

**`private` 修饰符将可见性限制为仅在同一类中**。当你将 `private` 修饰符添加到属性或方法时，只能在同一类内访问该属性或方法。任何尝试在类外部访问私有属性或方法都会导致编译时错误。

以下示例展示了如何使用 `private` 修饰符来限定 `person` 类的 `ssn`、`firstName` 和 `lastName` 属性：

```ts
class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;
    // ...
}
```

一旦有了这个私有属性，你就可以在 `Person` 类的构造函数或方法中访问 `ssn` 属性。比如说：

```ts
class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;

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

下面尝试在类外面访问 `ssn` 属性将编译错误：

```ts
let person = new Person('153-07-3130', 'John', 'Doe');
console.log(person.ssn); // compile error
```

## public 修饰符

**`public` 修饰符允许类的属性和方法从所有位置被访问。如果你没有为属性和方法指定任何访问修饰符，它们将默认使用公共修饰符。**

例如，`Person` 类的 `getFullName()` 方法具有 `public` 修饰符。下面明确地将 `public` 修饰符添加到 `getFullName()` 方法中：

```ts
class Person {
    // ...
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
    // ...
}
```

它具有与省略 `public` 关键字相同的效果。

## protected 修饰符

**`protected` 修饰符允许一个类的属性和方法在同一个类和子类中被访问。**

当一个类（子类）继承自另一个类（父类）时，它就是父类的一个子类。

如果你试图从其他地方访问受保护的属性或方法，TypeScript 编译器会发出一个错误。

要给一个属性或方法添加保护的修饰符，你可以使用 `protected` 关键字。比如说。

```ts
class Person {

    protected ssn: string;
    
    // other code
}
```

`ssn` 属性现在是受保护的。它可以在 `Person` 类和任何继承于 `Person` 类的类中被访问。在这里你会学到更多关于继承的知识。


Person 类声明了两个私有属性和一个保护属性。它的构造函数将这些属性初始化为三个参数。

为了使代码更短，**TypeScript 允许你既声明属性又在构造函数中初始化它们**，像这样。

```ts
class Person {
    constructor(protected ssn: string, private firstName: string, private lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

```

**当考虑属性和方法的可见性时，最好从最不可见的访问修饰符 private 开始。**

## 总结

- TypeScript 为类的属性和方法提供了三种访问修改器：`private`、`protected` 和 `public`。
- `private` 修改器允许在同一个类中访问。
- `protected` 修饰符允许在同一个类和子类中访问。
- `public` 修饰符允许从任何地方访问。
