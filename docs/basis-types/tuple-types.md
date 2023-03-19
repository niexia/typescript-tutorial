# TypeScript Tuple

摘要：在本教程中，你将了解 TypeScript 的 Tuple 类型和它的用途。

## TypeScript 元组类型介绍

**元组的工作方式与数组类似，但有一些额外的考虑：**

- **元组中元素的数量是固定的。**
- **元素的类型是已知的，而且不需要是相同的。**


例如，你可以使用元组来将值表示为 `string` 和 `number` 的对：

```ts
let skill: [string, number];
skill = ['Programming', 5];
```

**元组中的值的顺序是很重要的**。如果你把 `skill` 元组的值的顺序改为 `[5, "Programming"]`，你会得到一个错误：

```ts
let skill: [string, number];
skill = [5, 'Programming'];
```

Error：

```ts
error TS2322: Type 'string' is not assignable to type 'number'.
```

**因此，使用元组来表示按特定顺序相关联的数据是一个好习惯。**

例如，可以使用元组来定义一个 RGB 颜色，它总是以三个数字的模式出现：

```
(r,g,b)
```

例如：

```ts
let color: [number, number, number] = [255, 0, 0];
```

`color[0]`、`color[1]` 和 `color[2]` 将被逻辑地映射为 `Red`、`Green` 和 `Blue` 的颜色值。

## 可选的元组元素

从 TypeScript 3.0 开始，元组可以使用问号(?)后缀指定可选的元素。

例如，你可以定义一个带有可选的 alpha 通道值的 RGBA 元组。

```ts
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
```

:::warning
请注意，RGBA 使用红、绿、蓝和 alpha model 来定义颜色。alpha 指定了颜色的不透明度。
:::

## 总结

- Tupple 是一个具有固定数量元素的数组，其类型是已知的。
