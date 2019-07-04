module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react"
  ],
  "parser": "babel-eslint",
  "rules": {
    "indent": ["error", 4],
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      2,
      "always"
    ],
    "comma-dangle": [
      2,
      "never"
    ],
    "generator-star-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "no-unused-vars": [
      1,
      {
        "args": "none"
      }
    ],
    "max-len": [
      1,
      110,
      4
    ],
    "react/prop-types": 0,
    "react/jsx-no-bind": 1,
    "key-spacing": [
      0,
      {
        "align": "value"
      }
    ],
    "no-multi-spaces": [
      2,
      {
        "exceptions": {
          "ImportDeclaration": true,
          "VariableDeclarator": true
        }
      }
    ],
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "quote-props": [
      2,
      "consistent-as-needed"
    ],
    "no-constant-condition": 0,
    "no-empty-function": 0,
    "import/no-unresolved": 0,
    "new-cap": 0,
    "no-debugger": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": 0,
    "import/no-dynamic-require": 0,
    "react/forbid-prop-types": 0,
    "no-underscore-dangle": 0,
    "arrow-parens": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/label-has-for": 0,
    "react/no-string-refs": 0,
    "react/prefer-stateless-function": 1,
    "prefer-arrow-callback": 0,
    "class-methods-use-this": 0,
    "import/prefer-default-export": 0,
    "consistent-return": 0,
    "no-plusplus": 0,
    "eqeqeq": 0,
    "import/imports-first": 0,
    "react/no-array-index-key": 0,
    "react/require-default-props": 0,
    "no-nested-ternary": 0,
    "arrow-body-style": 0,
    "no-confusing-arrow": 0,
    "react/jsx-wrap-multilines": 0,
    "no-invalid-this": 0,
    "no-undef": 0
  },
};
