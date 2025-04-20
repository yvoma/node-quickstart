# Quickstart

## Links

- [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## commands

- esling config - quick start

```bash
npm init @eslint/config@latest --save-dev

```

- eslint sonarjs

[eslint-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)

```bash
npm install eslint-plugin-sonarjs --save-dev
```

## prettier

[prettier](https://prettier.io/docs/install)

```bash
npm install --save-dev --save-exact prettier

node --eval "fs.writeFileSync('.prettierrc','{}\n')"

node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
```

### pre-commit using husky

```bash
npx husky init
npm install --save-dev git-format-staged
node --eval "fs.writeFileSync('.husky/pre-commit', 'git-format-staged -f \'prettier --ignore-unknown --stdin --stdin-filepath \"{}\"\' .\n')"

```

NOTE: git-format-staged optionnel, si vous avez deja prettier installer, plus besoin
