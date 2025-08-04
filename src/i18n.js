import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      Filters: "Filtros",
      Apply: "Aplicar",
      Clear: "Limpiar",
      Status: "Estado",
      Disease: "Enfermedad",
      Species: "Especie",
      Gender: "Género",
      Origin: "Origen",
      Location: "Ubicación",
      "Filter characters": "Filtrar personajes",
      "No characters found": "No se encontraron personajes con los filtros actuales.",
      Alive: "Vivo",
      Dead: "Muerto",
      unknown: "Desconocido",
      Male: "Masculino",
      Female: "Femenino",
      Genderless: "Sin género",
      Human: "Humano",
      Alien: "Alienígena",
      Robot: "Robot",
      Animal: "Animal",
      "Mythological Creature": "Criatura mitológica",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: { escapeValue: false },
    returnNull: false,
    returnEmptyString: false,
  });

export default i18n;
