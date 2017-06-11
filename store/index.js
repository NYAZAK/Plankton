import Vuex from 'vuex';

/* Aim to be removed when Plankton API will be available */
import currencies from './mocks/currencies.js';
import getRedditthreads from './mocks/reddit.js';

const createStore = () => {
  return new Vuex.Store({
    state: {
      currencies: currencies,
      selectedCurrency: null,
      redditThreads: null,
      twitterThreads: null,
    },
    mutations: {
      setSelectedCurrency(state, currency) {
        state.selectedCurrency = currency;
      },
      setRedditThread(state, threads) {
        state.redditThreads = threads;
      },
    },
    actions: {
      selectCurrency({ commit }, currency) {
        commit('setSelectedCurrency', currency);
        getRedditthreads(currency.id).then((res) => {
          commit('setRedditThread', res);
        });
      },
    },
    getters: {},
  });
};

export default createStore;
