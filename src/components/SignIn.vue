<template>
  <button v-on:click='displayLock'>SignIn</button>
</template>

<script>
  import {
    displayLock,
    // getEndpoints
  } from '@authdog/lock-core'

  export default {
    name: 'SignIn',
    methods: {
      displayLock
    }
  }
</script>
