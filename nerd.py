#! /usr/local/bin/python3
import argparse
import os


IGNORE_FILES = {'.DS_Store'}


class Nerd:
    """
    Nerd script generates template file (.md)
    using GitHub-Flavored-Markdown & pre-defined structure
    * Name (required)
    * Summary
    * Example (optional)
    * Table (optional)
    * Reference

    # Help
    > nerd.py -h (--help)
    # To create file with GitHub-Flavored-Markdown Python syntax hightlighting
    # for Example section run:
    > nerd.py -n (--name) filename -s (--syntax) python
    """

    LOGO = """
     ___             _
    |   | |___ ___ _| |
    | | | | -_|  _| . |
    |_|___|___|_| |___|
    """

    def __init__(self) -> None:
        self.parser = argparse.ArgumentParser(description='Nerd')
        group = self.parser.add_mutually_exclusive_group(required=True)
        group.add_argument('-n', '--name', type=str)
        group.add_argument('-b', '--build', type=bool)
        self.parser.add_argument('-s', '--syntax', type=str)
        self.parser.add_argument('-t', '--table', type=bool)

    def run(self) -> None:
        """
        Generates .md template file based on parsed args
        """
        args = self.parser.parse_args()

        if args.build:
            self.build()
            return
        
        text = f"# {args.name.capitalize()}\n\n"
        text += "## Summary\n\n"
        if args.syntax:
            text += f"## Example\n```{args.syntax}\n\n```\n\n"
        if args.table:
            text += "\n".join((
                "## Table\n",
                "| Left-aligned |    Centered   | Right-aligned |",
                "|--------------|:-------------:|--------------:|",
                "| text         |      text     |          text |",
                "\n"
            ))
        text += "## Reference\n[Link]()\n"
        with open(args.name + ".md", "w") as f:
            f.write(text)
            print(self.LOGO)
            print(f'{args.name}.md created')
    
    def build(self) -> None:
        tree = {}
        for root, dirs, files in os.walk('docs/src'):
            files = [f for f in files if f not in IGNORE_FILES]
            folders = root.split('/')[2:]
            if not folders or (not dirs and not files):
                continue

            if not tree:
                tree['name'] = folders[-1]
                tree['children'] = []

            node = tree

            if node['children']:
                for folder in folders:
                    for child in node['children']:
                        if child['name'] == folder:
                            node = child
                            break
            
            for d in dirs:
                child = {'name': d, 'children': []}
                node['children'].append(child)
            
            if not files:
                continue
            
            assert len(files) == 1, \
                f'Folder `{node["name"]}` must have only one file inside, got: {files}'  # noqa
            
            file = files[0]

            assert len(file.split('.')) == 2, f'file name `{file}` should contain only one `.`'  # noqa

            assert node['name'] == file.split('.')[0], \
                f'File name `{file}` should match parent folder\'s name `{node["name"]}`'  # noqa
            
            node['url'] = f"{root.split('docs/')[1]}/{file.split('.')[0]}"

        result = f'const data = {tree}'

        with open("docs/js/data.js", mode="w") as file:
            file.write(result)


if __name__ == '__main__':
    nerd = Nerd()
    nerd.run()
