# WebComponent

A minimal example of wrapping a React component in a native Web Component. The project bundles the component with esbuild and serves the compiled assets from the `dist` directory so the `<hello-react>` custom element can be embedded on any page.

## Prerequisites

- Node.js 18+
- npm 9+ (bundled with Node)

## Install

```bash
npm install
```

## Develop & Build

The source lives in `src/helloworld.jsx` and is mounted by `src/index.html`.

- `npm run build` bundles the JSX with esbuild into `dist/bundle.js` and copies `index.html`.
- `npm run serve` runs `serve dist` so you can open the demo at the printed URL.

## Using the Component

After running `npm run build`, load `dist/index.html` (or copy `dist/bundle.js` into your own site) and use the custom element directly:

```html
<h2>Web Component + React</h2>
<hello-react></hello-react>
<script type="module" src="./bundle.js"></script>
```

To customize the component, edit `HelloWorld` inside `src/helloworld.jsx`, run `npm run build`, and reload the page. You can also register additional custom elements by following the same pattern used for `<hello-react>`.
