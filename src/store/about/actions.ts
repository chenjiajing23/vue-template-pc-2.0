import { ActionTree } from 'vuex';
import { IState } from './type';
import { RootState } from '@/store';

const actions: ActionTree<IState, RootState> = {
  addListAsync({ commit, state }, payload = 10) {
    return new Promise<number[]>(resolve => {
      setTimeout(() => {
        commit('addList', payload);
        resolve(state.list);
      }, 1000);
    });
  },
  removeListAsync({ commit, state }) {
    return new Promise<number[]>(resolve => {
      setTimeout(() => {
        commit('removeList');
        resolve(state.list);
      }, 1000);
    });
  }
};

export default actions;
