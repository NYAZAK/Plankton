<template>
  <div>
    <search />
    <div class="w-50" v-if="selectedCurrency">
      <Reddit />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Search from '../components/Search.vue';
import Reddit from '../components/Reddit.vue';

export default {
  components: {
    Search,
    Reddit,
  },
  computed: {
    ...mapState({
      selectedCurrency: state => state.selectedCurrency,
    }),
  },
};
</script>
