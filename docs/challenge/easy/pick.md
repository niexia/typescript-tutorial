# pick

> <https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md>


## 问题

实现 TS 内置的 Pick<T, K>，但不可以使用它。

从类型 T 中选择出属性 K，构造成一个新的类型。

例如：

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```

## 解答

```ts
// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


// ============= Your Code Here =============
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

```

## 说明

- keyof: 取 interface 的键后保存为**联合类型**

```ts
interface userInfo {
  name: string
  age: number
}
type keyofValue = keyof userInfo
// keyofValue = "name" | "age"
```

- in: **取联合类型的值**，主要用于数组和对象的构建。切记不要用于 interface, 否则会报错

```ts
type name = 'firstname' | 'lastname'
type TName = {
  [key in name]: string
}
// TName = { firstname: string, lastname: string }
```

用于实际开发，举个例子

```ts
function getValue(o:object, key: string){
  return o[key]
}
const obj1 = { name: '张三', age: 18 }
const values = getValue(obj1, 'name')
```

这样写丧失了 ts 的优势：

- 无法确定返回值类型
- 无法对 key 进行约束

应该这样定义：

```ts
function getValue<T extends Object,K extends keyof T>(o: T,key: K): T[K] {
  return o[key]
}
const obj1 = { name: '张三'， age: 18}
const values = getValue(obj1, 'name')
// 如果第二个参数不是 obj1 中的参数就会报错
```