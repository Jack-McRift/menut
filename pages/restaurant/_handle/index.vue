<template>
  <div>
    <v-app-bar
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
    <!--      <language-select />-->
    </v-app-bar>

    <v-container v-if="!loading">
      <v-row>
        <v-col
          v-for="(item, i) in menus"
          :key="i"
          cols="12"
        >
          <v-card height="80" class="text" :to="`/restaurant/${$route.params.handle}/${item.handle}`">
            <div class="category-name text-h6 font-weight-light">
              {{ item.name }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    menus: [],
    loading: true
  }),
  mounted () {
    this.$axios
      .$get(`/api/menu/r/${this.$route.params.handle}?take=100`).then((x) => {
      return this.menus = x
    })
    this.loading = false
  }
}
</script>

<style scoped>
.text {
  text-align: center;
}

.category-name {
  position: relative;
  top: 20px;
}
</style>
