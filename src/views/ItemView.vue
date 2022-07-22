<template>
  <div>
    <section>
      <div class="user-container">user</div>
      <div>
        <router-link :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <div>
          {{ fetchedItem.time_ago }}
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
}
</style>
