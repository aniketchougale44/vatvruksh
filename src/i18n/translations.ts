export type Language = 'en' | 'hi' | 'mr' | 'kn';

export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिंदी',
  mr: 'मराठी',
  kn: 'ಕನ್ನಡ',
};

type Dict = Record<Language, string>;

export const translations: Record<string, Dict> = {
  // Navbar
  'nav.home': { en: 'Home', hi: 'होम', mr: 'मुख्यपृष्ठ', kn: 'ಮುಖಪುಟ' },
  'nav.fleet': { en: 'Cars', hi: 'गाड़ियाँ', mr: 'गाड्या', kn: 'ಕಾರುಗಳು' },
  'nav.contact': { en: 'Contact', hi: 'संपर्क करें', mr: 'संपर्क', kn: 'ಸಂಪರ್ಕಿಸಿ' },
  'nav.callNow': { en: 'Call Now', hi: 'अभी कॉल करें', mr: 'आता कॉल करा', kn: 'ಈಗ ಕರೆ ಮಾಡಿ' },

  // Hero
  'hero.kicker': {
    en: "Kolhapur's Trusted Driver Service",
    hi: 'कोल्हापुर की भरोसेमंद ड्राइवर सेवा',
    mr: 'कोल्हापूरची विश्वासार्ह ड्रायव्हर सेवा',
    kn: 'ಕೊಲ್ಹಾಪುರದ ವಿಶ್ವಾಸಾರ್ಹ ಚಾಲಕ ಸೇವೆ',
  },
  'hero.title': {
    en: 'Car Rental in Kolhapur',
    hi: 'कोल्हापुर में कार किराए पर',
    mr: 'कोल्हापूरमध्ये कार भाड्याने',
    kn: 'ಕೊಲ್ಹಾಪುರದಲ್ಲಿ ಕಾರ್ ಬಾಡಿಗೆ',
  },
  'hero.subtitle': {
    en: 'Safe, Reliable & Affordable Travel with Skilled Drivers',
    hi: 'माहिर ड्राइवरों के साथ सुरक्षित, भरोसेमंद और सस्ती यात्रा',
    mr: 'कुशल ड्रायव्हरसह सुरक्षित, विश्वासार्ह आणि स्वस्त प्रवास',
    kn: 'ನುರಿತ ಚಾಲಕರೊಂದಿಗೆ ಸುರಕ್ಷಿತ, ವಿಶ್ವಾಸಾರ್ಹ ಮತ್ತು ಕಡಿಮೆ ಬೆಲೆಯ ಪ್ರಯಾಣ',
  },
  'hero.badge.driver': { en: 'With Driver Only', hi: 'सिर्फ ड्राइवर सहित', mr: 'फक्त ड्रायव्हरसह', kn: 'ಚಾಲಕರೊಂದಿಗೆ ಮಾತ್ರ' },
  'hero.badge.sanitized': { en: 'Clean Cars', hi: 'साफ़ गाड़ियाँ', mr: 'स्वच्छ गाड्या', kn: 'ಸ್ವಚ್ಛ ಕಾರುಗಳು' },
  'hero.badge.support': { en: '24/7 Support', hi: '24/7 सहायता', mr: '24/7 सहाय्य', kn: '24/7 ಬೆಂಬಲ' },
  'hero.bookRide': { en: 'Book Your Ride', hi: 'अपनी राइड बुक करें', mr: 'तुमची राईड बुक करा', kn: 'ನಿಮ್ಮ ರೈಡ್ ಬುಕ್ ಮಾಡಿ' },
  'hero.whatsapp': { en: 'Ask on WhatsApp', hi: 'व्हाट्सएप पर पूछें', mr: 'व्हॉट्सअॅपवर विचारा', kn: 'ವಾಟ್ಸ್‌ಆ್ಯಪ್‌ನಲ್ಲಿ ಕೇಳಿ' },

  // Services
  'services.heading': { en: 'Our Services', hi: 'हमारी सेवाएं', mr: 'आमच्या सेवा', kn: 'ನಮ್ಮ ಸೇವೆಗಳು' },
  'services.sightseeing.title': { en: 'Local Sightseeing', hi: 'स्थानीय दर्शनीय स्थल', mr: 'स्थानिक पर्यटन स्थळे', kn: 'ಸ್ಥಳೀಯ ಪ್ರವಾಸಿ ಸ್ಥಳಗಳು' },
  'services.sightseeing.desc': {
    en: 'See Mahalaxmi Temple, Panhala Fort, Rankala Lake and more with our local guides.',
    hi: 'हमारे स्थानीय गाइड के साथ महालक्ष्मी मंदिर, पन्हाला किला, रंकाला झील और अन्य स्थान देखें।',
    mr: 'आमच्या स्थानिक मार्गदर्शकांसोबत महालक्ष्मी मंदिर, पन्हाळा किल्ला, रंकाळा तलाव आणि इतर ठिकाणे पहा.',
    kn: 'ನಮ್ಮ ಸ್ಥಳೀಯ ಮಾರ್ಗದರ್ಶಕರೊಂದಿಗೆ ಮಹಾಲಕ್ಷ್ಮಿ ದೇವಸ್ಥಾನ, ಪನ್ಹಾಳಾ ಕೋಟೆ, ರಂಕಾಳಾ ಸರೋವರ ಮತ್ತು ಇನ್ನಷ್ಟು ಸ್ಥಳಗಳನ್ನು ನೋಡಿ.',
  },
  'services.outstation.title': { en: 'Outstation Trips', hi: 'आउटस्टेशन यात्राएं', mr: 'आउटस्टेशन सहली', kn: 'ಔಟ್‌ಸ್ಟೇಷನ್ ಪ್ರವಾಸಗಳು' },
  'services.outstation.desc': {
    en: 'Comfortable long trips to Pune, Mumbai, Goa, or Konkan with skilled drivers.',
    hi: 'माहिर ड्राइवरों के साथ पुणे, मुंबई, गोवा या कोंकण की आरामदायक लंबी यात्रा।',
    mr: 'कुशल ड्रायव्हरसह पुणे, मुंबई, गोवा किंवा कोकणासाठी आरामदायी लांब प्रवास.',
    kn: 'ನುರಿತ ಚಾಲಕರೊಂದಿಗೆ ಪುಣೆ, ಮುಂಬೈ, ಗೋವಾ ಅಥವಾ ಕೊಂಕಣಕ್ಕೆ ಆರಾಮದಾಯಕ ದೂರ ಪ್ರಯಾಣ.',
  },
  'services.pickupdrop.title': { en: 'Pick-up & Drop Services', hi: 'पिक-अप और ड्रॉप सेवाएं', mr: 'पिकअप आणि ड्रॉप सेवा', kn: 'ಪಿಕ್-ಅಪ್ ಮತ್ತು ಡ್ರಾಪ್ ಸೇವೆಗಳು' },
  'services.pickupdrop.desc': {
    en: 'Reliable one-way and round-trip pick-up & drop to Belgaum, Pune, Mumbai, Goa, and more.',
    hi: 'बेलगाम, पुणे, मुंबई, गोवा आदि के लिए भरोसेमंद वन-वे और राउंड-ट्रिप पिक-अप और ड्रॉप सेवा।',
    mr: 'बेळगाव, पुणे, मुंबई, गोवा आणि इतर ठिकाणांसाठी विश्वासार्ह वन-वे आणि राउंड-ट्रिप पिकअप व ड्रॉप सेवा.',
    kn: 'ಬೆಳಗಾವಿ, ಪುಣೆ, ಮುಂಬೈ, ಗೋವಾ ಮತ್ತಿತರ ಕಡೆಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಒನ್-ವೇ ಮತ್ತು ರೌಂಡ್-ಟ್ರಿಪ್ ಪಿಕ್-ಅಪ್ ಮತ್ತು ಡ್ರಾಪ್ ಸೇವೆ.',
  },
  'services.airport.title': { en: 'Airport Pickup & Drop', hi: 'एयरपोर्ट पिक-अप और ड्रॉप', mr: 'विमानतळ पिकअप आणि ड्रॉप', kn: 'ವಿಮಾನ ನಿಲ್ದಾಣ ಪಿಕ್-ಅಪ್ ಮತ್ತು ಡ್ರಾಪ್' },
  'services.airport.desc': {
    en: 'On-time pick-up and drop to nearby airports, with help carrying your bags.',
    hi: 'सामान में मदद के साथ, नज़दीकी हवाई अड्डों के लिए समय पर पिक-अप और ड्रॉप।',
    mr: 'सामान वाहून नेण्यास मदतीसह, जवळच्या विमानतळांसाठी वेळेवर पिकअप व ड्रॉप.',
    kn: 'ಲಗೇಜ್ ಹೊತ್ತೊಯ್ಯಲು ಸಹಾಯದೊಂದಿಗೆ, ಹತ್ತಿರದ ವಿಮಾನ ನಿಲ್ದಾಣಗಳಿಗೆ ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಪಿಕ್-ಅಪ್ ಮತ್ತು ಡ್ರಾಪ್.',
  },
  'services.corporate.title': { en: 'Business Travel', hi: 'व्यावसायिक यात्रा', mr: 'व्यावसायिक प्रवास', kn: 'ವ್ಯಾಪಾರ ಪ್ರಯಾಣ' },
  'services.corporate.desc': {
    en: 'Good cars for business meetings and company events.',
    hi: 'व्यावसायिक बैठकों और कंपनी कार्यक्रमों के लिए अच्छी गाड़ियाँ।',
    mr: 'व्यावसायिक बैठका आणि कंपनीच्या कार्यक्रमांसाठी चांगल्या गाड्या.',
    kn: 'ವ್ಯಾಪಾರ ಸಭೆಗಳು ಮತ್ತು ಕಂಪನಿ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಒಳ್ಳೆಯ ಕಾರುಗಳು.',
  },

  // Cars (Fleet)
  'fleet.heading': { en: 'Our Cars', hi: 'हमारी गाड़ियाँ', mr: 'आमच्या गाड्या', kn: 'ನಮ್ಮ ಕಾರುಗಳು' },
  'fleet.subtitle': {
    en: 'Choose from our many well-kept cars',
    hi: 'हमारी कई अच्छी गाड़ियों में से चुनें',
    mr: 'आमच्या अनेक चांगल्या गाड्यांमधून निवडा',
    kn: 'ನಮ್ಮ ಹಲವಾರು ಚೆನ್ನಾಗಿ ನಿರ್ವಹಿಸಿದ ಕಾರುಗಳಿಂದ ಆಯ್ಕೆಮಾಡಿ',
  },
  'fleet.seats': { en: 'Seats', hi: 'सीटें', mr: 'जागा', kn: 'ಆಸನಗಳು' },
  'fleet.ac': { en: 'AC', hi: 'एसी', mr: 'एसी', kn: 'ಎಸಿ' },
  'fleet.driver': { en: 'Driver', hi: 'ड्राइवर', mr: 'ड्रायव्हर', kn: 'ಚಾಲಕ' },
  'fleet.bookNow': { en: 'Book Now', hi: 'अभी बुक करें', mr: 'आता बुक करा', kn: 'ಈಗ ಬುಕ್ ಮಾಡಿ' },

  // Contact
  'contact.heading': { en: 'Get in Touch', hi: 'संपर्क करें', mr: 'संपर्क साधा', kn: 'ಸಂಪರ್ಕದಲ್ಲಿರಿ' },
  'contact.lead': {
    en: 'Book your ride today or ask for a price.',
    hi: 'आज ही अपनी राइड बुक करें या दाम पूछें।',
    mr: 'आजच तुमची राईड बुक करा किंवा किंमत विचारा.',
    kn: 'ಇಂದೇ ನಿಮ್ಮ ರೈಡ್ ಬುಕ್ ಮಾಡಿ ಅಥವಾ ಬೆಲೆ ಕೇಳಿ.',
  },
  'contact.quickBooking': { en: 'Quick Booking', hi: 'त्वरित बुकिंग', mr: 'त्वरित बुकिंग', kn: 'ತ್ವರಿತ ಬುಕಿಂಗ್' },
  'contact.quickBookingDesc': {
    en: 'Chat with us on WhatsApp to book fast.',
    hi: 'जल्दी बुक करने के लिए हमसे व्हाट्सएप पर चैट करें।',
    mr: 'लवकर बुक करण्यासाठी आमच्याशी व्हॉट्सअॅपवर चॅट करा.',
    kn: 'ವೇಗವಾಗಿ ಬುಕ್ ಮಾಡಲು ವಾಟ್ಸ್‌ಆ್ಯಪ್‌ನಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ.',
  },
  'contact.chatWhatsapp': { en: 'Chat on WhatsApp', hi: 'व्हाट्सएप पर चैट करें', mr: 'व्हॉट्सअॅपवर चॅट करा', kn: 'ವಾಟ್ಸ್‌ಆ್ಯಪ್‌ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ' },
  'contact.form.name': { en: 'Full Name', hi: 'पूरा नाम', mr: 'पूर्ण नाव', kn: 'ಪೂರ್ಣ ಹೆಸರು' },
  'contact.form.namePlaceholder': { en: 'Enter your name', hi: 'अपना नाम दर्ज करें', mr: 'तुमचे नाव टाका', kn: 'ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ' },
  'contact.form.phone': { en: 'Phone Number', hi: 'फ़ोन नंबर', mr: 'फोन नंबर', kn: 'ಫೋನ್ ಸಂಖ್ಯೆ' },
  'contact.form.phonePlaceholder': { en: 'Enter your phone number', hi: 'अपना फ़ोन नंबर दर्ज करें', mr: 'तुमचा फोन नंबर टाका', kn: 'ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ' },
  'contact.form.trip': { en: 'Trip Details', hi: 'यात्रा विवरण', mr: 'सहलीचा तपशील', kn: 'ಪ್ರಯಾಣದ ವಿವರಗಳು' },
  'contact.form.tripPlaceholder': {
    en: 'e.g. Kolhapur to Pune, 15th July',
    hi: 'जैसे कोल्हापुर से पुणे, 15 जुलाई',
    mr: 'उदा. कोल्हापूर ते पुणे, १५ जुलै',
    kn: 'ಉದಾ. ಕೊಲ್ಹಾಪುರದಿಂದ ಪುಣೆಗೆ, ಜುಲೈ 15',
  },
  'contact.form.submit': { en: 'Send Message', hi: 'संदेश भेजें', mr: 'संदेश पाठवा', kn: 'ಸಂದೇಶ ಕಳುಹಿಸಿ' },
  'contact.form.sentNote': {
    en: 'Opening WhatsApp with your details…',
    hi: 'आपके विवरण के साथ व्हाट्सएप खोला जा रहा है…',
    mr: 'तुमच्या तपशीलांसह व्हॉट्सअॅप उघडत आहे…',
    kn: 'ನಿಮ್ಮ ವಿವರಗಳೊಂದಿಗೆ ವಾಟ್ಸ್‌ಆ್ಯಪ್ ತೆರೆಯಲಾಗುತ್ತಿದೆ…',
  },

  // Footer
  'footer.about': {
    en: 'Your trusted travel partner in Kolhapur. We offer good cars with skilled drivers for local and outstation trips.',
    hi: 'कोल्हापुर में आपका भरोसेमंद यात्रा साथी। हम स्थानीय और आउटस्टेशन यात्राओं के लिए माहिर ड्राइवरों के साथ अच्छी गाड़ियाँ देते हैं।',
    mr: 'कोल्हापूरमधील तुमचा विश्वासार्ह प्रवास सोबती. आम्ही स्थानिक व आउटस्टेशन सहलींसाठी कुशल ड्रायव्हरसह चांगल्या गाड्या देतो.',
    kn: 'ಕೊಲ್ಹಾಪುರದಲ್ಲಿ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಪ್ರಯಾಣ ಪಾಲುದಾರ. ಸ್ಥಳೀಯ ಮತ್ತು ಔಟ್‌ಸ್ಟೇಷನ್ ಪ್ರವಾಸಗಳಿಗಾಗಿ ನುರಿತ ಚಾಲಕರೊಂದಿಗೆ ಒಳ್ಳೆಯ ಕಾರುಗಳನ್ನು ನಾವು ನೀಡುತ್ತೇವೆ.',
  },
  'footer.quickLinks': { en: 'Quick Links', hi: 'त्वरित लिंक', mr: 'त्वरित दुवे', kn: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು' },
  'footer.contactUs': { en: 'Contact Us', hi: 'संपर्क करें', mr: 'आमच्याशी संपर्क साधा', kn: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ' },
  'footer.rights': { en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।', mr: 'सर्व हक्क राखीव.', kn: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.' },

  // Shared modal bits
  'common.close': { en: 'Close', hi: 'बंद करें', mr: 'बंद करा', kn: 'ಮುಚ್ಚಿ' },
  'common.book': { en: 'Book', hi: 'बुक करें', mr: 'बुक करा', kn: 'ಬುಕ್ ಮಾಡಿ' },
  'common.oneWayRoundTrip': {
    en: 'One-way & Round Trip',
    hi: 'वन-वे और राउंड ट्रिप',
    mr: 'वन-वे आणि राउंड ट्रिप',
    kn: 'ಒನ್-ವೇ ಮತ್ತು ರೌಂಡ್ ಟ್ರಿಪ್',
  },

  // Sightseeing modal
  'sightseeing.title': { en: 'Local Sightseeing', hi: 'स्थानीय दर्शनीय स्थल', mr: 'स्थानिक पर्यटन स्थळे', kn: 'ಸ್ಥಳೀಯ ಪ್ರವಾಸಿ ಸ್ಥಳಗಳು' },
  'sightseeing.subtitle': {
    en: 'Popular spots our local guides can take you to',
    hi: 'लोकप्रिय स्थान जहां हमारे स्थानीय गाइड आपको ले जा सकते हैं',
    mr: 'लोकप्रिय ठिकाणे जिथे आमचे स्थानिक मार्गदर्शक तुम्हाला घेऊन जाऊ शकतात',
    kn: 'ನಮ್ಮ ಸ್ಥಳೀಯ ಮಾರ್ಗದರ್ಶಕರು ನಿಮ್ಮನ್ನು ಕರೆದೊಯ್ಯಬಹುದಾದ ಜನಪ್ರಿಯ ಸ್ಥಳಗಳು',
  },

  // Outstation modal
  'outstation.kicker': { en: 'Travel with a driver', hi: 'ड्राइवर के साथ यात्रा', mr: 'ड्रायव्हरसह प्रवास', kn: 'ಚಾಲಕರೊಂದಿಗೆ ಪ್ರಯಾಣ' },
  'outstation.title': { en: 'Outstation Trips', hi: 'आउटस्टेशन यात्राएं', mr: 'आउटस्टेशन सहली', kn: 'ಔಟ್‌ಸ್ಟೇಷನ್ ಪ್ರವಾಸಗಳು' },
  'outstation.subtitle': {
    en: 'Popular long trips from Kolhapur, with skilled drivers',
    hi: 'कोल्हापुर से लोकप्रिय लंबी यात्राएं, माहिर ड्राइवरों के साथ',
    mr: 'कोल्हापूरहून लोकप्रिय लांब सहली, कुशल ड्रायव्हरसह',
    kn: 'ಕೊಲ್ಹಾಪುರದಿಂದ ಜನಪ್ರಿಯ ದೂರದ ಪ್ರಯಾಣಗಳು, ನುರಿತ ಚಾಲಕರೊಂದಿಗೆ',
  },
  'outstation.fromKolhapur': { en: 'from Kolhapur', hi: 'कोल्हापुर से', mr: 'कोल्हापूरपासून', kn: 'ಕೊಲ್ಹಾಪುರದಿಂದ' },
  'outstation.note': {
    en: "Don't see your place? We can plan a trip anywhere in India — just get in touch.",
    hi: 'अपनी जगह नहीं दिख रही? हम भारत में कहीं भी यात्रा बना सकते हैं — बस संपर्क करें।',
    mr: 'तुमचे ठिकाण दिसत नाही? आम्ही भारतात कुठेही सहल आखू शकतो — फक्त संपर्क साधा.',
    kn: 'ನಿಮ್ಮ ಸ್ಥಳ ಕಾಣಿಸುತ್ತಿಲ್ಲವೇ? ನಾವು ಭಾರತದಲ್ಲಿ ಎಲ್ಲಿಯಾದರೂ ಪ್ರಯಾಣ ಯೋಜಿಸಬಹುದು — ಸಂಪರ್ಕಿಸಿ.',
  },

  // Pick-up & Drop modal
  'pickupdrop.kicker': { en: 'Door-to-door service', hi: 'द्वार-से-द्वार सेवा', mr: 'दारापासून-दारापर्यंत सेवा', kn: 'ಮನೆ-ಮನೆ ಸೇವೆ' },
  'pickupdrop.title': { en: 'Pick-up & Drop Services', hi: 'पिक-अप और ड्रॉप सेवाएं', mr: 'पिकअप आणि ड्रॉप सेवा', kn: 'ಪಿಕ್-ಅಪ್ ಮತ್ತು ಡ್ರಾಪ್ ಸೇವೆಗಳು' },
  'pickupdrop.subtitle': {
    en: 'Reliable one-way & round trips from Kolhapur, with a driver all the way',
    hi: 'कोल्हापुर से भरोसेमंद वन-वे और राउंड ट्रिप, पूरे रास्ते ड्राइवर के साथ',
    mr: 'कोल्हापूरहून विश्वासार्ह वन-वे व राउंड ट्रिप, संपूर्ण प्रवासात ड्रायव्हरसह',
    kn: 'ಕೊಲ್ಹಾಪುರದಿಂದ ವಿಶ್ವಾಸಾರ್ಹ ಒನ್-ವೇ ಮತ್ತು ರೌಂಡ್ ಟ್ರಿಪ್, ಸಂಪೂರ್ಣ ಪ್ರಯಾಣದಲ್ಲಿ ಚಾಲಕರೊಂದಿಗೆ',
  },
  'pickupdrop.note': {
    en: "Don't see your route? We also do pick-up & drop to other places — just get in touch.",
    hi: 'अपना रास्ता नहीं दिख रहा? हम अन्य जगहों के लिए भी पिक-अप और ड्रॉप करते हैं — बस संपर्क करें।',
    mr: 'तुमचा मार्ग दिसत नाही? आम्ही इतर ठिकाणांसाठीही पिकअप व ड्रॉप करतो — फक्त संपर्क साधा.',
    kn: 'ನಿಮ್ಮ ಮಾರ್ಗ ಕಾಣಿಸುತ್ತಿಲ್ಲವೇ? ನಾವು ಇತರ ಸ್ಥಳಗಳಿಗೂ ಪಿಕ್-ಅಪ್ ಮತ್ತು ಡ್ರಾಪ್ ಮಾಡುತ್ತೇವೆ — ಸಂಪರ್ಕಿಸಿ.',
  },

  // Airport modal
  'airport.kicker': { en: 'On time, door to door', hi: 'समय पर, द्वार-से-द्वार', mr: 'वेळेवर, दारापासून-दारापर्यंत', kn: 'ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ, ಮನೆ-ಮನೆ' },
  'airport.title': { en: 'Airport Pickup & Drop', hi: 'एयरपोर्ट पिक-अप और ड्रॉप', mr: 'विमानतळ पिकअप आणि ड्रॉप', kn: 'ವಿಮಾನ ನಿಲ್ದಾಣ ಪಿಕ್-ಅಪ್ ಮತ್ತು ಡ್ರಾಪ್' },
  'airport.subtitle': {
    en: 'Reliable pick-up & drop to nearby airports, matched to your flight time',
    hi: 'आपकी फ्लाइट के समय के अनुसार, नज़दीकी हवाई अड्डों के लिए भरोसेमंद पिक-अप और ड्रॉप',
    mr: 'तुमच्या फ्लाइटच्या वेळेनुसार, जवळच्या विमानतळांसाठी विश्वासार्ह पिकअप व ड्रॉप',
    kn: 'ನಿಮ್ಮ ಫ್ಲೈಟ್ ಸಮಯಕ್ಕೆ ಹೊಂದಿಸಿ, ಹತ್ತಿರದ ವಿಮಾನ ನಿಲ್ದಾಣಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಪಿಕ್-ಅಪ್ ಮತ್ತು ಡ್ರಾಪ್',
  },
  'airport.feature.tracking.label': { en: 'Flight Tracking', hi: 'फ्लाइट ट्रैकिंग', mr: 'फ्लाइट ट्रॅकिंग', kn: 'ಫ್ಲೈಟ್ ಟ್ರ್ಯಾಕಿಂಗ್' },
  'airport.feature.tracking.blurb': {
    en: 'We watch your flight and adjust for delays.',
    hi: 'हम आपकी फ्लाइट पर नज़र रखते हैं और देरी के अनुसार समय बदलते हैं।',
    mr: 'आम्ही तुमच्या फ्लाइटवर लक्ष ठेवतो आणि उशीर झाल्यास वेळ बदलतो.',
    kn: 'ನಾವು ನಿಮ್ಮ ಫ್ಲೈಟ್ ಅನ್ನು ಗಮನಿಸುತ್ತೇವೆ ಮತ್ತು ವಿಳಂಬಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಸಮಯ ಬದಲಾಯಿಸುತ್ತೇವೆ.',
  },
  'airport.feature.meetgreet.label': { en: 'Pickup at Arrival', hi: 'आगमन पर पिक-अप', mr: 'आगमनावर पिकअप', kn: 'ಆಗಮನದಲ್ಲಿ ಪಿಕ್-ಅಪ್' },
  'airport.feature.meetgreet.blurb': {
    en: 'Driver waits at arrivals with a name board.',
    hi: 'ड्राइवर आगमन पर नाम की तख्ती लेकर इंतज़ार करता है।',
    mr: 'ड्रायव्हर आगमन विभागात नावाच्या पाटीसह वाट पाहतो.',
    kn: 'ಚಾಲಕ ಆಗಮನ ಸ್ಥಳದಲ್ಲಿ ಹೆಸರಿನ ಫಲಕದೊಂದಿಗೆ ಕಾಯುತ್ತಾರೆ.',
  },
  'airport.feature.luggage.label': { en: 'Help with Bags', hi: 'सामान में मदद', mr: 'सामानात मदत', kn: 'ಲಗೇಜ್ ಸಹಾಯ' },
  'airport.feature.luggage.blurb': {
    en: 'Help with bags from terminal to car.',
    hi: 'टर्मिनल से कार तक सामान में मदद।',
    mr: 'टर्मिनलपासून कारपर्यंत सामान नेण्यास मदत.',
    kn: 'ಟರ್ಮಿನಲ್‌ನಿಂದ ಕಾರಿನವರೆಗೆ ಲಗೇಜ್ ಸಾಗಿಸಲು ಸಹಾಯ.',
  },
  'airport.fromKolhapur': { en: 'from Kolhapur', hi: 'कोल्हापुर से', mr: 'कोल्हापूरपासून', kn: 'ಕೊಲ್ಹಾಪುರದಿಂದ' },
  'airport.note': {
    en: 'Flying from another airport? We can pick you up anywhere — just get in touch.',
    hi: 'किसी और हवाई अड्डे से जा रहे हैं? हम कहीं भी आपको ले सकते हैं — बस संपर्क करें।',
    mr: 'दुसऱ्या विमानतळावरून जाणार आहात? आम्ही कुठूनही तुम्हाला घेऊ शकतो — फक्त संपर्क साधा.',
    kn: 'ಬೇರೆ ವಿಮಾನ ನಿಲ್ದಾಣದಿಂದ ಹೊರಡುತ್ತಿದ್ದೀರಾ? ನಾವು ಎಲ್ಲಿಂದಲಾದರೂ ನಿಮ್ಮನ್ನು ಕರೆದುಕೊಳ್ಳಬಹುದು — ಸಂಪರ್ಕಿಸಿ.',
  },

  // Business Travel modal
  'business.kicker': { en: 'For companies & teams', hi: 'कंपनियों और टीमों के लिए', mr: 'कंपन्या आणि टीमसाठी', kn: 'ಕಂಪನಿಗಳು ಮತ್ತು ತಂಡಗಳಿಗಾಗಿ' },
  'business.title': { en: 'Business Travel', hi: 'व्यावसायिक यात्रा', mr: 'व्यावसायिक प्रवास', kn: 'ವ್ಯಾಪಾರ ಪ್ರಯಾಣ' },
  'business.subtitle': {
    en: "Good cars and skilled drivers for your company's travel needs",
    hi: 'आपकी कंपनी की यात्रा ज़रूरतों के लिए अच्छी गाड़ियाँ और माहिर ड्राइवर',
    mr: 'तुमच्या कंपनीच्या प्रवासाच्या गरजांसाठी चांगल्या गाड्या आणि कुशल ड्रायव्हर',
    kn: 'ನಿಮ್ಮ ಕಂಪನಿಯ ಪ್ರಯಾಣದ ಅಗತ್ಯಗಳಿಗೆ ಒಳ್ಳೆಯ ಕಾರುಗಳು ಮತ್ತು ನುರಿತ ಚಾಲಕರು',
  },
  'business.feature.invoice.label': { en: 'GST Invoice', hi: 'जीएसटी बिल', mr: 'जीएसटी बिल', kn: 'ಜಿಎಸ್‌ಟಿ ಬಿಲ್' },
  'business.feature.invoice.blurb': {
    en: 'Get a proper GST bill for your company.',
    hi: 'आपकी कंपनी के लिए सही जीएसटी बिल पाएं।',
    mr: 'तुमच्या कंपनीसाठी योग्य जीएसटी बिल मिळवा.',
    kn: 'ನಿಮ್ಮ ಕಂಪನಿಗೆ ಸರಿಯಾದ ಜಿಎಸ್‌ಟಿ ಬಿಲ್ ಪಡೆಯಿರಿ.',
  },
  'business.feature.billing.label': { en: 'Monthly Billing', hi: 'मासिक बिलिंग', mr: 'मासिक बिलिंग', kn: 'ಮಾಸಿಕ ಬಿಲ್ಲಿಂಗ್' },
  'business.feature.billing.blurb': {
    en: 'Pay once a month, not for every trip.',
    hi: 'हर यात्रा के लिए नहीं, महीने में एक बार भुगतान करें।',
    mr: 'प्रत्येक सहलीसाठी नाही, महिन्यातून एकदा पैसे भरा.',
    kn: 'ಪ್ರತಿ ಪ್ರಯಾಣಕ್ಕೂ ಅಲ್ಲ, ತಿಂಗಳಿಗೊಮ್ಮೆ ಪಾವತಿಸಿ.',
  },
  'business.feature.support.label': { en: 'On-call Support', hi: 'कॉल पर सहायता', mr: 'कॉलवर मदत', kn: 'ಕರೆ ಮೂಲಕ ಸಹಾಯ' },
  'business.feature.support.blurb': {
    en: 'Help anytime you need a car.',
    hi: 'जब भी गाड़ी चाहिए, मदद मिलेगी।',
    mr: 'जेव्हा गाडी हवी असेल तेव्हा मदत मिळेल.',
    kn: 'ಕಾರು ಬೇಕಾದಾಗಲೆಲ್ಲಾ ಸಹಾಯ ಸಿಗುತ್ತದೆ.',
  },
  'business.usecase.meetings.title': { en: 'Client Meetings', hi: 'क्लाइंट मीटिंग', mr: 'क्लायंट मीटिंग', kn: 'ಕ್ಲೈಂಟ್ ಸಭೆಗಳು' },
  'business.usecase.meetings.blurb': {
    en: 'Clean cars and on-time drivers for important meetings.',
    hi: 'ज़रूरी मीटिंग के लिए साफ़ गाड़ियाँ और समय पर आने वाले ड्राइवर।',
    mr: 'महत्त्वाच्या मीटिंगसाठी स्वच्छ गाड्या आणि वेळेवर येणारे ड्रायव्हर.',
    kn: 'ಮುಖ್ಯ ಸಭೆಗಳಿಗೆ ಸ್ವಚ್ಛ ಕಾರುಗಳು ಮತ್ತು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಬರುವ ಚಾಲಕರು.',
  },
  'business.usecase.events.title': { en: 'Company Events', hi: 'कंपनी कार्यक्रम', mr: 'कंपनीचे कार्यक्रम', kn: 'ಕಂಪನಿ ಕಾರ್ಯಕ್ರಮಗಳು' },
  'business.usecase.events.blurb': {
    en: 'Move your team to events, conferences, and offsites.',
    hi: 'कार्यक्रमों, सम्मेलनों और ऑफ़साइट के लिए अपनी टीम को ले जाएं।',
    mr: 'कार्यक्रम, परिषदा आणि ऑफसाइटसाठी तुमच्या टीमला घेऊन जा.',
    kn: 'ಕಾರ್ಯಕ್ರಮಗಳು, ಸಮ್ಮೇಳನಗಳು ಮತ್ತು ಆಫ್‌ಸೈಟ್‌ಗಳಿಗೆ ನಿಮ್ಮ ತಂಡವನ್ನು ಕರೆದೊಯ್ಯಿರಿ.',
  },
  'business.usecase.guests.title': { en: 'Guest Airport Pickup', hi: 'मेहमान एयरपोर्ट पिक-अप', mr: 'पाहुण्यांचे विमानतळ पिकअप', kn: 'ಅತಿಥಿ ವಿಮಾನ ನಿಲ್ದಾಣ ಪಿಕ್-ಅಪ್' },
  'business.usecase.guests.blurb': {
    en: 'Pick up your clients and guests from the airport.',
    hi: 'अपने क्लाइंट और मेहमानों को हवाई अड्डे से लाएं।',
    mr: 'तुमच्या क्लायंट आणि पाहुण्यांना विमानतळावरून आणा.',
    kn: 'ನಿಮ್ಮ ಕ್ಲೈಂಟ್‌ಗಳು ಮತ್ತು ಅತಿಥಿಗಳನ್ನು ವಿಮಾನ ನಿಲ್ದಾಣದಿಂದ ಕರೆತನ್ನಿ.',
  },
  'business.usecase.multicity.title': { en: 'Multi-City Trips', hi: 'कई शहरों की यात्रा', mr: 'अनेक शहरांचा प्रवास', kn: 'ಬಹು-ನಗರ ಪ್ರಯಾಣಗಳು' },
  'business.usecase.multicity.blurb': {
    en: 'Cars for business trips across many cities.',
    hi: 'कई शहरों में व्यावसायिक यात्रा के लिए गाड़ियाँ।',
    mr: 'अनेक शहरांमधील व्यावसायिक प्रवासासाठी गाड्या.',
    kn: 'ಹಲವು ನಗರಗಳಲ್ಲಿ ವ್ಯಾಪಾರ ಪ್ರಯಾಣಕ್ಕೆ ಕಾರುಗಳು.',
  },
  'business.ctaText': {
    en: 'Want a fixed monthly plan for your company?',
    hi: 'अपनी कंपनी के लिए तय मासिक योजना चाहिए?',
    mr: 'तुमच्या कंपनीसाठी ठराविक मासिक योजना हवी आहे?',
    kn: 'ನಿಮ್ಮ ಕಂಪನಿಗೆ ನಿಗದಿತ ಮಾಸಿಕ ಯೋಜನೆ ಬೇಕೇ?',
  },
  'business.ctaButton': { en: 'Talk to Us', hi: 'हमसे बात करें', mr: 'आमच्याशी बोला', kn: 'ನಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಿ' },

  // Language switcher
  'language.select': { en: 'Language', hi: 'भाषा', mr: 'भाषा', kn: 'ಭಾಷೆ' },
};
