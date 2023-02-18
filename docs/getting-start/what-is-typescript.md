# 什么是 TypeScript

摘要：在本教程中，你将了解什么是 TypeScript 以及它相对于普通 JavaScript 的优势。

## TypeScript 介绍

TypeScript 是 JavaScript 的一个超集。

TypeScript 构建在 JavaScript 的基础上。首先，你编写 TypeScript 代码。然后，你使用 TypeScript 编译器将 TypeScript 代码编译成普通的 JavaScript 代码。

一旦你有了普通的 JavaScript 代码，你就可以把它部署到任何可以运行 JavaScript 的环境中。

TypeScript 文件使用 `.ts` 扩展名，而不是 JavaScript 文件的 `.js` 扩展名。

<img src="https://www.typescripttutorial.net/wp-content/uploads/2020/05/what-is-typescript-compiler.png"/>

TypeScript 使用 JavaScript 的语法，并增加了额外的语法来支持 Types。

如果你有一个没有任何语法错误的 JavaScript 程序，它也是一个 TypeScript 程序。这意味着，所有的 JavaScript 程序都是 TypeScript 程序。如果你要将现有的 JavaScript 代码库迁移到 TypeScript，这非常有帮助。

下图显示了 TypeScript 和 JavaScript 之间的关系。

<img src="https://www.typescripttutorial.net/wp-content/uploads/2020/05/what-is-typescript-typescript-and-js.png" />

## 为什么选择 TypeScript

TypeScript 的主要目标是：

- 将可选类型引入到 JavaScript 中。
- 实现未来 JavaScript 的计划特性，又称 ECMAScript Next 或 ES Next 到当前的 JavaScript。

### 1）TypeScript 提高了你的工作效率，同时有助于避免 bug 的出现

类型通过帮助你避免许多错误来提高生产力。通过使用类型，你可以在编译时抓住错误，而不是在运行时发生错误。

下面的将两个数字 `x` 和 `y` 相加：

```ts
function add(x, y) {
   return x + y;
}
```

如果你从 HTML 输入元素中获取数值并将其传入函数，你可能会得到一个意外的结果。

```ts
let result = add(input1.value, input2.value);
console.log(result); // result of concatenating strings
```

例如，如果用户输入 10 和 20，`add()`函数将返回 1020，而不是 30。

原因是 input1.value 和 input2.value 是字符串，而不是数字。当你使用运算符 + 来添加两个字符串时，它将它们串联成一个字符串。

当你使用 TypeScript 为参数明确指定类型时，像这样。

```ts
function add(x: number, y: number) {
   return x + y;
}
```

在这个函数中，我们将数字类型添加到参数中。函数 add() 只接受数字，不接受任何其他值。

当你按以下方式调用该函数时。

```ts
let result = add(input1.value, input2.value);
```

...如果你将 TypeScript 代码编译成 JavaScript，TypeScript 编译器会发出错误。因此，你可以防止错误在运行时发生。

### 2) TypeScript 将未来的 JavaScript 带到今天

TypeScript 支持当前 JavaScript 引擎的 ES Next 中计划的即将到来的功能。这意味着你可以在网络浏览器（或其他环境）完全支持新的 JavaScript 功能之前使用这些功能。

每年，TC39 都会为 ECMAScript 发布一些新功能，ECMAScript 是 JavaScript 的标准。这些功能提案通常要经过五个阶段。

- Stage 0: Strawperson
- Stage 1: Proposal
- Stage 2: Draft
- Stage 3: Candidate
- Stage 4: Finished

而 TypeScript 一般支持处于第三阶段的功能。

::: info
TypeScript 编译器在编译的时候，将 ES Next 的代码编译成相应版本的代码，例如 ES5 代码，取决于在 `tsconfig.ts` 文件中配置的 `target`，默认输出 ES3。

ESNext 是一个动态的概念，指的是 ECMAScript 的下一个版本。一个新的 JavaScript 语法，到了最后一个定案阶段 (Stage 4)，那么就包含在下一个发布的 ECMAScript 标准。

举个例子，今年是 2022 年，我们现在用的 ECMASCript 版本是 ES2022，下一个版本是 ES2023，这个版本会在明年的 6 月份正式发布（每年都是这个时候），**在 ES2023 发布之前，已经到定案阶段 (Stage 4) 的提案，就是目前的 ESNext**。
:::