<template>
  <button v-on:click='activateSignin'>Custom Sign In</button>
</template>

<script>
  import { displayLock } from '@authdog/lock-core'
  import { store } from '../store'
  export default {
    name: 'CustomSignIn',
    methods: {
      activateSignin: () => {
        const details = store.state.authdogDetails
        displayLock(details.env, details.appId, details.version)
      }
    }
  }
</script>
