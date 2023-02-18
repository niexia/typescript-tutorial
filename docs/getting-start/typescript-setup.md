# TypeScript 设置

摘要：在本教程中，你将学习如何设置 TypeScript 开发环境。

以下是你需要设置的工具，以开始使用 TypeScript。

- Node.js - Node.js 是你将运行 TypeScript 编译器的环境。注意，你不需要知道 node.js。
- TypeScript 编译器--一个 Node.js 模块，将 TypeScript 编译成 JavaScript。如果你使用 node.js 的 JavaScript，你可以安装`ts-node`模块。它是一个 TypeScript 的执行和 node.js 的 REPL
- Visual Studio Code 或 VS code - 是一个支持 TypeScript 的代码编辑器。强烈推荐 VS Code。然而，你可以使用你喜欢的编辑器。

如果你使用 VS Code，你可以安装以下扩展来加速开发过程。

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - 允许你启动一个具有热重载功能的开发本地服务器。

## 安装 Node.js

要安装 node.js，你要按照这些步骤：

- 进入 node.js 的[下载页面](https://nodejs.org/en/download/)。
- 下载适合你平台的 node.js 版本，即 Windows、macOS 或 Linux。
- 执行下载的 node.js 包或执行文件。安装是非常直接的。
- 在 macOS 和 Linux 上打开终端，或在 Windows 上打开命令行，输入 node -v 命令，验证安装情况。如果你看到你下载的版本，那么你已经在你的电脑上成功安装了 node.js。

## 安装 TypeScript 编译器

要安装 TypeScript 编译器，你可以在 macOS 或 Linux 上启动终端或者在 Windows 上启动命令提示符，并输入以下命令。

```shell
npm install -g typescript
```

安装完成后，你可以输入以下命令来检查 TypeScript 编译器的当前版本。

```shell
tsc --v
```

它应该返回类似这样的版本：

```shell
Version 4.0.2
```

请注意，你的版本可能比这个版本要新。

如果你是在 Windows 上，并得到以下错误。

```shell
'tsc' is not recognized as an internal or external command,
operable program or batch file.
```

那么你应该在 PATH 变量中添加以下路径`C:\Users\<user>\AppData\Roaming\npm`。注意，你应该把`<user>`改为你的 windows 用户。

要在全局范围内安装 ts-node 模块，你可以从 macOS 和 Linux 的终端或 Windows 的 Command Prompt 运行以下命令。

```shell
npm install -g ts-node
```

## 安装 VS Code

要安装 VS 代码，你要按照以下步骤：

- 导航到 VS Code 的[下载页面](https://code.visualstudio.com/download)。
- 下载适合您的操作系统（Windows、macOS 或 Linux）的最新版本的 VS Code。
- 执行下载的软件包或安装程序文件，启动安装向导。安装过程也是非常简单明了的。
- 启动 VS Code。

你会看到 VS 代码，如下图所示。
<img src="https://www.typescripttutorial.net/wp-content/uploads/2020/05/vs-code.png"/>

要安装 Live Server 扩展插件，你要按照以下步骤。

<img src="https://www.typescripttutorial.net/wp-content/uploads/2020/05/Live-Server.png"/>

- 单击 "扩展 "选项卡，找到 VS Code 的扩展。
- 输入 Live Server 来搜索它。
- 点击安装按钮来安装该扩展。

在本教程中，你已经学会了如何安装一个用于 TypeScript 的开发环境。

:::tip
更多关于在 VS Code 使用 TypeScript 的教程可以查看 [TypeScript tutorial in Visual Studio Code](https://code.visualstudio.com/docs/typescript/typescript-tutorial#_debugging)
:::