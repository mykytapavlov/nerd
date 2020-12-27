#! /usr/local/bin/python3
import argparse


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
        super().__init__()
        self.parser = argparse.ArgumentParser(description='Nerd')
        self.parser.add_argument('-n', '--name', type=str, required=True)
        self.parser.add_argument('-s', '--syntax', type=str)
        self.parser.add_argument('-t', '--table', type=bool)
        self.args = None

    def run(self):
        """
        Generates .md template file based on parsed args
        """
        args = self.parser.parse_args()
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


if __name__ == '__main__':
    nerd = Nerd()
    nerd.run()
