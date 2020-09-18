import { createApp } from 'vue'
import { useComponents } from './components'
import { usePlugins } from './plugins'
import LayoutRouter from '@layouts/router'
import router from './router'
import store from './store'

const app = createApp(LayoutRouter)
  .use(router)
  .use(store)

useComponents(app)
usePlugins(app)

export default app
  
