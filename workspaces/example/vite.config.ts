import path from 'path';
import { defineConfig, normalizePath } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { createMpaPlugin, createPages } from 'vite-plugin-virtual-mpa';

const base = '/'; // You can change whatever you want

const pages = createPages([
  {
    name: 'apple',
    /**
     * filename is optional, default is `${name}.html`, which is the relative path of `build.outDir`.
     */
    filename: 'fruits/apple.html', // output into sites/fruits/apple.html at build time.
    entry: '/src/pages/apple/index.js',
    data: {
      title: 'This is Apple page',
    },
  },
  {
    name: 'banana',
    filename: 'fruits/banana.html',
    entry: '/src/pages/banana/index.js',
    data: {
      title: 'This is Banana page',
    },
  },
  {
    name: 'strawberries',
    filename: 'fruits/strawberries.html',
    entry: '/src/pages/strawberries/index.js',
    data: {
      title: 'This is Strawberries page',
    },
  },
  {
    name: 'home',
    filename: 'fruits/home.html',
    entry: '/src/pages/home/index.js',
    data: {
      title: 'This is Home page',
    },
  },
]);

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [
    vue(),
    vueJsx(),
    createMpaPlugin({
      template: 'src/template.html',
      /**
       * You can write directly or use `createPages` function independently outside and then pass it to this field.
       * Both of the above can enjoy type hints.
       */
      pages,
      /**
       * The following `scanOptions` configs can replace the `pages` above, but except data injection.
       */
      scanOptions: {
        scanDirs: 'src/pages',
        entryFile: 'index.js',
        filename: name => `fruits/${name}.html`,
      },
      /**
       * Use html minimization feature at build time.
       */
      htmlMinify: true,
      /**
       * Customize the history fallback rewrite rules for `dev server`.
       * If you config your pages as above, this rewrite rules will be automatically generated.
       * Otherwise you should manually write it, which will overwrite the default.
       */
      // rewrites: [
      //   {
      //     from: new RegExp(
      //       normalizePath(`/${base}/(apple|banana|strawberries|home)`),
      //     ),
      //     to: (ctx) => normalizePath(`/${base}/fruits/${ctx.match[1]}.html`),
      //   },
      // ],
      /**
       * Customize the history fallback rewrite rules for `preview server`.
       * This option is almost the same with `rewrites`.
       */
      previewRewrites: [
        // If there's no index.html, you need to manually set rules for history fallback like:
        { from: /.*/, to: '/home.html' },
      ],
      /**
       * Sometimes you might want to reload `pages` config or restart ViteDevServer when
       * there are some files added, removed, changed and so on. You can set `watchOptions` to
       * customize your own logic.
       *
       * The `include` and `exclude` based on `Rollup.createFilter`
       * @see https://vitejs.dev/guide/api-plugin.html#filtering-include-exclude-pattern
       */
      watchOptions: {
        events: ['add', 'unlink', 'change'],
        include: [
          '**/pages/**',
          '**/infos/**',
        ],
        handler: (ctx) => {
          console.log(ctx.type, ctx.file);
          // ctx.reloadPages();
        },
      },
    }),
  ],
  build: { sourcemap: true },
  server: { port: 5173, open: true },
  preview: { port: 5173 },
  optimizeDeps: { force: true },
  resolve: { alias: { '@': path.resolve('src') } },
});
