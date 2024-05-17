<script setup>
import Popular from "@/components/courses/popular/Popular.vue";
import CoursesList from "@/components/courses/courses-list/CoursesList.vue";
import Header from "@/components/Header.vue";
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import Loader from '@/components/Loader.vue'

const courses = ref(null);

onBeforeMount(() => {
  axios.get('/course')
    .then((response)=>{
      console.log(response.data)
      courses.value = response.data
    })
})

</script>

<template>
  <div class="courses-wrapper background-gradient">
    <Header />
    <div class="content" v-if="courses">
      <Popular />
      <CoursesList :courses="courses" />
    </div>
    <Loader v-else/>
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