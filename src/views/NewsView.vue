<template>
  <div>
    <div v-for="(user, idx) in this.$store.state.news" :key="idx">{{ user.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style></style>
