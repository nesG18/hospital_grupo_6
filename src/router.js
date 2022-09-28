import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue'
import Consultas from './components/Consultas.vue'
import Usuario from './components/Usuario.vue'
import Paciente from './components/Paciente.vue'
import Familiar from './components/Familiar.vue'
import PersonalSalud from './components/PersonalSalud.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/user/logIn',
    name: 'logIn',
    component: LogIn
  },
  {
    path: '/user/Consultas',
    name: 'consultas',
    component: Consultas
  },
  {
    path: '/user/Usuario',
    name: 'usuario',
    component: Usuario
  },
  {
    path: '/user/Paciente',
    name: 'paciente',
    component: Paciente
  },
  {
    path: '/user/Familiar',
    name: 'familiar',
    component: Familiar
  },
  {
    path: '/user/PersonalSalud',
    name: 'personalSalud',
    component: PersonalSalud
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
