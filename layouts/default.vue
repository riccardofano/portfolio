<template>
  <div class="grid grid--outer">
    <Nuxt />
    <section-footer></section-footer>
  </div>
</template>

<script>
import SectionFooter from '@/components/SectionFooter'

export default {
  components: { SectionFooter },
}
</script>
