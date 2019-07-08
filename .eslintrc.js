module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "nbs"],
  parserOptions: {
    ecmaVersion: 6,
    project: "./tsconfig.json",
    sourceType: "module"
  },
};
