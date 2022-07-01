module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "airbnb",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "jsx-a11y"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "error",
    semi: ["error", "always"],
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": "off",
    "react/sort-comp": "off",
    "import/no-extraneous-dependencies": "off",
  },
  overrides: [
    {
      files: ["**/*.test.js", "**/*.test.jsx"],
      env: {
        jest: true,
      },
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: {
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
};
