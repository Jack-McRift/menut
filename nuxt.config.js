import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    titleTemplate: '%s - Menut',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  target: 'static',
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'nuxt-i18n'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://menut-api.azurewebsites.net'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.teal.darken2,
          accent: colors.teal.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  i18n: {
    locales: ['es', 'en', 'it', 'de', 'fr', 'rs', 'pt'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        es: {
          filtros: 'Filtros',
          alergenos: 'Alergenos',
          alerTitle: 'No mostrar alimentos que contengan:',
          lifeStyle: 'Estilo de vida',
          lifeTitle: 'Solo mostrar los alimentos que sean aptos para:'
        },
        en: {
          filtros: 'Filters',
          alergenos: 'Allergens',
          alerTitle: 'Do not show foods that contain:',
          lifeStyle: 'Lifestyle',
          lifeTitle: 'Only show foods that are suitable for:'
        },
        it: {
          filtros: 'Filtri',
          alergenos: 'Allergeni',
          alerTitle: 'Non mostrare cibi che contengono:',
          lifeStyle: 'Stile di vita',
          lifeTitle: 'Mostra solo cibi adatti a:'
        },
        de: {
          filtros: 'Filter',
          alergenos: 'Allergene',
          alerTitle:
            'Zeigen Sie keine Lebensmittel an, die Folgendes enthalten:',
          lifeStyle: 'Lebensstil',
          lifeTitle: 'Zeigen Sie nur Lebensmittel an, die geeignet sind für:'
        },
        fr: {
          filtros: 'Les allergènes',
          alergenos: 'Alergenos',
          alerTitle: 'Ne montrez pas les aliments qui contiennent:',
          lifeStyle: 'Style de vie',
          lifeTitle: "N'afficher que les aliments qui conviennent:"
        },
        rs: {
          filtros: 'Фильтры',
          alergenos: 'Аллергены',
          alerTitle: 'Не показывайте продукты, содержащие:',
          lifeStyle: 'Стиль жизни',
          lifeTitle: 'Показывайте только те продукты, которые подходят для:'
        },
        pt: {
          filtros: 'Filtros',
          alergenos: 'Alérgenos',
          alerTitle: 'Não mostre alimentos que contenham:',
          lifeStyle: 'Estilo de vida',
          lifeTitle: 'Mostre apenas alimentos adequados para:'
        }
      }
    }
  }
}
