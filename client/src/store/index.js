import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    page: 'login',
    chartData: {}
  },
  mutations: {
    getRevenue(state, payload){
      state.chartData = payload
    }
  },
  actions : {
    login(context, payload){
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          username: payload.username,
          password: payload.password
        }
      }).then(({data}) => {
        localStorage.setItem('access_token', data.access_token)
        router.push('/')
      }).catch(err => {
        Swal.fire({
          title: 'Error!',
          text: err.response.data.message,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
    },
    getRevenue(context){
      axios({
        method: 'GET',
        url:'http://localhost:3000/revenues'
      }).then(({data}) => {
        context.commit('getRevenue', data)
      }).catch(err => {
        Swal.fire({
          title: 'Error!',
          text: err.response.data.message,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
    }
  }
})

export default store