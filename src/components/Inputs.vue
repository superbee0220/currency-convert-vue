<template>
  <sui-form>
    <sui-form-field>
      <sui-label basic pointing="below">
        Currency
      </sui-label>
      <sui-dropdown
        fluid
        selection
        search
        :options="currencyOptions()"
        :value="info.currency"
        @input="onChangeCurrency"
      />
    </sui-form-field>
    <sui-form-field>
      <sui-label basic pointing="below">
        Amount
      </sui-label>
      <Input fluid type="number" :value="info.amount" @input="onChangeAmount" />
    </sui-form-field>
  </sui-form>
</template>

<script>
import { mapGetters } from "vuex";
import _ from "lodash";
export default {
  name: "inputs",
  props: ["info"],
  methods: {
    currencyOptions: function() {
      return _.values(
        _.mapValues(this.currencies, (currency, index) => ({
          key: index,
          text: `${currency} (${index})`,
          value: index,
        }))
      );
    },
    onChangeAmount: function(event) {
      this.$emit("amountChanged", event.target.value);
    },
    onChangeCurrency: function(currency) {
      this.$emit("currencyChanged", currency);
    },
  },
  computed: {
    ...mapGetters({
      currencies: "getCurrencies",
    }),
  },
  watch: {
    info: function(val) {
      console.log(val);
    },
  },
};
</script>
