import { SET_CURRENCIES, SET_QUOTES } from "../../mutation-types";
import currencyApi from "../../../apis/currencyApi";

export default {
  state: {
    currencies: {},
    quotes: {},
  },
  getters: {
    getCurrencies: (state) => {
      return state.currencies;
    },
    getQutoes: (state) => {
      return state.quotes;
    },
  },
  mutations: {
    [SET_CURRENCIES]: (state, currencies) => {
      state.currencies = currencies;
    },
    [SET_QUOTES]: (state, quotes) => {
      state.quotes = quotes;
    },
  },
  actions: {
    fetchCurrencies: async ({ commit }) => {
      const res = await currencyApi.get("/list");
      commit(SET_CURRENCIES, res.status === 200 ? res.data.currencies : {});
    },
    fetchQuotes: async ({ commit }) => {
      const res = await currencyApi.get("/live");
      commit(SET_QUOTES, res.status === 200 ? res.data.quotes : {});
    },
  },
};
