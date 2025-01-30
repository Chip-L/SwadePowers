"# Savage Worlds Adventurer Edition Dynamic Lookup app

## Description

This app will just supply some quick lookup stuff for the spells, skills, and edges. The data will come from a BE GraphQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)

## Installation

Dependencies are locked with a `yarn.lock` file, so please use `yarn` instead of `npm` to install them.

`yarn install`

## Usage

This uses yarn workspaces, so running the code in the root will run these commands for both the client and server.

- `yarn dev` runs the code in developer mode (root launches new windows for this)
- `yarn test` runs the test cases (in watch-mode by default) (root launches new windows for this)
- `yarn build` builds the code for distribution
- `yarn coverage` runs the tests and displays the coverage of the test cases
- `yarn lint` runs the linter
- `yarn stage` runs the linter, does the build, and runs the tests

These are only run in each workspace:

- `yarn generate` creates an updated types via CodeGen for the GraphQL artifacts

## Technologies

- React
- TypeScript
- Vite
- Vitest
- Apollo Server
- CodeGen -- manages types between BE and FE

## Credits

This is using data from Pinnacle Entertainment Group. I do not have authorization.

## License

MIT

## Tests

All logic should have test cases.

We expect a coverage of:

    lines: 85%
    branches: 70%
    functions: 70%
    statements: 85%"

## Future enhancements:

- Filter by book
- Add actions

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
The easiest way to deploy your app is to use the Vercel Platform.
