<template>
  <v-app>
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
        <v-btn icon>
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
                <NuxtLink to="/itemView" class="noLine">
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
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-avatar size="100">
                      <v-img :src="item.imgUrl" />
                    </v-list-item-avatar>
                  </v-list-item>
                </NuxtLink>
              </v-list>
            </v-row>
          </v-container>
        </v-list-item>
      </v-list>
    </main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    langs: [
      { title: 'Español' },
      { title: 'English' },
      { title: 'Dutch' },
      { title: '日本語' }
    ],
    menuData: [
      {
        categoryName: 'Bebidas',
        itemList: [
          {
            title: 'Mojito Rosado',
            description: 'Tomate y vodka con un pinto de picante.',
            alergen: null,
            lifeStyle: 'Vegano',
            price: 33000,
            imgUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU'
          },
          {
            title: 'Mojito Rosado',
            description: 'Tomate y vodka con un pinto de picante.',
            alergen: 'Pescado',
            lifeStyle: 'Vegano',
            price: 33000,
            imgUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU'
          },
          {
            title: 'Mojito Rosado',
            description: 'Tomate y vodka con un pinto de picante.',
            alergen: null,
            lifeStyle: null,
            price: 33000,
            imgUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU'
          }
        ]
      },
      {
        categoryName: 'Cena',
        itemList: [
          {
            title: 'Mojito Rosado',
            description: 'Tomate y vodka con un pinto de picante.',
            alergen: null,
            lifeStyle: 'Vegano',
            price: 33000,
            imgUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU'
          },
          {
            title: 'Mojito Rosado',
            description: 'Tomate y vodka con un pinto de picante.',
            alergen: 'Pescado',
            lifeStyle: 'Vegano',
            price: 33000,
            imgUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU'
          },
          {
            title: 'Mojito Rosado',
            description: 'Tomate y vodka con un pinto de picante.',
            alergen: null,
            lifeStyle: null,
            price: 33000,
            imgUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU'
          }
        ]
      },
      {
        categoryName: 'Desayuno',
        itemList: [
          {
            title: 'Mojito Rosado',
            description: 'Tomate y vodka con un pinto de picante.',
            alergen: null,
            lifeStyle: 'Vegano',
            price: 33000,
            imgUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU'
          },
          {
            title: 'Mojito Rosado',
            description: 'Tomate y vodka con un pinto de picante.',
            alergen: 'Pescado',
            lifeStyle: 'Vegano',
            price: 33000,
            imgUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU'
          },
          {
            title: 'Mojito Rosado',
            description: 'Tomate y vodka con un pinto de picante.',
            alergen: null,
            lifeStyle: null,
            price: 33000,
            imgUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqDaAIh6d4oLqb6J0uRJUR4Z-R0MSam32UA&usqp=CAU'
          }
        ]
      }
    ]
  })
}
</script>

<style>
.noLine{
  text-decoration: none;
}
.v-toolbar__extension{
  background: rgb(245, 245, 245);
}
</style>
