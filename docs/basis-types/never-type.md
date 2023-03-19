# TypeScript never type

摘要：在本教程中，你将学习不包含任何值的 TypeScript `never` 类型。

`never` 类型是一种不包含任何值的类型。正因为如此，你不能给一个具有 `never` 类型的变量赋任何值。

**通常情况下，你用 `never` 类型来表示一个总是抛出错误的函数的返回类型。**比如说：

```ts
function raiseError(message: string): never {
    throw new Error(message);
}
```

以下函数的返回类型被推断为 `never` 类型：

```ts
function reject() { 
   return raiseError('Rejected');
}
```

**如果你有一个包含无限循环的函数表达式，它的返回类型也是 `never` 类型**。比如说：

```ts
let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}
```

在这个例子中，`forever()`函数的返回类型是 `never`。

**如果你看到一个函数的返回类型是 `never`，那么你应该确保这不是你想做的事情。**

当你通过一个永远不能为真的[类型守卫 (type guard)](../advanced-types/typescript-type-guards)来缩小变量的类型时，它也可以获得 `never` 类型。

例如，如果没有 `never` 类型，下面的函数会引起错误，因为不是所有的代码路径都会返回一个值：

```ts
function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }   
}
```

为了使代码有效，你可以返回一个返回类型 `never` 类型的函数：


```ts
function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }  
  // make the function valid
  return neverOccur();
}

let neverOccur = () => {
   throw new Error('Never!');
}
```

## 总结

- `never` 类型不包含任何值。
- `never` 类型代表一个总是抛出错误的函数或一个包含无限循环的函数的返回类型。
