# WebComponent

A minimal example of wrapping a React component in a native Web Component. Vite handles bundling and the dev server so the `<hello-react>` custom element can be previewed locally and embedded on any page from the `dist` output.

## Prerequisites

- Node.js 18+
- npm 9+ (bundled with Node)

## Install

```bash
npm install
```

## Develop & Build

- `npm run dev` starts the Vite dev server with hot reloading (served from `src/index.html`).
- `npm run build` outputs the production bundle to `dist/` with hashed asset names.
- `npm run preview` runs Vite's preview server against the production build.

## Using the Component

After running `npm run build`, load `dist/index.html` (or drop the generated assets into your site) and use the custom element directly:

```html
<h2>Web Component + React</h2>
<hello-react></hello-react>
<script type="module" src="./assets/main-[hash].js"></script>
```

Replace `[hash]` with the filename generated in `dist/assets/` and referenced by `dist/index.html`.

To customize the component, edit `HelloWorld` (and supporting components like `Calendar`) inside `src/helloworld.jsx`, run `npm run build`, and reload the page. You can also register additional custom elements by following the same pattern used for `<hello-react>`.
