<template>
  <div class="pa-0">
    <div v-if="item" class="pa-0 cont d-flex justify-center">
      <v-card elevation="0" class="card">
        <v-app-bar elevation="0" class="white">
          <v-spacer />
          <v-btn icon :to="`/restaurant/${$route.params.handle}/${$route.params.menu}`" color="black" @click="clean()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-app-bar>
        <v-img v-if="item.photoUrl" :src="item.photoUrl" />
        <img v-else src="/no_image_found.svg">
        <v-card-title class="text-h5 text-capitalize font-weight-normal pb-0">
          {{ item.name }}
          <v-spacer />
        </v-card-title>
        <v-spacer />
        <v-card-subtitle class="text-capitalize grey--text text-h6 pt-0 font-weight-light text--lighten-2 work-sans">
          {{ item.categoryName }}
        </v-card-subtitle>
        <v-card-text class="grey--text font-weight-light text-body-1 text--darken-4 work-sans">
          {{ item.description }}
        </v-card-text>
        <v-card-text class="grey--text font-weight-medium text-body-1 text--darken-2">
          Precio: <Money :value="item.price" />
        </v-card-text>
        <v-card-text v-if="item.allergens[0]" class="grey--text font-weight-light text-body-1 text--darken-4">
          Alergenos presentes: <br>
          <v-container>
            <v-row>
              <v-col
                v-for="n in item.allergens"
                :key="n"
                cols="3"
                class="less-height"
              >
                <filter-tile :name="n.name" :url="n.icon" :value="n.id" :inactive="true" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-text v-else class="grey--text font-weight-light text-body-1 text--darken-4">
          No contiene ningun alergeno.
        </v-card-text>
        <v-card-text v-if="item.isVegan || item.isVegetarian" class="grey--text font-weight-light text-body-1 text--darken-4">
          Apto para: <br>
          <v-container>
            <div class="d-flex">
              <filter-tile
                v-if="item.isVegetarian"
                :inactive="true"
                class="ma-1"
                :value="'vegetarian'"
                :name="'vegetariano'"
                :url="'/tiles/vegetarian.svg'"
              />
              <filter-tile
                v-if="item.isVegan"
                :inactive="true"
                class="ma-1"
                :value="'vegan'"
                :name="'vegano'"
                :url="'/tiles/vegan.svg'"
              />
            </div>
          </v-container>
        </v-card-text>
        <v-card-text v-else class="grey--text font-weight-light text-body-1 text--darken-4">
          Es apto para cualquier estilo de vida.
        </v-card-text>
      </v-card>
    </div>
    <div v-else class="d-flex justify-center align-center loading">
      <v-progress-circular indeterminate color="primary" width="10" size="70" />
    </div>
  </div>
</template>

<script>
import Money from '~/components/Money.vue'
import FilterTile from '~/components/FilterTile.vue'
export default {
  components: {
    Money,
    FilterTile
  },
  data () {
    return {
      item: null
    }
  },
  computed: {
    pageLanguage () {
      return this.$store.state.langs.lang
    }
  },
  async mounted () {
    this.item = await this.$axios.$get(`/api/MenuItems/${this.$route.params.id}?lang=${this.pageLanguage}`)
  },
  methods: {
    clean () {
      this.$store.commit('filters/clean')
    }
  }
}
</script>
<style>
.theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: fff;
}
.white[data-v-314f53c6] {
    background: #ffffff;
    padding: 0;
}
</style>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
.floating{
  position:absolute;
  top: 1rem;
  left: 1rem;
}
.center{
  text-align: center;
  align-content: center;
}
.cont{
  position: relative;
  margin: -5px;
  width: 102.7%;
}
.cont > div{
  width: 100vw;
}
.work-sans{
  font-family: 'Work Sans';
}
.card{
  max-width: 700px;
}
.loading{
  height: 80vh;
}
</style>
