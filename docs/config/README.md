---
sidebar: auto
---

# Configuration Reference

## vue.config.js

Many aspects of a Vue CLI project can be configured by placing a `vue.config.js` file at the root of your project. The file may already exist depending on the features you selected when creating the project.

`vue.config.js` should export an object, for example:

``` js
// vue.config.js
module.exports = {
  lintOnSave: true
}
```

Check [here](./config.md) for full list of possible options.

## webpack

Probably the most common configuration need is tweaking the internal webpack config. Vue CLI provides flexible ways to achieve that without ejecting.

See [here](./webpack.md) for full details.

## browserslist

You will notice a `browserslist` field in `package.json` specifying a range of browsers the project is targeting. This value will be used by `babel-preset-env` and `autoprefixer` to automatically determine the JavaScript polyfills and CSS vendor prefixes needed.

See [here](https://github.com/ai/browserslist) for how to specify browser ranges.

## Dev Server

`vue-cli-service serve` starts a dev server based on [webpack-dev-server](https://github.com/webpack/webpack-dev-server). It comes with hot-module-replacement (HMR) out of the box.

You can configure the dev server's behavior using the `devServer` option in `vue.config.js`:

``` js
module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null, // string | Object
    before: app => {
      // app is an express instance
    }
  }
}
```

In addition to these default values, [all options for `webpack-dev-server`](https://webpack.js.org/configuration/dev-server/) are also supported.

### Configuring Proxy

If your frontend app and the backend API server are not running on the same host, you will need to proxy API requests to the API server during development. This is configurable via the `devServer.proxy` option in `vue.config.js`.

`devServer.proxy` can be a string pointing to the development API server:

``` js
module.exports = {
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
```

This will tell the dev server to proxy any unknown requests (requests that did not match a static file) to `http://localhost:4000`.

If you want to have more control over the proxy behavior, you can also use an object with `path: options` pairs. Consult [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware#proxycontext-config) for full options:

``` js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
```

## Babel

Babel can be configured via `.babelrc` or the `babel` field in `package.json`.

All Vue CLI apps use `@vue/babel-preset-app`, which includes `babel-preset-env`, JSX support and optimized configuration for minimal bundle size overhead. See [its docs](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app) for details and preset options.

## CSS

Vue CLI projects comes with support for [PostCSS](http://postcss.org/), [CSS Modules](https://github.com/css-modules/css-modules) and pre-processors including [Sass](https://sass-lang.com/), [Less](http://lesscss.org/) and [Stylus](http://stylus-lang.com/).

See [here](./css.md) for more details on CSS related configurations.

## ESLint

ESLint can be configured via `.eslintrc` or `eslintConfig` field in `package.json`.

See [@vue/cli-plugin-eslint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint) for more details.

## TypeScript

TypeScript can be configured via `tsconfig.json`.

See [@vue/cli-plugin-typescript](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript) for more details.

## Unit Testing

### Jest

See [@vue/cli-plugin-unit-jest](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest) for more details.

### Mocha (via `mocha-webpack`)

See [@vue/cli-plugin-unit-mocha](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha) for more details.

## E2E Testing

### Cypress

See [@vue/cli-plugin-e2e-cypress](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress) for more details.

### Nightwatch

See [@vue/cli-plugin-e2e-nightwatch](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch) for more details.
