import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes";
import axios, { Axios } from 'axios';

Vue.use(VueRouter);
//Global Axios Tanımlama

axios.defaults.baseURL = "https://vuejs-axios-blog-712db-default-rtdb.firebaseio.com"
axios.defaults.headers.common['Authorization'] = 'hello World'
axios.defaults.headers.post['Content-Type'] = 'application/json'



const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
