<template>
  <div>
    <h3 :style="{ marginTop: '2em' }">
      Currency Converter
    </h3>
    <div>Please enter the amount you want to convert in any field.</div>
    <sui-segment placeholder>
      <sui-grid :columns="2" relaxed="very" stackable>
        <sui-grid-column>
          <Inputs
            :info="selectedInfo.first"
            @currencyChanged="onFirstCurrencyChanged"
            @amountChanged="onFirstAmountChanged"
          />
        </sui-grid-column>
        <sui-grid-column>
          <Inputs
            :info="selectedInfo.second"
            @currencyChanged="onSecondCurrencyChanged"
            @amountChanged="onSecondAmountChanged"
          />
        </sui-grid-column>
      </sui-grid>
      <sui-divider vertical>&lt;=&gt;</sui-divider>
    </sui-segment>
  </div>
</template>

<script>
import Inputs from "../components/Inputs";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "currencyConvert",
  components: { Inputs },
  methods: {
    ...mapActions([
      "setFirstCurrency",
      "setSecondCurrency",
      "setFirstAmount",
      "setSecondAmount",
    ]),
    onFirstCurrencyChanged: function(val) {
      this.setFirstCurrency(val);
      const { first } = this.selectedInfo;
      this.setSecondAmount((first.amount * this.getRate()).toFixed(4));
    },
    onSecondCurrencyChanged: function(val) {
      this.setSecondCurrency(val);
      const { first } = this.selectedInfo;
      this.setSecondAmount((first.amount * this.getRate()).toFixed(4));
    },
    onFirstAmountChanged: function(amount) {
      this.setFirstAmount(amount);
      this.setSecondAmount((amount * this.getRate()).toFixed(4));
    },
    onSecondAmountChanged: function(amount) {
      this.setSecondAmount(amount);
      this.setFirstAmount((amount / this.getRate()).toFixed(4));
    },
    getRate: function() {
      const { first, second } = this.selectedInfo;
      const firstCurrency = first.currency;
      const secondCurrency = second.currency;
      let rate = 1;
      if (firstCurrency === "USD") {
        rate = this.quotes[`USD${secondCurrency}`];
      } else if (firstCurrency !== secondCurrency) {
        rate =
          this.quotes[`USD${secondCurrency}`] /
          this.quotes[`USD${firstCurrency}`];
      }

      return rate;
    },
  },
  computed: {
    ...mapGetters({
      selectedInfo: "getSelectedCurrency",
      quotes: "getQutoes",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
