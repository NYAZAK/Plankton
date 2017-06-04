<template>
  <div>
    <search />
    {{selectedCurrency}}
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Search from '../components/Search.vue';

export default {
  components: {
    Search,
  },
  computed: {
    ...mapState({
      selectedCurrency: state => state.selectedCurrency,
    }),
  },
};
</script>
