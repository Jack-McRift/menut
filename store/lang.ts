import { GetterTree, MutationTree, ActionTree } from 'vuex';

interface Language { 
  title: string, 
  iconRoute: string,
  lang: string
}

export const state = () => ({
  langs: [
    { title: 'Español', iconRoute: '/spain.svg', lang: 'es' },
    { title: 'English', iconRoute: '/united-kingdom.svg', lang: 'en' },
    { title: 'Portugueses', iconRoute: '/portugal.svg', lang: 'pt-BR'}
  ] as Language[],
})

type State = ReturnType<typeof state>;

export const getters: GetterTree<State, State> = {
  langs: state => state.langs
}

export const mutations: MutationTree<State> = {

}
export const actions: ActionTree<State, State> = {

}