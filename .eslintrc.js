module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'import', 'unused-imports'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variableLike', //matches the same as variable, function and parameter
                format: ['camelCase'],
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
            },
            {
                selector: 'method',
                format: ['camelCase'],
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                prefix: ['I'],
            },
            {
                selector: 'enum',
                format: ['PascalCase'],
                prefix: ['E'],
            },
            {
                selector: 'typeParameter',
                format: ['PascalCase'],
                prefix: ['T'],
            },
            {
                selector: 'typeLike', //matches the same as class, interface, typeAlias, enum, typeParameter
                format: ['PascalCase'],
            },
        ],
        'no-else-return': 'error',
        'no-return-await': 'error',
        'require-await': ['error'],
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'import/first': 'error',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '@src/**',
                        group: 'internal',
                    },
                    {
                        pattern: 'src/**',
                        group: 'internal',
                    },
                    {
                        pattern: '@carbonscore/**',
                        group: 'internal',
                    },
                    {
                        pattern: '@test/**',
                        group: 'internal',
                    },
                    {
                        pattern: 'test/**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin', 'object'],
                alphabetize: { order: 'asc' },
                'newlines-between': 'never',
            },
        ],
        'import/no-named-as-default-member': 'off',
        'import/no-absolute-path': 'error',
        'import/no-relative-packages': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
    },
    ignorePatterns: ['*.js'],
};
