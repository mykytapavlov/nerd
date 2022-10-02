const data = {
    "name": "python",
    "children": [
        {
            "name": "interpreter",
            "children": [
                {
                    "name": "compiler",
                    "url": "src/python/interpreter/compiler/compiler",
                    "children": [
                        {
                            "name": "bytecode",
                            "url": "src/python/interpreter/compiler/bytecode",
                        }
                    ],  
                },
                {
                    "name": "virtual machine",
                    "url": "src/python/interpreter/virtual-machine/virtual-machine",  
                }
            ],
        },
        {
            "name": "buil-in-types",
            "children": [
                {
                    "name": "immutable",
                    "children": [
                        {
                            "name": "numeric",
                            "url": "src/python/built-in-types/immutable/numeric"
                        },
                        {
                            "name": "string",
                            "url": "src/python/built-in-types/immutable/string"
                        },
                        {
                            "name": "boolean",
                            "url": "src/python/built-in-types/immutable/boolean"
                        },
                        {
                            "name": "tuple",
                            "url": "src/python/built-in-types/immutable/tuple"
                        },
                        {
                            "name": "frozenset",
                            "url": "src/python/built-in-types/immutable/frozenset"
                        },
                    ]
                },
                {
                    "name": "mutable",
                    "children": [
                        {
                            "name": "list",
                            "url": "src/python/built-in-types/mutable/list"
                        },
                        {
                            "name": "dict",
                            "url": "src/python/built-in-types/mutable/dict"
                        },
                        {
                            "name": "set",
                            "url": "src/python/built-in-types/mutable/set"
                        },
                    ]
                },
            ],
        },
        {
            "name": "control-flow",
            "children": [
                {
                    "name": "if",
                    "url": "src/python/control-flow/if"
                },
                {
                    "name": "for",
                    "url": "src/python/control-flow/for"
                },
                {
                    "name": "for",
                    "url": "src/python/control-flow/while"
                },
                {
                    "name": "function",
                    "url": "src/python/control-flow/function"
                },
                {
                    "name": "try",
                    "url": "src/python/control-flow/try"
                },
            ],
        },
        {
            "name": "metaclass",
            "url": "src/python/metaclass",
        },
        {
            "name": "closure",
            "url": "src/python/closure",
        },
        {
            "name": "pointer",
            "url": "src/python/pointer",
        },
        {
            "name": "data_science",
            "children": [
                {
                    "name": "entropy",
                    "url": "src/data_science/entropy",
                },
                {
                    "name": "decision tree",
                    "url": "src/data_science/decision_tree",
                }
            ],
        }
    ]
}