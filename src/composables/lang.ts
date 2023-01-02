import { useI18n } from "vue-i18n";
import { fr } from "../lang/index.fr";
import { en } from "../lang/index.en";

export function useCoreLang() {
  return useI18n({
    useScope: "local",
    messages: {
      fr,
      en,
    },
  });
}
