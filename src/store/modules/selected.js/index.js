import {
  SET_FIRST_CURRENCY,
  SET_SECOND_CURRENCY,
  SET_FIRST_AMOUNT,
  SET_SECOND_AMOUNT,
} from "../../mutation-types";

export default {
  state: {
    first: {
      currency: "USD",
      amount: 1,
    },
    second: {
      currency: "EUR",
      amount: "",
    },
  },
  getters: {
    getSelectedCurrency: (state) => {
      return state;
    },
  },
  mutations: {
    [SET_FIRST_CURRENCY]: (state, currency) => {
      state.first.currency = currency;
    },
    [SET_SECOND_CURRENCY]: (state, currency) => {
      state.second.currency = currency;
    },
    [SET_FIRST_AMOUNT]: (state, amount) => {
      state.first.amount = amount;
    },
    [SET_SECOND_AMOUNT]: (state, amount) => {
      state.second.amount = amount;
    },
  },
  actions: {
    setFirstCurrency: ({ commit }, currency) => {
      commit(SET_FIRST_CURRENCY, currency);
    },
    setSecondCurrency: ({ commit }, currency) => {
      commit(SET_SECOND_CURRENCY, currency);
    },
    setFirstAmount: ({ commit }, amount) => {
      commit(SET_FIRST_AMOUNT, amount);
    },
    setSecondAmount: ({ commit }, amount) => {
      commit(SET_SECOND_AMOUNT, amount);
    },
  },
};
