import { ActionTree } from "vuex";
import { RootState } from ".";

// actions
const actions: ActionTree<RootState, RootState> = {
  incrementAsync({ commit, state }, payload = 1000) {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        commit("increment", payload);
        resolve(state.count);
      }, 1000);
    });
  },
  decrementAsync({ commit, state }, payload = 1000) {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        commit("decrement", payload);
        resolve(state.count);
      }, 1000);
    });
  },
};

export default actions;
