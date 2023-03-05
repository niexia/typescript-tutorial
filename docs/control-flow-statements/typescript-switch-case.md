# TypeScript switch case

摘要：在本教程中，你将了解 TypeScript switch...case 语句。

## TypeScript switch case 语句介绍

以下是 `switch...case` 语句的语法：

```ts
switch ( expression ) {
   case value1:
       // statement 1
       break;
   case value2:
       // statement 2
       break;
   case valueN:
       // statement N
       break;
   default: 
       // 
       break;
}
```

它的工作原理如下：

首先，`switch...case` 语句对 `expression` 进行求值。

然后，它会搜索第一个表达式的求值结果与值（`value1`, `value2`, …`valueN`) 相同的 case 语句。

`switch...case` 语句将执行第一个与值匹配的 `case` 子句中的语句。

如果找不到匹配的 `case` 子句，则 `switch...case` 语句将查找可选的 `default` 子句。如果 `default` 子句可用，则执行 `default` 子句中的语句。

与每个 `case` 子句相关联的 `break` 语句确保在 `case` 子句完成后，控制流会跳出 `switch...case` 语句。

如果匹配的 `case` 子句没有 `break` 语句，则程序执行将继续到 `switch...case` 语句中的下一个语句。

按照惯例，**`default` 子句是 `switch...case` 语句中的最后一个子句。但是，它不需要这样**。

## TypeScript switch case 示例

让我们举一些使用 switch...case 语句的例子。

### 1）一个简单的 TypeScript switch case 示例

以下示例显示了一个简单的 `switch...case` 示例，基于目标 Id 显示一条消息：

```ts
let targetId = 'btnDelete';

switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}
```

输出：

```ts
Delete
```

在此示例中，`targetId` 设置为 `btnDelete`。

`switch...case` 语句将 `targetId` 与值列表进行比较。因为 `targetId` 与 `'btnDelete'` 匹配，所以执行相应 `case` 子句中的语句。

### 分组 case 示例

如果有一些代码被多个 case 共享，可以将它们分组。例如：

```ts
// change the month and year
let month = 2,
    year = 2020;

let day = 0;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        // leap year
        if (((year % 4 == 0) &&
            !(year % 100 == 0))
            || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    default:
        throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);
```

输出：

```ts
The month 2 in 2020 has 29 days
```

这个例子返回一个指定月份和年份的天数。

如果月份是 1、3、5、7、8、12，天数是 31。如果月份是 4、6、9 或 11，天数是 30。

如果月份是 2 并且是闰年，则返回 29 天，否则，返回 28 天。
