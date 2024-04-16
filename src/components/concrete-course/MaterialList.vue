<script setup>
import MaterialListItem from "@/components/concrete-course/MaterialListItem.vue";
import {onMounted} from "vue";

onMounted(() => {
  let materialLists = document.querySelectorAll('.material-list')

  materialLists.forEach((materialList) => {

    let btn = materialList.querySelector('.title')

    btn.addEventListener('click', toggleListActivity)

    function toggleListActivity(){

      btn.classList.toggle('active')
      btn.querySelector('img').classList.toggle('active')

      let list = materialList.querySelector('.list')
      list.classList.toggle('active')

    }
  })
})
</script>

<template>
  <div class="material-list">
    <div class="title">
      <img src="@/assets/img/list-arrow.svg" alt="arrow">
      <h4>Подготовка к работе</h4>
      <div class="count">5 лекций</div>
      <div class="dot">&#183;</div>
      <div class="time">1 ч 12 мин</div>
    </div>
    <div class="list">
      <MaterialListItem v-for="n in 10" />
    </div>
  </div>
</template>

<style scoped lang="sass">

.material-list
  .title
    display: grid
    grid: auto-flow / 1fr 6fr 2fr .5fr 2fr
    align-items: center
    justify-items: start
    width: 100%
    padding: 1em 0 .5em 0
    border-bottom: 3px solid rgb(85, 83, 117)

    img
      height: 100%
      justify-self: center
      align-self: center
      transition: .4s
      transform: rotate(180deg)

      &.active
        transform: rotate(0)

    h4
      font-weight: 300
      margin: 0
      padding-left: .5em

    .count, .time
      font-size: 10px
      color: #817FA0

    .count
      justify-self: end

    .time
      justify-self: start

    .dot
      justify-self: center

  .list
    padding: 2% 0 0 0
    overflow-x: hidden
    display: none

    &.active
      display: block


</style>