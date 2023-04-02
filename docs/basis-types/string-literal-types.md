# TypeScript String Literal Types

摘要：在本教程中，你将学习 TypeScript 字符串字面量类型，它定义了一个只接受指定字符串字面量的类型。

**字符串字面量类型允许你定义一个只接受指定字符串字面量的类型。**

以下定义了一个字符串字面量类型，它只接受字面字符串 `'click'`：

```ts
let click: 'click';
```

`click` 是一个字符串字面量类型，它只接受字面字符串 `'click'`。如果你将字面字符串 `'click'` 赋值给 `click` 变量，它是合法的：

```ts
click = 'click'; // valid
```

然而，如果你将另外一个字符串字面量赋值 `click` 变量时，TypeScript 编译器将发出一个错误，比如：

```ts
click = 'dblclick';
```

Error：

```ts
Type '"dblclick"' is not assignable to type '"click"'.
```

**字符串字面量类型可以用于限制一个变量的可能字符串值。**

**字符串字面量类型可以与[联合类型](./union-type)结合使用，为一个变量定义有限的一组字符串字面量值**：

```ts
let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error
```

**如果你在多个地方使用字符串字面类型，它们将非常冗长。**

**为了避免这种情况，你可以使用类型别名**。比如说：

```ts
type MouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent: MouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error

let anotherEvent: MouseEvent;
```

## 总结

- TypeScript 字符串字面类型定义了一个接受指定字符串字面量的类型。
- 使用字符串字面类型和联合类型和类型别名来定义只接受有限字符串字面的类型。
