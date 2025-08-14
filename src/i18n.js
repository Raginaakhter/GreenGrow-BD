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
         marquee_text:"Protect nature, plant trees, and keep our planet green and beautiful.",
          //  deploy_faster: "Deploy faster",
    everything_you_need: "GreenGrow BD is your one-stop platform for plants, trees, and gardening solutions. Explore, shop, and bring greenery to your home or farm.",
    // home_description: "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.",
    push_to_deploy: "Push to deploy",
    push_to_deploy_desc: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    ssl_certificates: "SSL certificates",
    ssl_certificates_desc: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    simple_queues: "Simple queues",
    simple_queues_desc: "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    advanced_security: "Advanced security",
    advanced_security_desc: "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
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
           marquee_text:"প্রকৃতিকে রক্ষা করুন, গাছ লাগান, আর আমাদের পৃথিবীকে সবুজ ও সুন্দর রাখুন",

  contact_sales: "বিক্রয় যোগাযোগ",
  contact_description: "এখানে আপনার বার্তা লিখুন এবং আমরা শীঘ্রই উত্তর দেব।",
  first_name: "প্রথম নাম",
  first_name_placeholder: "আপনার প্রথম নাম লিখুন",
  last_name: "শেষ নাম",
  last_name_placeholder: "আপনার শেষ নাম লিখুন",
  company: "কোম্পানি",
  company_placeholder: "আপনার কোম্পানির নাম লিখুন",
  email: "ইমেইল",
  email_placeholder: "আপনার ইমেইল লিখুন",
  phone_number: "ফোন নম্বর",
  phone_number_placeholder: "123-456-7890",
  message: "বার্তা",
  message_placeholder: "আপনার বার্তা এখানে লিখুন",
  lets_talk: "আসুন কথা বলি",
  //  deploy_faster: "দ্রুত ডিপ্লয় করুন",
    everything_you_need: "GreenGrow BD হলো গাছপালা, বৃক্ষ ও বাগান সম্পর্কিত সব সমাধানের এক স্টপ প্ল্যাটফর্ম। আবিষ্কার করুন, কিনুন, এবং আপনার বাড়ি বা খামারে সবুজতা আনুন।",
    // home_description: "কোয়িস টেলুস এগেট অ্যাডিপিসিং কনভ্যালিস সিট সিট এগেট আলিকুয়েট কুইস। সাসপেন্ডিস এগেট এগেস্টাস আ এলিমেন্টাম পুলভিনার এট ফেউগিয়াট ব্ল্যান্ডিট এট। ইন মি ভিভেররা এলিট নুনক।",
    push_to_deploy: "ডিপ্লয়ের জন্য পুশ করুন",
    push_to_deploy_desc: "মোরবি ভিভেররা দুই মি আর্কু সেড। টেলুস সেম্পার অ্যাডিপিসিং সাসপেন্ডিস সেম্পার মোরবি। ওডিও উর্না মাসা নুনক মাসা।",
    ssl_certificates: "এসএসএল সার্টিফিকেট",
    ssl_certificates_desc: "সিট কুইস অ্যামেট রুট্রাম টেলুস উলামকোর্পার আলট্রিসিস লিবারো ডোলর এগেট। সেম সোদালেস গ্রাভিদা কোয়াম তুরপিস এনিম ল্যাকাস অ্যামেট।",
    simple_queues: "সহজ কিউ",
    simple_queues_desc: "কুইস্কে এস্ট ভেল ভুলপুটাতে কারসাস। রিসাস প্রইন ডিয়াম নুনক কমোডো। লোবর্টিস আউক্টর কঙ্গু কমোডো ডিয়াম নেক।",
    advanced_security: "উন্নত নিরাপত্তা",
    advanced_security_desc: "আর্কু এগেস্টাস ডোলর ভেল ইয়াকুলিস ইন ইনপসাম মাউরিস। টিনসিডুন্ট ম্যাটিস আলিকুয়েট হ্যাক কুইস। আইড হ্যাক ম্যাসেনাস অ্যাক ডোনেক ফারেট্রা এগেট।"


           
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
            marquee_text:"प्रकृति की रक्षा करें, पेड़ लगाएं, और हमारे ग्रह को हरा-भरा और सुंदर बनाएं।",
             contact_sales: "सेल्स से संपर्क करें",
  contact_description: "यहाँ अपना संदेश लिखें और हम जल्द ही उत्तर देंगे।",
  first_name: "पहला नाम",
  first_name_placeholder: "अपना पहला नाम दर्ज करें",
  last_name: "अंतिम नाम",
  last_name_placeholder: "अपना अंतिम नाम दर्ज करें",
  company: "कंपनी",
  company_placeholder: "अपनी कंपनी का नाम दर्ज करें",
  email: "ईमेल",
  email_placeholder: "अपना ईमेल दर्ज करें",
  phone_number: "फोन नंबर",
  phone_number_placeholder: "123-456-7890",
  message: "संदेश",
  message_placeholder: "अपना संदेश यहाँ लिखें",
  lets_talk: "आइए बात करें",
  //  deploy_faster: "तेज़ तैनात करें",
    everything_you_need: "GreenGrow BD पौधों, पेड़ों और बागवानी समाधानों के लिए आपका वन-स्टॉप प्लेटफॉर्म है। खोजें, खरीदें और अपने घर या खेत में हरियाली लाएँ।",
    // home_description: "क्विस टेलस एगेट एडिपिसिंग कॉन्वैलिस सिट सिट एगेट अलिक्वेट क्विस। सस्पेंडिस एगेट एगेस्टास ए एलेमेंटम पुल्विनार एट फेयूगियाट ब्लैंडिट एट। इन मी विवेरा एलिट नंक।",
    push_to_deploy: "तैनाती के लिए पुश करें",
    push_to_deploy_desc: "मॉर्बी विवेरा डुई मी अर्कु सेड। टेलस सेम्पर एडिपिसिंग सस्पेंडिस सेम्पर मॉर्बी। ओडियो उरना मासा नंक मासा।",
    ssl_certificates: "एसएसएल प्रमाणपत्र",
    ssl_certificates_desc: "सिट क्विस एमेर्ट रुट्रम टेलस उलामकोर्पर अल्ट्रिसिस लिबेरो डोलर एगेट। सेम सोडालेस ग्राविडा क्वाम टुरपिस एनिम लैकस एमेर्ट।",
    simple_queues: "सरल कतार",
    simple_queues_desc: "क्विस्के एस्ट वेल वुल्पुटेट कर्सस। रिसस प्रॉइन डायम नंक कॉमोडो। लोबोर्टिस ऑक्टर कॉंगू कॉमोडो डायम नेक।",
    advanced_security: "उन्नत सुरक्षा",
    advanced_security_desc: "आर्कु एगेस्टास डोलर वेल याकुलिस इन इप्सम मौरिस। टिनसिडंट मैटिस अलिक्वेट हैक क्विस। आईडी हैक मेस्सेनास अक डोनेक फारेट्रा एगेट।"
        }
      }
    }
  });

export default i18n;
