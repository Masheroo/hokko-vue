<script setup>

import PopularItem from "@/components/courses/popular/PopularItem.vue";
</script>

<template>
  <div class="popular">
    <h2>Популярное</h2>

    <div class="popular-wrapper">
      <PopularItem v-for="n in 5" :n="n" />
    </div>
  </div>
</template>

<style scoped lang="sass">
@use "@/assets/css/patterns"

.popular
  margin-bottom: 2em

  h2
    margin-bottom: 1em

.popular-wrapper
  display: flex
  width: 100%
  overflow-x: scroll

</style>