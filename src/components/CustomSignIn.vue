<template>
  <button v-on:click='displayLock'>Custom SignIn</button>
</template>

<script>
  import {
    displayLock,
    // getEndpoints
  } from '@authdog/lock-core'

  export default {
    name: 'CustomSignIn',
    methods: {
      displayLock
    }
  }
</script>
