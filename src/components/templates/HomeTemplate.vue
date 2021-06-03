<template>
  <Container>
    <Header />

    <StaysList />
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Container } from '@/components/bosons'
import { Header, StaysList } from '@/components/organisms'

export default defineComponent({
  components: {
    Container,
    Header,
    StaysList
  }
})
</script>
