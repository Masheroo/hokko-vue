<script setup>
defineProps({
  lesson: Object
})
</script>

<template>
  <div class="list-item">
    <img src="@/assets/img/file-icon.svg" alt="icon">
    <RouterLink :to="{name: 'Lesson'}" class="list-title">{{ lesson.title }}</RouterLink>
    <div class="time">{{ lesson.duration ?? '00:00' }}</div>
  </div>
</template>

<style scoped lang="sass">
.list-item
  display: grid
  grid: auto-flow / 1fr 9.5fr 1fr
  align-items: baseline
  padding: .5em 0

  img
    height: 90%
    align-self: center
    justify-self: center

  .list-title
    font-size: 14px
    text-decoration: underline
    text-decoration-thickness: 2px
    font-weight: 300
    color: white

  .time
    color: #817FA0
    font-size: 10px

</style>