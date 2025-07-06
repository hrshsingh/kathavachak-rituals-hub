
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      service: 'Griha Pravesh Ceremony',
      rating: 5,
      text: 'The pandit was extremely knowledgeable and conducted the ceremony with utmost devotion. Our new home feels blessed and filled with positive energy. Highly recommend Kathavachak!',
      image: '👩',
      date: '2 weeks ago'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      service: 'Wedding Ceremony',
      rating: 5,
      text: 'Our wedding ceremony was perfect! The pandit explained every ritual beautifully and made sure our families understood the significance. It was truly a divine experience.',
      image: '👨',
      date: '1 month ago'
    },
    {
      name: 'Anita Gupta',
      location: 'Bangalore',
      service: 'Satyanarayan Pooja',
      rating: 5,
      text: 'Excellent service! The pandit arrived on time with all necessary materials. The pooja was conducted with proper procedures and created a very spiritual atmosphere at home.',
      image: '👩‍🦳',
      date: '3 weeks ago'
    },
    {
      name: 'Vikram Singh',
      location: 'Pune',
      service: 'Hawan Ceremony',
      rating: 5,
      text: 'Amazing experience! The hawan ceremony was performed with such dedication and authenticity. We could feel the positive energy and divine blessings throughout the process.',
      image: '👨‍🦱',
      date: '1 week ago'
    },
    {
      name: 'Meera Patel',
      location: 'Ahmedabad',
      service: 'Astrological Consultation',
      rating: 5,
      text: 'The consultation was very insightful and accurate. The pandit provided practical remedies and guidance that have brought positive changes in my life. Thank you!',
      image: '👩‍💼',
      date: '2 months ago'
    },
    {
      name: 'Suresh Reddy',
      location: 'Hyderabad',
      service: 'Festival Pooja',
      rating: 5,
      text: 'Diwali pooja was conducted beautifully with all traditional rituals. The pandit was very patient in explaining the significance of each step. Wonderful service!',
      image: '👨‍🦲',
      date: '1 month ago'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-spiritual-50 to-saffron-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            What Our <span className="gradient-text">Devotees Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Read testimonials from thousands of satisfied families who have experienced 
            authentic spiritual services through Kathavachak
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-spiritual-600" />
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-5 h-5 ${star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </blockquote>

                {/* Service Badge */}
                <div className="inline-block bg-spiritual-100 text-spiritual-800 text-xs px-3 py-1 rounded-full mb-4">
                  {testimonial.service}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-spiritual-100 to-saffron-100 rounded-full flex items-center justify-center text-xl">
                    {testimonial.image}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-12 border-t border-gray-200 animate-fade-in">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-spiritual-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-spiritual-600 mb-2">2,500+</div>
              <div className="text-gray-600">Happy Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-spiritual-600 mb-2">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-spiritual-600 mb-2">10,000+</div>
              <div className="text-gray-600">Ceremonies Completed</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Trusted by Families Across India
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-sm font-medium">Excellence Award</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✅</div>
                <div className="text-sm font-medium">Verified Pandits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔒</div>
                <div className="text-sm font-medium">Secure Booking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-sm font-medium">100% Authentic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
