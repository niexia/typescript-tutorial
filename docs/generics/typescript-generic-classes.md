# TypeScript Generic Classes

摘要：在本教程中，你将学习如何开发 TypeScript 泛型类。

## TypeScript 泛型类介绍

一个泛型类有一个泛型的参数列表，在尖括号 `<>` 中，紧随类的名称：

```ts
className<T>{
    //...
}
```

TypeScript 允许你在类型参数列表中拥有多个泛型类型。比如说：

```ts
class className<K,T>{
    //...
}
```

泛型约束也适用于类中的泛型类型。

```ts
class className<T extends TypeA>{
    //...
}
```

将类型参数放在类上，可以让你开发出对同一类型工作的方法和属性。

## TypeScript 泛型类示例

在这个例子中，我们将开发一个泛型 Stack 类。

栈是一种基于后进先出（或 LIFO）原则工作的数据结构。这意味着你放入堆栈中的第一个元素是你可以从堆栈中获取的最后一个元素。

通常，堆栈具有大小。默认情况下，它为空。堆栈有两个主要操作：

- Push：将元素推入堆栈。
- Pop：从堆栈弹出元素。

以下显示了一个完整的泛型 Stack 类称为 Stack<T>：

```ts
class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}

```

以下是创建一个新的数字堆栈的方法：

```ts
let numbers = new Stack<number>(5);
```

以下这个函数返回两个数字之间的随机数，即 `low` 和 `high`：

```ts
function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
```

现在，你可以使用 `randBetween()` 函数生成随机数字并将其推入数字堆栈中：

```ts
let numbers = new Stack<number>(5);

while (!numbers.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    numbers.push(n);
}
```

输出：

```ts
Push 3 into the stack.
Push 2 into the stack. 
Push 1 into the stack. 
Push 8 into the stack. 
Push 9 into the stack. 
```

以下是如何从堆栈中弹出元素直到它为空的示例：

```ts
while (!numbers.isEmpty()) {
    let n = numbers.pop();
    console.log(`Pop ${n} from the stack.`);
}
```

输出：

```ts
Pop 9 from the stack.
Pop 8 from the stack.
Pop 1 from the stack.
Pop 2 from the stack.
Pop 3 from the stack.
```

同样地，你可以创建一个字符串的堆栈。例如：

```ts
let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach(word => wordStack.push(word));

// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
```

它是如何工作：

- 首先，将句子拆分为单词。
- 其次，创建一个大小等于单词数组中单词数量的堆栈。
- 第三，将单词数组的元素推入堆栈。
- 最后，从堆栈中弹出单词直到它为空为止。

在本教程中，你已经学会了如何在 TypeScript 中开发泛型类。
