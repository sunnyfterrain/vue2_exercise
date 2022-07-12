<template>
  <div>
    <p v-for="(item, idx) in jobInfo" :key="idx">
      <a v-bind:href="item.url"> {{ item.title }}</a>
      <small>{{ item.time_ago }}, {{ item.domain }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
  computed: {
    jobInfo() {
      return this.$store.state.jobs;
    },
  },
};
</script>

<style></style>
