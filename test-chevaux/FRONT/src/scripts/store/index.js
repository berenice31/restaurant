import { createStore } from 'vuex'
// import HorseModule from './modules/horse/horse.store'

const store = createStore({
  strict: true,
  modules: {
    // horse: HorseModule,
  },
  plugins: []
})
