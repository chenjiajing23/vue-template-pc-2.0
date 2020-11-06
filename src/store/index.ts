import Vue from "vue";
import Vuex, { GetterTree, MutationTree, ActionTree } from "vuex";

import home from "./home";
import about from "./about";

Vue.use(Vuex);
const debug = process.env.Node_ENV !== "production";

export interface RootState {
  count: number;
}

// state
const state: RootState = {
  count: 0,
};

// getters
const getters: GetterTree<RootState, RootState> = {
  countGetters(state): string {
    return `当前count的值为：${state.count}`;
  },
};

//mutations
const mutations: MutationTree<RootState> = {
  increment(state, step = 1) {
    state.count += step;
  },
  decrement(state, step = 1) {
    state.count -= step;
  },
};

// actions
const actions: ActionTree<RootState, RootState> = {};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    home,
    about,
  },
  strict: debug,
});

export default store;
