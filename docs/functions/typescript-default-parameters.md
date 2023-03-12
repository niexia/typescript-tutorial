# TypeScript Default Parameters

摘要：在本教程中，你讲学习 TypeScript 默认参数。

## TypeScript 默认参数介绍

JavaScript 从 ES2015（或 ES6）开始支持[默认参数](https://www.javascripttutorial.net/es6/javascript-default-parameters/)，语法如下：

```ts
function name(parameter1=defaultValue1,...) {
   // do something
}
```

在这种语法中，如果你在调用函数时没有传入参数或传入 `undefined` 的参数，函数将对省略的参数采取默认的初始化值。比如说：

```ts
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
```

在这个例子中，`applyDiscount()` 函数将 `discount` 参数作为默认参数。

当你没有传递 `discount` 参数到 `applyDiscount()` 函数时，函数会使用一个默认值，即 `0.05`。

与 JavaScript 类似，你可以使用相同的语法在 TypeScript 中使用默认参数：

```ts
function name(parameter1:type=defaultvalue1, parameter2:type=defaultvalue2,...) {
   //
}
```

以下示例使用 applyDiscount() 函数的默认参数：

```ts
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95
```

**请注意，你不能在函数类型定义中包含默认参数。以下代码将导致错误：**

Error：

```ts
error TS2371: A parameter initializer is only allowed in a function or constructor implementation.
```

## 默认参数和可选参数

**和[可选参数](./typescript-optional-parameters)一样，默认参数也是可选的。这意味着你在调用函数时可以省略默认参数。**

此外，默认参数和尾随的默认参数都有相同的类型。例如，下面这个函数。

```ts
function applyDiscount(price: number, discount: number = 0.05): number {
  // ...
}

```

和

```ts
function applyDiscount(price: number, discount?: number): number {
  // ...
}

```

**共享相同的类型：**

```ts
(price: number, discount?: number) => number

```

**可选参数必须在必需参数之后。但是，默认参数不需要出现在必需参数之后。**

**当默认参数出现在必需参数之前时，你需要明确地传递 `undefined` 来获得默认的初始化值。**

下面的函数返回指定月份和年份的天数：

```ts
function getDay(year: number = new Date().getFullYear(), month: number): number {
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
    return day;
}
```

在这个例子中，如果你没有传递参数或者传递了 undefined 的值，则年份的默认值为当前年份。

以下示例使用 `getDay()` 函数获取 2019 年 2 月的天数：

```ts
let day = getDay(2019, 2);
console.log(day); // 28
```

要获取当前年份二月的天数，你需要将 `year` 参数传递为 `undefined`，如下所示：

```ts
let day = getDay(undefined, 2);
console.log(day);

```

## 总结

- 如果你想为参数设置默认初始化值，请使用默认参数语法 `parameter:=defaultValue`。
- 默认参数是可选的。
- 要使用参数的默认初始化值，在调用函数时省略该参数，或将 `undefined` 传递到函数中。
