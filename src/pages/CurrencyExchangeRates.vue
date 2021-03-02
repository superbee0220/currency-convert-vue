<template>
  <div>
    <h3 :style="{ marginTop: '2em' }">
      {{
        `${currencies[selectedCurrency.first.currency]} (${
          selectedCurrency.first.currency
        }) Exchange Rates`
      }}
    </h3>
    <sui-table basic="very">
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell>Currency</sui-table-header-cell>
          <sui-table-header-cell>Currency Name</sui-table-header-cell>
          <sui-table-header-cell
            >Exchange Rate = 1
            {{ selectedCurrency.first.currency }}</sui-table-header-cell
          >
        </sui-table-row>
      </sui-table-header>
      <sui-table-body>
        <sui-table-row v-for="(value, key) in currencies" :key="key">
          <sui-table-cell>{{ key }}</sui-table-cell>
          <sui-table-cell>{{ value }}</sui-table-cell>
          <sui-table-cell negative>{{
            getQuotes[`${selectedCurrency.first.currency}${key}`].toFixed(3)
          }}</sui-table-cell>
        </sui-table-row>
      </sui-table-body>
    </sui-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "currencyExchangeRates",
  computed: {
    ...mapGetters({
      currencies: "getCurrencies",
      quotes: "getQutoes",
      selectedCurrency: "getSelectedCurrency",
    }),
    getQuotes: function() {
      const firstCurrency = this.selectedCurrency.first.currency;
      if (firstCurrency === "USD") {
        return this.quotes;
      }
      let newQuotes = {};
      for (var key in this.currencies) {
        newQuotes[firstCurrency + key] =
          this.quotes[`USD${firstCurrency}`] / this.quotes[`USD${key}`];
      }

      return newQuotes;
    },
  },
};
</script>

<style lang="scss" scoped></style>
