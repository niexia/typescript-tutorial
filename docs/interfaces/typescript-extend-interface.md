# How to Extend Interfaces in TypeScript

摘要：在本教程中，你将学习如何扩展一个接口，允许你将一个接口的属性和方法复制到另一个接口。

## 扩展一个接口的接口

假设你有一个名为 `Mailable` 的接口，它包含两个名为 `send()` 和 `queue()` 的方法，如下所示。

```ts
interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}
```

而你有很多类已经实现了 `Mailable` 接口。

现在，你想给 `Mailable` 接口添加一个新的方法，以后像这样发送电子邮件：

```ts
later(email: string, after: number): void
```

然而，向 `Mailable` 接口添加 `later()` 方法会破坏当前的代码。

**为了避免这种情况，你可以创建一个扩展 `Mailable` 接口的新接口。**

```ts
interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}
```

要扩展一个接口，你可以使用 `extends` 关键字，语法如下：

```ts
interface A {
    a(): void
}

interface B extends A {
    b(): void
}

```

接口 `B` 扩展了接口 `A`，这样就有了 `a()` 和 `b()` 这两个方法。

和类一样，`FutureMailable` 接口继承了 `Mailable` 接口的 `send()` 和 `queue()` 方法。

下面展示了如何实现 `FutureMailable` 接口：

```ts
class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email} after ${after} ms. `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}
```

## 扩展多个接口的接口

**一个接口可以扩展多个接口，形成所有接口的组合**。比如说：

```ts
interface C {
    c(): void
}

interface D extends B, C {
    d(): void
}

```

在这个例子中，接口 `D` 扩展了接口 `B` 和 `C`，所以 `D` 拥有 `B` 和 `C` 接口的所有方法，也就是 `a()`、`b()` 和 `c()` 方法。

## 扩展类的接口

**TypeScript 允许一个接口扩展一个类。在这种情况下，接口继承了该类的属性和方法。另外，接口可以继承类的私有和受保护的成员，而不是仅仅继承公共成员。**

**这意味着，当一个接口扩展了一个具有私有或受保护成员的类时，该接口只能由该类或该接口所扩展的类的子类来实现。**

通过这样做，**你将接口的使用限制在该接口所扩展的类或该类的子类中。如果你试图从一个不是该接口所继承的类的子类中实现该接口，你会得到一个错误**。比如说：

```ts
class Control {
    private state: boolean;
}

interface StatefulControl extends Control {
    enable(): void
}

// 该类的子类来实现接口
class Button extends Control implements StatefulControl {
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control { }


// Error: cannot implement
class Chart implements StatefulControl {
    enable() { }

}
```

## 总结

- 一个接口可以扩展一个或多个现有的接口。
- 接口也可以扩展一个类。如果该类包含私有或受保护的成员，则只能由该类或该类的子类实现接口。
