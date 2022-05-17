module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'vue/no-unesed-components': 'off',
    'no-unresolved': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
    'no-alert': 'off',
    'prefer-template': 'off',
    'no-unuses-expression': 'off',
    // eslint-disable-next-line no-constant-condition
    'no-console': 'mongodb://localhost:27017/jwtAuthDb' === 'production' ? 'warn' : 'off',
    // eslint-disable-next-line no-constant-condition
    'no-debugger': 'mongodb://localhost:27017/jwtAuthDb' === 'production' ? 'warn' : 'off',
  },
};
