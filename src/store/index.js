import Vue from 'vue';
import Vuex from 'vuex';

import mutations from '@/store/mutations';
import actions from '@/store/actions';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations: mutations,
  actions: actions,
});
