<template>
  <form class="form flex">
    <BaseInput
      :value="'Helsinki, Finland'"
      class="w-32 rounded-tl-2xl rounded-bl-2xl"
      placeholder="Location"
    />
    <BaseInput class="w-24" placeholder="Add guests" />

    <div class="w-full flex justify-center items-center">
      <SearchIcon size="30" color="#EB5757" />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SearchIcon, BaseInput } from '@/components/atoms'

export default defineComponent({
  name: 'SearchForm',
  components: {
    SearchIcon,
    BaseInput
  }
})
</script>

<style lang="postcss" scoped>
.form {
  @apply shadow rounded-2xl w-72 h-14;
}
</style>
