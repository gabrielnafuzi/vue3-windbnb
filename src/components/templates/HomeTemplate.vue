<template>
  <Container>
    <Header />

    <StaysList />

    <Footer />
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Container } from '@/components/bosons'
import { Header, StaysList, Footer } from '@/components/organisms'

export default defineComponent({
  components: {
    Container,
    Header,
    StaysList,
    Footer
  }
})
</script>
