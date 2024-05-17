import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const authStore = defineStore('auth', () => {
    const token = ref(localStorage.token)
    const isAuth = ref(!!token.value)

    function setToken(plainToken) {
      localStorage.token = plainToken
      token.value = localStorage.token
      isAuth.value = !!token.value;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    }

    function removeToken() {
      localStorage.removeItem('token')
      this.token.value = localStorage.token;
    }

    return { isAuth, setToken, token, removeToken}
})