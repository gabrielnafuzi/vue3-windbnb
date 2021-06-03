<template>
  <header class="header">
    <Logo class="mb-10 md:mb-0" />

    <SearchForm class="self-center" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Logo } from '@/components/atoms'
import { SearchForm } from '@/components/molecules'

export default defineComponent({
  name: 'Header',
  components: {
    Logo,
    SearchForm
  }
})
</script>

<style lang="postcss" scoped>
.header {
  @apply flex flex-col mb-9;
  @apply md:flex-row md:justify-between md:items-center md:mb-14;
}
</style>
