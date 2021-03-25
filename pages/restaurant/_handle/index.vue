<template>
  <div>
    <div v-if="!menus" />
    <div v-else>
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
          <v-col
            v-for="(item, i) in menus"
            :key="i"
            cols="12"
          >
            <v-card height="80" class="text d-flex align-center justify-center" :to="`/restaurant/${$route.params.handle}/${item.handle}`">
              <p class="text-h6 ma-0 font-weight-light">
                {{ item.name }}
              </p>
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
    loading: true
  }),
  computed: {
    pageLanguage () {
      return this.$store.state.langs.lang
    }
  },
  watch: {
    async pageLanguage () {
      this.menus = await this.$axios
        .$get(`/api/menu/r/${this.$route.params.handle}?take=100&lang=${this.pageLanguage.lang}`)
      this.loading = false
    }
  },
  async mounted () {
    this.menus = await this.$axios
      .$get(`/api/menu/r/${this.$route.params.handle}?take=100&lang=${this.pageLanguage.lang}`)
    this.loading = false
  }
}
</script>

<style>
.v-toolbar__extension {
  background: rgb(245, 245, 245);
  display: flex;
  justify-content: center;
}
.size {
  width: 2rem;
}
</style>
