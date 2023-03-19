# TypeScript for

摘要：在本教程中，你将学习 TypeScript 的 for 循环语句，重复执行一段代码。

## TypeScript for 语句介绍

下面是 TypeScript `for` 循环语句的语法：

```ts
for(initialization; condition; expression) {
    // statement
}
```

`for` 循环语句创建了一个循环，它由三个可选表达式组成，用分号 (`;`) 分隔，并用圆括号括住：

- `initialization`：是一个在循环开始之前计算一次的表达式。通常，你使用 `initialization` 来初始化一个循环计数器。

- `condition`：是一个在每次循环迭代结束时计算的表达式。如果条件为 `true`，则执行循环体中的语句。

- `expression`：是一个在每次循环迭代结束时，在计算 `condition` 之前计算的表达式。通常，你使用 `expression` 来更新循环计数器。

**`for` 循环语句中的所有三个表达式都是可选的**。这意味着你可以像这样使用 for 循环语句：

```ts
for(;;) {
    // do something
}
```

**在实践中，如果你知道循环应该运行多少次，你就应该使用 `for` 循环。如果你想根据循环执行次数以外的条件来停止循环，你应该使用 `while` 循环。**

TypeScript 允许你完全省略循环体，如下所示：

```ts
for(initialization; condition; expression);
```

然而，在实践中它很少使用，因为它使代码更难以阅读和维护。

## TypeScript for 循环示例

让我们看一些使用 TypeScript `for` 循环语句的例子。

### 1）简单的 TypeScript for 示例

下面的示例使用 for 循环语句将 0 到 9 之间的 10 个数字输出到控制台：

```ts
for (let i = 0; i < 10; i++) {
    console.log(i);
}
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

它的工作原理：

- 首先，声明一个变量 `i` 并将其初始化为 0。

- 然后检查 `i` 是否小于 `10`。如果是，则输出 `i` 到控制台并将 `i` 增加 `1`。

- 最后，重复第二步直到 `i` 等于 `10`。

### 2）TypeScript for 示例：可选块

下面的示例显示与上面的示例相同的输出。但是，for 没有 `initialization` 块：

```ts
let i = 0;
for (; i < 10; i++) {
    console.log(i);
}
```

像初 `initialization` 一样，你可以省略 `condition` 块。

但是，**当满足条件时，必须使用 if 和 break 语句来跳出循环**。否则，你会创建一个无限循环，导致程序反复执行直到崩溃。

```ts
for (let i = 0; ; i++) {
    console.log(i);
    if (i > 9) break;
}
```

下面的例子说明了一个省略所有三个块的 for 循环：

```ts
let i = 0;
for (; ;) {
    console.log(i);
    i++;
    if (i > 9) break;
}
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

- 首先，在进入 for 循环之前，声明一个循环计数器 `i` 并将其初始化为 0。
- 然后，在每次循环迭代中，将 i 输出到控制台，将 `i` 加一，并在 `i` 大于 9 时跳出循环。

## 总结

当你想要重复执行一段代码多次时，请使用 TypeScript for 语句。
