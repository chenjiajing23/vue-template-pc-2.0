import { MutationTree } from 'vuex';
import { IState } from './type';

const mutations: MutationTree<IState> = {
  addList(state, payload = 1) {
    state.list.push(state.list.length + payload);
  },
  removeList(state) {
    state.list.pop();
  }
};

export default mutations;
