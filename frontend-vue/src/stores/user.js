import Vue from 'vue'

const state = {
  online: false,
  data: {}
}

const mutations = {
  getUserOnline (state, param) {
    state.online = param
  },

  getUserData (state, object) {
    state.data = object
  },

  loginSuccess (state, data) {
    state.online = true
    state.data = data
  },

  clearStore (state) {
    state.online = false
    state.data = {}
  }
}

const actions = {
  setUserOnline: ({ commit }) => {
    commit('getUserOnline', Vue.auth.isAuthenticated())
  },

  setUserData: ({ commit }) => {
    Vue.http.get('users/data').then(response => {
      commit('getUserData', response.body)
    })
  },

  loginSuccess: ({ commit }, data) => {
    commit('loginSuccess', data)
  },

  clearStore: ({ commit }) => {
    commit('clearStore')
  }
}

export default {
  state, mutations, actions
}
