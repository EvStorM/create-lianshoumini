/*
 * @Date: 2021-07-23 12:08:21
 * @LastEditors: E'vils
 * @LastEditTime: 2021-07-23 13:39:10
 * @Description:
 * @FilePath: /templates/uniapp-ts/.eslintrc.js
 */
module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
