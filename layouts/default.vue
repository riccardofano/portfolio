<template>
  <div class="root">
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
.root {
  display: grid;
  grid-template-columns: minmax(0, 2rem) 1fr minmax(0, 2rem);

  & > * {
    grid-column: 2;
  }
}
</style>
