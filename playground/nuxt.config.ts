import { resolve } from 'pathe'
import { defineNuxtConfig } from 'nuxt/config'
import NuxtSeoExperiments from '../src/module'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    'nuxt-icon',
    NuxtSeoExperiments,
  ],

  site: {
    name: 'SEO Experiments',
    tagline: 'test',
    debug: true,
    titleSeparator: 'l',
  },

  app: {
    seoMeta: {
      description: 'Hi, welcome to the %envName v%app.version of %siteName.',
    },
    head: {
      templateParams: {
        separator: 'x',
      },
      title: '%site.tagline',
      // DEV - My page title - My cool site
      titleTemplate: '%s %separator %site.name',
    },
  },

  runtimeConfig: {
    public: {
      app: {
        version: '1.3.4',
      },
      envName: process.env.NODE_ENV === 'development' ? 'dev' : 'live',
    },
  },

  routeRules: {
    '/blog/**': {
      seoMeta: { title: 'test' },
    },
  },

  workspaceDir: resolve(__dirname, '../'),
  imports: {
    autoImport: true,
  },
})
