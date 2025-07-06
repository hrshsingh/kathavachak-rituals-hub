
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Header
    home: 'Home',
    services: 'Services',
    pandits: 'Pandits',
    blogs: 'Blogs',
    about: 'About',
    contact: 'Contact',
    bookNow: 'Book Now',
    freeConsultation: 'Free consultation available',
    servingAllIndia: 'Serving All India',
    spiritualJourneyPartner: 'Your Spiritual Journey Partner',
    
    // Hero Section
    sacredSpiritual: 'Your Sacred',
    spiritualJourney: 'Spiritual Journey',
    beginsHere: 'Begins Here',
    heroDescription: 'Connect with experienced pandits for authentic pooja, hawan ceremonies, and spiritual guidance. Book trusted services for all your religious needs.',
    bookPoojaNow: 'Book Pooja Now',
    consultPandit: 'Consult Pandit',
    reviews: 'reviews',
    happyDevotees: 'Happy Devotees',
    expertPandits: 'Expert Pandits',
    poojaCompleted: 'Pooja Completed',
    authenticServices: 'Authentic Services',
    available247: 'Available 24/7',
    trustedBy: 'Trusted by 10k+',
    sacredServices: 'Sacred Services',
    authenticRituals: 'Authentic rituals performed by certified pandits'
  },
  hi: {
    // Header
    home: 'होम',
    services: 'सेवाएं',
    pandits: 'पंडित',
    blogs: 'ब्लॉग',
    about: 'हमारे बारे में',
    contact: 'संपर्क',
    bookNow: 'अभी बुक करें',
    freeConsultation: 'निःशुल्क परामर्श उपलब्ध',
    servingAllIndia: 'पूरे भारत में सेवा',
    spiritualJourneyPartner: 'आपका आध्यात्मिक यात्रा साथी',
    
    // Hero Section
    sacredSpiritual: 'आपकी पवित्र',
    spiritualJourney: 'आध्यात्मिक यात्रा',
    beginsHere: 'यहाँ शुरू होती है',
    heroDescription: 'प्रामाणिक पूजा, हवन समारोह और आध्यात्मिक मार्गदर्शन के लिए अनुभवी पंडितों से जुड़ें। अपनी सभी धार्मिक आवश्यकताओं के लिए विश्वसनीय सेवाओं को बुक करें।',
    bookPoojaNow: 'अभी पूजा बुक करें',
    consultPandit: 'पंडित से सलाह लें',
    reviews: 'समीक्षा',
    happyDevotees: 'खुश भक्त',
    expertPandits: 'विशेषज्ञ पंडित',
    poojaCompleted: 'पूजा संपन्न',
    authenticServices: 'प्रामाणिक सेवाएं',
    available247: '24/7 उपलब्ध',
    trustedBy: '10k+ द्वारा भरोसा',
    sacredServices: 'पवित्र सेवाएं',
    authenticRituals: 'प्रमाणित पंडितों द्वारा किए गए प्रामाणिक अनुष्ठान'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
