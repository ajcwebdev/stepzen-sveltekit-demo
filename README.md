## Install dependencies and start development server

```bash
npm i
npm run dev
```

Open `localhost:3000` to see the project.

### Endpoints

Endpoints are modules written in `.js` (or `.ts`) files that export functions corresponding to HTTP methods. Endpoints run only on the server (or when you build your site, if pre-rendering). Pages can request data from endpoints. Endpoints return JSON by default, though may also return data in other formats.

A component that defines a page or a layout can export a `load` function that runs before the component is created and receive an implementation of `fetch`. Include your StepZen endpoint in `.env`.

### Load Function

`load` is similar to `getStaticProps` or `getServerSideProps` in Next.js, except that it runs on both the server and the client.

The `<script context="module">` is necessary because `load` runs before the component is rendered. Code that is per-component instance should go into a second `<script>` tag.

### Official adapters for deployment

Svelte apps are built with [adapters](https://kit.svelte.dev/docs#adapters) for optimizing your project to deploy with different environments. This project uses the [`adapter-netlify`](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify) for [Netlify](https://netlify.com).