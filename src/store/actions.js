import { fetchNewsList, fetchJobsList, fetchAskList } from '@/api/index';

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => commit('SET_NEWS', data))
      .catch((err) => console.log(err));
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then((res) => context.commit('SET_JOBS', res.data))
      .catch((err) => console.log(err));
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then((res) => context.commit('SET_ASK', res.data))
      .catch((err) => console.log(err));
  },
};
