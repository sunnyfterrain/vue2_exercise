<template>
  <div>
    <div v-for="(job, idx) in jobs" :key="idx">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index';

export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobsList()
      .then((res) => (this.jobs = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
