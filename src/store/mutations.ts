import { MutationTree } from 'vuex';
import { RootState } from './index';

//mutations
const mutations: MutationTree<RootState> = {
  increment(state, step = 1) {
    state.count += step;
  },
  decrement(state, step = 1) {
    state.count -= step;
  }
};

export default mutations;
