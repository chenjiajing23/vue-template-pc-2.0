import getters from './getters';
import mutations from './mutations';
import actions from './actions';
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
