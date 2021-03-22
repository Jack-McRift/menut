<template>
  <v-app>
    <!-- app-bar -->
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
      <v-btn icon to="/">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-app-bar-title :class="{ 'not-show': !show }"> Menuit </v-app-bar-title>
      <v-spacer />

      <template #extension class="white">
        <v-btn rounded elevation="0" :class="{ 'not-show': show }" to="/search">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-spacer :class="{ 'not-show': show }" />
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn
              rounded
              elevation="0"
              v-bind="attrs"
              :class="{ 'not-show': show }"
              v-on="on"
            >
              <svg
                id="Layer_1"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
                class="size"
              >
                <path
                  style="fill: #ffda44"
                  d="M0,256c0,31.314,5.633,61.31,15.923,89.043L256,367.304l240.077-22.261C506.367,317.31,512,287.314,512,256s-5.633-61.31-15.923-89.043L256,144.696L15.923,166.957C5.633,194.69,0,224.686,0,256z"
                />
                <g>
                  <path
                    style="fill: #d80027"
                    d="M496.077,166.957C459.906,69.473,366.071,0,256,0S52.094,69.473,15.923,166.957H496.077z"
                  />
                  <path
                    style="fill: #d80027"
                    d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957H15.923z"
                  />
                </g>
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
              </svg>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in langs"
              :key="index"
              class="pa-2"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-avatar>
                <v-img :src="item.iconRoute" />
              </v-list-item-avatar>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer :class="{ 'not-show': show }" />
        <v-btn
          rounded
          elevation="0"
          :class="{ 'not-show': show }"
          @click="filter = true"
        >
          <v-icon>mdi-filter-outline</v-icon>
        </v-btn>
        <div :class="{ 'not-show': !show }" class="tabs">
          <v-btn
            v-for="(item, i) in menuData"
            :key="i"
            rounded
            outlined
            elevation="0"
            class="mx-1 dark"
            :class="{ 'not-show': !show }"
            retain-focus-on-click
            value="tabBtn"
          >
            {{ item.categoryName }}
          </v-btn>
        </div>
      </template>
    </v-app-bar>
    <!-- filter -->
    <v-dialog
      v-model="filter"
      scrollable
      fullscreen
      persistent
      transition="dialog-bottom-transition"
    >
      <div class="overlay-container">
        <v-container justify-center class="pa-10 background">
          <v-row>
            <v-spacer />
            <v-icon color="black"> mdi-filter-outline </v-icon>
            <div class="text-h6 black--text font-weight-light">Filtrar por</div>
            <v-spacer />
            <v-btn icon color="primary" @click="filter = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-row>
          <v-row>
            <h3 class="primary--text">
              <br /><br />
              Alergenos
            </h3>
            <v-text> No mostrar los alimentos que contengan:</v-text>
            <v-col v-for="n in 11" :key="n" cols="3" class="less-height">
              <filterTile />
            </v-col>
          </v-row>
          <v-row class="less-height">
            <h3 class="primary--text">
              <br />
              Estilo de vida
            </h3>
            <v-text>Solo mostrar alimentos que sean aptos para:</v-text>
            <v-col v-for="n in 3" :key="n" cols="3">
              <filterTile />
            </v-col>
            <v-btn class="px-16 py-6 font-weight-light" dark>
              Aplicar Filtros
            </v-btn>
          </v-row>
        </v-container>
      </div>
    </v-dialog>
    <!-- content -->
    <main class="d-flex justify-center">
      <v-list light class="top-space">
        <v-list-item v-for="(list, index) in menuData" :key="index">
          <v-container>
            <v-row>
              <v-list-item-title class="text-h6 font-weight-black work-sans">
                {{ list.categoryName }}
              </v-list-item-title>
            </v-row>
            <v-row>
              <v-list>
                <v-list-item
                  v-for="(item, i) in list.itemList"
                  :key="i"
                  three-line
                >
                  <Item
                    :item-id="item.id"
                    :title="item.title"
                    :index="i"
                    :url="item.imgUrl"
                    :description="item.description"
                    :price="item.price"
                  />
                </v-list-item>
                <v-divider />
              </v-list>
            </v-row>
          </v-container>
        </v-list-item>
      </v-list>
    </main>
  </v-app>
</template>

<script>
import filterTile from '~/components/FilterTile.vue'
import Item from '~/components/Item.vue'
export default {
  components: {
    filterTile,
    Item
  },
  data: () => ({
    absolute: true,
    overlay: false,
    dialog: false,
    search: '',
    filter: false,
    show: false,
    lastScrollPosition: 0,
    btnState: false,
    carList: [],
    tabBtn: false,
    langs: [
      { title: 'Español', iconRoute: '/spain.svg' },
      { title: 'English', iconRoute: '/united-kingdom.svg' },
      { title: 'Portugueses', iconRoute: '/portugal.svg' }
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
      },
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
      },
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
      },
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
      },
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
      },
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
      },
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
    ]
  }),
  async mounted () {
    window.addEventListener('scroll', this.onScroll)
    this.menuData = await this.$axios.$get(
      `/api/menuitems/p/menu/${this.$route.params.menu}`
    )
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.show = currentScrollPosition > 100
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");

.v-toolbar__extension {
  background: rgb(245, 245, 245);
}
.fix-btn {
  bottom: 1rem;
  right: 1rem;
}
.inline {
  display: inline;
}
.center {
  text-align: center;
}
.background {
  background: white;
  width: 375px;
  height: 100%;
}
.v-list-item {
  padding: 0;
  padding-left: 10px;
  padding-bottom: 10px;
}
.not-show {
  display: none;
}
.container {
  padding: 5px;
  padding-bottom: 30px;
}
.item-image {
  position: relative;
  width: 5.4rem;
  right: 1.5rem;
  top: 20px;
}
.space-between-items {
  padding: 4px;
  padding-right: 0px;
  font-family: "Work Sans", sans-serif;
}
.work-sans {
  font-family: "Work Sans", sans-serif;
}
.text-h6 {
  padding-left: 15px;
}
.top-space {
  margin-top: 30px;
}
.size {
  width: 2rem;
}
.tabs {
  position: relative;
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
  padding-bottom: 6px;
}
.less-height {
  height: 85px;
}
.py-6 {
  width: 80%;
  position: fixed;
  left: 10vw;
  bottom: 10vw;
}
.overlay-container {
  width: 100vw;
  background: white;
}
.dark:focus {
  background: black;
  color: white;
}
</style>
