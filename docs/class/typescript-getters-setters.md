# TypeScript Getter and Setter

摘要：在本教程中，你将学习如何使用 TypeScript 的 getters 和 setters。

## TypeScript Getter 和 Setter 介绍

以下是一个简单的 `Person` 类，具有三个属性：`age`，`firstName` 和 `lastName`：

```ts
class Person {
    public age: number;
    public firstName: string;
    public lastName: string;
}
```

要访问 `Person` 类的任何属性，你可以像这样简单的执行：

```ts
let person = new Person();
person.age = 26;

```

假设你将一个来自用户输入的值分配给了 `age` 属性：


```ts
person.age = inputAge;
```

`inputAge` 可以是任何数字。为了确保年龄的有效性，你可以在赋值前进行检查，如下：

```ts
if( inputAge > 0 && inputAge < 200 ) {
    person.age = inputAge;
}
```

在各个地方使用此检查是冗余和繁琐的。

为避免重复检查，你可以使用 setters 和 getters。**getters 和 setters 允许你控制类的属性访问**。

对于每个属性：

- 一个 getter 方法返回属性的值。getter 也被称为 accessor（访问器）。
- 一个 setter 方法更新该属性的值。一个 setter 也被称为一个 mutator。

getter 方法以关键字 get 开头，setter 方法以关键字 set 开头。

```ts
class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

 
    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

```

它是如何工作的：

- 首先，将 `age`、`firstName` 和 `lastName` 属性的访问修饰符从 `public` 改为 `private`。
- 第二，将属性 `age` 改为 `_age`。
- 第三，为 `_age` 属性创建 `getter` 和 `setter` 方法。在 `setter` 方法中，在将其分配给 `_age` 属性之前，检查输入年龄的有效性。
  
现在，你可以访问 age 的 setter 方法，如下所示：

```ts
let person = new Person();
person.age = 10。

```

**注意，对 setter 的调用不像普通方法那样有括号**。当你调用 `person.age` 时，`age` 设置器方法被调用。如果你指定了一个无效的年龄值，setter 将抛出一个错误。

```ts
person.age = 0;
```

Error：

```ts
Error: The age is invalid
```

当你访问 `person.age` 时，会调用 `age` getter：

```ts
console.log(person.age);
```

下面为 `firstName` 和 `lastName` 属性添加 `getters` 和 `setters`：

```ts
class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

```

## 更多 TypeScript Getters/Setters 例子

正如你从代码中看到的，当你想在将数据分配给属性之前验证数据时，setters 是很有用的。此外，你还可以执行复杂的逻辑。

下面展示了如何创建 `fullname` getter 和 setter。

```ts
class Person {
    // ... other code 
    public get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    public set fullName(name: string) {
        let parts = name.split(' ');
        if (parts.length != 2) {
            throw new Error('Invalid name format: first last');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
```

它是如何工作的：

- getter 方法返回名字（first name）和姓氏（last name）的拼接字符串。
- setter 方法接受一个格式为 `first last` 的字符串作为全名，并将第一部分赋值给 firstName 属性，第二部分赋值给 lastName 属性。

现在，您可以像访问常规类属性一样访问 `fullname` 的 setter 和 getter：

```ts
let person = new Person();
person.fullname = 'John Doe';

console.log(person.fullName);
```

## 总结

- 使用 TypeScript 的 getter/setters 来控制一个类的访问属性。
- getter/setters 也被称为 accessors/mutators。
