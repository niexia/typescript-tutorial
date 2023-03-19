# TypeScript Type Guards

摘要：在本教程中，你将了解到 TypeScript 中的 Type Guard。

**类型守卫允许你在[条件块](../control-flow-statements/typescript-if-else)中缩小变量的类型。**

## typeof

让我们看一下下面的例子：

```ts
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}

```

它是如何工作的：

- 首先，定义 `alphanumeric` 类型，它可以容纳一个字符串或一个数字。
- 接下来，声明一个函数，增加两个类型为 `alphanumeric` 的变量 `a` 和 `b`。
- 然后，使用 `typeof` 操作符检查这两个类型的参数是否是数字。如果是，则使用 + 运算符计算参数之和。
- 然后，使用 `typeof` 操作符检查两种类型的参数是否都是字符串。如果是，那么就把两个参数连接起来。
- 最后，如果参数既不是数字也不是字符串，则抛出一个错误。

在这个例子中，TypeScript 知道条件块中 `typeof` 操作符的用法。在下面的 `if` 块中，TypeScript 认识到 a 和 b 是数字。

同样，在下面的 `if` 块中，TypeScript 将 `a` 和 `b` 视为字符串，因此，你可以将它们连接成一个字符串：

```ts
if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
}
```

## instanceof

与 `typeof` 操作符类似，TypeScript 也知道 `instanceof` 操作符的用法。比如说：

```ts
class Customer {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner) : string {
    let message: string;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    return message;
}

```

它是如何工作的。

首先，声明 `Customer` 和 `Supplier` 商类。
第二，创建一个类型别名 `BusinessPartner`，它是 `Customer` 和 `Supplier` 的联合类型。
第三，声明一个函数 `signContract()`，接受一个 `BusinessPartner` 类型的参数。
最后，检查合作伙伴是否是 `Customer` 或 `Supplier` 的实例，然后提供相应的逻辑。

在下面的 `if` 块中，TypeScript 知道合作伙伴是 `Customer` 类型的一个实例，因为有 `instanceof` 操作符

```ts
if (partner instanceof Customer) {
    message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
}
```

同样地，TypeScript 知道在下面的 `if` 块里面，`partner` 是 `Supplier` 的一个实例：

```ts
if (partner instanceof Supplier) {
    message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
}
```

**当一个 `if` 缩小了一个类型时，TypeScript 知道在 `else` 内不是那个类型而是另一个类型**。比如说：

```ts
function signContract(partner: BusinessPartner) : string {
    let message: string;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        // must be Supplier
        message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }
    return message;
}
```

## in

**`in` 操作符对对象上的一个属性的存在进行安全检查。你也可以把它作为一个类型保护**。比如说：

```ts
function signContract(partner: BusinessPartner) : string {
    let message: string;
    if ('isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        // must be Supplier
        message = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return message;
}
```

## 用户定义的类型守卫

用户定义的类型守卫允许你定义一个类型守卫或帮助 TypeScript 在你使用函数时推断出一种类型。

用户定义的类型守卫函数是一个简单地返回 `arg is aType` 的函数。例如：

```ts
function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
}
```

在这个例子中，`isCustomer()` 是一个用户定义的类型守卫函数。现在你可以在以下情况下使用它：

```ts
function signContract(partner: BusinessPartner): string {
    let message: string;
    if (isCustomer(partner)) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }

    return message;
}

```

## 总结

- 类型守卫可在条件块中缩小变量的类型范围。
- 使用 `typeof` 和 `instanceof` 运算符来实现条件块中的类型守卫。
