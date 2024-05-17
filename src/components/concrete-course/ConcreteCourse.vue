<script setup>

import Header from '@/components/Header.vue'
import MaterialList from '@/components/concrete-course/MaterialList.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Loader from '@/components/Loader.vue'

const router = useRoute()

const course = ref(null)
const courseBlocks = ref(null)

onMounted(() => {
  axios.get('/course/' + router.params.id)
    .then((response) => {
      course.value = response.data
    })
    .catch(error => console.log(error))

  axios.get('/course/' + router.params.id + '/blocks')
    .then((response) => {
      courseBlocks.value = response.data
      console.log(response.data)
    })
    .catch(error => console.log(error))
})
</script>

<template>
  <div class="concrete-course-wrapper background-gradient min-vh-100">
    <Header />

    <div v-if="course" class="loader-wrapper">


      <div class="course-title">
        <div class="content">
          <h1>{{ course.title }}</h1>
          <img src="@/assets/img/logo.svg" alt="logo">
        </div>
      </div>

      <div class="about">
        <h2>Об этом курсе</h2>
        <p>{{ course.description }}</p>
      </div>

      <div class="skills">
        <div class="content">
          <h2>В этом выпуске мы узнаем о</h2>
          <div v-html="course.skills"></div>
        </div>
      </div>

      <div v-if="!!courseBlocks" class="materials">
        <div class="content">
          <h2>Материалы курса</h2>
          <MaterialList v-for="courseBlock in courseBlocks" :courseBlock="courseBlock" :key="courseBlock.id" />
        </div>
      </div>
    </div>
    <Loader v-else />
  </div>
</template>

<style scoped lang="sass">
@use "@/assets/css/patterns"

$block-padding: 2em

.concrete-course-wrapper
  min-height: 100vh

  .course-title
    width: 95%
    border-bottom-right-radius: 25px
    border-top-right-radius: 25px
    margin-bottom: 50px
    @include patterns.cover-background-image("@/assets/img/title-background.png")

    .content
      border-bottom-right-radius: 25px
      border-top-right-radius: 25px
      display: flex
      padding: 5% 0
      justify-content: space-evenly
      width: 100%
      backdrop-filter: blur(50px)

      img
        width: 20vw

      h1
        width: 70%
        font-weight: 400

  .about
    width: 90%
    padding: 0 5%
    margin-bottom: $block-padding

    h2
      color: #B1ADD5
      font-weight: 500

    p
      color: #797599
      font-size: 13px

  .skills
    width: 90%
    padding: 5% 5%
    border-radius: 10%
    background-image: url("@/assets/img/skills-background.png")
    background-repeat: no-repeat
    background-position: right
    background-size: contain
    background-color: rgba(217, 217, 217, .1)
    margin-bottom: $block-padding

    ul
      font-size: 13px
      margin-left: 1em

  .materials
    $border-radius: 20px
    background-image: url("@/assets/img/materials-background.png")
    background-repeat: repeat-y
    background-size: 100%
    border-top-left-radius: $border-radius
    border-top-right-radius: $border-radius

    .content
      width: 90%
      padding: 5% 5%
      backdrop-filter: blur(100px)
      background-color: rgba(0, 0, 0, .5)
      border-top-left-radius: $border-radius
      border-top-right-radius: $border-radius

</style>