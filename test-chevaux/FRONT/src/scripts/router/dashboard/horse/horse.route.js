export default {
  path: 'horse',
  name: 'horse',
  components: {
    default: () => import('@pages/horse'),
  },
  
  // children: [{
  //   path: '',
  //   redirect: {
  //     name: 'todos-list',
  //   },
  // }, {
  //   path: 'list',
  //   name: 'todos-list',
  //   components: {
  //     default: () => import('src/scripts/router/dashboard/horse/@pages/todos/list/list-todos'),
  //   },
  // }]
}