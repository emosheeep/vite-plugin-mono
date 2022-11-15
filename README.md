# vite-plugin-virtual-mpa

<div style="display: flex;">
  <a href="https://npmjs.com/package/vite-plugin-virtual-mpa">
    <img src="https://img.shields.io/npm/v/vite-plugin-virtual-mpa" alt="npm package">
  </a>
  <img alt="Publish Package" src="https://github.com/emosheeep/vite-plugin-virtual-mpa/actions/workflows/npm-publish.yml/badge.svg">
  <img src="https://img.shields.io/npm/dt/vite-plugin-virtual-mpa" alt="npm downloads">
  <img src="https://img.shields.io/npm/l/vite-plugin-virtual-mpa" alt="npm downloads">
  <img src="https://img.shields.io/bundlephobia/minzip/vite-plugin-virtual-mpa" alt="package size">
</div>

Out-of-box MPA plugin for Vite 📦, with html template engine and virtual files support, generate multiple files using only one template.

## Features

- 💡 EJS Template Capability
- 💡 Fully Typed APIs, Tiny and Pretty.
- 🛠️ Customize the path of generated files, generate multiple files using only one template.
- 🛠️ MPA support & History Fallback API.

## Detail

This is a pnpm monorepo for vite-plugin-virtual-mpa, and there are two main workspaces that:

```yaml
- workspaces
  - example # example project for vite-plugin-virtual-mpa
  - plugin  # vite-plugin-virtual-mpa source code
```

Prefer to check corresponding directory for more info.

- [workspaces/example](https://github.com/emosheeep/vite-plugin-virtual-mpa/tree/HEAD/workspaces/example)
- [workspaces/plugin](https://github.com/emosheeep/vite-plugin-virtual-mpa/tree/HEAD/workspaces/plugin)