module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
  },
};
