# Workflow CA

---

## Code Quality and Commit Hooks

### ESLint & Prettier

We've integrated ESLint and Prettier to enforce consistent coding standards and catch errors early. ESLint performs static code analysis to find problems, and Prettier formats our code automatically.

Run ESLint:

```sh
npm run lint
```

Run Prettier:

```sh
npm run format
```

### Commit Hooks

Using Husky, we've set up pre-commit hooks to run our linting and formatting tools on staged files. This ensures all committed code adheres to our quality standards.

Initialize Husky:

```sh
npx husky-init && npm install
```

---
