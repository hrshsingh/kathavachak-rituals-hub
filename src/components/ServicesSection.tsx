
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flame, Home, Calendar, BookOpen, Heart, Gift } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Flame,
      title: 'Hawan Ceremonies',
      description: 'Sacred fire rituals for prosperity, health, and spiritual purification',
      price: 'Starting ₹2,500',
      features: ['Authentic Vedic rituals', 'All materials included', 'Experienced pandits', 'Customizable ceremonies'],
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Home,
      title: 'Griha Pravesh',
      description: 'House warming ceremonies for new beginnings and positive energy',
      price: 'Starting ₹1,800',
      features: ['Vastu consultation', 'Sacred rituals', 'Blessing ceremonies', 'Good fortune prayers'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Calendar,
      title: 'Festival Pooja',
      description: 'Special ceremonies for all Hindu festivals and auspicious occasions',
      price: 'Starting ₹1,200',
      features: ['Festival-specific rituals', 'Traditional procedures', 'Devotional atmosphere', 'Complete arrangements'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: BookOpen,
      title: 'Vedic Consultation',
      description: 'Spiritual guidance and astrological consultations by learned pandits',
      price: 'Starting ₹500',
      features: ['Personalized guidance', 'Horoscope reading', 'Remedy suggestions', 'Life path analysis'],
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Heart,
      title: 'Wedding Ceremonies',
      description: 'Complete wedding rituals following traditional Vedic customs',
      price: 'Starting ₹10,000',
      features: ['Complete wedding package', 'Traditional rituals', 'Sacred vows', 'Lifetime memories'],
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      icon: Gift,
      title: 'Special Occasions',
      description: 'Customized ceremonies for birthdays, anniversaries, and milestones',
      price: 'Starting ₹800',
      features: ['Customized rituals', 'Blessing ceremonies', 'Auspicious timing', 'Personal touch'],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Sacred <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From traditional pooja ceremonies to modern spiritual consultations, 
            we offer authentic services that connect you with divine blessings
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-spiritual-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="text-2xl font-bold text-spiritual-600">
                    {service.price}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-spiritual-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button className="w-full gradient-spiritual text-white hover:opacity-90 transition-all duration-300 group-hover:scale-105">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-spiritual-50 to-saffron-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Need a Custom Ceremony?
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              We understand every spiritual need is unique. Let us create a personalized ceremony 
              that perfectly matches your requirements and traditions.
            </p>
            <Button size="lg" className="gradient-spiritual text-white text-lg px-8 py-6">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
