# TypeScript while

摘要：在本教程中，你将学习如何使用 TypeScript while 语句创建一个循环。

## TypeScript while 语句介绍

`while` 语句允许你创建一个循环，只要条件为 `true`，就执行一块代码。

以下显示了 TypeScript while 语句的语法：

```ts
while(condition) {
    // do something
}
```


while 语句在每个循环迭代之前计算条件。

如果 condition 求值为 `true`，则 while 语句将执行其主体中由大括号（`{}`）包围的代码。

当条件评估为 `false` 时，继续执行 while 语句之后的语句。

由于 while 语句**在执行其主体之前计算 `condition`**，因此 while 循环也称为预测试循环（pretest loop）。

为了根据另一个条件不成熟地打破循环，你使用 `if` 和 `break` 语句：

```ts
while(condition) {
    // do something
    // ...

    if(anotherCondition) 
        break;
}
```

如果你想循环多次运行循环，应使用 TypeScript `for` 语句。

## TypeScript while 语句示例

让我们举几个使用 TypeScript `while` 语句的示例。

### TypeScript while：简单示例

以下示例使用 `while` 语句将数字输出到控制台，只要它小于 5：

```ts
let counter = 0;

while (counter < 5) {
    console.log(counter);
    counter++;
}

```

输出：

```ts
0
1
2
3
4
```

它是如何工作的：

- 首先，声明 `counter` 变量并将其初始化为零。
- 然后，在进入循环之前检查 `counter` 是否小于 5。如果是，则将 `counter` 输出到控制台并将其增加 1。
- 最后，只要 `counter` 小于 5，重复以上步骤。

## TypeScript while 实用示例

假设你在 HTML 文档上有以下列表元素：

```ts
<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>
```

以下示例显示了如何使用 `while` 语句删除`<ul>`元素的所有`<li>`元素：

```ts
let list = document.querySelector('#list');

while (list.firstChild) {
    list.removeChild(list.firstChild);
}
```

它是如何工作的：

- 首先，使用 `querySelector()` 方法通过其 ID 选择 `<ul>` 元素。
- 然后，检查列表的 `firstChild` 是否可用并删除它。一旦删除第一个子节点，下一个子节点将自动晋升为第一个子节点。因此，`while` 语句删除列表元素的所有子节点。

## 总结

- 使用 TypeScript `while` 语句创建一个循环，只要条件为 `true`，它将运行。

