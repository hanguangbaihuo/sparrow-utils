# Babel 是一个 JavaScript 编译器

- Babel 通过语法转换器支持最新版本的 JavaScript 。
- 由于 Babel 只转换语法(如箭头函数)， 你可以使用 babel-polyfill 支持新的全局变量，例如 Promise 、新的原生方法如 String.padStart (left-pad) 等。
- Babel 能够转换 JSX 语法并去除类型注释。
- Babel 是建立在插件之外的。 你可以使用已有的插件或者自己编写插件来组成属于你自己的转换管道。使用或者创建一个 preset 可以让你轻松使用多个插件。
- 支持 Source map 因此可以轻松调试编译后代码。
