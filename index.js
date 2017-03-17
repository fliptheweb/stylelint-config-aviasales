module.exports = {
  "rules": {
    "color-no-invalid-hex": true,
    "max-empty-lines": 2,
    "indentation": 2,
    "declaration-colon-space-after": "always",
    "declaration-block-semicolon-newline-after": "always",
    "value-list-comma-space-before": "never",
    "block-closing-brace-newline-after": "always",
    "rule-empty-line-before": ["always-multi-line", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    }],
    "max-empty-lines": [
      1,
      {"severity": "warning"}
    ],
    "no-extra-semicolons": true,
    "selector-pseudo-element-colon-notation": "double"
  }
}
