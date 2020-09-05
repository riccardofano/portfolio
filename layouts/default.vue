<template>
  <div class="grid grid--outer">
    <Nuxt />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter'

export default {
  components: { TheFooter },
}
</script>
