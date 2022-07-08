<template>
  <div>
    <div v-for="item in ask" :key="item">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index';

export default {
  data() {
    return {
      ask: [],
    };
  },

  // 컴포넌트가 생성되자 마자 생기는 훅
  created() {
    fetchAskList()
      .then((res) => (this.ask = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
