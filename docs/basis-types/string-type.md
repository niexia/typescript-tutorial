# TypeScript String

摘要：在本教程中，你将学习 TypeScript 的字符串数据类型。

与 JavaScript 类似，TypeScript 使用双引号（`"`）或单引号（`'`）来包围字符串字面量：

```ts
let firstName: string = 'John';
let title: string = "Web Developer";
```

TypeScript 也支持使用反引号（<code>`</code>）来包围字符的模板字符串。

模板字符串允许你创建多行字符串并提供字符串插值功能。

以下示例演示了如何使用反引号 (`) 创建多行字符串：

```ts
let description = `This TypeScript string can 
span multiple 
lines
`;
```

字符串插值允许你讲变量插嵌入到字符串中，类似这样：

```ts
let firstName: string = `John`;
let title: string = `Web Developer`;
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;

console.log(profile);
```

输出：

```ts
I'm John. 
I'm a Web Developer.
```

## 总结

- 在 TypeScript 中，所有字符串都具有 string 类型。
- 类似 JavaScript，TypeScript 使用双引号（"）、单引号（'）和反引号（`）来包围字符串字面量。
