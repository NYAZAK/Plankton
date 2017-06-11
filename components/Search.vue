<template>
  <div class="relative mb4">
    <input class="input-reset ba b--black-20 pa2 db w-100" type="text" placeholder="type the name of the currency you want to dig in" v-model="input" />
    <ul class="ph2 bg-near-white absolute w-100">
      <li class="list lh-copy pointer pv2 b dim" v-for="currency in matchingCurrencies" v-on:click.stop="selectCurrency(currency)">
        {{`${currency.name} (${currency.id})`}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Search',
  data: () => ({
    input: '',
  }),
  computed: {
    ...mapState({
      currencies: state => state.currencies,
    }),
    /*
     * Compute list of currencies matching user research.
     */
    matchingCurrencies() {
      if(this.input !== '') {
        return this.currencies.filter((currency) => {
          return currency.id.includes(this.input) || currency.name.includes(this.input);
        });
      }
      return null;
    },
  },
  methods: {
    /*
     * Commit selected currency to the global state.
     */
    selectCurrency(currency) {
      this.input = '';
      this.$store.dispatch('selectCurrency', currency);
    }
  },
};
</script>

<style scoped>
input::placeholder {
  color: silver;
}
</style>
