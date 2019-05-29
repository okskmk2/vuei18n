import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './i18n'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale:i18n.locale
  },
  mutations: {
    setLocale(state, value){
      state.locale = value
      document.querySelector('html').setAttribute('lang', value)
    }
  },
  actions: {

  }
})
