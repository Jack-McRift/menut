<template>
  <div>
    <v-container fluid>
      <v-row class="justify-center">
        <v-text-field
          placeholder="Buscar"
          solo
          style="max-width: 500px"
          class="mt-5"
          height="60"
          :value="inputSearch"
        >
          <template #append>
            <v-btn icon :to="`/restaurant/${$route.params.handle}/${$route.params.menu}`" color="primary">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-row>
    </v-container>
    <v-row class="justify-center">
      <v-list>
        <v-list-item
          v-for="(item, i) in dataBase[0].itemList"
          :key="i"
          three-line
        >
          <item :index="i" :title="item.title" :price="item.price" :description="item.description" :url="item.imgUrl" />
        </v-list-item>
        <v-divider />
      </v-list>
    </v-row>
  </div>
</template>

<script>
import Item from '~/components/Item.vue'

export default {
  components: { Item },
  data () {
    return {
      inputSearch: '',
      dataBase: [
        {
          categoryName: 'Bebidas',
          itemList: [
            {
              title: 'Coctel',
              description: 'Tomate y vodka con un pinto de picante.',
              alergen: null,
              lifeStyle: null,
              price: 33000,
              imgUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU',
              quantity: 0,
              isInCar: false,
              id: 0
            },
            {
              title: 'Coctel',
              description: 'Tomate y vodka con un pinto de picante.',
              alergen: null,
              lifeStyle: null,
              price: 33000,
              imgUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU',
              quantity: 0,
              isInCar: false,
              id: 1
            },
            {
              title: 'Mojito Rosado',
              description: 'Tomate y vodka con un pinto de picante.',
              alergen: null,
              lifeStyle: null,
              price: 33000,
              imgUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU',
              quantity: 0,
              isInCar: false,
              id: 3
            }
          ]
        }
      ],
      filteredData: []
    }
  },

  mounted () {
    //
  }
}
</script>
