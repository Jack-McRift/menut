<template>
  <span> {{ amount }} Gs. </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    amount () {
      return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
})
</script>
