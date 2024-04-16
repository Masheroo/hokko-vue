<script setup>
import router from "@/router/index.js";
</script>

<template>
  <header>
    <a @click="router.back()" class="previous-icon" v-if="!(router.currentRoute.value.fullPath === '/')">
      <img src="@/assets/img/Vector.svg" alt="vector">
    </a>

    <a class="account-icon" href="#">
      <img src="@/assets/img/account.svg" alt="account_link">
    </a>
  </header>
</template>

<style scoped lang="sass">

header
  width: 90vw
  height: fit-content
  display: grid
  grid: auto-flow / 1fr 6fr 1fr
  grid-template-areas: "previous empty account"
  align-items: center
  justify-items: center
  padding: 2vh 5vw 0
  margin-bottom: 50px

  a
    img
      width: 10vw

  .account-icon
    grid-area: account

  .previous-icon
    grid-area: previous

</style>