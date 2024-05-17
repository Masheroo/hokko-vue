<script setup>
import {onMounted} from "vue";
import { routerKey } from 'vue-router'

defineProps({
  course: Object
})

onMounted(()=>{
  // if (course.description || course.description.length > 100){
  //   course.description = course.description.slice(0,100) + '...'
  // }
})
</script>

<template>
  <div class="course">
    <img v-if="course.previewLink != null" :src="course.previewLink" alt="img">
    <img v-else src="@/assets/img/test-image.jpg" alt="img">
    <div class="content">
      <h3>{{ course.title }}</h3>
      <p class="description">{{ course.title }}</p>
      <RouterLink :to="{name: 'Concrete Course', params: {id: course.id }}">Перейти</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="sass">
@use "@/assets/css/patterns"

.course
  width: 47.5%
  height: 40vh
  background-color: rgba(0, 0, 0, .4)
  border-radius: 40px
  overflow: hidden
  margin-bottom: 1em

  img
    width: 100%
    height: 40%
    object-fit: cover

  .content
    height: 60%
    display: flex
    flex-direction: column
    margin-bottom: 5%
    padding: 0 .5em
    a
      align-self: center
      color: white
      text-decoration: none
      font-size: 4vw
      border: 1px solid white
      padding: .5em 0
      text-align: center
      border-radius: 10px
      width: 80%
      font-weight: 300
      justify-self: flex-end
      margin-bottom: 1.5em

    p
      flex: 1 0 0
      font-size: 3vw
      color: #ADADD1

    h3
      font-weight: 400
      margin: .5em 0 0 0
</style>