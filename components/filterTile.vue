<template>
  <div>
    <v-card
      height="80"
      width="80"
      plain
      elevation="0"
      class="text-subtitle-1 z-index pa-0"
      :class="{ 'green-blue' : isSelected }"
      @click="!inactive? addFilter(value): isSelected = false"
    >
      <img v-if="url" style="width: 40px" class="d-block mx-auto" :src="url">
      <img v-else style="width: 30px" class="d-block mx-auto" src="/no_image_found.svg">
      <p class="text-center text-capitalize text-subtitle-2 grey--text font-weight-light">
        {{ name }}
      </p>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    url: String,
    inactive: {
      type: Boolean,
      value: false
    },
    value: null
  },
  data () {
    return {
      isSelected: false
    }
  },
  methods: {
    addFilter (value) {
      this.isSelected = !this.isSelected
      if (this.isSelected) {
        this.$store.commit('filters/addFilter', value)
      } else {
        this.$store.commit('filters/deleteFilter', value)
      }
    }
  }
}
</script>
<style scoped>
.z-index{
  z-index: 100;
}
.green-blue{
  border: #4DB6AC 1px solid;
}
</style>
