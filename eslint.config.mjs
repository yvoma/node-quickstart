import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import sonarjs from 'eslint-plugin-sonarjs';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        plugins: { js },
        extends: ['js/recommended'],
    },
    globalIgnores(['coverage/*']),
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        plugins: { sonarjs },
        rules: {
            'sonarjs/cognitive-complexity': ['error', 15], // Limit function complexity to 15
            'sonarjs/no-collapsible-if': 'error', // Prevent collapsible if statements
            'sonarjs/no-identical-functions': 'error', // Prevent identical functions
            'max-lines-per-function': [
                'error',
                { max: 25, skipComments: true, skipBlankLines: true },
            ], // Limit function lines
            'max-lines': [
                'error',
                { max: 500, skipComments: true, skipBlankLines: true },
            ], // Limit file lines
            'max-params': ['error', 4], // Limit function parameters
            'max-statements': ['error', 20], // Limit function statements
            'max-statements-per-line': ['error', { max: 2 }], // Limit statements per line
        },
    },
    {
        files: ['**/*.ts'],
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
        },
    },
]);
