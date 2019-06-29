<template>
  <div :is='storeState.selectedComponent' />
</template>

<script>
import { store } from '../store.js'
import { default as CustomLoading } from './CustomLoading'
import { default as CustomUnauthorized } from './CustomUnauthorized'
import { default as CustomSignIn } from './CustomSignIn'

export default {
  name: 'AuthdogLock',
  data() {
    store.setLoading(CustomLoading)
    store.setUnauthorized(CustomUnauthorized)

    if (this.appId) {
      store.setAuthdogAppId({
        env: this.env,
        appId: this.appId,
        version: this.version
      })
    }

    setTimeout(() => {
     store.setLockVisible(CustomSignIn)
    }, 400)

    return {
      storeState: store.state
    }
  },
  props: {
    env: {
      default: 'prod',
      type: String
    },
    appId: {
      default: null,
      type: String
    },
    version: {
      default: 1,
      type: Number
    }
  }
}
</script>
