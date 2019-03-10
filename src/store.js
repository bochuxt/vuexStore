import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins:[],
    title:"my custorm title222",
    links:[
        'google.com',
        'youtube.com'
    ]

  },

  getters:{
    countLinks: state =>{ return  state.links.length}
  },

  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK:(state,link) =>{
      state.links.splice(link, 1)

    },
    REMOVE_ALL:(state)=>{
      state.links = []
    },
    SET_COINS(state, coins){
      state.coins = coins
    }

  },
  actions: {

    loadCoins({commit}){
      axios.get("http://127.0.0.1:4000/results")
          .then(r=>r.data)
          .then(coins => {
            console.log(coins)
            commit('SET_COINS',coins)
          })
    },

    removeLink:(context, link) => {
      context.commit("REMOVE_LINK", link)
    },
    removeAll:({commit})=>{
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          commit("REMOVE_ALL")
            resolve()
        },1500)
      })

    }
  }


})
