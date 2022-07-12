import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo } from '@/api/index';

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
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then((res) => commit('SET_USER', res.data))
      .catch((err) => console.log(err));
  },
};
