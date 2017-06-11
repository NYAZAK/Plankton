<template>
  <div class="">
    <h2>Reddit {{selectedCurrency.name}}</h2>
    <ul class="list w-100">
      <li class="flex pa3 ph0-l bb b--black-10 relative dim" v-for="thread in threads">
        <div class="">
          <a class="link db blue mb2 f" :href="thread.data.url" target="_blank">{{thread.data.title}}</a>
          <span class="f6">{{thread.data.num_comments}} comments</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Reddit',
  computed: {
    ...mapState({
      threads: state => state.redditThreads,
      selectedCurrency: state => state.selectedCurrency,
    }),
  },
};
</script>

<style scoped>
a::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
