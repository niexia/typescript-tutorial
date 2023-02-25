# TypeScript Type Aliases

摘要：在本教程中，你将学习如何使用类型别名为类型定义新名称。

## TypeScript 类型别名介绍

类型别名允许你为一个现有的类型创建一个新的名称。下面显示了类型别名的语法：

```ts
type alias = existingType;
```

现有的类型可以是任何有效的 TypeScript 类型。

以下示例使用类型别名 chars 来代表字符串类型：

```ts
type chars = string;
let message: chars; // same as string type
```

**为联合类型创建类型别名是很有用的**。比如说：

```ts
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
input = false; // Compiler error
```

## 总结

- 使用类型别名来为现有的类型定一个新名称。
