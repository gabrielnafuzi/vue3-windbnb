<template>
  <HomeTemplate />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HomeTemplate } from '@/components/templates'

export default defineComponent({
  name: 'App',
  components: {
    HomeTemplate
  }
})
</script>
