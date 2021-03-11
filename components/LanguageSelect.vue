<template>
  <div class="white">
    <v-btn rounded elevation="0" :class="{'not-show': show}" to="/search">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-spacer :class="{'not-show': show}" />
    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-btn rounded elevation="0" v-bind="attrs" :class="{'not-show': show}" v-on="on">
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
        <v-list-item v-for="(item, index) in languages" :key="index" class="pa-2">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-avatar>
            <v-img :src="item.iconRoute" />
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer :class="{'not-show': show}" />
    <v-btn rounded elevation="0" :class="{'not-show': show}" @click="filter = true">
      <v-icon>mdi-filter-outline</v-icon>
    </v-btn>
    <div :class="{'not-show': !show}" class="tabs">
      <v-btn
        v-for="(item,i) in menuData"
        :key="i"
        rounded
        outlined
        elevation="0"
        class="mx-1 dark"
        :class="{'not-show': !show}"
        retain-focus-on-click
        value="tabBtn"
      >
        {{ item.categoryName }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    languages: [
      {
        title: 'Español',
        iconRoute: '/spain.svg'
      },
      {
        title: 'English',
        iconRoute: '/united-kingdom.svg'
      },
      {
        title: 'Portugueses',
        iconRoute: '/portugal.svg'
      }
    ]
  })
}
</script>

<style scoped>

</style>
