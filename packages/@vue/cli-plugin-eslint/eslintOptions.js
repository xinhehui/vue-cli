exports.config = api => {
  const config = {
    root: true,
    env: { node: true },
    extends: ['plugin:vue/essential'],
    rules: {
      'no-console': makeJSOnlyValue(`process.env.NODE_ENV === 'production' ? 'error' : 'off'`),
      'no-debugger': makeJSOnlyValue(`process.env.NODE_ENV === 'production' ? 'error' : 'off'`)
    }
  }
  if (!api.hasPlugin('typescript')) {
    config.parserOptions = {
      parser: 'babel-eslint'
    }
  }
  return config
}
exports.VueConfig = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['plugin:vue/essential', '@vue/standard'],
  // required to lint *.vue files
  parserOptions: {
    ecmaVersion: 6
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'spaced-comment': 0,

    'eqeqeq': 0,

    'one-var': 0,

    'camelcase': 0,
    // 变量未使用
    'no-unused-vars': 0
  }
}
exports.ReactConfig = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  env: {
    browser: true,
  },
  extends: 'airbnb',
  plugins: [
    'react'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? ['on', {
      // 允许声明未使用变量
      'vars': 'local',
      // 参数不检查
      'args': 'none'
    }] : ['off'],
    'no-mixed-operators': 'off',
    'react/no-multi-comp': process.env.NODE_ENV === 'production' ? ['on'] : ['off'], // 开发时为了便捷写在一个文件里
    'react/no-danger': ['off'], //默认不能使用dangerouslySetInnerHTML
    // 'jsx-a11y/anchor-has-content': ['error'],
    'react/self-closing-comp': ['off'], // 单个元素不应该闭合
    'global-require':['off'], // 要求require写在最上面 不能在内部使用require来引用图片 这个暂时关闭 因为svg还没用
    'max-len': ['error',300],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/mouse-events-have-key-events': ['off'], // 关爱physical disabilities
    'class-methods-use-this':['off'], // 实例方法中必须有this
    'no-underscore-dangle': ['off'],
    'no-plusplus': ['off'],
    // 'array-callback-return': ['off'],
    // 'no-param-reassign': ['off'],
    'no-console': process.env.NODE_ENV === 'production' ? ['error'] : ['off'],
    'func-names': ['off'], // 禁止匿名
    // 'consistent-return':['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'], // 编辑器有些import不能识别
    'import/no-extraneous-dependencies':['off'],
     // 'react/jsx-no-bind':['off'], // jsx不能使用bind
    'react/forbid-prop-types': ['off'],
    'react/prop-types': ['off'],  // 强制使用prop-types
    'prefer-destructuring': ['off'], //强制使用解构语法
    'react/jsx-filename-extension': ['off', { 'extensions': ['.js', '.jsx'] }], //默认jsx必须写在jsx后缀的文件中
    'linebreak-style': ['off', 'unix'], // unix windonw 换行风格不一致
    'no-eval': ['error', {'allowIndirect': true}], // default is false
    'space-before-function-paren': 'off',  //function前有空格
    'comma-dangle': ['error', 'never'],  //对象最后一个没有分号
    'no-trailing-spaces': ['off']
  }
}
// __expression is a special flag that allows us to customize stringification
// output when extracting configs into standalone files
function makeJSOnlyValue (str) {
  const fn = () => {}
  fn.__expression = str
  return fn
}
const baseExtensions = ['.js', '.jsx', '.vue']
exports.extensions = (api, type) => {
  const extensions = baseExtensions.concat('.ts', '.tsx')
  if (!type) {
    return extensions;
  }
  const config = type === 'vue' ? exports.VueConfig : exports.ReactConfig;
  return {
    extensions: extensions,
    baseConfig: config
  }
}
