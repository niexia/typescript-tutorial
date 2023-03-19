# TypeScript Intersection Types

摘要：在本教程中，你将了解到 TypeScript 的交叉类型。

## TypeScript 交叉类型介绍

**交叉类型通过结合多个现有类型创建一个新的类型。新类型具有现有类型的所有特征。**

为了组合类型，你使用 `&` 操作符，如下所示：

```ts
type typeAB = typeA & typeB;
```

`typeAB` 将拥有 `typeA` 和 `typeB` 的所有属性。

**请注意，联合类型使用 `|` 运算符定义一个变量，该变量可以保存 typeA 或 typeB 类型的值。**

```ts
let varName = typeA | typeB; // union type
```

假设你有三个接口：`BusinessPartner`，`Identity`和 `Contact`：

```ts
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

```

以下定义了两个交叉类型：

```ts
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
```

`Employee` 类型包含 `Identity` 和 `Contact` 类型的所有属性：

```ts
type Employee = Identity & Contact;

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};
```

`Customer` 类型包含 `BusinessPartner` 和 `Contact` 类型的所有属性：

```ts
type Customer = BusinessPartner & Contact;

let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};
```

请注意，`BusinessPartner` 和 `Identity` 都具有相同类型的属性名称。如果它们不是，则会出现错误。

## 类型顺序

当你声明交叉类型时，类型的顺序并不重要。例如：

```ts
type typeAB = typeA & typeB;
type typeBA = typeB & typeA;
```

在这个例子中，`typeAB` 和 `typeBA` 具有相同的属性。


## 总结

- 交叉类型将两个或多个类型组合在一起，创建一个新的类型，该类型具有现有类型的所有属性。
- 当你组合类型时，类型顺序并不重要。
