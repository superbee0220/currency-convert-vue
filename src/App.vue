<template>
  <div>
    <Header></Header>
    <sui-container>
      <router-view></router-view>
    </sui-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header,
  },
  methods: {
    ...mapActions(["fetchCurrencies", "fetchQuotes"]),
  },
  mounted: function() {
    this.fetchCurrencies();
    this.fetchQuotes();
  },
};
</script>

<style lang="scss" scoped></style>
