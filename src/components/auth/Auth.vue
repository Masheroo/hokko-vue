<script setup>
import {ref} from "vue";
import {authStore} from "@/stores/auth.js";

const login = ref('');
const password = ref('');

function tryLogin(event){
  event.preventDefault()
  authStore().login(login.value, password.value)
}

</script>

<template>
  <div class="auth-wrapper" >

    <h2>Добро пожаловать <p>в <b>Hokko</b></p></h2>
    <img class="logo" src="@/assets/img/logo.svg" alt="logo">
    <h2>Авторизация</h2>

    <form class="login-form">

      <label>
        Логин
        <input type="text" name="login" v-model="login">
      </label>

      <label>
        Пароль
        <input type="password" name="password" v-model="password">
      </label>

      <button @click="tryLogin">Войти</button>

    </form>
  </div>
</template>

<style lang="sass" scoped>
@use "@/assets/css/patterns"

.auth-wrapper
  width: 100%
  height: 100vh
  @include patterns.flex-column-center
  background-repeat: no-repeat
  background-position: center
  background-size: cover
  background-image: url("@/assets/img/background.png")
  overflow: hidden

  .logo
    width: 30%
    margin: 2em

  h2
    margin: 0 0 1em 0
    font-weight: 300
    @include patterns.flex-column-center

  .login-form
    @include patterns.flex-column-center
    width: 100%
    font-size: 6vw
    padding: 0 1em

    button
      font-size: 6vw
      border: 2px solid white
      color: white
      padding: .5em 3em
      border-radius: 40px
      margin-top: 1.5em
      background-color: rgba(255,255,255,0.15)

    label
      width: 80%
      margin-bottom: 1em
      position: relative

      input
        width: 90%
        border: 2px solid white
        border-radius: 25px
        margin-top: .3em
        padding: .8em .5em .4em 1em
        background-color: rgba(255,255,255,0.15)
        position: relative
        color: white
        font-size: 4.5vw

      &:after
        content: " "
        display: flex
        width: 60%
        height: 1px
        background-color: #AEAEAE
        position: absolute
        left: .9em
        bottom: .4em

</style>