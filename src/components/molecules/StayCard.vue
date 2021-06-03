<template>
  <div>
    <img
      class="h-72 w-full object-cover rounded-3xl"
      :src="stay.photo"
      :alt="stay.title"
    />

    <div class="mt-4 px-1.5">
      <div class="details">
        <div>
          <span class="super-host-chip" v-if="stay.superHost">
            Super host
          </span>
          <span> {{ description }}</span>
        </div>

        <span class="flex text-base-gray-2">
          <RateIcon :size="20" />
          {{ stay.rating }}
        </span>
      </div>

      <span class="text-base-black font-semibold text-base">
        {{ stay.title }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Stay } from '@/models'
import { RateIcon } from '@/components/atoms'

export default defineComponent({
  name: 'StayCard',
  components: {
    RateIcon
  },
  props: {
    stay: {
      type: Object as PropType<Stay>,
      required: true
    }
  },
  setup({ stay }) {
    const description = computed(() => {
      if (!stay.beds) return stay.type

      const bedsOrBed = stay.beds > 1 ? 'beds' : 'bed'

      return `${stay.type} . ${stay.beds} ${bedsOrBed}`
    })

    return {
      description
    }
  }
})
</script>

<style lang="postcss" scoped>
.details {
  @apply flex justify-between mb-2 text-base-gray-3 text-sm font-medium text-center;
}

.super-host-chip {
  @apply uppercase inline-block rounded-full px-3 py-1 text-xs font-bold 
         text-base-gray-2 border  border-base-gray-2 mr-3;
}
</style>
