module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue CLI',
      description: 'Standard Tooling for Vue.js Projects'
    }
  },
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'vuejs/vue-cli',
    docsDir: 'docs',
    docsBranch: 'dev',
    editLinks: true,
    sidebarDepth: 3,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Config Reference',
            link: '/config/'
          },
          {
            text: 'Dev Guide',
            items: [
              { text: 'Plugin Dev Guide', link: '/dev-guide/plugin-dev.md' },
              { text: 'UI Plugin Dev Guide', link: '/dev-guide/ui-plugin-dev.md' },
              { text: 'UI Localization', link: '/dev-guide/ui-localization.md' }
            ]
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vue-cli/blob/dev/CHANGELOG.md'
          }
        ],
        sidebar: {
          '/guide/': [
            '/guide/',
            '/guide/cli',
            '/guide/cli-service',
            '/guide/assets',
            '/guide/env',
            '/guide/build-targets'
          ],
          '/dev-guide/': [
            '/dev-guide/plugin-dev.md',
            '/dev-guide/ui-plugin-dev.md',
            '/dev-guide/ui-localization.md'
          ]
        }
      }
    }
  }
}
