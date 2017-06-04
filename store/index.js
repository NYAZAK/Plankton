import Vuex from 'vuex';

/* Aim to be removed when Plankton API will be available */
import currencies from './mocks/currencies.js';

const createStore = () => {
  return new Vuex.Store({
    state: {
      currencies: currencies,
      selectedCurrency: null,
    },
    mutations: {
      setSelectedCurrency(state, currency) {
        state.selectedCurrency = currency;
      }
    },
    actions: {},
    getters: {},
  });
};

export default createStore;
