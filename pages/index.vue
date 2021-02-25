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
      <template #extension>
        <v-spacer />
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn elevation="0" rounded v-bind="attrs" v-on="on">
              <svg
                id="Layer_1"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background:new 0 0 512 512;"
                xml:space="preserve"
                class="size"
              >
                <path
                  style="fill:#FFDA44;"
                  d="M0,256c0,31.314,5.633,61.31,15.923,89.043L256,367.304l240.077-22.261C506.367,317.31,512,287.314,512,256s-5.633-61.31-15.923-89.043L256,144.696L15.923,166.957C5.633,194.69,0,224.686,0,256z"
                />
                <g>
                  <path style="fill:#D80027;" d="M496.077,166.957C459.906,69.473,366.071,0,256,0S52.094,69.473,15.923,166.957H496.077z" />
                  <path style="fill:#D80027;" d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957H15.923z" />
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
            <v-list-item v-for="(item, index) in langs" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-avatar>
                <v-img :src="item.iconRoute" />
              </v-list-item-avatar>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer />
      </template>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in data"
          :key="i"
          cols="12"
        >
          <v-card height="100" class="text" :to="`/items/${item.id}`">
            <v-text class="category-name text-h5 font-weight-light">
              {{ item.title }}
            </v-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    langs: [
      { title: 'Español', iconRoute: '/spain.svg' },
      { title: 'English', iconRoute: '/united-kingdom.svg' },
      { title: 'Portugueses', iconRoute: '/portugal.svg' }
    ],
    data: [
      { title: 'Desayuno', id: 0 },
      { title: 'Almuerzo', id: 1 },
      { title: 'Bebidas', id: 2 },
      { title: 'Entradas', id: 3 }
    ]
  })
}
</script>

<style scoped>
.text{
  text-align: center;
}
.category-name{
  position: relative;
  top: 40px;
}
.size{
  width: 2rem;
}
</style>
