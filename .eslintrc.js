module.exports = {
  "extends": "airbnb-base/legacy",
  "env": {
    "browser": true
  },
  "rules": {
    "jsx-a11y/href-no-hash": "off",
    "global-require": "off",
    "class-methods-use-this": "off",
    "no-unused-expressions": 0,
    "no-unused-vars": 0,
    "no-console": 0,
    "no-return-assign": 0,
    "comma-dangle": ["error", {
      "arrays": "always",
      "objects": "always",
      "imports": "ignore",
      "exports": "always",
      "functions": "ignore",
    }],
    "semi": [2, "always"],
    "arrow-parens": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "no-new-object": "error",
    "no-array-constructor": "error",
    "no-cond-assign": 0,
  },
  "plugins": [
    "promise",
  ],
  "parser": "babel-eslint"
};