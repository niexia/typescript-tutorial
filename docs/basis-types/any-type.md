# TypeScript any type

摘要：在本教程中，你将了解 TypeScript 的 `any` 类型以及如何在你的代码中**正确使用它**。

## TypeScript any 类型的介绍

有时，你可能需要在一个变量中存储一个值。**但在编写程序时，你不知道它的类型**。而这个未知的值可能来自第三方 API 或用户输入。

在这种情况下，你想选择不进行类型检查，并允许该值通过编译时的检查。

为了做到这一点，你可以使用 `any` 类型。**`any`类型允许你将任何类型的值分配给一个变量**。

```ts
// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);
```

输出：

```ts
{ latitude: 10.11, longitude: 12.12 }
```

在这个例子中，`currentLocation` 变量被分配给 `JSON.parse()` 函数返回的一个对象。

然而，当你使用 `currentLocation` 来访问对象属性时，TypeScript 也不会进行任何检查

输出：

```ts
undefined
```

**TypeScript 编译器并没有抱怨或发出任何错误**。

**`any` 类型为你提供了一种与现有 JavaScript 代码库合作的方式。它允许你在编译过程中逐渐选择加入和退出类型检查。因此，你可以使用 `any` 类型将一个 JavaScript 项目迁移到 TypeScript 上。**

## TypeScript any：隐式类型

如果你声明一个变量而没有指定类型，TypeScript 会假定你使用 any 类型。这个功能被称为[类型推断](type-inference)。基本上，TypeScript 会猜测变量的类型。比如说：

```ts
let result;
```

**在这个例子中，TypeScript 为你推断了类型。这种做法被称为隐式类型化。**

:::tip
注意，要禁用隐式类型转换为 `any` 类型，你要把 `tsconfig.json` 文件中的 `noImplicitAny` 选项改为 `true`。你将在后面的教程中学习更多关于 `tsconfig.json` 的内容。
:::

## TypeScript any vs. object

如果你用 `any` 类型声明一个变量，你也可以给它分配任何值。

但是，你不能对它调用一个方法，即使这个方法实际存在。比如说。

```ts
let result: any;
result = 10.123;
console.log(result.toFixed());
result.willExist(); //
```

在这个例子中，**即使 `willExist()` 方法在编译时不存在，TypeScript 编译器也不会发出任何警告，因为 `willExist()` 方法在运行时可能可用**。

然而，如果你把 `result` 变量的类型改为 `object`，TypeScript 编译器会发出错误：

```ts
let result: object;
result = 10.123;
result.toFixed();
```

Error：

<p style="text-decoration: line-through">error TS2339: Property 'toFixed' does not exist on type 'object'.</p>

```ts
Type 'number' is not assignable to type 'object'.
```

## 总结

- TypeScript 的 `any` 类型允许你存储任何类型的值。它指示编译器跳过类型检查。
- 使用 `any` 类型来存储一个你在编译时不知道其类型的值，或者当你把一个 JavaScript 项目迁移到 TypeScript 项目时。
