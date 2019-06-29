import { default as AuthdogLock } from './components/AuthdogLock.vue'
import { default as LoadingLock } from './components/LoadingLock.vue'

// eslint-disable-next-line
console.log(AuthdogLock)

export const store = {
  state: {
    numbers: [1, 2, 3],
    selectedComponent: LoadingLock
  },
  addNumber(newNumber) {
    // eslint-disable-next-line
    this.state.numbers.push(newNumber)
    this.state.selectedComponent = AuthdogLock
  }
}
