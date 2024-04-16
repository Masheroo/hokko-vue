import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const authStore = defineStore('counter', () => {
    const isAuth = ref(false)
    const userData= {
        login: 'login',
        password: 'password'
    }

    function login(login, password) {
        if (password === userData.password && login === userData.login){
            isAuth.value = true
        }
    }

    return { isAuth, login }
})