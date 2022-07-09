<template>
  <div>
    <div v-for="(item, idx) in fetchedAsk" :key="idx">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedAsk']),
    // ...mapGetters({
    //   askItems: 'fetchedAsk',
    // }),
  },
  /* 방법1 */
  // computed: {
  //   ...mapState({ ask: (state) => state.ask }),
  // },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style></style>
