import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import CourseList from '../components/CourseList.vue'
import CourseDetails from '../views/CourseDetails.vue'
import ResourceLibrary from '../components/ResourceLibrary.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/courses',
    name: 'Courses',
    component: CourseList
  },
  {
    path: '/course/:id',
    name: 'CourseDetails',
    component: CourseDetails
  },
  {
    path: '/resources',
    name: 'Resources',
    component: ResourceLibrary
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/',
    redirect: '/main'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
