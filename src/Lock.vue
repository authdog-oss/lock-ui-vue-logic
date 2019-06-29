/* eslint-disable */
<template>
  <div id='app'>
    <div :is='storeState.selectedComponent' />
  </div>
</template>

<script>
import { store } from './store.js'
import { default as CustomLoading } from './components/CustomLoading'
import { default as CustomUnauthorized } from './components/CustomUnauthorized'
import { default as CustomSignIn } from './components/CustomSignIn'

export default {
  name: 'Lock',
  data() {
    store.setLoading(CustomLoading)
    store.setUnauthorized(CustomUnauthorized)

    setTimeout(() => {
     store.setLockVisible(CustomSignIn)
    }, 400)

    return {
      storeState: store.state
    }
  },
  methods: {
    addNumber: () => {
      store.addNumber(23)
    }
  }
}
</script>
