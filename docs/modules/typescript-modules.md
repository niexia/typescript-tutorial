# TypeScript Modules

摘要：在本教程中，你将学习有关 TypeScript 模块的知识以及如何使用它们来构建代码结构。

## TypeScript 模块介绍

从 ES6 开始，JavaScript 开始支持模块作为语言的原生部分。TypeScript 与 JavaScript 共享相同的模块概念。

一个 TypeScript 模块**可以包含声明和代码**。一个模块在它自己的范围内执行，而不是在全局范围内。这意味着当你在一个模块中声明变量、函数、类、接口等时，它们在模块外是不可见的，除非你使用 `export` 语句明确地导出它们。

另一方面，如果你想从一个模块中访问变量、函数、类等，你需要用 `import` 语句导入它们。

与 ES6 一样，当 TypeScript 文件包含顶级 `import` 或 `export` 时，它被视为一个模块。

## 创建一个新模块

下面创建了一个名为 `Validator.ts` 的新模块并声明了一个名为 `Validator` 的接口：

```ts
export interface Validator {
    isValid(s: string): boolean
}
```

在这个模块中，我们把 `export` 关键字放在 `interface` 关键字之前，以便将其暴露给其他模块。

换句话说，如果不使用 `export` 关键字，`Validator` 接口在 `Validator.ts` 模块中是私有的，因此，它不能被其他模块使用。


## 导出声明

另一种从一个模块导出声明的方法是使用 `export` 语句。例如：

```ts
interface Validator {
    isValid(s: string): boolean
}

export { Validator };

```

TypeScript 还允许你为模块消费者重命名声明，如下所示：

```ts
interface Validator {
    isValid(s: string): boolean
}

export { Validator as StringValidator };

```

在此示例中，其他模块将使用 `Validator` 接口作为 `StringValidator` 接口。

## 导入一个新模块

为了消费（使用）一个模块，你需要使用 `import` 语句。下面创建了一个新的模块 `EmailValidator.ts`，使用 `Validator.ts` 模块：

```ts
import { Validator } from './Validator';

class EmailValidator implements Validator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}

export { EmailValidator };
```

当你导入一个模块时，你可以像这样重命名它：

```ts
import { Validator as StringValidator } from './Validator';
```

在 `EmailValidator` 模块里面，你用 `Validator` 接口来代替 `StringValidator` 接口：


```ts
import { Validator as StringValidator } from './Validator';

class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}

export { EmailValidator };
```

以下是如何在 `App.ts` 文件中使用 `EmailValidator` 模块的示例：

```ts
import { EmailValidator } from './EmailValidator';

let email = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(result);
```

输出：

```ts
true
```

## 导入类型

以下在 Types.ts 模块中声明了一个类型：

```ts
export type alphanumeric = string | number;

```

为了从 `Types.ts` 模块中导入 `alphanumeric` 类型，你可以使用 `import type` 语句：

```ts
import type {alphanumeric} from './Types';

```

注意，TypeScript 从 3.8 版本开始支持 `import type` 语句。在 TypeScript 3.8 之前，你需要使用 `import` 语句来代替。

```ts
import {alphanumeric} from './Types';

```

## 从一个模块中导入所有内容

要从一个模块中导入所有内容，你可以使用以下语法：

```ts
import * from 'module_name';

```

## 重新导出

下面创建了一个名为 `ZipCodeValidator.ts` 的新模块，使用 `Validator.ts` 模块：

```ts
import { Validator } from './Validator';

class ZipCodeValidator implements Validator {
    isValid(s: string): boolean {
        const numberRegexp = /^[0-9]+$/;
        return s.length ===5 && numberRegexp.test(s);
    }
}

export { ZipCodeValidator };

```

你可以将 `EmailValidator` 和 `ZipCodeValidator` 模块封装在一个新的模块中，通过使用下面的语法将它们的所有 export 组合起来。

```ts
export * from 'module_name';

```

下面的例子说明了如何将 `EmailValidator.ts` 和 `ZipCodeValidator.ts` 模块包裹在 `FormValidator.ts` 模块中：

```ts
export * from "./EmailValidator";
export * from "./ZipCodeValidator";

```

## 默认导出

TypeScript 允许每个模块有一个默认导出（default export）。要将一个导出标记为默认导出，你可以使用 `default` 关键字：

下面展示了如何将 `ZipCodeValidator` 作为默认导出：

```ts
import { Validator } from './Validator';

export default class ZipCodeValidator implements Validator {
    isValid(s: string): boolean {
        const numberRegexp = /^[0-9]+$/;
        return s.length ===5 && numberRegexp.test(s);
    }
}

```

要导入一个默认的导出，你要使用不同的 `import` 语法，像这样：

```ts
import default_export from 'module_name';

```

下面显示了如何在 `App.ts` 文件中使用 `ZipCodeValidator` 的默认导出：

```ts
import ZipCodeValidator from './ZipCodeValidator';

let validator = new ZipCodeValidator();
let result = validator.isValid('95134');

console.log(result)。

```

输出：

```ts
true

```

## 总结

- TypeScript 与 ES6 模块共享相同的模块概念。一个模块可以同时包含声明和代码。
- 在一个模块中，变量，函数，类，接口等，在它自己的范围内执行，而不是全局范围。
- 使用 export 语句从一个模块中导出变量、函数、类、接口、类型等。
- 使用 import 语句访问来自其他模块的出口。
