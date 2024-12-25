import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config} */
export default {
  root: true,
  extends: [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.recommended
  ],
  ignorePatterns: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};