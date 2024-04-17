<script setup>
import hljs from 'highlight.js'
import {onMounted} from "vue";
import Header from "@/components/Header.vue";

onMounted(()=>{

  const pre = document.querySelectorAll('pre')
  pre.forEach((element)=>{
    element.classList.add('theme-ir-black-min')
  })

  hljs.highlightAll()
})
</script>

<template>
  <div class="lesson-wrapper background-gradient min-vh-100">
    <Header/>

    <div class="lesson-title">
      <div class="content">
        <h1>1. Настройка приложения Symfony</h1>
        <img src="@/assets/img/logo.svg" alt="logo">
      </div>
    </div>

    <div class="content">
      <h2>Configuring in the Kernel</h2>
      <p>
        Symfony applications define a kernel class (which is located by default at src/Kernel.php) that includes
        several configurable options.
        This article explains how to configure those options and shows the list of container parameters created by
        Symfony based on that configuration.
      </p>

<pre>
    <code>
const highlightedCode = hljs.highlight(
  '<span>Hello World!</span>',
  { language: 'xml' }
).value
    </code>
</pre>

      <p>Since the container.build_time value will change every time you compile the application, the build will not
        be strictly reproducible. If you care about this, the solution is to use another container parameter called
        kernel.container_build_time and set it to a non-changing build time to achieve a strict reproducible
        build:</p>
<pre class="theme-ir-black-min">
    <code>
computed: {
  currentRouteName() {
      return this.$route.name;
  }
}
    </code>
</pre>
    </div>

    <div class="btn-wrapper">
      <button>
        Отметить как пройденый
      </button>
      <button class="finished">
        Пройдено
      </button>
    </div>

  </div>

</template>

<style scoped lang="sass">
@use "@/assets/css/patterns"

.hljs
  background-color: transparent !important

.hljs-ln-numbers
  color: #797599 !important
  padding-right: 1em !important
pre
  code.hljs
    padding: 0 1em !important
.hljs-ln
  tbody
    tr
      td.hljs-ln-code
        padding: .5em 2em .5em 0
        background-color: rgba(0, 0, 0, 0.26) !important

.lesson-wrapper
  min-height: 100vh
  color: white
  padding-bottom: 5%

  .lesson-title
    width: 100%
    @include patterns.cover-background-image("@/assets/img/title-background.png")

    .content
      display: grid
      grid: auto-flow / 8fr 2fr
      padding: 2em 5%
      width: 90%
      align-items: center
      justify-items: stretch
      backdrop-filter: blur(50px)
      background-color: rgba(44, 44, 44, .4)

      h1
        font-weight: 400
        margin-bottom: 0

      img
        max-height: 10vh
        height: 80%

  .content
    width: 90%
    padding: 0 5%
    margin-top: 2em

    h1, h2, h3, h4, h5, h6
      margin-bottom: 1em

  .btn-wrapper
    display: flex
    justify-content: center
    margin: 5vh 0

    button
      color: white
      background-color: rgba(155, 155, 155, .15)
      margin: 0 auto
      padding: .75em 1.5em
      font-size: 4vw
      border: 1px solid white
      border-radius: 10px

      &.finished
        color: #3cff3c
        border-color: #3cff3c

</style>