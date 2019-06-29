/* eslint-disable */
<template>
  <div id='app'>
    <AuthdogLock
      :is='DynamicComponent'
    />
    <h2>{{ storeState.numbers }}</h2>
    <button v-on:click='addNumber'>Add</button>
    <div :is='storeState.selectedComponent' />
  </div>
</template>

<script>
import AuthdogLock from './components/AuthdogLock.vue'
import LoadingLock from './components/LoadingLock.vue'
import { store } from './store.js'

export default {
  name: 'app',
  components: {
    AuthdogLock,
    // eslint-disable-next-line
    LoadingLock
  },
  data() {
    return {
      DynamicComponent: store.state.numbers.length === 3 ? LoadingLock : AuthdogLock,
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
