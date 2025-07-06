
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Calendar, Award } from 'lucide-react';

const PanditsSection = () => {
  const pandits = [
    {
      name: 'Pandit Rajesh Sharma',
      specialization: 'Vedic Rituals & Hawan',
      experience: '15+ Years',
      location: 'Delhi NCR',
      rating: 4.9,
      reviews: 450,
      languages: ['Hindi', 'English', 'Sanskrit'],
      expertise: ['Marriage Ceremonies', 'Griha Pravesh', 'Festival Pooja'],
      image: '👨‍🦳',
      price: '₹1,500/ceremony'
    },
    {
      name: 'Pandit Suresh Gupta',
      specialization: 'Astrological Consultation',
      experience: '20+ Years',
      location: 'Mumbai',
      rating: 4.8,
      reviews: 380,
      languages: ['Hindi', 'Marathi', 'English'],
      expertise: ['Horoscope Reading', 'Vastu Shastra', 'Spiritual Guidance'],
      image: '👨‍🦲',
      price: '₹800/consultation'
    },
    {
      name: 'Pandit Mohan Tiwari',
      specialization: 'Traditional Ceremonies',
      experience: '12+ Years',
      location: 'Bangalore',
      rating: 4.9,
      reviews: 520,
      languages: ['Hindi', 'Kannada', 'English'],
      expertise: ['Satyanarayan Pooja', 'Hawan Ceremonies', 'House Blessing'],
      image: '👨‍💼',
      price: '₹1,200/ceremony'
    },
    {
      name: 'Pandit Vikram Joshi',
      specialization: 'Wedding Rituals',
      experience: '18+ Years',
      location: 'Pune',
      rating: 5.0,
      reviews: 290,
      languages: ['Hindi', 'Marathi', 'Sanskrit'],
      expertise: ['Wedding Ceremonies', 'Engagement Rituals', 'Anniversary Pooja'],
      image: '👨‍🎓',
      price: '₹2,000/ceremony'
    }
  ];

  return (
    <section id="pandits" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Meet Our <span className="gradient-text">Expert Pandits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with highly experienced and certified pandits who bring authenticity, 
            knowledge, and devotion to every ceremony
          </p>
        </div>

        {/* Pandits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pandits.map((pandit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-spiritual-100 to-saffron-100 rounded-full flex items-center justify-center text-2xl">
                      {pandit.image}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {pandit.name}
                      </h3>
                      <p className="text-spiritual-600 font-medium">
                        {pandit.specialization}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    Available
                  </Badge>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-spiritual-600" />
                    <span className="text-sm text-gray-600">{pandit.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-spiritual-600" />
                    <span className="text-sm text-gray-600">{pandit.location}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-4 h-4 ${star <= pandit.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-800">{pandit.rating}</span>
                  <span className="text-sm text-gray-600">({pandit.reviews} reviews)</span>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Languages:</p>
                  <div className="flex flex-wrap gap-2">
                    {pandit.languages.map((lang, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {pandit.expertise.map((skill, idx) => (
                      <Badge key={idx} className="text-xs bg-spiritual-100 text-spiritual-800 hover:bg-spiritual-100">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-lg font-bold text-spiritual-600">
                    {pandit.price}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-spiritual-600 border-spiritual-600 hover:bg-spiritual-50"
                    >
                      View Profile
                    </Button>
                    <Button 
                      size="sm"
                      className="gradient-spiritual text-white hover:opacity-90"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Looking for a Specific Expertise?
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              We have over 500+ certified pandits across India. Tell us your requirements, 
              and we'll connect you with the perfect spiritual guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-spiritual text-white text-lg px-8 py-6">
                Browse All Pandits
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-spiritual-600 border-spiritual-600 hover:bg-spiritual-50 text-lg px-8 py-6"
              >
                Get Personalized Match
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanditsSection;
