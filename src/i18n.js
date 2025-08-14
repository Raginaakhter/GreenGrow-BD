import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          home: "Home",
          shop: "Shop",
          contact: "Contact",
          search: "Search products...",
          greeting: "Hello, Welcome to MyShop!",
          hero_desc: "Planting a tree means planting life for the future.",
          hero_btn: "Shop Now",
          footer_text: "© 2025 MyShop. All rights reserved.",
         Login: "Login",
         marquee_text:"Protect nature, plant trees, and keep our planet green and beautiful."
        }
      },
      bn: {
        translation: {
          home: "হোম",
          shop: "দোকান",
          contact: "যোগাযোগ",
          search: "পণ্য খুঁজুন...",
          greeting: "হ্যালো, মাইশপে স্বাগতম!",
          hero_desc: "গাছ রোপণ করা মানে, ভবিষ্যতের জন্য জীবন বপন করা।",
          hero_btn: "এখনই কিনুন",
          footer_text: "© ২০২৫ মাইশপ। সর্বস্বত্ব সংরক্ষিত।",
           Login: "লগইন",
           marquee_text:"প্রকৃতিকে রক্ষা করুন, গাছ লাগান, আর আমাদের পৃথিবীকে সবুজ ও সুন্দর রাখুন"
           
        }
      },
      hi: {
        translation: {
          home: "होम",
          shop: "दुकान",
          contact: "संपर्क",
          search: "उत्पाद खोजें...",
          greeting: "नमस्ते, मायशॉप में आपका स्वागत है!",
          hero_desc: "एक पेड़ लगाना भविष्य के लिए जीवन लगाना है।",
          hero_btn: "अभी खरीदें",
          footer_text: "© 2025 मायशॉप। सर्वाधिकार सुरक्षित।",
          Login: "लॉगिन",
            marquee_text:"प्रकृति की रक्षा करें, पेड़ लगाएं, और हमारे ग्रह को हरा-भरा और सुंदर बनाएं।"
        }
      }
    }
  });

export default i18n;
