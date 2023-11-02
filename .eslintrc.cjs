/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    // vue用のデフォルト設定。Priority Cまで設定されている。
    // ref: https://ja.vuejs.org/style-guide/
    // ref: https://eslint.vuejs.org/rules/attribute-hyphenation.html
    'plugin:vue/vue3-recommended',
    // eslintデフォルトの設定
    'eslint:recommended',
    // plugins: importで個別に設定しているためコメントアウト
    // 細かく設定してあげないとソートまでしてくれない
    // 'plugin:import/recommended',
    // prettierと競合しないための設定
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    // importの順番をソートする
    'import'
    // 使っていないimportを自動で削除する
    // 自動で削除する場合はrulesの項目と一緒に利用する
    // 'unused-imports'
  ],
  rules: {
    // 自動で削除する場合はこちらをコメントアウト
    // 'unused-imports/no-unused-imports': 'warn',
    // importの順番をソートする
    // ref: https://github.com/import-js/eslint-plugin-import/tree/main
    // なお、eslintの設定で'sort-imports'をしてもエラーになるだけで自動ソートはしていないためプラグインで対応
    // ref: https://eslint.org/docs/latest/rules/sort-imports
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always'
      }
    ],
    // script template styleの並びを強制する
    // ref: https://eslint.vuejs.org/rules/block-order.html
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ]
  }
}
