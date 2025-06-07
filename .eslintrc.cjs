module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [ 'error' ],
    'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
    'react/react-in-jsx-scope': 'off',
  },
};