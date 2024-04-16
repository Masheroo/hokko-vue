<script setup>

import CoursesListItem from "@/components/courses/courses-list/CoursesListItem.vue";
</script>

<template>
  <div class="courses">
    <h2>Курсы</h2>

    <div class="wrapper">

      <CoursesListItem v-for="n in 10" />
    </div>
  </div>
</template>

<style scoped lang="sass">
@use "@/assets/css/patterns"

.courses
  h2
    margin-bottom: 1em
  .wrapper
    display: flex
    justify-content: space-between
    flex-wrap: wrap
</style>