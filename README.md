# nodesoft

nodesoft is a simple CLI for watching changes to your Node applications or a simple JavaScript file.

## Installation

Install nodesoft globally with [**npm**](http://npmjs.org/) using the command below to use in your terminal:

```bash
npm install -g nodesoft
```

You can also install nodesoft as a development dependency:

```bash
npm install --save-dev nodesoft
```

## Usage

If you have installed nodesoft globally you can simply run the command in your terminal:

```bash
nodesoft [your script.js]

# OR

node-soft [your script.js]
```

If you have installed nodesoft as a development dependency, you can insert in your package.json file:

Example:

```json
"scripts": {
  "start": "nodesoft [your script.js]"
}
```

## Collaborators

- [Jonathan Hoffmam Pivetta](https://github.com/jonhoffmam)

## License

MIT
