# Embeddable Editor

A very basic web IDE powered by the [Monaco Editor](https://microsoft.github.io/monaco-editor/), served from a
[Deno](https://deno.com) web server.

[Project Notes](https://www.notion.so/enspyrco/Embeddable-Editor-cb51e09f892d4e76b40fa5a2671a055f)

## Run

```sh
deno run --allow-net --allow-read server.ts
```

## Background

The code was originally adapted from:

[aleph.js > examples > manoco-editor](https://github.com/alephjs/aleph.js/tree/1.0.0-alpha.52/examples/feature-apps/monaco-editor)

> [Licence = MIT](https://github.com/alephjs/aleph.js/blob/1.0.0-alpha.52/LICENSE)

## Strategies for transpiling ts and bundling

### aleph.js

I followed the [instructions](https://github.com/alephjs/aleph.js/tree/1.0.0-alpha.52) but kept getting errors (I didn't make any notes unfortunately).

### esbuild

```sh
npm install --save-exact esbuild
./node_modules/.bin/esbuild src/main.ts --bundle --outfile=dist/main.js
```

I get an error about:

> Dynamic require of "..." is not supported

### webpack

Had a quick play, seems complicated to both transpile ts and bundle…
