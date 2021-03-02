<template>
  <div>
    <sui-menu pointing :widths="2">
      <router-link
        :to="{ path: `${item.path}` }"
        is="sui-menu-item"
        v-for="item in items"
        :active="isActive(item.label)"
        :key="item.label"
        @click.native="select(item.label)"
        >{{ item.label }}</router-link
      >
    </sui-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      active:
        this.$route.path === "/"
          ? "Currency Convert"
          : "Currency Exchange Rates",
      items: [
        { label: "Currency Convert", path: "/" },
        { label: "Currency Exchange Rates", path: "/current-exchange-rates" },
      ],
    };
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
