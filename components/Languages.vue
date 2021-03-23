<template>
  <v-menu offset-y>
    <template #activator="{ on, attrs }">
      <v-btn
        rounded
        elevation="0"
        v-bind="attrs"
        :class="{ 'not-show': show }"
        v-on="on"
      >
        <v-img style="width: 30px" :src="pageLanguage.iconRoute" />
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card
        v-for="(item, index) in langs"
        :key="index"
        tile
        elevation="0"
        class="pa-3 d-flex justify-space-between align-center"
        @click="changeLang(item)"
      >
        <p class="ma-0">
          {{ item.title }}
        </p>
        <div style="width: 30px" class="ml-3">
          <v-img :src="item.iconRoute" />
        </div>
      </v-card>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  props: {
    show: Boolean
  },
  data () {
    return {
      langs: [
        { title: 'Español', iconRoute: '/spain.svg', lang: 'es' },
        { title: 'English', iconRoute: '/united-kingdom.svg', lang: 'en' },
        { title: 'Portugueses', iconRoute: '/portugal.svg', lang: 'pt-BR' }
      ]
    }
  },
  computed: {
    pageLanguage () {
      return this.$store.state.langs.lang
    }
  },
  methods: {
    changeLang (lang) {
      this.pageLanguage = lang
      this.$store.commit('langs/changeLanguage', lang)
      console.log(this.$store.state.langs.lang)
    }
  }
}
</script>
<style scoped>
.not-show {
  display: none;
}

.size {
  width: 2rem;
}
</style>
