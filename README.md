# Workflow CA

---

[![Automated E2E Testing](https://github.com/MaxMartinsen/Workflow_CA/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/MaxMartinsen/Workflow_CA/actions/workflows/e2e-test.yml)

---

[![Automated Unit Testing](https://github.com/MaxMartinsen/Workflow_CA/actions/workflows/unit-test.yml/badge.svg)](https://github.com/MaxMartinsen/Workflow_CA/actions/workflows/unit-test.yml)

---

[![Deploy static content to Pages](https://github.com/MaxMartinsen/Workflow_CA/actions/workflows/pages.yml/badge.svg)](https://github.com/MaxMartinsen/Workflow_CA/actions/workflows/pages.yml)

---

[![Code Review](https://github.com/MaxMartinsen/Workflow_CA/actions/workflows/gpt.yml/badge.svg)](https://github.com/MaxMartinsen/Workflow_CA/actions/workflows/gpt.yml)

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

To add a pre-commit hook that will trigger lint-staged. Make sure you've run "npm run prepare" at least once before to set up husky hooks.

```bash
npm run prepare
```

After this setup, when you make a commit, husky should trigger lint-staged, which in turn will run Prettier and ESLint on the staged files as specified.

---

## GitHub Actions Integration

We have integrated GitHub Actions in our project to automate various stages of our development workflow. This ensures consistency, faster iterations, and higher code quality. Below are the key workflows we have set up:

1. **Automated Unit Testing (`unit-test.yml`)**: This workflow runs all the unit tests in our project every time a push or pull request is made. It ensures that new changes do not break existing functionality.

2. **Automated E2E Testing (`e2e-test.yml`)**: End-to-End tests are run to verify the application behaves as expected from a user’s perspective. This workflow helps in catching issues that might not be covered by unit tests.

3. **Static Content Deployment (`static.yml`)**: Our static content is automatically built and deployed to GitHub Pages, ensuring that the latest version of our site is always available to users.

By leveraging these automated workflows, we ensure a robust and reliable codebase, streamline our development process, and deliver a better experience to our end-users.

---

## Configuring Jest

Jest is a delightful JavaScript testing framework that focuses on simplicity. It works out of the box and is easily configurable to meet your project’s requirements.

### Running the Jest test

To run Cypress tests, go to directory and use the following command:

```bash
npm run test-unit
```

## Configuring Cypress

Cypress provides a fast, easy, and reliable way to test anything that runs in a browser. It’s a complete end-to-end testing framework.

### Running the Cypress test

To run Cypress tests, go to directory and use the following command:

```bash
npm run test-e2e
```

---

# Project unit-testing documentation

## Review

Unit tests performed on the application's authentication system. These tests ensure that authentication processes, including login, registration, and logout, work correctly under a variety of conditions.

### Unit tests

### 1. `login.test.js`

The file `login.test.js` contains unit tests for our application's login functionality. It checks for the following behavior:

- Successful login attempts must store the user profile and token in `localStorage`.
- Failed login attempts should generate an error with the correct status text (e.g. "Unauthorized").

The tests mock global objects such as fetch and localStorage to simulate the environment in which the login function operates.

### 2. `register.test.js`

The file `register.test.js` contains unit tests for the user registration process. Tests check:

- Correct user data is returned upon successful registration.
- Proper error handling and messaging when registration fails due to problems on the server side.

These tests also use "fetch" mocks and follow the same patterns as "login.test.js" to ensure that the application's logging flow is robust and handles both success and failure cases gracefully.

####3. `logout.test.js`

The logout.test.js file contains unit tests for the logout function. Tests confirm that:

- User token and profile information are removed from localStorage upon logout.

Rather than mocking the storage unit, the tests directly mock localStorage methods such as removeItem to test delete operations.

### Running the unit-test

To run these tests, go to project and use the following command:

```bash
npm run test-unit
```

---
