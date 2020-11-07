import Vue from 'vue';
import Vuex, { createLogger } from 'vuex';

// root
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import home from './home';
import about from './about';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export interface RootState {
  count: number;
}

// state
const state: RootState = {
  count: 0
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    home,
    about
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

export default store;
