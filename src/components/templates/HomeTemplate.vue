<template>
  <Container>
    <Header />
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Container } from '@/components/bosons'
import { Header } from '@/components/organisms'

export default defineComponent({
  components: {
    Container,
    Header
  }
})
</script>
