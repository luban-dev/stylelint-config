declare const prettierConfig: {
    printWidth: number;
    tabWidth: number;
    useTabs: boolean;
    semi: boolean;
    singleQuote: boolean;
    quoteProps: string;
    jsxSingleQuote: boolean;
    trailingComma: string;
    bracketSpacing: boolean;
    jsxBracketSameLine: boolean;
    arrowParens: string;
    requirePragma: boolean;
    insertPragma: boolean;
    proseWrap: string;
    htmlWhitespaceSensitivity: string;
    vueIndentScriptAndStyle: boolean;
    endOfLine: string;
};
declare function luban(): {
    plugins: string[];
    extends: string[];
    rules: {
        'no-descending-specificity': null;
        'color-function-notation': null;
        'selector-pseudo-class-no-unknown': (boolean | {
            ignorePseudoClasses: string[];
        })[];
        'selector-type-no-unknown': (boolean | {
            ignoreTypes: string[];
        })[];
        'selector-class-pattern': string[];
        'scss/function-no-unknown': null;
        'scss/dollar-variable-empty-line-before': null;
        'number-max-precision': null;
        'keyframes-name-pattern': null;
        'declaration-block-no-redundant-longhand-properties': null;
        'prettier/prettier': (boolean | {
            printWidth: number;
            tabWidth: number;
            useTabs: boolean;
            semi: boolean;
            singleQuote: boolean;
            quoteProps: string;
            jsxSingleQuote: boolean;
            trailingComma: string;
            bracketSpacing: boolean;
            jsxBracketSameLine: boolean;
            arrowParens: string;
            requirePragma: boolean;
            insertPragma: boolean;
            proseWrap: string;
            htmlWhitespaceSensitivity: string;
            vueIndentScriptAndStyle: boolean;
            endOfLine: string;
        })[];
    };
    overrides: {
        files: string[];
        customSyntax: string;
    }[];
};

export { luban as default, prettierConfig };
