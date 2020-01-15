import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
        passwork:123
    },
    mutations:{
        setPasswork(state,data){
            state.passwork = data
        }
    }
})

export default store;