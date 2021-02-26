<template>
  <div>
    <v-btn
      height="70"
      width="70"
      plain
      class="text-subtitle-1 z-index pa-0"
      :class="{ 'green-blue' : isSelected }"
      @click="isSelected = !isSelected"
    >
      <v-icon class="icon" color="grey">
        mdi-jellyfish-outline
      </v-icon>
    </v-btn>
    <p class="text text-subtitle-2 grey--text font-weight-light">
      Pescado
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isSelected: false
    }
  }
}
</script>
<style scoped>
.text{
  position: relative;
  top: -25px;
  left: 9px;
}
.icon{
  position: relative;
  top: -10px;
}
.z-index{
  z-index: 100;
}
.green-blue{
  border: grey 1px solid;
}
</style>
