import { GetterTree } from 'vuex';
import { IState } from './type';
import { RootState } from '@/store';

const getters: GetterTree<IState, RootState> = {
  aboutList(state) {
    return state.list.map((_, index) => `<p>这是第<b>${index}</b>个元素</p>`);
  }
};

export default getters;
