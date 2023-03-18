# TypeScript Interface

摘要：在本教程中，你将学习 TypeScript 接口以及如何使用它们来执行类型检查。

## TypeScript 接口介绍

**TypeScript 接口定义了你代码中的契约。它们还为类型检查提供了明确的名称。**

让我们从一个简单的例子开始：

```ts
function getFullName(person: {
    firstName: string;
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(person));
```

输出：

```ts
John Doe
```

在这个例子中，TypeScript 编译器会检查你传入 `getFullName()` 函数的参数。

如果该参数有两个类型为字符串的属性，那么 TypeScript 编译器就会通过检查。否则，它将发出一个错误。

**从代码中你可以清楚地看到，函数参数的[类型注解](../basis-types//type-annotations)使代码难以阅读。**

为了解决这个问题，TypeScript 引入了接口的概念。

下面使用了一个名为 `Person` 的接口，它有两个字符串属性：

```ts
interface Person {
    firstName: string;
    lastName: string;
}
```

**根据惯例，接口名称采用驼峰命名法。它们使用单个大写字母来分隔名称中的单词**。例如，`Person`, `UserProfile`, 和 `FullName`。

在定义了 `Person` 接口后，你可以把它作为一个类型使用。而且你可以用接口名称来注释函数参数。

```ts
function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(john));
```

**现在的代码比以前更容易阅读了。**

`getFullName()` 函数将接受任何有两个字符串属性的参数。而且，**它不一定要正好有两个字符串属性**。请看下面的例子：

下面的代码声明了一个有四个属性的对象：

```ts
let jane = {
   firstName: 'Jane',
   middleName: 'K.'
   lastName: 'Doe',
   age: 22
};
```

由于 `jane` 对象有两个字符串属性 `firstName` 和 `lastName`，你可以把它传入 `getFullName()` 函数，如下所示：

```ts
let fullName = getFullName(jane);
console.log(fullName); // Jane Doe
```

## 可选属性

**一个接口可以有可选的属性。要声明一个可选属性，你需要在声明中在属性名称的末尾使用问号（`?`）**，像这样：

```ts
interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}
```

在这个例子中，`Person` 接口有两个必需的属性和一个可选的属性。

而下面展示了如何在 `getFullName()` 函数中使用 Person 接口：

```ts
function getFullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}
```

## 只读属性

**如果属性只在对象首次创建时才可修改，你可以在属性名称前使用 readonly 关键字**：

```ts
interface Person {
    readonly ssn: string;
    firstName: string;
    lastName: string;    
}

let person: Person;
person = {
    ssn: '171-28-0926',
    firstName: 'John',
    lastName: 'Doe'
}
```

在这个例子中，`ssn` 属性不能被改变：

```ts
person.ssn = '171-28-0000';
```

Error：

```ts
error TS2540: Cannot assign to 'ssn' because it is a read-only property.
```

## 函数类型

**除了用属性描述一个对象外，接口还允许你描述[函数类型](../functions/typescript-function-types.md)**

**要描述一个函数类型，你需要将接口分配给包含参数列表和返回类型的函数签名**。例如：

```ts
interface StringFormat {
    (str: string, isUpper: boolean): string
}
```

现在，你可以使用这个函数类型接口。

以下是如何声明一个函数类型的变量，并将其赋值为相同类型的函数值的示例：

```ts
let format: StringFormat;

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hi', true));
```

输出：

```ts
HI

```

**注意，参数名称不需要与函数签名匹配**。下面的例子等同于上面的例子：

```ts
let format: StringFormat;

format = function (src: string, upper: boolean) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};

console.log(format('hi', true));
```

`StringFormat` 接口**确保所有实现它的函数的调用者都能传入所需的参数：一个字符串和一个布尔值**。

下面的代码也能完全正常工作，尽管 `lowerCase` 被分配给一个没有第二个参数的函数：

```ts
let lowerCase: StringFormat;
lowerCase = function (str: string) {
    return str.toLowerCase();
}

console.log(lowerCase('Hi', false));
```

**注意，第二个参数在调用 `lowerCase()` 函数时被传递。**

## 类类型

如果你使用过 Java 或 C#，则可以发现接口的**主要用途是定义无关类之间的契约**。

例如，以下 `Json` 接口可以由任何无关的类实现：

```ts
interface Json {
   toJSON(): string
}
```

以下声明了一个实现 `Json` 接口的类：

```ts
class Person implements Json {
    constructor(private firstName: string,
        private lastName: string) {
    }
    toJson(): string {
        return JSON.stringify(this);
    }
}
```

在 `Person` 类中，我们实现了 `Json` 接口的 `toJson()` 方法。

以下示例展示了如何使用 `Person` 类：

```ts
let person = new Person('John', 'Doe');
console.log(person.toJson());
```

输出：

```ts
{"firstName":"John","lastName":"Doe"}
```

## 总结

- TypeScript 接口定义了代码中的契约并提供了显式名称以进行类型检查。
- 接口可以具有可选属性或只读属性。
- 接口可以用作函数类型。
- 接口通常用作类类型，它们在不相关的类之间建立合同。
