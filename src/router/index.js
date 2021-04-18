import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import ViewSaved from '../views/ViewSaved.vue'
import NewJokes from '../views/NewJokes.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit,
  },
  {
    path: '/saved-jokes',
    name: 'saved-jokes',
    component: ViewSaved,
  },
  {
    path: '/new-jokes',
    name: 'new-jokes',
    component: NewJokes,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
