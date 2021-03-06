module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: "eslint:recommended",
    rules: {
        // enable additional rules
        indent: ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "always"],

        // override configuration set by extending "eslint:recommended"
        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "for-direction": "off",
    },
};