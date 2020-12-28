module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // No need to append .js extension to imports
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
      },
    ],

    'react/prop-types': [0],
    'react/react-in-jsx-scope': 'off',
    'global-require': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/sort-comp': [0],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-one-expression-per-line': [0],
    'import/no-cycle': [1, { maxDepth: 1 }],
    'object-curly-newline': 'never',
    camelcase: 'off',

    'react/jsx-wrap-multilines': [0],

    'jsx-a11y/anchor-is-valid': [0],

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
  },
};
