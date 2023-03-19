import{_ as s,c as a,o as n,a as p}from"./app.5b445d45.js";const A=JSON.parse('{"title":"TypeScript String","description":"","frontmatter":{},"headers":[{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"basis-types/string-type.md"}'),l={name:"basis-types/string-type.md"},e=p(`<h1 id="typescript-string" tabindex="-1">TypeScript String <a class="header-anchor" href="#typescript-string" aria-hidden="true">#</a></h1><p>摘要：在本教程中，你将学习 TypeScript 的字符串数据类型。</p><p>与 JavaScript 类似，TypeScript 使用双引号（<code>&quot;</code>）或单引号（<code>&#39;</code>）来包围字符串字面量：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> firstName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Web Developer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>TypeScript 也支持使用反引号（<code>\`</code>）来包围字符的模板字符串。</p><p>模板字符串允许你创建多行字符串并提供字符串插值功能。</p><p>以下示例演示了如何使用反引号 (\`) 创建多行字符串：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> description </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">This TypeScript string can </span></span>
<span class="line"><span style="color:#C3E88D;">span multiple </span></span>
<span class="line"><span style="color:#C3E88D;">lines</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>字符串插值允许你讲变量插嵌入到字符串中，类似这样：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> firstName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Web Developer</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> profile</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">I&#39;m </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">firstName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">. </span></span>
<span class="line"><span style="color:#C3E88D;">I&#39;m a </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">title</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(profile)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">I</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">m John. </span></span>
<span class="line"><span style="color:#A6ACCD;">I</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">m a Web Developer.</span></span>
<span class="line"></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><ul><li>在 TypeScript 中，所有字符串都具有 string 类型。</li><li>类似 JavaScript，TypeScript 使用双引号（&quot;）、单引号（&#39;）和反引号（\`）来包围字符串字面量。</li></ul>`,14),o=[e];function t(c,r,i,D,y,C){return n(),a("div",null,o)}const d=s(l,[["render",t]]);export{A as __pageData,d as default};
