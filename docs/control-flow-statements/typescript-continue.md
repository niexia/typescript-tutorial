# TypeScript continue

摘要：在本教程中，你将学习 TypeScript `continue` 语句。

`continue` 语句用于控制一个循环，如 `[for](./typescript-for)` 循环、`[while](./typescript-while)` 循环或 `[do...while](./typescript-do-while)` 循环。

`continue` 语句跳过当前循环中的剩余语句，直接进入下一次循环。

## 在 for 循环中使用 TypeScript continue 语句

下面的例子说明了如何在 `for` 循环中使用 `continue` 语句：

```ts
for (let index = 0; index < 9; index++) {
    
    // if index is odd, skip it
    if (index % 2)
        continue;

    // the following code will be skipped for odd numbers
    console.log(index);
}
```

输出：

```ts
0
2
4
6
8
```

在这个例子中：

- 首先，在从 0 到 9 的数字上进行循环。
- 然后，如果当前数字是一个奇数，通过使用 `continue` 语句跳过输出数字到控制台。如果当前的数字是一个偶数，则将其输出到控制台。

## 在 while 循环中使用 TypeScript continue 语句

下面的例子显示了如何在一个 `while` 循环中使用 `continue` 语句。它返回的结果与上面的例子相同：

```ts
let index = -1;

while (index < 9) {

    index = index + 1;

    if (index % 2)
        continue;

    console.log(index);
}
```

输出：

```ts
0
2
4
6
8   
```

## 在 do while 循环中使用 TypeScript continue 语句

下面的例子演示了如何在 `do...while` 循环中使用 `continue` 语句。它返回从 9 到 99 的偶数的数量：

```ts
let index = 9;
let count = 0;

do {
    index += 1;

    if (index % 2)
        continue;
    count += 1;
} while (index < 99);


console.log(count); // 45
```

## 总结

- 使用 `continue` 语句跳过当前循环中的剩余语句，直接进入下一次循环
