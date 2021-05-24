import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from './router'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.

export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  
  app.use(Oruga)
  app.use(router)
  return { app, router }
}
