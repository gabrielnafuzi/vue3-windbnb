<template>
  <div>
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-2xl font-bold text-base-black">Stays in Finland</h1>

      <span class="text-sm text-base-gray-2">12+ stays</span>
    </div>

    <div class="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <StayCard v-for="(stay, idx) of stays" :key="idx" :stay="stay" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { StayCard } from '@/components/molecules'
import { Stay } from '@/models'
import staysJson from '@/db/stays.json'

export default defineComponent({
  name: 'StaysList',
  components: {
    StayCard
  },
  setup() {
    const stays: Stay[] = staysJson

    return {
      stays
    }
  }
})
</script>
