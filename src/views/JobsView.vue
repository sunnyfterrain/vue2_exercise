<template>
  <div>
    <div v-for="(job, idx) in this.$store.state.jobs" :key="idx">{{ job.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style></style>
