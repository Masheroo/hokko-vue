import { ref } from 'vue'
import { defineStore } from 'pinia'

export const authStore = defineStore('auth', () => {
    const isAuth = ref(false)
    const token = ref(localStorage.token)

    function setToken(plainToken) {
      localStorage.token = plainToken
      token.value = localStorage.token
      isAuth.value = !!token.value;
    }

    function removeToken() {
      localStorage.removeItem('token')
      this.token.value = localStorage.token;
    }

    return { isAuth, setToken, token, removeToken}
})