import CurrencyConvert from "./pages/CurrencyConvert";
import CurrencyExchangeRates from "./pages/CurrencyExchangeRates";

export default [
  { name: "currencyConvert", path: "/", component: CurrencyConvert },
  {
    name: "currencyExchangeRates",
    path: "/current-exchange-rates",
    component: CurrencyExchangeRates,
  },
];
