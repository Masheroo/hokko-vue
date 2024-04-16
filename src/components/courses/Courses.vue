<script setup>
import Popular from "@/components/courses/popular/Popular.vue";
import CoursesList from "@/components/courses/courses-list/CoursesList.vue";
import Header from "@/components/Header.vue";

</script>

<template>
  <div class="courses-wrapper background-gradient">
    <Header />
    <div class="content">
      <Popular />
      <CoursesList />
    </div>
  </div>
</template>

<style lang="sass" scoped>
@use "@/assets/css/patterns"

.courses-wrapper
  width: 100%
  min-height: 100vh

  .content
    width: 90%
    padding: 0 5%
</style>