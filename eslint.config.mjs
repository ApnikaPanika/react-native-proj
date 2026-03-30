import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactNative from "eslint-plugin-react-native";
import { defineConfig } from "eslint/config";

// eslint-disable-next-line no-restricted-syntax
export default defineConfig([
  { ignores: ["node_modules/", "dist/", "build/", "ios/", "android/", ".expo/", "**/*.log"] },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    plugins: { "react-native": pluginReactNative },
    rules: {
      ...pluginReactNative.configs.all.rules,
      "react-native/no-color-literals": "off",
      "no-restricted-syntax": [
        "error",
        { selector: "ExportDefaultDeclaration", message: "Use named exports instead of default exports." },
      ],
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
