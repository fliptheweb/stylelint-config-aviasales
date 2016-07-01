module.exports = {
  "rules": {
    "color-no-invalid-hex": true,
    "max-empty-lines": 2,
    "indentation": 2,
    "declaration-colon-space-after": "always",
    "declaration-block-semicolon-newline-after": "always",
    "value-list-comma-space-before": "never",
    "block-closing-brace-newline-after": "always",
    "rule-nested-empty-line-before": ["always-multi-line", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    }],
    "rule-non-nested-empty-line-before": ["always", {
      "ignore": ["after-comment"]
    }],
    "selector-pseudo-element-colon-notation": "double"
  }
}
