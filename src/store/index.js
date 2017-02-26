import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    timeEntries: [],
    totalTime: 0
  },
  mutations: {
    timeUpdate(state, timeEntry){
      state.timeEntries.push(timeEntry)
      state.totalTime += timeEntry.totalTime
    }
  }
})

export default store
