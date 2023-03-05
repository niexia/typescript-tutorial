# TypeScript if else

摘要：在本教程中，你将学习 TypeScript 的 `if...else` 语句。

## TypeScript if 语句

if 语句根据一个条件执行一个语句。如果条件为 truthy，`if` 语句将执行其正文中的语句。

```ts
if(condition) {
   // if-statement
}
```

例如，下面的语句说明了如何使用 `if` 语句来增加 `counter` 变量的值，如果其值小于 `max` 常数的值。

```ts
const max = 100;
let counter = 0;

if (counter < max) {
    counter++;
}

console.log(counter); // 1
```

输出：

```ts
1
```

在这个例子中，由于 `counter` 变量从 0 开始，它小于 `max` 常数。表达式 `counter < max` 值为 `true`，因此 `if` 语句执行了语句 `counter++`。

让我们把 `counter` 变量初始化为 `100`：

```ts
const max = 100;
let counter = 100;

if (counter < max) {
    counter++;
}

console.log(counter); // 100
```

输出：

```ts
100
```

在这个例子中，表达式 `counter < max` 值为 `false`。`if` 语句并没有执行 `counter++` 语句。因此，输出是 100。

## TypeScript if...else 语句

如果你想在 `if` 语句中的条件为 `false` 时执行其他语句，你可以使用 `if...else` 语句：

```ts
if(condition) {
   // if-statements
} else {
  // else statements;
}
```

下面说明了使用 if...else 语句的一个例子：

```ts
const max = 100;
let counter = 100;

if (counter < max) {
    counter++;
} else {
    counter = 1;
}

console.log(counter);
```

输出：

```ts
1
```

在这个例子中，表达式 `counter < max` 值为为 `false`，因此执行 `else` 分支的语句，将 `counter` 变量重置为 1。

## 三元运算符 ?:

在实践中，如果你有一个简单的条件，你可以使用三元运算符 `?:` 而不是 `if...else` 语句来使代码更短，比如这样：

```ts
const max = 100;
let counter = 100;

counter < max ? counter++ : counter = 1;

console.log(counter);
```

## TypeScript if...else if...else 语句

当你想根据多个条件来执行代码时，你可以使用 `if...else if...else` 语句。

if…else if…else 语句可以有一个或多个 `else if` 分支，但只有一个 `else` 分支。

比如说：

```ts
let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
} else {
    discount = 15; // 15%
}

console.log(`You got ${discount}% discount. `)
```

输出：

```ts
0
```

这个例子使用 `if...else if...else` 语句来确定基于 item 数量的折扣。

如果 item 的数量小于或等于 5，折扣就是 5%。`if` 分支中的语句执行。

如果 item 的数量小于或等于 10，折扣为 10%。`else if` 分支中的语句执行。

当 item 的数量大于 10 时，折扣为 15%。执行 `else` 分支中的语句。

在这个例子中，假设 item 的数量总是大于零。但是，如果物品的数量小于零或大于 10，则折扣为 15%。

为了使代码更加健壮，你可以用另一个 `else if` 来代替 `else` 分支，像这样：

```ts
let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
} else if (discount > 10) {
    discount = 15; // 15%
} else {
    throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount}% discount. `)
```

在这个例子中，只有当 item 的数量大于 10 时，折扣才是 15%。第二个 `else if `分支中的语句会执行。

如果物品的数量小于 0，则执行 `else` 分支中的语句。

## 总结

- 使用 `if` 语句根据条件执行代码。
- 如果要在条件为 false 时执行代码，请使用 `else` 分支。最好使用三元运算符 `?:` 而不是简单的 `if…else` 语句。
- 使用 `if else if...else` 语句根据多个条件执行代码。
