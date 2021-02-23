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
      </template>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in data"
          :key="i"
          cols="12"
        >
          <v-card height="100" class="center" to="/">
            {{ item.title }}
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
      { title: 'Español' },
      { title: 'English' },
      { title: 'Dutch' },
      { title: '日本語' }
    ],
    data: [
      { title: 'Desayuno' },
      { title: 'Desayuno' },
      { title: 'Desayuno' },
      { title: 'Desayuno' }
    ]
  })
}
</script>

<style scoped>
.center{
  text-align: center;
}
</style>
