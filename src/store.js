import { default as SignIn } from './components/SignIn.vue'
import { default as LoadingLock } from './components/LoadingLock.vue'

export const store = {
  state: {
    selectedComponent: LoadingLock,
    signInComponent: SignIn,
    loadingComponent: LoadingLock,
    unauthorizedComponent: LoadingLock,
    authdogDetails: null
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
  },
  setAuthdogAppId({ env, appId, version }) {
    this.state.authdogDetails = { env, appId, version }
  }
}
