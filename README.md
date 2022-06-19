# Gamebook template

According to [Wikipedia](https://en.wikipedia.org/wiki/Gamebook)

> A gamebook is a work of printed fiction that allows the reader to participate in the story by making choices. The narrative branches along various paths, typically through the use of numbered paragraphs or pages. Each narrative typically does not follow paragraphs in a linear or ordered fashion. Gamebooks are sometimes called choose your own adventure books or CYOA after the influential Choose Your Own Adventure series originally published by US company Bantam Books. Gamebooks influenced hypertext fiction.

Here you can make yor own Gamebook by modifying [pages.ts file](./src/data/pages.ts). More info in the [demo](https://gamebook.gatsbyjs.io/)

## Features

This project is based on [gatsby-starter-ts](https://github.com/jpedroschmitz/gatsby-starter-ts)

- ⚡️ Gatsby 4
- ⚛️ React 18
- ⛑ TypeScript
- 🐐 Tests — Jest and Testing Library out of the box
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 📄 Commitizen — To define a standard way of committing rules
- 🚓 Commitlint — To make sure your commit messages follow the convention
- 🖌 Renovate — To keep your dependencies up to date
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on Pull Requests
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix

- 🎨 Tailwind CSS — For styling and dark mode out of the box

## Quick Start

The best way to start with this template is using the [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/).

```
npx gatsby new my-gamebook https://github.com/M4ss1ck/gatsby-gamebook
```

### Development

To start the project locally, run:

```bash
pnpm dev
```

Open `http://localhost:8000` with your browser to see the result.

## Documentation

### Requirements

- Node.js >= 14.17
- pnpm

### Directory Structure

- [`__helpers__`](./__helpers__/) — Helpers files for testing configuration.<br>
- [`__mocks__`](./__mocks__/) — Mocks for testing.<br>
- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `pnpm start` — Starts the application in development mode at `http://localhost:8000`.
- `pnpm build` — Compile your application and make it ready for deployment.
- `pnpm serve` — Serve the production build of your site
- `pnpm clean` — Wipe out the cache (`.cache` folder).
- `pnpm type-check` — Validate code using TypeScript compiler.
- `pnpm lint` — Runs ESLint for all files in the `src` directory.
- `pnpm format` — Runs Prettier for all files in the `src` directory.
- `pnpm commit` — Run commitizen. Alternative to `git commit`.
- `pnpm test` — Run tests.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// To import images or other files from the static folder
import avatar from '@/static/avatar.png';
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
