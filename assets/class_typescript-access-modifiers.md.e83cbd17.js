import{_ as s,c as a,o as n,a as l}from"./app.5b445d45.js";const A=JSON.parse('{"title":"TypeScript Access Modifiers","description":"","frontmatter":{},"headers":[{"level":2,"title":"private 修饰符","slug":"private-修饰符","link":"#private-修饰符","children":[]},{"level":2,"title":"public 修饰符","slug":"public-修饰符","link":"#public-修饰符","children":[]},{"level":2,"title":"protected 修饰符","slug":"protected-修饰符","link":"#protected-修饰符","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"class/typescript-access-modifiers.md"}'),p={name:"class/typescript-access-modifiers.md"},o=l(`<h1 id="typescript-access-modifiers" tabindex="-1">TypeScript Access Modifiers <a class="header-anchor" href="#typescript-access-modifiers" aria-hidden="true">#</a></h1><p>摘要：在本教程中，你将学习 TypeScript 中的访问修饰符。</p><p><strong>访问修饰符改变了一个类的属性和方法的可见性。TypeScript 提供了三种访问修饰符：</strong></p><ul><li><strong>private 私有的</strong></li><li><strong>protected 保护的</strong></li><li><strong>public 公共的</strong></li></ul><p>请注意，TypeScript 在<strong>编译时</strong>从逻辑上控制访问，<strong>而不是在运行时</strong>。</p><h2 id="private-修饰符" tabindex="-1">private 修饰符 <a class="header-anchor" href="#private-修饰符" aria-hidden="true">#</a></h2><p><strong><code>private</code> 修饰符将可见性限制为仅在同一类中</strong>。当你将 <code>private</code> 修饰符添加到属性或方法时，只能在同一类内访问该属性或方法。任何尝试在类外部访问私有属性或方法都会导致编译时错误。</p><p>以下示例展示了如何使用 <code>private</code> 修饰符来限定 <code>person</code> 类的 <code>ssn</code>、<code>firstName</code> 和 <code>lastName</code> 属性：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">ssn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">firstName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">lastName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>一旦有了这个私有属性，你就可以在 <code>Person</code> 类的构造函数或方法中访问 <code>ssn</code> 属性。比如说：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">ssn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">firstName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">lastName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">ssn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">firstName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">lastName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">ssn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ssn</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">firstName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">firstName</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">lastName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lastName</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">getFullName</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">firstName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">lastName</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>下面尝试在类外面访问 <code>ssn</code> 属性将编译错误：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> person </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">153-07-3130</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Doe</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ssn)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// compile error</span></span>
<span class="line"></span></code></pre></div><h2 id="public-修饰符" tabindex="-1">public 修饰符 <a class="header-anchor" href="#public-修饰符" aria-hidden="true">#</a></h2><p><strong><code>public</code> 修饰符允许类的属性和方法从所有位置被访问。如果你没有为属性和方法指定任何访问修饰符，它们将默认使用公共修饰符。</strong></p><p>例如，<code>Person</code> 类的 <code>getFullName()</code> 方法具有 <code>public</code> 修饰符。下面明确地将 <code>public</code> 修饰符添加到 <code>getFullName()</code> 方法中：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">getFullName</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">firstName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">lastName</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>它具有与省略 <code>public</code> 关键字相同的效果。</p><h2 id="protected-修饰符" tabindex="-1">protected 修饰符 <a class="header-anchor" href="#protected-修饰符" aria-hidden="true">#</a></h2><p><strong><code>protected</code> 修饰符允许一个类的属性和方法在同一个类和子类中被访问。</strong></p><p>当一个类（子类）继承自另一个类（父类）时，它就是父类的一个子类。</p><p>如果你试图从其他地方访问受保护的属性或方法，TypeScript 编译器会发出一个错误。</p><p>要给一个属性或方法添加保护的修饰符，你可以使用 <code>protected</code> 关键字。比如说。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">ssn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// other code</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>ssn</code> 属性现在是受保护的。它可以在 <code>Person</code> 类和任何继承于 <code>Person</code> 类的类中被访问。在这里你会学到更多关于继承的知识。</p><p>Person 类声明了两个私有属性和一个保护属性。它的构造函数将这些属性初始化为三个参数。</p><p>为了使代码更短，<strong>TypeScript 允许你既声明属性又在构造函数中初始化它们</strong>，像这样。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ssn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">firstName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">lastName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">ssn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ssn</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">firstName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">firstName</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">lastName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lastName</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">getFullName</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">firstName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">lastName</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><strong>当考虑属性和方法的可见性时，最好从最不可见的访问修饰符 private 开始。</strong></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><ul><li>TypeScript 为类的属性和方法提供了三种访问修改器：<code>private</code>、<code>protected</code> 和 <code>public</code>。</li><li><code>private</code> 修改器允许在同一个类中访问。</li><li><code>protected</code> 修饰符允许在同一个类和子类中访问。</li><li><code>public</code> 修饰符允许从任何地方访问。</li></ul>`,31),e=[o];function t(c,r,y,D,F,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};