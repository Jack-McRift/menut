<template>
  <v-app v-if="filters">
    <!-- app-bar -->
    <v-app-bar
      ref="box"
      fixed
      app
      light
      shrink-on-scroll
      prominent
      src="https://www.bizzbeginnings.com/wp-content/uploads/2017/08/chairs-2179044_960_720.jpg"
      fade-img-on-scroll
      height="130"
      elevation="1"
    >
      <v-btn icon :to="`/restaurant/${$route.params.handle}`" @click="clean">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-app-bar-title :class="{ 'not-show': !show }">
        Menuit
      </v-app-bar-title>
      <v-spacer />

      <template #extension class="white">
        <v-btn rounded elevation="0" :class="{ 'not-show': show }" :to="`/restaurant/${$route.params.handle}/${$route.params.menu}/search`" @click="clean">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-spacer :class="{ 'not-show': show }" />
        <Languages :show="show" />
        <v-spacer :class="{ 'not-show': show }" />
        <v-btn
          rounded
          elevation="0"
          :class="{ 'not-show': show }"
          @click="filter = true"
        >
          <v-icon>mdi-filter-outline</v-icon>
        </v-btn>
        <div :class="{ 'not-show': !show }" class="tabs">
          <v-btn
            v-for="(category, i) in categories"
            :key="i"
            rounded
            outlined
            elevation="0"
            class="mx-1 dark"
            :class="{ 'not-show': !show }"
            retain-focus-on-click
            value="tabBtn"
            @click="changeCategory(category, show)"
          >
            {{ category }}
          </v-btn>
        </div>
      </template>
    </v-app-bar>
    <!-- filter -->
    <div>
      <v-dialog
        v-model="filter"
        scrollable
        fullscreen
        transition="dialog-bottom-transition"
        width="400"
      >
        <div class="mx-auto">
          <div class="d-flex justify-space-between pa-4 align-center">
            <div class="white--text">
              ----
            </div>
            <div class="d-flex ">
              <v-icon color="black">
                mdi-filter-outline
              </v-icon>
              <h2 class="title">
                Filtrar por
              </h2>
            </div>
            <v-btn
              color="primary"
              style="float: right"
              icon
              @click="filter = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <div>
            <h2 class="px-3 primary--text title mb-1">
              Alergenos
            </h2>
            <p class="px-3 subtitle">
              No mostrar alimentos que contengan:
            </p>
            <v-container class="pa-0 ">
              <v-row style="max-width: 360px" class="mx-auto">
                <div
                  v-for="(filterTile, i) in filters"
                  :key="i"
                  class="ma-1"
                  style="width: 80px; height: 80px"
                >
                  <filter-tile :name="filterTile.name" :url="filterTile.icon" :value="filterTile.id" />
                </div>
              </v-row>
            </v-container>
          </div>
          <div class="mt-4">
            <h2 class="px-3 primary--text title mb-1">
              Estilo de vida
            </h2>
            <p class="px-3 subtitle">
              Solo mostrar los alimentos que sean aptos para:
            </p>
            <v-container>
              <v-row style="max-width: 360px" class="mx-auto">
                <div class="d-flex">
                  <filter-tile class="ma-1" :value="'vegetarian'" :name="'vegetariano'" :url="'/tiles/vegetarian.svg'" />
                  <filter-tile class="ma-1" :value="'vegan'" :name="'vegano'" :url="'/tiles/vegan.svg'" />
                  <filter-tile class="ma-1" :name="'ninguno'" :clean="true" :url="'/tiles/none.svg'" />
                </div>
              </v-row>
            </v-container>
          </div>
        </div>
      </v-dialog>
    </div>
    <!-- content -->
    <main class="d-flex justify-center mt-10">
      <v-list light class="pa-0">
        <v-list-item
          v-for="(category, index) in categories"
          :key="index"
          class="pa-0"
        >
          <v-container>
            <v-row>
              <v-list-item-title class="text-h6 font-weight-black work-sans text-capitalize">
                {{ category }}
              </v-list-item-title>
            </v-row>
            <v-row>
              <v-list>
                <div
                  v-for="(item, i) in items"
                  :key="i"
                >
                  <v-list-item
                    v-if="item.categoryName === category"
                    three-line
                    class="pa-0"
                  >
                    <Item
                      :item-id="item.id"
                      :title="item.name"
                      :index="i"
                      :description="item.description"
                      :price="item.price"
                      :allergens="item.allergens"
                      :vegan="item.isVegan"
                      :vegetarian="item.isVegetarian"
                    />
                  </v-list-item>
                </div>
                <v-divider />
              </v-list>
            </v-row>
          </v-container>
        </v-list-item>
      </v-list>
    </main>
  </v-app>
</template>

<script>
import Languages from '~/components/Languages.vue'
import FilterTile from '~/components/FilterTile.vue'
import Item from '~/components/Item.vue'
export default {
  components: {
    Item,
    FilterTile,
    Languages
  },
  data () {
    return {
      absolute: true,
      overlay: false,
      dialog: false,
      search: '',
      filter: false,
      show: false,
      lastScrollPosition: 0,
      btnState: false,
      tabBtn: false,
      menuData: null,
      categories: [],
      filteredData: null,
      filters: null
    }
  },
  computed: {
    pageLanguage () {
      return this.$store.state.langs.lang
    },
    filterSelected () {
      return this.$store.state.filters.selectedFilters
    },
    items () {
      return this.$store.state.filters?.items ?? []
    },
    isVegan () {
      return this.$store.state.filters.isVegan
    },
    isVegetarian () {
      return this.$store.state.filters.isVegetarian
    }
  },
  watch: {
    async pageLanguage () {
      this.menuData = await this.$axios.$get(
      `/api/menuitems/p/menu/${this.$route.params.menu}?lang=${this.pageLanguage.lang}`
      )
      for (let i = 0; i < this.menuData.length; i++) {
        if (!this.categories.includes(this.menuData[i].categoryName)) {
          this.categories.push(this.menuData[i].categoryName)
        }
      }
      this.$store.commit('filters/setItems', this.menuData)
    },
    filterSelected () {
      this.$store.commit('filters/setItems', this.menuData)
    },
    isVegan () {
      this.$store.commit('filters/setItems', this.menuData)
    },
    isVegetarian () {
      this.$store.commit('filters/setItems', this.menuData)
    }
  },
  async mounted () {
    window.addEventListener('scroll', this.onScroll)
    this.menuData = await this.$axios.$get(
      `/api/menuitems/p/menu/${this.$route.params.menu}?lang=${this.pageLanguage.lang}`
    )
    for (let i = 0; i < this.menuData.length; i++) {
      if (!this.categories.includes(this.menuData[i].categoryName)) {
        this.categories.push(this.menuData[i].categoryName)
      }
    }
    this.$store.commit('filters/setItems', this.menuData)

    this.filters = await this.$axios.$get(`/api/Allergens?skip=0&take=100&lang=${this.pageLanguage.lang}`)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    changeCategory (category) {
      this.categories = [category]
    },
    onScroll () {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.show = currentScrollPosition > 100
      this.lastScrollPosition = currentScrollPosition
    },
    clean () {
      this.$store.commit('filters/clean')
    }
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");

.v-dialog{
  background: white !important;
  margin: 0;
}
.v-toolbar__extension {
  background: rgb(245, 245, 245);
}
.not-show {
  display: none;
}
.size {
  width: 2rem;
}
.tabs {
  position: relative;
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
  padding-bottom: 6px;
}
.dark:focus {
  background: black;
  color: white;
}
</style>
