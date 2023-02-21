# TypeScript Number

摘要：在本教程中，你将学习 TypeScript 的数字数据类型（number data types)。

TypeScript 中的所有数字要么是浮点数值，要么是大整数。浮点数的类型是`number`，而大整数的类型是`bigint`。

## number 类型

下面展示了如何声明一个包含浮点值的变量：

```ts
let price: number;
```

或者你可以初始化 `price` 变量为一个数字：

```ts
let price = 9.95
```

正如在 JavaScript 中，TypeScript 支持十进制、十六进制、二进制和八进制的数字字面量。

## 十进制数字

下面是一些十进制的数字：

```ts
let counter: number = 0;
let x: number = 100, 
    y: number = 200;
```
## 二进制数字

二进制数使用前导零后跟小写或大写字母“B”，例如`0b`或`0B`：

```ts
let bin = 0b100;
let anotherBin: number = 0B010;
```

注意 `0b` 或 `0B` 后面的数字只能是 `0` 或者 `1`。


## 八进制数字

八进制数使用前导零后跟字母“o”（自 ES2015 以来），即 0o。0o 之后的数字是 0 到 7 之间的数字：

```ts
let octal: number = 0o10;
```

## 十六进制数字

十六进制使用前导零后跟着一个小写或者大写字母 X（0x 或 0X），0x 之后的数字在（0123456789ABCDEF）范围内，例如：


```ts
let hexadecimal: number = 0XA;
```
JavaScript 有一个 Number 类型（大写字母 N），它是一个非原始值的包装对象。在 TypeScript 中尽可能不要使用这种 Number 类型。


## 大整数

大整数表示比 2^53 – 1 大的整数。大整数字面量在整数字面量的末尾有`n`字符，例如：

```ts
let big: bigint = 9007199254740991n;
```


## 总结

- 在 TypeScript 中，所以的数字要么是浮点数，其类型为 `number`，要么是大整数，其类型为 `bigint`。
- 尽可能避免使用 Number 类型。