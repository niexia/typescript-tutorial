import{_ as s,c as a,o as n,a as p}from"./app.5b445d45.js";const d=JSON.parse('{"title":"TypeScript Functions","description":"","frontmatter":{},"headers":[{"level":2,"title":"TypeScript 函数介绍","slug":"typescript-函数介绍","link":"#typescript-函数介绍","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"functions/typescript-functions.md"}'),o={name:"functions/typescript-functions.md"},l=p(`<h1 id="typescript-functions" tabindex="-1">TypeScript Functions <a class="header-anchor" href="#typescript-functions" aria-hidden="true">#</a></h1><p>摘要：在本教程中，你将学习 TypeScript 函数，以及如何使用类型注解来执行函数的类型检查。</p><h2 id="typescript-函数介绍" tabindex="-1">TypeScript 函数介绍 <a class="header-anchor" href="#typescript-函数介绍" aria-hidden="true">#</a></h2><p>TypeScript 函数是可读性、可维护性和可重用性代码的构建块。</p><p>与 JavaScript 一样，你可以使用 <code>function</code> 关键字在 TypeScript 中声明函数：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">name</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">parameter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">parameter</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">returnType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#676E95;font-style:italic;">// do something</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>不同于 JavaScript，<strong>TypeScript 允许你在函数的参数和返回值中使用<a href="./../basis-types/type-annotations.html">类型注解</a></strong>。</p><p>让我们看下面的 <code>add()</code> 函数示例：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>在此示例中，<code>add()</code> 函数接受两个具有 <code>number</code> 类型的参数。</p><p>当调用 <code>add()</code> 函数时，TypeScript 编译器将检查传递给函数的每个参数以确保它们是数字。</p><p>在 <code>add()</code> 函数示例中，只能传递数字进入其中，而不能传递其他类型的值。</p><p>以下代码会导致错误，因为它将两个字符串而不是两个数字传递到了 <code>add()</code> 函数中：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">20</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Error：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">error </span><span style="color:#FFCB6B;">TS2345</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Argument </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> type </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;10&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> is not assignable to parameter </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> type </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p><strong>函数参数的类型也可以在函数体内用于类型检查。</strong></p><p>括号后面的 <code>: number</code> 表示返回类型。在这种情况下，<code>add()</code> 函数返回一个数值类型的值。</p><p><strong>当一个函数有返回类型时，TypeScript 编译器会检查每个 <code>return</code> 语句是否与返回类型兼容，以确保返回值符合要求。</strong></p><p>如果一个函数不返回任何值，则可以使用 <code>void</code> 类型作为返回类型。<code>void</code> 关键字表示该函数不会返回任何值。例如：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toUpperCase</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>空值会阻止函数内部的代码返回一个值，并阻止调用代码将函数的结果分配给一个变量。</strong></p><p>当你没有注释返回类型时，TypeScript 将尝试推断出适当的类型。例如：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>在这个例子中，TypeScript 编译器试图推断 <code>add()</code> 函数的返回类型为 <code>number</code> 类型，这是预期的。</p><p><strong>然而，如果一个函数有不同分支返回不同类型，则 TypeScript 编译器可能会推断 <code>union</code> 类型或 <code>any</code> 类型。</strong></p><p><strong>因此，在尽可能多地添加类型注解到函数时非常重要。</strong></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><ul><li>使用函数参数和返回值的类型注解来保持调用代码一致，并确保在函数体中进行类型检查。</li></ul>`,29),e=[l];function t(c,r,y,i,D,F){return n(),a("div",null,e)}const A=s(o,[["render",t]]);export{d as __pageData,A as default};
