/* eslint-env node */
module.exports = {
    extends: [
      // 'plugin:@typescript-eslint/recommended',
      // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      // 'plugin:@typescript-eslint/strict',
      'standard',
      '@nuxt/eslint-config'
    ],
    // parser: '@typescript-eslint/parser',
    // parserOptions: {
    //   project: './tsconfig.eslint.json',
    //   tsconfigRootDir: __dirname,
    //   extraFileExtensions: ['.vue']
    // },
    // plugins: ['@typescript-eslint'],
    root: true,
    overrides: [
      {
        files: ['*.ts', '*.vue'],
        rules: {
          'no-undef': 'off'
        }
      }
    ]
  }
