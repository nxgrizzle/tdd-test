module.exports = {
  extends: ["codingitwrong"],
  parser: "@babel/eslint-parser",
  plugins: ["jest", "react", "cypress"],
  env: { browser: true, "cypress/globals": true, "jest/globals": true },
};
