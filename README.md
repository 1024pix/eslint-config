# @1024pix/eslint-config

[![npm](https://img.shields.io/npm/v/@1024pix/eslint-config)](https://npmjs.com/package/@1024pix/eslint-config)

## Usage

### Install

```bash
npm install -D eslint @1024pix/eslint-config @1024pix/eslint-plugin
```

### Config `.eslintrc`

```json
{
  "extends": "@1024pix"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  }
}
```

## FAQ

### I prefer XXX...

Sure, you can override the rules in your `.eslintrc` file.

<!-- eslint-skip -->

```jsonc
{
  "extends": "@1024pix",
  "rules": {
    // your rules...
  }
}
```

Or you can always fork this repo and make your own.
