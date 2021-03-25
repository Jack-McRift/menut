<template>
  <v-card
    elevation="0"
    tile
    style="min-width: 320px; width: 90vw; max-width: 420px"
    class="my-4 pa-2"
    :to="`/restaurant/${$route.params.handle}/${$route.params.menu}/item/${itemId}`"
  >
    <h3
      style="width:250px"
      class="body-1 font-weight-bold text-capitalize"
    >
      {{ index + 1 }}. {{ title }}
    </h3>
    <div class="d-flex justify-space-between">
      <div>
        <p class="text-body-2 font-weight-light">
          {{ description }}
        </p>
        <div class="d-flex">
          <div v-for="(icon, i) in allergens" :key="i">
            <img style="width: 20px" :src="icon.icon">
          </div>
          <img v-if="vegan" style="width: 23px; height: 23px" src="/tiles/vegan.svg">
          <img v-if="vegetarian" style="width: 23px; height: 23px" src="/tiles/vegetarian.svg">
        </div>
        <Money class="font-weight-medium body-1 money mb-1" :value="price" />
      </div>
      <v-card
        v-if="url"
        class="text-decoration-none"
        width="100"
        elevation="0"
        tile
      >
        <v-img :src="url" />
      </v-card>
      <img v-else style="width: 100px; height: 100px;" src="/no_image_found.svg">
    </div>
  </v-card>
</template>
<script>
import Money from '~/components/Money.vue'
export default {
  components: { Money },
  props: {
    itemId: Number,
    title: String,
    url: String,
    index: Number,
    description: String,
    price: Number,
    allergens: Array,
    vegan: Boolean,
    vegetarian: Boolean
  }
}
</script>
<style scoped>
.money{
  position: absolute;
  bottom: 0;
}
</style>
