import { default as AuthdogLock } from './components/AuthdogLock.vue'
import { default as LoadingLock } from './components/LoadingLock.vue'

export const store = {
  state: {
    selectedComponent: LoadingLock,
    signInComponent: AuthdogLock,
    loadingComponent: LoadingLock,
    unauthorizedComponent: LoadingLock
  },
  setLockVisible(component) {
    if (component) {
      this.state.signInComponent = component
    }
    this.state.selectedComponent = this.state.signInComponent
  },
  setLoading(component) {
    if (component) {
      this.state.loadingComponent = component
    }
    this.state.selectedComponent = this.state.loadingComponent
  },
  setUnauthorized(component) {
    if (component) {
      this.state.unauthorizedComponent = component
    }
    this.state.selectedComponent = this.state.unauthorizedComponent
  }
}
