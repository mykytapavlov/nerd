# Nerd
* [Visualization](https://mykytapavlov.github.io/nerd/) 
* [nerd.py](nerd.py) creates .md files with pre-defined structure:
    * Name (required)
    * Summary
    * Example (optional)
    * Table (optional)
    * Reference

### Motivation
Create short notes with the same structure using:
* GitHub-Flavored-Markdown
* Terminal
* Favorite code editor
* Visualization as graph

### As side effect
* Be able to search for notes using Terminal
* Display notes hierarchy using Terminal (Tree)

### Future plans
Create App to search & visualize notes as graph using:
* [React](https://reactjs.org/)
* [FAST API](https://fastapi.tiangolo.com/)

### HOWTO
```shell
#  ___             _
# |   | |___ ___ _| |
# | | | | -_|  _| . |
# |_|___|___|_| |___|

# 1. In nerd.py update path to your python (in first line)
# by default it's:
#! /usr/local/bin/python3

# 2. make nerd.py executable (to be able to run it just hitting nerd.py)
chmod +x nerd.py

# 3. export PATH (to be able to run nerd.py from any folder)
export PATH=$HOME/github/nerd:$PATH

# 4. try it
nerd.py --help
# you should see following message

# Nerd

# optional arguments:
#   -h, --help            show this help message and exit
#   -n NAME, --name NAME
#   -s SYNTAX, --syntax SYNTAX
#   -t TABLE, --table TABLE

# 5. create a note

# Possible workflow
mkdir example-folder  # creates a example-folder 
cd example-folder  # switches to example-folder

# creates note.md file inside example-folder
nerd.py --name note --syntax python  # long notation
nerd.py -n note -s python  # short notation

# python here means GitHub-Flavored-Markdown Python syntax hightlighting
# in Example section of note.md template

# you can add a table section using table flag
nerd.py --name note --syntax python --table True  # long notation
nerd.py -n note -s python -t True  # short notation

# 6. open note.md for editing in your favorite text editor
# using vscode:
code note.md
```