module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    commonjs: true,
    es2017: true,
  },
  plugins: [
    'react',
    'sonarjs',
    'unicorn',
    'prettier',
    '@typescript-eslint',
    'jsdoc',
    'deprecate',
    'ezyvet-custom',
    'import',
  ],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    'plugin:jsdoc/recommended',
  ],
  rules: {
    // Prettier rules
    'prettier/prettier': 'error',

    // Custom rules
    'ezyvet-custom/categorised-imports': 'off',

    // React/Airbnb rules
    'react/jsx-filename-extension': 'off',
    'object-curly-newline': 'off',
    'max-len': ['error', { code: 110 }],
    'no-tabs': 'off',
    'no-bitwise': 'off',

    // Deprecation rules
    'deprecate/import': ['error', { nameRegExp: 'material-uig', use: 'Please use styled components' }],

    // Unicorn rules
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'off',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/import-index': 'off',
    'unicorn/import-style': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-module': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-spread': 'off',
    'unicorn/prefer-string-replace-all': 'off',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-switch': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/string-content': 'off',
    'unicorn/throw-new-error': 'error',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'array-callback-return': 'off',

    // SonarJs rules
    'sonarjs/no-small-switch': 'off',
    'sonarjs/prefer-immediate-return': 'off',

    // Eslint typescript recommended rules
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          object: false,
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true,
      },
    ],

    // This rule is set off, because it is captured by Prettier with a better formatted error message
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',

    // Turning off formatting rules because they are already captured by Prettier.
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // JSDoc rules
    'jsdoc/no-undefined-types': [
      'error',
      {
        definedTypes: ['unknown'],
      },
    ],

    // Import/Export rules
    'import/first': 'off',
    'import/prefer-default-export': 'off',
    // The rule is set off in favour of Ezyvet custom import order rules
    'import/order': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['test-utils'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],

    // jsdoc
    'jsdoc/require-param': 'off',

    // general rules without prefixes
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'operator-linebreak': 'off',
    'no-param-reassign': 'off',
    'implicit-arrow-linebreak': 'off',
    'consistent-return': 'off',
    'no-confusing-arrow': 'off',
    'function-paren-newline': 'off',
    'jsx-quotes': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-syntax': 'off',
    'react/jsx-curly-newline': 'off',
    'react/prop-types': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-unused-prop-types': 'off',
    'nonblock-statement-body-position': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'error',
    'react/no-array-index-key': 'error',
    'react/static-property-placement': ['error', 'static public field'],
    'max-len': ['error', { code: 110, ignorePattern: '(import|export)\\s(.+)\\s(from)\\s((\'|").+(\'|"));' }],
  },
  settings: {
    'import/resolver': 'typescript',
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/', '.eslintrc.cjs'],
};
