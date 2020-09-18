import { reactive, computed, toRefs } from 'vue'
import { useStore } from 'vuex'

export default function useTodoList () {
  const store = useStore()

  const find = store.getters['todos/find']

  const state = reactive({
    todos: computed(() => find()),
    pending: computed(() => 
      state.todos.filter(todo => !todo.done)
    ),
    finished: computed(() => 
      state.todos.filter(todo => todo.done)
    ),
  }) 

  function create (text) {
    store.dispatch('todos/create', text)
  }

  return {
    ...toRefs(state),
    create,
  }
}