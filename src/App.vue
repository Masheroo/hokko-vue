<script setup>
import Auth from "@/components/auth/Auth.vue";
import {authStore} from "@/stores/auth.js";
import {onMounted} from "vue";
import router from "@/router/index.js";

onMounted(() => {
  router.push({name: 'Courses'})
})
</script>

<template>
  <div class="wrapper" v-if="authStore().isAuth">
    <RouterView  />
  </div>
  <Auth v-else/>
</template>

<style lang="sass" scoped>
.wrapper
  position: relative
</style>
