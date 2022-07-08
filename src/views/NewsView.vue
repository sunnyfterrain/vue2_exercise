<template>
  <div>
    <div v-for="(user, idx) in this.$store.state.news" :key="idx">{{ user.title }}</div>
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index';

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // fetchNewsList()
    //   .then((response) => (this.users = response.data))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>

<style></style>
