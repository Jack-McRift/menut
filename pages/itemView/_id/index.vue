<template>
  <v-card>
    <v-img :src="item.imgUrl" />
    <v-app-bar light elevation="0">
      <v-app-bar-title class="text-h5 font-weight-bold">
        {{ item.title }}
      </v-app-bar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-app-bar>
    <v-btn icon :to="`/items/${item.id}`" class="floating">
      <v-icon color="black" class="center">
        mdi-arrow-left
      </v-icon>
    </v-btn>
    <v-card-text class="grey--text text-h6">
      {{ item.category }}
    </v-card-text>
    <v-card-text class="grey--text font-weight-light text-body-1 text--darken-4">
      {{ item.description }}
    </v-card-text>
    <v-card-text class="grey--text font-weight-light text-h6 text--darken-4">
      Precio: {{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }} Gs.
    </v-card-text>
    <v-card-text v-if="item.alergen" class="grey--text font-weight-light text-h6 text--darken-4">
      Contiene los siguientes alergenos: <br>- {{ item.alergen }}
    </v-card-text>
    <v-card-text v-else class="grey--text font-weight-light text-h6 text--darken-4">
      No contiene ningun alergeno.
    </v-card-text>
    <!-- <algo/> -->
  </v-card>
</template>

<script>
// import algo from '~/components/algo.vue'
export default {
  // components: { algo },
  data () {
    return {
      item: {
        category: 'Bebidas',
        title: 'Mojito Rosado',
        description: 'Tomate y vodka con un pinto de picante. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur aspernatur minima modi, alias animi natus sit veniam iure rem sed temporibus. Doloribus corporis tempore atque optio! Labore, molestias doloremque!',
        alergen: 'Pescado',
        lifeStyle: null,
        price: 33000,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU',
        id: 1
      }
    }
  }
}
</script>

<style scoped>
.floating{
  position:absolute;
  top: 1rem;
  left: 1rem;
}
.center{
  text-align: center;
  align-content: center;
}
</style>
