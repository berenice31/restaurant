import { computed } from 'vuex'
import { v4 as uuid } from 'uuid'

export default {
  strict: true,
  namespaced: true,

  state: {
    chevaux: [{
      _id: 'id1',
      race: 'Selle Français',
      country: 'France',
      vote: 32,
    },
    {
      _id: 'id2',
      race: 'Quarter Horse',
      country: 'Etat-Unis',
      vote: 15,
    },
    {
      _id: 'id3',
      race: 'shetland',
      country: 'Ecosse',
      vote: 20,
    },
    {
      _id: 'id4',
      race: 'KWPN',
      country: 'Pays bas',
      vote: 48,
    }],
  },

  getters: {
    chevaux: state => state.chevaux,
    // get (state) {
    //   return itemId => {
    //     return state.items.find(
    //       ({ _id }) => _id === itemId
    //     )
    //   }
    // },

    // find (state) {
    //   return () => {
    //     return state.items
    //   }
    // },
  },  

  actions: {
    create ({ commit }, text) {
      commit('create', { text, done: false })
    },
  
    patch ({ commit }, item) {
      commit('patch', item)
    },

    update ({ commit }, item) {
      commit('update', item)
    },
  
    remove ({ commit }, itemId) {
      commit('remove', itemId)
    },
  },

  mutations: {
    create (state, item) {
      if (!item._id) {
        item._id = uuid()
      }

      state.items.push(item)
    },
  
    patch (state, item) {
      const index = state.items.findIndex(
        ({ _id }) => _id === item._id 
      ) 
      
      if (index >= 0) {
        const newItem = Object.assign(state.items[index], item)

        state.items.splice(index, 1, newItem)
      }
    },

    update (state, item) {
      const index = state.items.findIndex(
        ({ _id }) => _id === item._id 
      ) 
      
      if (index >= 0) {
        state.items.splice(index, 1, item)
      }
    },
  
    remove (state, itemId) {
      const index = state.items.findIndex(
        ({ _id }) => _id === itemId
      ) 
      
      if (index >= 0) {
        state.items.splice(index, 1)
      }
    },
  },
}