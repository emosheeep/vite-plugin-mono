# vite-plugin-virtual-mpa

<div style="display: flex;">
  <a href="https://npmjs.com/package/vite-plugin-virtual-mpa" target="_blank">
    <img src="https://img.shields.io/npm/v/vite-plugin-virtual-mpa" alt="npm package">
  </a>
  <img alt="Publish Package" src="https://github.com/emosheeep/vite-plugin-virtual-mpa/actions/workflows/npm-publish.yml/badge.svg">
  <img src="https://img.shields.io/npm/dt/vite-plugin-virtual-mpa" alt="npm downloads">
  <img src="https://img.shields.io/npm/l/vite-plugin-virtual-mpa" alt="npm downloads">
  <a href="https://packagephobia.com/result?p=vite-plugin-virtual-mpa" target="_blank">
    <img src="https://packagephobia.com/badge?p=vite-plugin-virtual-mpa" alt="install size">
  </a>
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

Prefer to check corresponding directory for more information.

- [workspaces/example](https://github.com/emosheeep/vite-plugin-virtual-mpa/tree/HEAD/workspaces/example)
- [workspaces/plugin](https://github.com/emosheeep/vite-plugin-virtual-mpa/tree/HEAD/workspaces/plugin)