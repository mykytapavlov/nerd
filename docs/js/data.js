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
                    "name": "numeric",
                    "url": "src/python/built-in-types/numeric"
                },
                {
                    "name": "string",
                    "url": "src/python/built-in-types/string"
                },
                {
                    "name": "bool",
                    "url": "src/python/built-in-types/boolean"
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