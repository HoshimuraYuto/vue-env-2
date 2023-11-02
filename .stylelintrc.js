module.exports = {
  plugins: [],
  extends: [
    // stylelintの一般的な設定
    'stylelint-config-standard',
    // cssの順番をソートする設定
    'stylelint-config-recess-order',
    // scss向けの一般的な設定
    'stylelint-config-standard-scss',
    // vue向けの一般的な設定
    // recommendの場合、動かないパッケージがある可能性あり。
    // そのためstandardを採用
    // vue+scssの場合はscssをつける
    // ref: https://github.com/ota-meshi/stylelint-config-standard-vue
    'stylelint-config-standard-vue/scss'
  ],
  // overrides: [
  // 追加しそうな項目
  // ref: https://github.com/ota-meshi/stylelint-config-standard-vue
  // ],
  rules: {
    /* Enforce non-stylistic conventions */
    'declaration-no-important': true,
    'function-url-no-scheme-relative': true,
    /* Enforce non-stylistic conventions */
    'selector-no-qualifying-type': [
      true,
      {
        ignore: 'attribute'
      }
    ],
    'selector-id-pattern': [
      'avoid-id-selectors',
      {
        message:
          'Avoid ID selectors because uniqueness is difficult to guarantee (avoid-id-selectors)'
      }
    ]
  }
}
