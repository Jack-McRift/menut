export const state = () => ({
  items: [],
  selectedFilters: [],
  isVegan: false,
  isVegetarian: false
})
export const mutations = {
  setItems (state, items) {
    const i = []
    if (state.isVegan) {
      i.push(...items.filter(x => x.isVegan === state.isVegan && !i.includes(x)))
    }
    if (state.isVegetarian) {
      i.push(...items.filter(x => x.isVegetarian === state.isVegetarian && !i.includes(x)))
    }
    state.items = (i.length ? i : items).filter(x => !x.allergens.some(i => state.selectedFilters.includes(i.id)))
  },
  addFilter (state, filter) {
    if (typeof filter === 'number') {
      state.selectedFilters.push(filter)
    }
    if (typeof filter === 'string') {
      if (filter === 'vegan') {
        state.isVegan = true
      }
      if (filter === 'vegetarian') {
        state.isVegetarian = true
      }
    }
  },
  deleteFilter (state, filter) {
    if (typeof filter === 'number') {
      state.selectedFilters.splice(state.selectedFilters.indexOf(filter), 1)
    }
    if (typeof filter === 'string') {
      if (filter === 'vegan') {
        state.isVegan = false
      }
      if (filter === 'vegetarian') {
        state.isVegetarian = false
      }
    }
  },
  clean (state) {
    state.items = []
    state.selectedFilters = []
    state.isVegan = false
    state.isVegetarian = []
  }
}
