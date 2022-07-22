const data = {
    "name": "python",
    "url": "",
    "children": [
        {
            "name": "interpreter",
            "url": "",
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
            "name": "metaclass",
            "url": "src/python/metaclass",
        }
    ]
}