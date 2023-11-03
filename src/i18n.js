import i18n from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        "Strona główna":"Home",
        "Proces": "Process",
        "Doświadczenie": "Experience",
        "Zaufali nam": "They trust us",
        "Kontakt": "Contact",
        "Aktualności": "News",
        "slide1text1": "Slide title",
        "Tytuł slajdu": "Slide title",
        "slide1text2": "General description of the slide, <1 /> expansion of the main title",
        "Ogólny opis slajdu, rozwinięcie głównego tytułu": "General description of the slide, <1 /> expansion of the main title",
        "slidebutton1text1": "SLIDE <1 /> NUMBER 1",
        "slidebutton2text1": "SLIDE <1 /> NUMBER 2",
        "slidebutton3text1": "SLIDE <1 /> NUMBER 3",
        "slidebutton4text1": "SLIDE <1 /> NUMBER 4",
        "Krótki opis do slajdu numer 1.": "A short description for slide number 1.",
        "Krótki opis do slajdu numer 2.":"A short description <1 /> for slide number 2.",
        "Krótki opis do slajdu numer 3.": "A short description for slide number 3.",
        "który gwarantuje skuteczność": "which guarantees the efficiency",
        "Krok 1":"Step 1",
        "Krok 2":"Step 2",
        "Krok 3":"Step 3",
        "Krok 4":"Step 4",
        "Krok 5":"Step 5",
        "Krok 6":"Step 6",
        "Krok 7":"Step 7",
        "Opis danego kroku określający konkretne działanie.":"A description of a given step specifying a specific action.",
        "MOŻEMY SKUTECZNIE ROZWIAZAĆ TWÓJ PROBLEM.":"WE CAN EFFECTIVELY SOLVE YOUR PROBLEM.",
        "JESTEŚMY JEDYNYM, SŁUSZNYM WYBOREM.":"WE ARE THE ONLY RIGHT CHOICE.",
        "Stanowisko":"Job Position",
        "magazynów": "Warehouses",
        "zadowolonych klientów": "Satisfied clients",
        "zrealizowanych zleceń": "Completed orders",
        "ponad 1 miliard": "over 1 Bilion",
        "wygenerowanego obrotu": "generated sales",
        "Chcesz rozwinąć swój biznes?": "Do you want to expand your business?",
        "Skontaktuj się z nami": "Contact us",
        "Napisz do nas": "Write to us",
        "Imię nazwisko*": "First and last name",
        "Twój e-mail*": "Your e-mail",
        "lub": "or",
        "Twój telefon*": "Your phone",
        "Treść wiadomości": "Message text",
        "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi pytania. Potwierdzam, że zapoznałem się z klauzulą": "I express my consent to the processing of my personal data in order to service the issues. I have read the",
        "wyślij": "Send",
        "Znajdziesz nas na": "You can find us at",
        "Godziny pracy naszego biura": "Office hours",
        "poniedziałek": "Monday",
        "wtorek": "Tuesday",
        "środa": "Wednesday",
        "czwartek": "Thursday",
        "piątek": "Friday",
        "Czytaj więcej":"Read more"
      }
    }
  },
  fallbackLng: "pl",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;

