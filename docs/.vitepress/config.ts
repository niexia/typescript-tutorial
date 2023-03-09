export default {
  title: 'typescript tutorial',
  description: 'Just Start TypeScript.',
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
          { text: 'Functions', link: '/functions/typescript-functions' },
          { text: 'Functions Types', link: '/functions/typescript-function-types' },
          { text: 'Optional Parameters', link: '/functions/typescript-default-parameters' },
          { text: 'Default Parameters', link: '/functions/typescript-optional-parameters' },
          { text: 'Rest Parameters', link: '/functions/typescript-rest-parameters' },
          { text: 'Function Overloading', link: '/functions/typescript-function-overloadings' },
        ]
      },
      {
        text: 'Interfaces',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Advanced Types',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Generics',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Modules',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'TypeScript in Node.js',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/niexia/typescript-tutorial' },
    ],
  }
}