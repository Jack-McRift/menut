<template>
  <v-app>
    <v-btn
      fab
      color="primary"
      elevation="2"
      fixed
      class="fix-btn"
      @click="dialog=!dialog"
    >
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-overlay
      :value="overlay"
      z-index="10"
    >
      <v-card light>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="menuData[0].itemList"
          :search="search"
          mobile-breakpoint="100"
          items-per-page="4"
        >
          <template #[`item.imgUrl`]="{ item }">
            <img :src="item.imgUrl" :alt="item.title" class="image">
          </template>
          <template #[`item.itemView`]>
            <v-btn to="/itemView" outlined>
              Ver
            </v-btn>
          </template>
        </v-data-table>
        <v-row justify="center">
          <v-btn outlined class="ma-5" @click="overlay=false">
            close
          </v-btn>
        </v-row>
      </v-card>
    </v-overlay>
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
      <v-btn icon to="/menuList">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer />

      <template #extension class="white">
        <v-btn icon @click="overlay = !overlay">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-spacer />
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-translate</v-icon>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in langs" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer />
        <v-btn icon to="/filter">
          <v-icon>mdi-filter-outline</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <main>
      <v-list light>
        <v-list-item v-for="(list, index) in menuData" :key="index">
          <v-container>
            <v-row>
              <v-list-item-title class="text-h5 font-weight-bold">
                {{ list.categoryName }}
              </v-list-item-title>
            </v-row>
            <v-row>
              <v-list class="block">
                <v-list-item
                  v-for="(item, i) in list.itemList"
                  :key="i"
                  three-line
                >
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      {{
                        item.title
                      }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="font-weight-light">
                      {{ item.description }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-if="item.alergen || item.lifeStyle">
                      | {{ item.alergen }} {{ item.lifeStyle }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-else>
                      {{ "|" }}
                    </v-list-item-subtitle>
                    <v-list-item-title>
                      {{
                        item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                      }} Gs.
                      <v-btn outlined rounded color="primary" small @click="substract(item)">
                        -
                      </v-btn>
                      <v-text>{{ item.quantity }}</v-text>
                      <v-btn outlined rounded color="primary" small @click="add(item)">
                        +
                      </v-btn>
                    </v-list-item-title>
                  </v-list-item-content>

                  <NuxtLink to="/itemView" class="noLine">
                    <v-list-item-avatar size="100">
                      <v-img :src="item.imgUrl" />
                    </v-list-item-avatar>
                  </NuxtLink>
                </v-list-item>
                <v-divider />
              </v-list>
            </v-row>
          </v-container>
        </v-list-item>
      </v-list>
    </main>
    <v-dialog
      v-model="dialog"
      fullscreen
      transition="dialog-bottom-transition"
      z-index="11"
    >
      <v-card class="pt-16">
        <v-card-title class="fixed">
          Tu lista
          <v-spacer />
          <v-btn icon @click="dialog=false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-list>
          <v-list-item
            v-for="(item, i) in carList"
            :key="i"
            three-line
          >
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{
                  item.title
                }}
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-light">
                {{ item.description }}
              </v-list-item-subtitle>
              <v-list-item-subtitle v-if="item.alergen || item.lifeStyle">
                | {{ item.alergen }} {{ item.lifeStyle }}
              </v-list-item-subtitle>
              <v-list-item-subtitle v-else>
                {{ "|" }}
              </v-list-item-subtitle>
              <v-list-item-title>
                {{
                  item.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }} Gs.
                <v-spacer />
                <v-btn outlined rounded color="primary" small @click="substract(item)">
                  -
                </v-btn>
                <v-text>{{ item.quantity }}</v-text>
                <v-btn outlined rounded color="primary" small @click="add(item)">
                  +
                </v-btn>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-avatar size="100">
              <v-img :src="item.imgUrl" />
            </v-list-item-avatar>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-container class="pa-16">
          <v-row justify="space-between">
            <v-text>
              Subtotal:  <br>
            </v-text>
            {{ orderSubtotal()
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".") }} Gs.
          </v-row>
          <v-row justify="space-between">
            <v-text>
              IVA ({{ iva }}%):  <br>
            </v-text>
            {{ (orderSubtotal()*(iva/100))
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".") }} Gs.
          </v-row>
          <v-row justify="space-between">
            <v-text>
              Total:  <br>
            </v-text>
            {{ (orderSubtotal()*(iva/100)+orderSubtotal())
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".") }} Gs.
          </v-row>
        </v-container>
        <v-row justify="center" class="pb-10">
          <v-btn outlined class="bottom">
            Llamar al mesero
          </v-btn>
        </v-row>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    absolute: true,
    overlay: false,
    dialog: false,
    search: '',
    iva: 20,
    carList: [],
    langs: [
      { title: 'Español' },
      { title: 'English' },
      { title: 'Dutch' },
      { title: '日本語' }
    ],
    headers: [
      { text: 'Imagen', value: 'imgUrl' },
      { text: 'Nombre', value: 'title' },
      { text: 'Precio', value: 'price' },
      { text: 'Ver item', value: 'itemView' }
    ],
    menuData: [
      {
        categoryName: 'Bebidas',
        itemList: [
          {
            title: 'Coctel',
            description: 'Tomate y vodka con un pinto de picante.',
            alergen: null,
            lifeStyle: null,
            price: 33000,
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU',
            quantity: 0,
            isInCar: false,
            id: 0
          }, {
            title: 'Coctel',
            description: 'Tomate y vodka con un pinto de picante.',
            alergen: null,
            lifeStyle: null,
            price: 33000,
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU',
            quantity: 0,
            isInCar: false,
            id: 1
          }, {
            title: 'Mojito Rosado',
            description: 'Tomate y vodka con un pinto de picante.',
            alergen: null,
            lifeStyle: null,
            price: 33000,
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU',
            quantity: 0,
            isInCar: false,
            id: 3
          }
        ]
      }
    ]
  }),
  methods: {
    orderSubtotal () {
      let subtotal = 0
      for (let i = 0; i < this.carList.length; i++) {
        subtotal += this.carList[i].price * this.carList[i].quantity
      }
      return subtotal
    },
    add (item) {
      item.quantity += 1
      if (!item.isInCar) {
        this.carList.push(item)
        item.isInCar = true
      }
    },
    substract (item) {
      if (item.quantity > 0) { item.quantity -= 1 }
      if (item.quantity === 0) {
        this.carList = this.carList.filter(i => i.id !== item.id)
        item.isInCar = false
      }
    }
  }
}
</script>

<style>
.noLine{
  text-decoration: none;
}
.v-toolbar__extension{
  background: rgb(245, 245, 245);
}
.image{
  height: 5rem;
  padding-top: .5rem;
}
.fix-btn{
  bottom: 1rem;
  right: 1rem;
}
/* .bottom{
  position: absolute;
  bottom: 1rem;
} */
</style>
