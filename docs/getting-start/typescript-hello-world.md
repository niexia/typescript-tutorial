# TypeScript "Hell0, World!"

摘要：在本教程中，你将学习如何用 TypeScript 开发 Hello World 程序。

## node.js 中的 TypeScript Hello World 程序

首先，创建一个新的文件夹来存放代码，例如，helloworld。

第二，启动 VS Code 并打开该文件夹。

第三，创建一个名为`app.ts`的新 TypeScript 文件。TypeScript 文件的扩展名是`.ts`。

第四，在`app.ts`文件中输入以下源代码。

```ts
let message: string = 'Hello, World!';
console.log(message);
```

第五，通过使用键盘快捷键<code>Ctrl+`</code>或按照菜单终端>新终端，在 VS 代码中启动一个新终端。

<img src="/TypeScript-Hello-World-Launch-Terminal.png" />

第六，在终端上输入以下命令来编译`app.ts`文件。

<img src="/TypeScript-Hello-World-compile-TS-file.png" />

如果一切正常，你会看到一个被 TypeScript 编译器生成的名为 app.js 的新文件。

<img src="/TypeScript-Hello-World-Output-file.png" />

要在 node.js 中运行 app.js 文件，你可以使用以下命令。

```shell
node app.js
```

如果你安装了[设置 TypeScript 开发环境](./typescript-setup)中提到的`ts-node`模块，你可以只用一个命令来编译 TypeScript 文件并一次性执行输出文件。

```shell
ts-node app.ts
```

## Web 浏览器中的 TypeScript Hello World 程序

你按照这些步骤创建一个网页，在 Web 浏览器上显示 "Hello, World!"信息。

首先，创建一个名为 index.html 的新文件，并包括 app.js，如下所示。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript: Hello, World!</title>
</head>
<body>
    <script src="app.js"></script>
</body>
</html>
```

第二，将 app.ts 的代码改为如下：

```ts
let message: string = 'Hello, World!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);
```

第三，编译 app.ts 文件：

```shell
tsc app.ts
```

第四，通过鼠标右键单击 index.html 并选择 Open with Live Server，从 VS Code 中打开 Live Server。

<img src="/TypeScript-Hello-World-Live-Server.png"/>

Live Server 将打开 index.html 并展示下面信息：

<img src="/TypeScript-Hello-World-Web-Browser.png"/>

要做些改变，你需要编辑 app.ts 文件。比如说：

```ts
let message: string = 'Hello, TypeScript!';

let heading = document.createElement('h1');
heading.textContent = message;

document.body.appendChild(heading);
```

然后编译 app.ts 文件：

```shell
tsc app.ts
```

TypeScript 编译器将生成一个新的 app.js 文件，Live 服务器将自动在网络浏览器上重新加载它。

注意，app.js 是 app.ts 文件的输出文件，因此，你千万不要直接改变这个文件中的代码，否则一旦你重新编译 app.ts 文件，你将失去这些改变。

在本教程中，你已经学会了如何在 TypeScript 中创建第一个名为 Hello, World！的程序，它可以在 node.js 和网络浏览器上运行。
