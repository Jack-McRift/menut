export const state = () => ({ lang: { title: 'Español', iconRoute: '/spain.svg', lang: 'es' } })
export const mutations = {
  changeLanguage (state, lang) {
    state.lang = lang
  }
}
