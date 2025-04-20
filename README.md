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

### Initialize testing

- Jest

[jest](https://jestjs.io/docs/getting-started)

```bash
npm init jest@latest
```

- typescript test via ts-jest

```bash
npm install --save-dev ts-jest
```

- type definitions

```bash
npm install --save-dev @jest/globals
```

### Errors courantes jest

- SyntaxError: Cannot use import statement outside a module : pour fixer le soucis:

dans la config jest, on rajoute:

```ts
 testEnvironment: "node",
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
```

Note: Assurez-vous d'installer la lib ts-jest


### Performance testing using artillery

[artillery](https://www.artillery.io/docs/get-started/first-test)

- global installation

```bash
npm install -g artillery@latest
```

Juste un exemple de test, pour plus de details, regarder dans la docs officiel.