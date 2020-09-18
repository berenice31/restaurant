import { createRouter, createWebHistory } from 'vue-router'

const context = require.context('.', true, /\.router\.js$/)
const Routes = []

context.keys().forEach(key => Routes.push(context(key).default))

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: Routes
})

export default router
