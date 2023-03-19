import{_ as s,c as a,o as n,a as l}from"./app.5b445d45.js";const d=JSON.parse('{"title":"TypeScript for","description":"","frontmatter":{},"headers":[{"level":2,"title":"TypeScript for 语句介绍","slug":"typescript-for-语句介绍","link":"#typescript-for-语句介绍","children":[]},{"level":2,"title":"TypeScript for 循环示例","slug":"typescript-for-循环示例","link":"#typescript-for-循环示例","children":[{"level":3,"title":"1）简单的 TypeScript for 示例","slug":"_1-简单的-typescript-for-示例","link":"#_1-简单的-typescript-for-示例","children":[]},{"level":3,"title":"2）TypeScript for 示例：可选块","slug":"_2-typescript-for-示例-可选块","link":"#_2-typescript-for-示例-可选块","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"control-flow-statements/typescript-for.md"}'),p={name:"control-flow-statements/typescript-for.md"},o=l(`<h1 id="typescript-for" tabindex="-1">TypeScript for <a class="header-anchor" href="#typescript-for" aria-hidden="true">#</a></h1><p>摘要：在本教程中，你将学习 TypeScript 的 for 循环语句，重复执行一段代码。</p><h2 id="typescript-for-语句介绍" tabindex="-1">TypeScript for 语句介绍 <a class="header-anchor" href="#typescript-for-语句介绍" aria-hidden="true">#</a></h2><p>下面是 TypeScript <code>for</code> 循环语句的语法：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;">(initialization</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> condition</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> expression) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// statement</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>for</code> 循环语句创建了一个循环，它由三个可选表达式组成，用分号 (<code>;</code>) 分隔，并用圆括号括住：</p><ul><li><p><code>initialization</code>：是一个在循环开始之前计算一次的表达式。通常，你使用 <code>initialization</code> 来初始化一个循环计数器。</p></li><li><p><code>condition</code>：是一个在每次循环迭代结束时计算的表达式。如果条件为 <code>true</code>，则执行循环体中的语句。</p></li><li><p><code>expression</code>：是一个在每次循环迭代结束时，在计算 <code>condition</code> 之前计算的表达式。通常，你使用 <code>expression</code> 来更新循环计数器。</p></li></ul><p><strong><code>for</code> 循环语句中的所有三个表达式都是可选的</strong>。这意味着你可以像这样使用 for 循环语句：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">;;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// do something</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>在实践中，如果你知道循环应该运行多少次，你就应该使用 <code>for</code> 循环。如果你想根据循环执行次数以外的条件来停止循环，你应该使用 <code>while</code> 循环。</strong></p><p>TypeScript 允许你完全省略循环体，如下所示：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;">(initialization</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> condition</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> expression)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>然而，在实践中它很少使用，因为它使代码更难以阅读和维护。</p><h2 id="typescript-for-循环示例" tabindex="-1">TypeScript for 循环示例 <a class="header-anchor" href="#typescript-for-循环示例" aria-hidden="true">#</a></h2><p>让我们看一些使用 TypeScript <code>for</code> 循环语句的例子。</p><h3 id="_1-简单的-typescript-for-示例" tabindex="-1">1）简单的 TypeScript for 示例 <a class="header-anchor" href="#_1-简单的-typescript-for-示例" aria-hidden="true">#</a></h3><p>下面的示例使用 for 循环语句将 0 到 9 之间的 10 个数字输出到控制台：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#F78C6C;">7</span></span>
<span class="line"><span style="color:#F78C6C;">8</span></span>
<span class="line"><span style="color:#F78C6C;">9</span></span>
<span class="line"></span></code></pre></div><p>它的工作原理：</p><ul><li><p>首先，声明一个变量 <code>i</code> 并将其初始化为 0。</p></li><li><p>然后检查 <code>i</code> 是否小于 <code>10</code>。如果是，则输出 <code>i</code> 到控制台并将 <code>i</code> 增加 <code>1</code>。</p></li><li><p>最后，重复第二步直到 <code>i</code> 等于 <code>10</code>。</p></li></ul><h3 id="_2-typescript-for-示例-可选块" tabindex="-1">2）TypeScript for 示例：可选块 <a class="header-anchor" href="#_2-typescript-for-示例-可选块" aria-hidden="true">#</a></h3><p>下面的示例显示与上面的示例相同的输出。但是，for 没有 <code>initialization</code> 块：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>像初 <code>initialization</code> 一样，你可以省略 <code>condition</code> 块。</p><p>但是，<strong>当满足条件时，必须使用 if 和 break 语句来跳出循环</strong>。否则，你会创建一个无限循环，导致程序反复执行直到崩溃。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">9</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>下面的例子说明了一个省略所有三个块的 for 循环：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">9</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#F78C6C;">4</span></span>
<span class="line"><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#F78C6C;">7</span></span>
<span class="line"><span style="color:#F78C6C;">8</span></span>
<span class="line"><span style="color:#F78C6C;">9</span></span>
<span class="line"></span></code></pre></div><p>它是如何工作的：</p><ul><li>首先，在进入 for 循环之前，声明一个循环计数器 <code>i</code> 并将其初始化为 0。</li><li>然后，在每次循环迭代中，将 i 输出到控制台，将 <code>i</code> 加一，并在 <code>i</code> 大于 9 时跳出循环。</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>当你想要重复执行一段代码多次时，请使用 TypeScript for 语句。</p>`,36),e=[o];function t(c,r,i,y,F,D){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{d as __pageData,A as default};
