# TypeScript Generic Constraints

摘要：在本教程中，你将学习 TypeScript 中的通用约束。

## TypeScript 中通用约束的介绍

考虑以下示例：

```ts
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}
```

`merge()` 函数是一个可以合并两个对象的范型函数。例如：

```ts
let person = merge(
    { name: 'John' },
    { age: 25 }
);

console.log(result);
```

输出：

```ts
{ name: 'John', age: 25 }
```

它完美地工作。

`merge()` 函数需要两个对象。**但是，它不会阻止你像这样传递非对象**：

```ts
let person = merge(
    { name: 'John' },
    25
);

console.log(person);
```

输出：

```ts
{ name: 'John' }
```

**TypeScript 并没有发出任何错误。**

**你可能想给 `merge()` 函数添加一个约束，而不是对所有的类型进行工作，这样它就只能对对象进行工作。**

**要做到这一点，你需要列出需求，作为 `U` 和 `V` 类型可以是什么的约束条件。**

**为了表示这个约束，你使用 `extends` 关键字**。比如说：

```ts
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}
```

因为 `merge()` 函数现在被约束了，它将不再对所有类型工作。相反，它只对对象类型起作用。

下面的情况将导致一个错误：

```ts
let person = merge(
    { name: 'John' },
    25
);
```

Error：

```ts
Argument of type '25' is not assignable to parameter of type 'object'.
```

## 在泛型约束中使用类型参数

TypeScript 允许你声明一个由另一个类型参数约束的类型参数。

以下 `prop()` 函数接受一个对象和一个属性名称。它返回属性的值：

```ts
function prop<T, K>(obj: T, key: K) {
    return obj[key];
}

```

编译器会发出以下错误：

```ts
Type 'K' cannot be used to index type 'T'.

```

**为了解决这个错误，你需要添加一个约束条件到 K 上，以确保它是 T 的 key**，如下所示：

```ts
function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

```

如果你给 `prop` 函数传递一个 `obj` 上存在的属性名，编译器不会报错。比如说：

```ts
let str = prop({ name: 'John' }, 'name');
console.log(str);
```

输出：

```ts
John
```

然而，如果你传递一个不存在于第一个参数上的属性名，则编译器会发出错误：

```ts
let str = prop({ name: 'John' }, 'age');
```

Error：

```ts
Argument of type '"age"' is not assignable to parameter of type '"name"'.
```

## 总结

- 使用 `extends` 关键字将类型参数约束为特定类型。
- 使用 extends keyof 来约束作为另一对象属性的类型。
