<template>
  <v-app light>
    <v-main>
      <v-container class="white">
        <nuxt class="white" />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'menus',
          to: '/'
        }
      ],
      title: 'menut'
    }
  }
}
</script>
<style scoped>
* {
  font-family: 'Work Sans', sans-serif;
}
.white {
  background: #ffffff;
}
</style>
