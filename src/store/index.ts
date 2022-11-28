import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";

const store: StoreOptions<RootState> = {
  state: {
    stateTitle: "Vue.js and TypeScript: A Complete Tutorial With Examples",
  },
  modules: {

  }
}

export default new Vuex.Store<RootState>(store)

// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
