<script setup>
import {onMounted, ref} from "vue";

const description = ref('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur dicta, hic iusto modi necessitatibus neque reprehenderit, tenetur, veritatis vitae voluptate voluptatum?')

onMounted(()=>{
  if (description.value.length > 100){
    description.value = description.value.slice(0,100) + '...'
  }
})
</script>

<template>
  <div class="course">
    <img src="@/assets/img/test-image.jpg" alt="img">
    <div class="content">
      <h3>Python-разработчик</h3>
      <p class="description">{{ description }}</p>
      <RouterLink :to="{name: 'Concrete Course'}">Перейти</RouterLink>
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