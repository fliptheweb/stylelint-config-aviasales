module.exports = {
  "rules": {
    "color-no-invalid-hex": true,
    "declaration-colon-space-after": "always",
    "max-empty-lines": 2,
    "indentation": 2,
    "value-list-comma-space-before": "never",
    "declaration-block-semicolon-newline-after": "always",
    "block-closing-brace-newline-after": "always",
    "rule-nested-empty-line-before": ["always-multi-line", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    }],
    "rule-non-nested-empty-line-before": ["always", {
      "ignore": ["after-comment"]
    }]
  }
}
