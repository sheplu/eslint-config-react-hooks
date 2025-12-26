export const eslintReactHooksRules = {
    rules: {
        "react-hooks/exhaustive-deps": [
            "error", {
                "additionalHooks": "()",
            },
        ],
        "react-hooks/rules-of-hooks": [
            "error",
        ],
    },
};
