module.exports = {
  printWidth: 200,
  tabWidth: 2,
  useTabs: false,
  Quotes: false,
  semi: true, // 未尾逗号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 单引号
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'none', // 未尾分号
  jsxBracketSameLine: true,
  jsxSingleQuote: false,
  arrowParens: 'avoid',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.wxml',
      options: { parser: 'html' }
    },
    {
      files: '*.wxss',
      options: { parser: 'css' }
    },
    {
      files: '*.wxs',
      options: { parser: 'babel' }
    }
  ]
}
