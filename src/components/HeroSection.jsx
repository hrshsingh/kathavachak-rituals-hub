
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Users, Calendar, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, number: '10,000+', label: t('happyDevotees') },
    { icon: Star, number: '500+', label: t('expertPandits') },
    { icon: Calendar, number: '25,000+', label: t('poojaCompleted') },
    { icon: Shield, number: '100%', label: t('authenticServices') },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-yellow-50 overflow-hidden">
      {/* Background Pattern - Placeholder for watermark */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-spiritual-400 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-saffron-400 animate-float delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full bg-spiritual-500 animate-float delay-2000"></div>
        {/* Placeholder for uploaded background watermark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-8xl opacity-10 text-spiritual-300">🕉️</div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {t('sacredSpiritual')}
                <span className="block gradient-text">{t('spiritualJourney')}</span>
                <span className="block text-gray-800">{t('beginsHere')}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                {t('heroDescription')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-spiritual text-white text-lg px-8 py-6 hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                {t('bookPoojaNow')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-spiritual-600 border-spiritual-600 hover:bg-spiritual-50 text-lg px-8 py-6 transition-all duration-300"
              >
                {t('consultPandit')}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-600">4.9/5 (2,500+ {t('reviews')})</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative bg-gradient-to-br from-spiritual-100 to-saffron-100 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-spiritual-200 to-saffron-200 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-spiritual-400 to-saffron-400 rounded-full flex items-center justify-center mb-6">
                    <span className="text-4xl">🕉️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{t('sacredServices')}</h3>
                  <p className="text-gray-600">{t('authenticRituals')}</p>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium">{t('available247')}</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float delay-1000">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{t('trustedBy')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-spiritual-100 to-saffron-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-spiritual-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
