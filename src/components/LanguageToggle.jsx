
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <div className="flex rounded-md overflow-hidden border border-gray-300">
        <Button
          size="sm"
          variant={language === 'en' ? 'default' : 'outline'}
          className={`px-3 py-1 text-xs rounded-none ${
            language === 'en' 
              ? 'bg-spiritual-600 text-white hover:bg-spiritual-700' 
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
          onClick={() => changeLanguage('en')}
        >
          EN
        </Button>
        <Button
          size="sm"
          variant={language === 'hi' ? 'default' : 'outline'}
          className={`px-3 py-1 text-xs rounded-none border-l-0 ${
            language === 'hi' 
              ? 'bg-spiritual-600 text-white hover:bg-spiritual-700' 
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
          onClick={() => changeLanguage('hi')}
        >
          हिं
        </Button>
      </div>
    </div>
  );
};

export default LanguageToggle;
