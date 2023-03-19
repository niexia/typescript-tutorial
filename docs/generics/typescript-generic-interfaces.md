# TypeScript Generic Interfaces

摘要：在本教程中，你将学习如何开发 TypeScript 泛型接口。

## TypeScript 泛型接口介绍

和类一样，接口也可以是泛型的。一个泛型接口在接口名称后面的尖括号 <> 表示其泛型类型参数列表：

```ts
interfaceName<T> {
    // ...
}

```

这使类型参数 `T` 对接口的所有成员可见。

类型参数列表可以有一个或多个类型。比如说：

```ts
interfaceName<U,V> {
    // ...
}

```

## TypeScript 泛型接口示例

让我们举几个声明泛型接口的例子。

### 1）描述对象属性的泛型接口

以下是如何声明一个包含两个成员键和值及其对应类型 K 和 V 的泛型接口：

```ts
interface Pair<K, V> {
    key: K;
    value: V;
}
```

现在，你可以使用 Pair 接口来定义任何类型的键/值对。例如：

```ts
let month: Pair<string, number> = {
    key: 'Jan',
    value: 1
};

console.log(month);
```

在这个例子中，我们声明了一个月份键值对，其键是一个字符串，值是一个数字。

### 2）描述方法的泛型接口

以下声明了一个带有两个方法 `add()` 和 `remove()` 的泛型接口：

```ts
interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

```

这个 `List<T>` 泛型类实现了 `Collection<T>` 泛型接口：

```ts
class List<T> implements Collection<T>{
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}

```

通过 `List<T>` 类，你可以创建各种类型（例如数字或字符串）的值列表。

例如，以下展示了如何使用 List<T> 泛型类来创建一个数字列表：

```ts
let list = new List<number>();

for (let i = 0; i < 10; i++) {
    list.add(i);
}
```

### 3）描述索引类型的泛型接口

以下声明了一个描述索引类型的接口：

```ts
interface Options<T> {
    [name: string]: T
}

let inputOptions: Options<boolean> = {
    'disabled': false,
    'visible': true
};
```

在本教程中，你已经了解了 TypeScript 泛型接口。
