module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:react/recommended',],
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  rules: {
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    quotes: ['error', 'single',],
    semi: ['error', 'always',],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always',
        objects: 'always',
        imports: 'ignore',
        exports: 'never',
        functions: 'ignore',
      },
    ],
    'no-tabs': ['off',],
    'linebreak-style': ['error', 'windows',],
    indent: ['error', 2,],
    'array-callback-return': ['off',],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true, },],
    'react/jsx-filename-extension': ['off',],
  },
};
