<template>
  <v-container class="pa-0 cont d-flex justify-center">
    <v-card elevation="0" class="card">
      <v-app-bar elevation="0">
        <v-spacer />
        <v-btn icon :to="`/items/${item.id}`" color="black">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-app-bar>
      <v-img :src="item.imgUrl" />
      <v-card-title class="text-h5 font-weight-normal pb-0">
        {{ item.title }}
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
        {{ item.category }}
      </v-card-subtitle>
      <v-card-text class="grey--text font-weight-light text-body-1 text--darken-4 work-sans">
        {{ item.description }}
      </v-card-text>
      <v-card-text class="grey--text font-weight-medium text-body-1 text--darken-2">
        Precio: {{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }} Gs.
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
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      item: {
        category: 'Bebidas',
        title: 'Mojito Rosado',
        description: 'Tomate y vodka con un pinto de picante. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur aspernatur minima modi, alias animi natus sit veniam iure rem sed temporibus.',
        alergen: 'k',
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
.work-sans{
  font-family: 'Work Sans';
}
.card{
  max-width: 700px;
}
</style>
