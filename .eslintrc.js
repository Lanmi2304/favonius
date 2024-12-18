const { resolve } = require('node:path');

const { JAVASCRIPT_FILES } = require('@vercel/style-guide/eslint/constants');

const project = resolve(__dirname, 'tsconfig.json');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    'plugin:tailwindcss/recommended',
    'plugin:depend/recommended',
    // 'plugin:barrel-files/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': { typescript: { project } },
    'jsx-a11y': {
      polymorphicPropName: 'component',
      components: {
        Button: 'button',
        Icon: 'svg',
        IconButton: 'button',
        Image: 'img',
        Input: 'input',
        Link: 'a',
        List: 'ul',
        ListDivider: 'li',
        ListItem: 'li',
        ListItemButton: 'button',
        NextImage: 'img',
        NextLink: 'a',
        Textarea: 'textarea',
      },
    },
  },
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: [],
  ignorePatterns: ['.*.js', 'node_modules/'],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['error'],
      },
    ],
    'no-nested-ternary': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],

    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',

    /** Dangerously allow production builds to finish even if type errors were found. */
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',

    /** Others */
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowRegExp: false,
        allowNever: false,
      },
    ],
    /** Sort import statements */
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    /** Sort imports by declaration */
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
  },
  overrides: [
    /**
     * JS files are using @babel/eslint-parser, so typed linting doesn't work there.
     * @see {@link https://github.com/vercel/style-guide/blob/canary/eslint/_base.js}
     * @see {@link https://typescript-eslint.io/linting/typed-linting#how-can-i-disable-type-aware-linting-for-a-subset-of-files}
     */
    {
      files: JAVASCRIPT_FILES,
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
    /** Varies file convention from libraries, e.g. Next.js App Router and Prettier
     * Must use default export */
    {
      files: [
        '*/**/mail.tsx',
        '*.config.{mjs,ts}',
        'app/**/{page,layout,template,not-found,*error,opengraph-image,apple-icon}.tsx',
        'app/**/{sitemap,robots}.ts',
        '_components.*.{ts,tsx}',
      ],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': ['error', { target: 'any' }],
      },
    },
    /** Disable default export rule for config files */
    {
      files: ['lib/config/*.ts', 'lib/config/**/*.ts'],
      rules: { 'import/prefer-default-export': 'off' },
    },
    /** Disable default export rule for declaration files */
    {
      files: ['**/*.d.ts'],
      rules: { 'import/no-default-export': 'off' },
    },
    /** Mails */
    {
      files: ['*/**/mail.tsx'],
      rules: {
        'tailwindcss/no-custom-classname': 'off',
        'import/no-default-export': 'off',
      },
    },
  ],
};
