# Contributing

Thank you for contributing to iExec documentation.

To keep the contribution process smooth, please read this small guide.

## Fork

[Fork the main branch `v*-staging`](https://github.com/iExecBlockchainComputing/documentation/fork)

## Before contributing

We enforce a standard style for the documentation through a `husky` pre-commit hook running `prettier` and `markdownlint`.

We ask you tou run the following command to install the pre-commit hook before contributing anything.

_NB:_ You will need `NodeJS >= 14.21` and `npm >= 8`

```sh
npm ci
```

Once installed you will also be able to:

- trigger the styles check manually

```sh
npm run format-check
npm run lint-check
```

- And auto-fix the errors when possible

```sh
npm run format-fix
npm run lint-fix
```

## Contribution

Apply your changes on your forked branch, stage them and commit. If you followed the [Before contributing](#before-contributing) the pre-commit hook should ensure the staged changes are compliant with the style standard.

_NB:_ Non-compliant changes may take longer to review or be rejected.

## PR time

Open a Pull-Request from your branch to the main branch.

Once accepted your changes will be live on the staging environment.

After a short while changes on staging environment will be shipped to the production environment through a PR from the `v*-staging` branch to the `v*-prod` branch.
