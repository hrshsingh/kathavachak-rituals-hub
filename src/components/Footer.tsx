
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart
} from 'lucide-react';

const Footer = () => {
  const serviceLinks = [
    'Pooja Ceremonies',
    'Hawan Services',
    'Wedding Rituals',
    'Griha Pravesh',
    'Festival Celebrations',
    'Astrological Consultation'
  ];

  const quickLinks = [
    'About Us',
    'Our Pandits',
    'Service Areas',
    'Pricing',
    'FAQs',
    'Contact Us'
  ];

  const cities = [
    'Delhi NCR',
    'Mumbai',
    'Bangalore',
    'Pune',
    'Chennai',
    'Hyderabad',
    'Kolkata',
    'Ahmedabad'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-spiritual-600 to-saffron-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Stay Connected with Divine Blessings
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Subscribe to receive spiritual insights, ceremony guides, and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-spiritual-600 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-2">Kathavachak</h2>
                <p className="text-gray-400 leading-relaxed">
                  Your trusted spiritual partner for authentic pooja ceremonies, 
                  hawan services, and religious consultations. Connecting devotees 
                  with experienced pandits across India.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-spiritual-400" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-spiritual-400" />
                  <span>info@kathavachak.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-spiritual-400" />
                  <span>Serving all major cities in India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-spiritual-400" />
                  <span>Available 24/7 for spiritual guidance</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                    <div key={index} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-spiritual-600 transition-colors cursor-pointer">
                      <Icon className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-spiritual-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-spiritual-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Cities */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Service Cities</h4>
              <ul className="space-y-3">
                {cities.map((city, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-spiritual-400 transition-colors">
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© 2024 Kathavachak. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for spiritual devotees</span>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-spiritual-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-spiritual-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-spiritual-400 transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-spiritual-400 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="gradient-spiritual text-white rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-transform">
          <Phone className="w-6 h-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
