<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    document.title = 'E-Delivery'
  },
})
</script>


<style lang="scss">
</style>
