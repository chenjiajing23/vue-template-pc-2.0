import { GetterTree } from 'vuex';
import { RootState } from '.';

// getters
const getters: GetterTree<RootState, RootState> = {
  countGetters(state): string {
    return `当前count的值为：${state.count}`;
  }
};

export default getters;
