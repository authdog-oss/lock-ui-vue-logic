<template>
  <button v-on:click='displayLock'>Sign In</button>
</template>

<script>
  import {
    displayLock,
    getEndpoints
  } from '@authdog/lock-core'

  export default {
    name: 'AuthdogLock',
    beforeCreate() {
      // eslint-disable-next-line
      console.log('Nothing gets called before me!')
      // eslint-disable-next-line
      console.log(getEndpoints()) //es
    },
    methods: {
      displayLock
    },
    props: {
      env: {
        default: 'prod',
        type: String
      }
    }
  }
</script>
