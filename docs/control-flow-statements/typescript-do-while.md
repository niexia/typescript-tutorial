# TypeScript do while

摘要：在本教程中，您将学习如何使用 `do...while` 语句创建一个循环，直到条件计算为 `false` 才停止。

## TypeScript do...while 语句介绍

以下展示了 `do...while` 语句的语法：

```ts
do {
    // do something
} while(condition);
```

`do...while` 语句执行其主体中由大括号（`{}`）包围的语句，直到条件为 `false`。

**`do...while` 语句总是至少执行一次其循环体。**

与 `while` 语句不同，`do...while` 语句在每次循环迭代后计算 `condition`，因此被称为后测循环（post-test loop）。

## TypeScript do...while 语句示例

以下示例使用 `do...while` 语句将数字从 0 到 9 输出到控制台：

```ts
let i = 0;

do {
    console.log(i);
    i++
} while (i < 10);
```

输出：

```ts
0
1
2
3
4
5
6
7
8
9
```

它是如何工作的：

- 首先，在进入循环之前声明一个变量 `i` 并将其初始化为 0。
- 然后，将 `i` 输出到控制台，将其加 1，并检查它是否小于 10。如果是，则重复循环，直到 `i` 大于或等于 10。

## 总结

使用 `do...while` 语句创建一个循环，直到条件为 `false` 为止。
