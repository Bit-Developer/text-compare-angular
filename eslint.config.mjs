import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-plugin-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
    ".angular/*",
    "projects/**/*",
    "dist/*",
    "coverage/*",
    "e2e/*",
    "**/*.d.ts",
    "**/main.ts"
]), {
    extends: compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),
}, {
    files: ["**/*.ts"],

    extends: compat.extends(
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
        "prettier",
    ),

    plugins: {
        prettier,
    },

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: ["tsconfig.json", "e2e/tsconfig.json"],
            createDefaultProgram: true,
        },
    },

    rules: {
        "array-bracket-spacing": ["error", "never"],
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed"],

        "brace-style": ["error", "1tbs", {
            allowSingleLine: true,
        }],

        "comma-dangle": ["error", "never"],
        curly: [2],
        "eol-last": ["error", "always"],
        eqeqeq: "error",
        "guard-for-in": "error",

        // Removing indent rule as it's handled by Prettier
        // indent: ["error", 2, {
        //     SwitchCase: 1,
        //     FunctionExpression: {
        //         parameters: "first",
        //     },
        // }],

        "no-caller": "error",
        "no-bitwise": "error",

        "no-console": ["error", {
            allow: ["warn", "error"],
        }],

        "no-empty": "error",
        "no-fallthrough": "error",
        "no-labels": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": "error",

        "no-restricted-imports": ["error", {
            paths: ["rxjs/Rx"],
        }],

        "no-trailing-spaces": "error",
        "no-throw-literal": "error",
        "no-whitespace-before-property": "error",
        "quote-props": ["error", "as-needed"],
        quotes: ["error", "single"],
        semi: ["error", "always"],
        "space-before-blocks": "error",
        "space-infix-ops": "error",
        "@angular-eslint/component-class-suffix": "error",

        "@angular-eslint/component-selector": ["error", {
            prefix: ["app", "widget", "rz"],
            style: "kebab-case",
            type: "element",
        }],

        "@angular-eslint/directive-class-suffix": "error",

        "@angular-eslint/directive-selector": ["error", {
            prefix: ["app", "widget", "rz"],
            style: "camelCase",
            type: "attribute",
        }],

        "@angular-eslint/no-empty-lifecycle-method": "error",
        //"@angular-eslint/no-host-metadata-property": "error",
        "@angular-eslint/no-input-rename": "error",
        "@angular-eslint/no-inputs-metadata-property": "error",
        "@angular-eslint/no-output-on-prefix": "error",
        "@angular-eslint/no-output-rename": "error",
        "@angular-eslint/no-outputs-metadata-property": "error",
        "@angular-eslint/prefer-standalone": "off",
        "@angular-eslint/use-lifecycle-interface": "error",
        "@angular-eslint/use-pipe-transform-interface": "error",

        "@typescript-eslint/array-type": ["error", {
            default: "array",
        }],

        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
/*
        "@typescript-eslint/member-delimiter-style": ["error", {
            multiline: {
                delimiter: "semi",
                requireLast: true,
            },

            singleline: {
                delimiter: "semi",
                requireLast: false,
            },
        }],*/

        "@typescript-eslint/member-ordering": ["error", {
            default: {
                memberTypes: ["static-field", "instance-field", "static-method", "instance-method"],
            },
        }],

        "@typescript-eslint/naming-convention": ["error", {
            selector: "variableLike",
            format: ["camelCase", "UPPER_CASE"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
        }, {
            selector: "enumMember",
            format: ["UPPER_CASE"],
        }, {
            selector: "typeLike",
            format: ["PascalCase"],
        }],

        "@typescript-eslint/no-empty-interface": ["error", {
            allowSingleExtends: true,
        }],

        "@typescript-eslint/no-inferrable-types": ["error", {
            ignoreParameters: true,
        }],

        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        //"@typescript-eslint/type-annotation-spacing": "error",

        "@typescript-eslint/unbound-method": ["error", {
            ignoreStatic: true,
        }],

        "prettier/prettier": "error",
    },
}, {
    files: ["**/*.html"],

    extends: compat.extends(
        "plugin:@angular-eslint/template/recommended",
        "plugin:prettier/recommended",
        "prettier",
    ),

    rules: {
        "@angular-eslint/template/eqeqeq": ["error"],
        "@angular-eslint/template/no-negated-async": "error",
        "prettier/prettier": "error",
    },
}]);