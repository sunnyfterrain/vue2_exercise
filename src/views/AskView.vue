<template>
  <div>
    <p v-for="(item, idx) in fetchedAsk" :key="idx">
      <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
