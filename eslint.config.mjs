import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser}, parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false
  }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { rules: {
    "react/react-in-jsx-scope": false,
    "react-hooks/rules-of-hooks": "error",
    "react/props-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }},
  {extends: "next/core-web-vitals"}
];
