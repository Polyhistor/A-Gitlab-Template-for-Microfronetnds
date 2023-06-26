module.exports = {
    rules: {
        "categorised-imports": {
            meta: {
                type: "problem",
                docs: {
                    description: "imports categorisation rule",
                    category: "violation of standards"
                }
            },
            create: function (context) {
                return {
                    Identifier(node) {
                        if (!node.parent.type.includes("Import")) {
                            return
                        }

                        context.report({
                            node: node.parent.parent,
                            message: "Imports should be categorised!",
                            fix(fixer) { }
                        })
                    }
                };
            }
        }
    }
};
