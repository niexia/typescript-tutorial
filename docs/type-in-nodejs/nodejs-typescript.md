# Node.js Typescript: How to Automate the Development Workflow

摘要：在本教程中，你将学习如何将在 Node.js 项目中使用 TypeScript 的开发工作流程自动化。

:::tip
本教程假定你的系统中已经安装了 node.js 和 tsc 模块。
:::

## 创建项目结构

首先，创建一个名为 `nodets` 的新目录。

其次，在 `nodets` 下创建两个子目录，称为 `build` 和 `src`，像这样：

<img src="/nodejs-typescript-directory-structure.png"/>

你将在 `src` 目录下存储 `TypeScript` 代码。

一旦 TypeScript 编译器编译了 TypeScript 源文件，它将把输出文件存储在 build 目录中。

## 配置 TypeScript 编译器

从 macOS 和 Linux 的终端或 Windows 的命令提示符，在 `nodets` 目录下运行以下命令，创建 `tsconfig.json` 文件：

```shell
tsc -init
```

你会看到在 `nodets` 目录下创建的 `tsconfig.json`。

`tsconfig.json` 文件表明该目录（`nodets`）是 TypeScript 项目的根目录。

当你编译 TypeScript 文件时，TypeScript 编译器将使用 `tsconfig.json` 中的选项来编译该项目。

现在，你可以打开 `tsconfig.json` 文件。有很多选项。在本教程中，你将专注于这两个选项：

- `rootdir` - 指定 TypeScript 输入文件的根目录。
- `outdir` - 存放 JavaScript 输出文件。

这些选项默认是有注释的。而你需要取消注释（去掉行首的//），并对它们进行如下修改。

对于 `outDir` 选项：

```json
"outDir": "./build"
```

对于 `rootDir` 选项：

```json
"rootDir": "./src"
```

为了验证新的配置，你可以在 `./src` 目录下创建一个名为 `app.ts` 的新文件并放置以下代码：

```ts
console.log('Node.js TypeScript');
```

<img src="/nodejs-typescript-app.ts_.png" />

然后运行以下命令来执行 TypeScript 编译器。它将编译存储在 `src` 目录中的所有文件：

```shell
tsc
```

如果配置正确，你会看到在 `./build` 目录下生成的 `app.js`：

<img src="/nodejs-typescript-app.js.png"/>

要运行 app.js，你要导航到 `build` 目录并执行以下命令：

```shell
node app.js
```

你将看到下面的输出内容：

```ts
Node.js TypeScript
```

每次当你改变 TypeScript 代码时，你都需要：

- 构建项目。
- 运行 JavaScript 输出文件。

**这是很耗时的。**

幸运的是，你可以使用一些 Node.js 模块来自动完成整个过程。

## 安装 Node.js 模块

`nodemon` 模块允许你在改变 JavaScript 源代码时自动重新启动应用程序。

`concurrently` 模块可以同时运行多个命令。

首先，在项目的根目录下执行 `npm init` 命令：

```shell
npm init --yes
```

接下来，安装 nodemon 和 concurrently 模块：

```shell
npm install --g nodemon concurrently
```

这将需要一些时间来安装。一旦安装完成。

**注意，`-g` 标志将指示 npm 全局安装这两个模块。这允许你在其他项目中使用它们。**

然后，打开 `package.json` 文件，你会在 `scripts` 选项中看到这样的东西：

```json
...  
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
...
```

之后，将脚本选项改为以下内容：

```json
...
"scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/app.js",
    "start": "concurrently npm:start:*"
},
...
```

这个 `"start:build": "tsc -w"` 将会监听 `./src` 目录中的更改并自动编译它们。

这个 `"start:run": "nodemon build/app.js"` 会在生成新文件时自动运行 `./build` 目录下的 `app.js`。

这个 `"start": "concurrently npm:start:*"` 运行所有以 `npm:start:*` 开头的命令，执行上述 `start:build` 和 `start:run` 命令。

由于 `app.js` 将是 Node.js 程序的入口点，你还需要更改 `package.json` 文件中以下选项为 `app.js`：

从：

```json
"main": "index.js"
```

到：

```json
"main": "app.js"
```

最后，执行以下命令：

```shell
npm start
```

为了验证配置，你需要在 `app.ts` 文件中更改一些代码。然后你将在控制台中看到输出结果。

通过本教程，你已经学会如何为 Node.js 项目设置 TypeScript 的开发工作流程。
