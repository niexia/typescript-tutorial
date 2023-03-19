# TypeScript Tutorial

> - 在线阅读 <https://niexia.github.io/typescript-tutorial/>
> - 英文原版 <https://www.typescripttutorial.net/>

TypeScript 是类型化的 JavaScript。TypeScript 将类型添加到 JavaScript 中，通过在运行 JavaScript 代码之前捕捉错误来帮助你加快开发速度。

TypeScript 是一种开源的编程语言，建立在 JavaScript 之上。它可以在任何浏览器、任何操作系统、任何运行 JavaScript 的环境中使用。

在这个 TypeScript 教程中，你将学习：

- 为什么 TypeScript 比 JavaScript 有很多好处。
- 了解 TypeScript 的真正含义，以及它是如何在引擎下工作的。
- 使用 TypeScript 及其丰富的功能，如类型、类、接口、模块，以及更多。
前提条件

要学习本教程，你需要具备以下条件：

- 基本的 JavaScript 知识。如果你想学习 JavaScript，请查看[JavaScript Tutorial](https://www.javascripttutorial.net/)。
- [ECMAScript 2015 或 ES6](https://www.javascripttutorial.net/es6/)知识。

::: details 第 1 节 Getting Start

- [什么是 TypeScrip](./getting-start/what-is-typescript) - 了解什么是 TypeScript 以及它相对于普通 JavaScript 的优势。
- [TypeScript 开发环境设](./getting-start/typescript-setup) - 告诉你如何设置 TypeScript 开发环境，以提高 TypeScript 的工作效率。
- [TypeScript “Hello World!”](./getting-start/typescript-hello-world) - 指导你完成在 TypeScript 中创建第一个名为 Hello, World 的程序的步骤。
- [为什么选择 TypeScrip](./getting-start/why-typescript) - 清楚地了解为什么要使用 TypeScript。
:::

::: details 第 2 节 Basic Types

- [TypeScript 类型](./basis-types/typescript-types) - 学习如何使用类型注解来定义变量、函数参数和返回值的静态类型。
- [类型注解](./basis-types/type-annotations) - 学习 TypeScript 中的类型注解（type annotations)
- [类型推断](./basis-types/type-inference) - 向你介绍 TypeScript 中的类型推断（type inference）
- [number 类型](./basis-types/number-type) - 学习数字类型，包括浮点数字和大整数。
- [string 类型](./basis-types/string-type) - 告诉你如何在 TypeScript 中使用字符串类型。
- [boolean 类型](./basis-types/boolean-type) - 指导你了解布尔类型以及如何有效地使用它。
- [object 类型](./basis-types/object-type) - 向你介绍代表非原始值的对象类型。
- [array 类型](./basis-types/array-type) - 告诉你如何使用数组及其操作。
- [tuple 类型](./basis-types/tuple-types) - 学习如何在元组中存储已知类型的固定数量的元素。
- [enum 类型](./basis-types/enum-types) - 告诉你如何通过使用枚举类型来定义一组命名的常量。
- [any 类型](./basis-types/any-type) - 学习如何使用任意类型在一个变量中存储任意类型的值。
- [void 类型](./basis-types/void-type) - 告诉你如何使用 void 类型作为不返回任何值的函数的返回类型。
- [never 类型](./basis-types/never-type) - 学习如何使用不包含任何值的 never 类型。
- [union 类型](./basis-types/union-type) - 指导你如何用联合类型在一个变量中存储一个或几个类型的值。
- [类型别名](./basis-types/type-aliases) - 告诉你如何使用类型别名为类型定义新的名称。
- [字符串字面类型](./basis-types/string-literal-types) - 学习如何定义一个只接受指定字符串字面的类型。
:::

::: details 第 3 节 Control Flow Statements

- [if else](./control-flow-statements/typescript-if-else) - 学习如何根据一个条件来执行代码。
- [switch case](./control-flow-statements/typescript-switch-case) - 告诉你如何使用 switch 语句来允许一些可能的执行路径。
- [for](./control-flow-statements/typescript-for) - 创建一个执行指定次数的循环。
- [while](./control-flow-statements/typescript-while) - 创建一个预测循环，只要一个条件为真就执行。
- [do while](./control-flow-statements/typescript-do-while) - 学习如何创建一个后测循环，执行到一个条件为假。
- [break](./control-flow-statements/typescript-break) - 告诉你如何使用 break 语句来终止一个循环或一个 switch。
- [continue](./control-flow-statements/typescript-continue) - 学习如何跳到循环的末端并继续下一次迭代。
:::

::: details 第 4 节 Functions

- [函数](./functions/typescript-functions) - 学习如何在 TypeScript 中声明一个使用类型注解的函数。
- [函数类型](./functions/typescript-function-types) - 指导你如何使用函数类型来定义函数的类型。
- [可选参数](./functions/typescript-optional-parameters) - 告诉你如何用可选参数定义函数。
- [默认参数](./functions/typescript-default-parameters) - 向你介绍默认参数。
- [Rest 参数](./functions/typescript-rest-parameters) - 使用 rest 参数来处理函数的无限数量的参数。
- [函数重载](./functions/typescript-function-overloadings) - 学习如何通过函数重载在参数类型和函数结果之间建立联系。
:::

::: details 第 5 节 Classes

- [类](./class/typescript-class) - 学习如何在 TypeScript 中构建一个类。
- [访问修饰符](./class/typescript-access-modifiers) - 向你介绍私有、保护和公共访问修饰符。
- [只读属性](./class/typescript-readonly) - 学习如何使用 readonly 修饰符来使类的属性不可改变。
- [Getters 和 Setters](./class/typescript-getters-setters) - 告诉你如何使用 getters 和 setters 来控制类属性的访问。
- [继承](./class/typescript-inheritance) - 学习如何使用继承来重复使用另一个类的功能。
- [静态方法和属性](./class/typescript-static-methods-and-properties) - 定义类的所有实例共享的静态方法和变量。
- [抽象类](./class/typescript-abstract-classes) - -解释定义一些常见行为的抽象类。
:::

::: details 第 6 节 Interfaces

- [接口](./interfaces/typescript-interface) - 向你介绍接口以及如何使用它们在你的代码中创建契约。
- [扩展接口](./interfaces/typescript-extend-interface) - 学习如何扩展一个接口以创建一个接口的组合。
:::

::: details 第 7 节 Advanced Types

- [交叉类型](./advanced-types/typescript-intersection-types) - 告诉你如何创建一个具有现有类型所有特征的新类型。
- [类型守卫](./advanced-types/typescript-type-guards) - 学习如何使用类型守卫来缩小条件块中变量的类型。
- [类型转换](./advanced-types/type-casting) - 告诉你如何使用类型转换将一种类型的变量转换为另一种类型。
- [类型断言](./advanced-types/type-assertions) - 指导你如何使用类型断言来告诉编译器将一个值视为指定的类型。
:::

::: details 第 8 节 Generics

- [Typescript 泛型](./generics/typescript-generics) - 学习如何使用 TypeScript 泛型来开发泛型函数。
- [泛型约束](./generics/typescript-generic-constraints) - 告诉你如何为泛型类型添加约束。
- [泛型类](./generics/typescript-generic-classes) - 指导你如何开发泛型类。
- [泛型接口](./generics/typescript-generic-interfaces) - 引导你完成创建泛型接口的步骤。
:::

::: details 第 9 节 Modules

- [TypeScript 模块](./modules/typescript-modules) - 向您介绍 TypeScript 中的模块以及如何在其他模块中使用它们。
:::

::: details TypeScript in Node.js

- [Node.js TypeScript](./type-in-nodejs/nodejs-typescript) - 如何设置在 Node.js 项目中使用 TypeScript 的开发环境。
:::

