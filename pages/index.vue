<template>
  <span>{{currencies}}</span>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    currencies: state => state.currencies,
  }),
};
</script>
