import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import { IState } from './type';

export const state: IState = {
  list: [1]
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
