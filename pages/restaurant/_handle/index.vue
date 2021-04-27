<template>
  <div>
    <div v-if="!restaurant" />
    <div v-else>
      <v-app-bar
        ref="box"
        fixed
        app
        elevate-on-scroll
        hide-on-scroll
        light
        :src="restaurant.photoUrl ? restaurant.photoUrl : '/default_banner.jpg'"
        height="130"
        elevation="1"
      >
        <template #extension>
          <div class="d-felx justify-center">
            <v-spacer />
            <Languages class="mx-auto" />
            <v-spacer />
          </div>
        </template>
      </v-app-bar>

      <v-container v-if="!loading">
        <v-row>
          <v-col v-for="(item, i) in menus" :key="i" cols="12">
            <v-card
              height="80"
              class="text d-flex align-center justify-center"
              :to="`/restaurant/${$route.params.handle}/${item.handle}`"
            >
              <div class="category-name text-h6 font-weight-light">
                {{ item.name }}
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Languages from '~/components/Languages.vue'
export default {
  components: {
    Languages
  },
  data: () => ({
    menus: [],
    loading: true,
    restaurant: null
  }),
  computed: {
    pageLanguage () {
      return this.$store.state.langs.lang
    }
  },
  watch: {
    async pageLanguage () {
      this.menus = await this.$axios.$get(
        `/api/menu/r/${this.$route.params.handle}?take=100&lang=${this.pageLanguage.lang}`
      )
      this.loading = false
    }
  },
  async mounted () {
    this.menus = await this.$axios.$get(
      `/api/menu/r/${this.$route.params.handle}?take=100&lang=${this.pageLanguage.lang}`
    )
    this.loading = false
    this.restaurant = await this.$axios.$get(
      `/api/Restaurants/handle/${this.$route.params.handle}`
    )
    document.title = this.restaurant.name + ' - Menut'
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
* {
  font-family: 'Work Sans';
}
.v-toolbar__extension {
  background: rgb(245, 245, 245);
  display: flex;
  justify-content: center;
}

.size {
  width: 2rem;
}
</style>
