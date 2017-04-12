import Vue from 'vue'
import Vuex from 'vuex'

import state from './moduleApp/state'
import mutations from './moduleApp/mutations'
import actions from './moduleApp/actions'
import getters from './moduleApp/getters'

Vue.use(Vuex)

const moduleApp = {
    state,
    mutations,
    actions,
    getters
}

export default new Vuex.Store({modules: {
        moduleApp
    }});
