module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-empty': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-irregular-whitespace': 'warn',
    'no-useless-escape': 'warn',
    'no-unused-vars': 'warn',
    // Vue linter rules
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/valid-v-model': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
