/* eslint-disable */
<template>
  <AuthdogLock appId='APP_TEST_ID' />
</template>

<script>
import { store } from './store.js'
import { default as AuthdogLock } from './components/AuthdogLock.vue'

export default {
  name: 'Example',
  data: () => {
    return {
      storeState: store.state
    }
  },
  components: {
    AuthdogLock
  }
}
</script>
