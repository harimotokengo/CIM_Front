module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'prettier', '@jambit/typed-redux-saga'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // Best Practices
    'no-var': 'error',
    'prefer-const': 'error',
    'no-eval': 'error',
    'max-len': ['error', { code: 120 }],
    eqeqeq: ['error', 'always'],
    'simple-import-sort/imports': 'error',
    indent: ['warn', 2, { SwitchCase: 1 }], // prettier

    // More
    'no-use-before-define': 'off',
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Stylistic Issues
    'no-trailing-spaces': 'error',
    'brace-style': 'error',
    'spaced-comment': ['error', 'always'],
    'eol-last': ['error', 'always'],

    // React
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',

    //TypeScript
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
        overrides: {
          parameterProperties: 'explicit',
        },
      },
    ],
    // '@typescript-eslint/explicit-function-return-type': [
    //   'warn',
    //   {
    //     allowExpressions: true,
    //   },
    // ],
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['./**/*.ts'],
      rules: {
        '@jambit/typed-redux-saga/use-typed-effects': 'error',
        '@jambit/typed-redux-saga/delegate-effects': 'error',
      },
    },
  ],
}
