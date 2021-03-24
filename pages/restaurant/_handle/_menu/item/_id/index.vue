<template>
  <div>
    <div v-if="item" class="pa-0 cont d-flex justify-center">
      <v-card elevation="0" class="card">
        <v-app-bar elevation="0">
          <v-spacer />
          <v-btn icon :to="`/restaurant/${$route.params.handle}/${$route.params.menu}`" color="black">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-app-bar>
        <v-img v-if="item.imgUrl" :src="item.imgUrl" />
        <img v-else src="/no_image_found.svg">
        <v-card-title class="text-h5 font-weight-normal pb-0">
          {{ item.name }}
          <v-spacer />
          <v-btn icon>
            <v-icon class="ma-2">
              mdi-twitter
            </v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-card-title>
        <v-spacer />
        <v-card-subtitle class="grey--text text-h6 pt-0 font-weight-light text--lighten-2 work-sans">
          {{ item.categoryName }}
        </v-card-subtitle>
        <v-card-text class="grey--text font-weight-light text-body-1 text--darken-4 work-sans">
          {{ item.description }}
        </v-card-text>
        <v-card-text class="grey--text font-weight-medium text-body-1 text--darken-2">
          Precio: <Money :value="item.price" />
        </v-card-text>
        <v-card-text v-if="item.alergen" class="grey--text font-weight-light text-body-1 text--darken-4">
          Alergenos presentes: <br>
          <v-container>
            <v-row>
              <v-col
                v-for="n in 2"
                :key="n"
                cols="3"
                class="less-height"
              >
                <filterTile />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-text v-else class="grey--text font-weight-light text-body-1 text--darken-4">
          No contiene ningun alergeno.
        </v-card-text>
      </v-card>
    </div>
    <div v-else />
  </div>
</template>

<script>
import Money from '~/components/Money.vue'
export default {
  components: {
    Money
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
    console.log(this.item)
  }
}
</script>

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
</style>
