import { createI18n } from "vue-i18n";
import laMessage from "../../common/localizations/la.json";
import enMessage from "../../common/localizations/en.json";
import thMessage from "../../common/localizations/th.json";

const locale = localStorage.getItem("locale") || "la";

const i18n = createI18n({
  legacy: true,
  locale: locale,
  fallbackLocale: "en",
  messages: {
    en: enMessage,
    la: laMessage,
    th: thMessage,
  },
});

export default i18n;
