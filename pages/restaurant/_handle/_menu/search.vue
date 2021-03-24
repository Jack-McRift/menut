<template>
  <div>
    <v-container fluid>
      <v-row class="justify-center">
        <v-text-field
          v-model="inputSearch"
          placeholder="Buscar"
          solo
          style="max-width: 500px"
          class="mt-5"
          height="60"
        >
          <template #append>
            <v-btn icon :to="`/restaurant/${$route.params.handle}/${$route.params.menu}`" color="primary">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-row>
    </v-container>
    <v-row class="justify-center">
      <v-list>
        <v-list-item
          v-for="(item, i) in filteredData"
          :key="i"
          three-line
        >
          <item
            :index="i"
            :title="item.title"
            :price="item.price"
            :item-id="item.id"
            :description="item.description"
            :url="item.imgUrl"
          />
        </v-list-item>
        <v-divider />
      </v-list>
    </v-row>
  </div>
</template>

<script>
import Item from '~/components/Item.vue'

export default {
  components: { Item },
  data () {
    return {
      inputSearch: '',
      search: [],
      filteredData: []
    }
  },
  computed: {
    pageLanguage () {
      return this.$store.state.langs.lang
    }
  },
  watch: {
    inputSearch () {
      if (this.inputSearch === '') {
        this.filteredData = this.search
      } else {
        this.filteredData = this.search.filter(elem => elem.name.toUpperCase().includes(this.inputSearch.toUpperCase()))
      }
    }
  },
  async mounted () {
    this.search = await this.$axios.$get(
      `/api/menuitems/p/menu/${this.$route.params.menu}?lang=${this.pageLanguage.lang}`
    )
    this.filteredData = this.search
  }
}
</script>
