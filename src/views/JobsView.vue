<template>
  <div>
    <p v-for="(item, idx) in this.$store.state.jobs" :key="idx">
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
};
</script>

<style></style>
