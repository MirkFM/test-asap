'use strict';

module.exports = {
    env: {
        browser: true,
        node: true,
        mocha: true
    },
    globals: {
        asset: true,
        basis: true,
        resource: true,
        Promise: true,
        chrome: true
    },
    rules: {
        strict: 2,
        indent: [2, 4, { SwitchCase: 1 }],
        'linebreak-style': [2, 'unix'],
        'no-multiple-empty-lines': [2, { max: 1 }],
        'brace-style': 2,
        'padded-blocks': [2, 'never'],
        quotes: [2, 'single', { allowTemplateLiterals: true }],
        'key-spacing': 2,
        'keyword-spacing': 2,
        'space-unary-ops': [2, { words: true, nonwords: false }],
        'space-infix-ops': 2,
        'space-before-function-paren': [2, 'never'],
        'space-before-blocks': 2,
        'spaced-comment': 2,
        'array-bracket-spacing': 2,
        'space-in-parens': 2,
        'no-trailing-spaces': 2,
        'comma-spacing': 2,
        'comma-dangle': 2,
        'comma-style': 2,
        yoda: 2,
        'eol-last': 2,
        'operator-linebreak': [2, 'after', { overrides: { '&&': 'ignore', '||': 'ignore' } }],
        semi: 2,
        'semi-spacing': 2,
        'object-curly-spacing': [2, 'always'],
        'no-unused-vars': [2, { vars: 'all', args: 'after-used', varsIgnorePattern: '^React$' }],
        'no-console': 2,
        'no-debugger': 2,
        'no-constant-condition': 2,
        'no-cond-assign': 'off',
        'no-control-regex': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': [2, { allowEmptyCatch: true }],
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': [2, 'functions'],
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'use-isnan': 2,
        'valid-typeof': 2,
        'no-case-declarations': 0,
        'no-empty-pattern': 2,
        'no-fallthrough': 2,
        curly: 2,
        'dot-location': [2, 'property'],
        'dot-notation': 2,
        'no-caller': 2,
        'no-div-regex': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-floating-decimal': 2,
        'no-implicit-coercion': 2,
        'no-implied-eval': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unused-expressions': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-void': 2,
        'no-with': 2,
        radix: 2,
        'wrap-iife': [2, 'any'],
        'no-catch-shadow': 2,
        'no-delete-var': 2,
        'no-shadow-restricted-names': 2,
        'no-undef': [2, { typeof: true }],
        'no-undef-init': 2,
        'arrow-spacing': 2,
        'constructor-super': 2,
        'no-this-before-super': 2,
        'no-mixed-spaces-and-tabs': 2,
        'one-var': [2, 'never'],
        'one-var-declaration-per-line': [2, 'always']
    },
    parserOptions: {
        ecmaVersion: 6
    }
};
