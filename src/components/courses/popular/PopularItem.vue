<script setup>
defineProps({
  n: Number
})
</script>

<template>
  <div class="popular-card">
    <img src="@/assets/img/test-image.jpg" alt="test-image">
    <div class="popular-card-content">
      <h3>Карьерный box {{n}}</h3>
      <RouterLink :to="{name: 'Concrete Course'}">Перейти</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="sass">
@use "@/assets/css/patterns"

.popular-card
  display: flex
  margin-right: 2em
  height: 15vh
  position: relative
  border-radius: 40px
  overflow: hidden
  min-width: 75vw
  max-width: 75vw

  &:last-child
    margin-right: 0

  img
    object-fit: cover
    width: 40%
    backdrop-filter: blur(20px)

  .popular-card-content
    width: 60%
    background-color: rgba(37, 41, 87)
    height: 100%
    @include patterns.flex-column-center
    padding: 0 5%
    align-items: flex-start
    justify-content: space-evenly

    a
      color: white
      text-decoration: none
      border: 1px solid white
      padding: .5em 0
      text-align: center
      border-radius: 10px
      width: 80%
      justify-self: flex-end
</style>