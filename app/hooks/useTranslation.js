import fr from "../locales/fr";

export function useTranslation() {
  return {
    t: function(str) {
      return fr[str] ?? str
    }
  }
}
