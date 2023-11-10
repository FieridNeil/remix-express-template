/* eslint-env node */
module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  ignorePatterns: [".eslintrc.cjs"],
  rules: {
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/comma-dangle": ["off", "never"],
    "no-console": "error",
  },
};
