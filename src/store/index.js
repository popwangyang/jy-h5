import Vue from 'vue'
import Vuex from 'vuex'

import app from './module/app'
import user from './module/user'
import ktv from './module/ktv'
import search from './module/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    app,
    ktv,
		search
  }
})
