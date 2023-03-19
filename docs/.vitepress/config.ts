export default {
  title: 'typescript tutorial',
  description: 'Just Start TypeScript - TypeScript 教程',
  base: '/typescript-tutorial/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico'}],
  ],
  themeConfig: {
    nav: [
      // { text: 'Challenge', link: '/challenge/' },
      { text: 'playground', link: 'https://www.typescriptlang.org/play' },
      { text: 'fe tutorial', link: 'https://niexia.github.io/fe-tutorial/javascript/programming-language/' },
      { text: 'blog', link: 'https://niexia.github.io' },
    ],
    sidebar: [
      {
        text: 'Getting Start',
        items: [
          { text: '什么是 TypeScript', link: '/getting-start/what-is-typescript' },
          { text: 'TypeScript 开发环境设置', link: '/getting-start/typescript-setup' },
          { text: 'TypeScript “Hello, World!”', link: '/getting-start/typescript-hello-world' },
          { text: '为什么选择 TypeScript', link: '/getting-start/why-typescript' },
        ]
      },
      {
        text: 'Basic Types',
        items: [
          { text: 'TypeScript 类型', link: '/basis-types/typescript-types' },
          { text: '类型注解', link: '/basis-types/type-annotations' },
          { text: '类型推断', link: '/basis-types/type-inference' },
          { text: 'number 类型', link: '/basis-types/number-type' },
          { text: 'string 类型', link: '/basis-types/string-type' },
          { text: 'boolean 类型', link: '/basis-types/boolean-type' },
          { text: 'object 类型', link: '/basis-types/object-type' },
          { text: 'array 类型', link: '/basis-types/array-type' },
          { text: 'tuple 类型', link: '/basis-types/tuple-types' },
          { text: 'enum 类型', link: '/basis-types/enum-types' },
          { text: 'any 类型', link: '/basis-types/any-type' },
          { text: 'void 类型', link: '/basis-types/void-type' },
          { text: 'never 类型', link: '/basis-types/never-type' },
          { text: 'union 类型', link: '/basis-types/union-type' },
          { text: '类型别名', link: '/basis-types/type-aliases' },
          { text: '字符串字面类型', link: '/basis-types/string-literal-types' },
        ]
      },
      {
        text: 'Control Flow Statements',
        items: [
          { text: 'if else', link: '/control-flow-statements/typescript-if-else' },
          { text: 'switch case', link: '/control-flow-statements/typescript-switch-case' },
          { text: 'for', link: '/control-flow-statements/typescript-for' },
          { text: 'while', link: '/control-flow-statements/typescript-while' },
          { text: 'do while', link: '/control-flow-statements/typescript-do-while' },
          { text: 'break', link: '/control-flow-statements/typescript-break' },
          { text: 'continue', link: '/control-flow-statements/typescript-continue' },
        ]
      },
      {
        text: 'Functions',
        items: [
          { text: '函数', link: '/functions/typescript-functions' },
          { text: '函数类型', link: '/functions/typescript-function-types' },
          { text: '可选参数', link: '/functions/typescript-optional-parameters' },
          { text: '默认参数', link: '/functions/typescript-default-parameters' },
          { text: 'Rest 参数', link: '/functions/typescript-rest-parameters' },
          { text: '函数重载', link: '/functions/typescript-function-overloadings' },
        ]
      },
      {
        text: 'Classes',
        items: [
          { text: '类', link: '/class/typescript-class' },
          { text: '访问修饰符', link: '/class/typescript-access-modifiers' },
          { text: '只读属性', link: '/class/typescript-readonly' },
          { text: 'Getters 和 Setters', link: '/class/typescript-getters-setters' },
          { text: '继承', link: '/class/typescript-inheritance' },
          { text: '静态方法和属性', link: '/class/typescript-static-methods-and-properties' },
          { text: '抽象类', link: '/class/typescript-abstract-classes' },
        ]
      },
      {
        text: 'Interfaces',
        items: [
          { text: '接口', link: '/interfaces/typescript-interface' },
          { text: '扩展接口', link: '/interfaces/typescript-extend-interface' },
        ]
      },
      {
        text: 'Advanced Types',
        items: [
          { text: '交叉类型', link: '/advanced-types/typescript-intersection-types' },
          { text: '类型守卫', link: '/advanced-types/typescript-type-guards' },
          { text: '类型转换', link: '/advanced-types/type-casting' },
          { text: '类型断言', link: '/advanced-types/type-assertions' },
        ]
      },
      {
        text: 'Generics',
        items: [
          { text: 'Typescript 泛型', link: '/generics/typescript-generics' },
          { text: '泛型约束', link: '/generics/typescript-generic-constraints' },
          { text: '泛型类', link: '/generics/typescript-generic-classes' },
          { text: '泛型接口', link: '/generics/typescript-generic-interfaces' },
        ]
      },
      {
        text: 'Modules',
        items: [
          { text: 'TypeScript 模块', link: '/modules/typescript-modules' },
        ]
      },
      {
        text: 'TypeScript in Node.js',
        items: [
          { text: 'Node.js TypeScript', link: '/type-in-nodejs/nodejs-typescript' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/niexia/typescript-tutorial' },
    ],
  }
}