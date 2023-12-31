export const prettierConfig = {
  // 每行最大字符数
  printWidth: 80,
  // tab空格数
  tabWidth: 2,
  // 是否使用tab缩进
  useTabs: false,
  // 在每个语句末尾加上分号
  semi: true,
  // 使用单引号
  singleQuote: false,
  // 对象熟悉是否需要引号
  quoteProps: 'as-needed',
  // jsx 中熟悉使用单引号
  jsxSingleQuote: false,
  // 多行是加结尾逗号
  trailingComma: 'none',
  // 大括号左右加空格
  bracketSpacing: true,
  // jsx标签结束符不换行
  jsxBracketSameLine: false,
  // 箭头函数参数加括号
  arrowParens: 'always',
  // 文件顶部有需要格式化注释时才格式化
  requirePragma: false,
  // 格式化后添加格式化注释标志
  insertPragma: false,
  // markdown文本换行
  proseWrap: 'preserve',
  // 处理html换行后空格问题
  htmlWhitespaceSensitivity: 'css',
  // vue style 和 script 内容是否缩进
  vueIndentScriptAndStyle: false,
  // 行尾模式
  endOfLine: 'auto'
};

export default function luban() {
  return {
    plugins: ['stylelint-prettier'],
    extends: [
      'stylelint-config-standard',
      'stylelint-config-standard-scss',
      'stylelint-config-css-modules',
      'stylelint-prettier/recommended'
    ],
    rules: {
      'no-descending-specificity': null,
      'color-function-notation': null,
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: ['global', 'local']
        }
      ],
      'selector-type-no-unknown': [
        true,
        {
          ignoreTypes: ['/[a-zA-Z-]+/']
        }
      ],
      'selector-class-pattern': ['[0-9a-zA-Z-_]+'],
      'number-max-precision': null,
      'keyframes-name-pattern': null,
      'declaration-block-no-redundant-longhand-properties': null,
      'scss/function-no-unknown': [true, {
        ignoreFunctions: []
      }],
      'scss/dollar-variable-empty-line-before': null,
      'prettier/prettier': [true, prettierConfig]
    },
    overrides: [
      {
        files: ['*.scss', '**/*.scss'],
        customSyntax: 'postcss-scss'
      }
    ]
  };
}
