import { reactive, computed, ref, toRefs } from 'vue'
import { useStore } from 'vuex'

export default function useTodoItem (idOrTodo) {
  const store = useStore()
  const get = store.getters['todos/get']

  const id = ref(idOrTodo?._id || idOrTodo)

  const state = reactive({
    todo: computed(() => get(id.value)),
    
    text: computed({
      get () {
        return state.todo.text
      },

      set (newValue) {
        update('text', newValue)
      }
    }),
    
    done: computed({
      get () {
        return !!state.todo.done
      },

      set (newValue) {
        update('done', newValue)
      }
    }),
  }) 

  function toggle () {
    store.dispatch('todos/patch', { 
      _id: id.value, 
      done: !state.done,
    })
  }

  function update (field, value) {
    store.dispatch('todos/patch', { 
      _id: id.value, 
      [field]: value,
    })
  }

  function remove () {
    store.dispatch('todos/remove', id.value)
  }

  return {
    ...toRefs(state),
    toggle,
    update,
    remove,
  }
}