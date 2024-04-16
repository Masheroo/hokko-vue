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
    <h2 style="color: black">hello</h2>
    <RouterView  />
  </div>
  <Auth v-else/>
</template>

<style scoped>
</style>
