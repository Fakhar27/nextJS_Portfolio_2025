module.exports = {
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 'off',  // Disables unused variables warning
        'react/no-unescaped-entities': 'off',        // Disables unescaped entities warning
        '@next/next/no-img-element': 'off'           // Disables <img> element warnings
    }
};