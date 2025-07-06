
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Eye } from 'lucide-react';

const BlogSection = () => {
  const blogs = [
    {
      title: 'Complete Guide to Griha Pravesh Ceremony',
      excerpt: 'Learn about the significance, rituals, and best practices for house warming ceremonies according to Vedic traditions.',
      author: 'Pandit Rajesh Sharma',
      date: '15 Dec 2024',
      readTime: '8 min read',
      views: '2.4k',
      category: 'Ceremonies',
      image: '🏠',
      featured: true
    },
    {
      title: 'Understanding the Power of Hawan in Modern Times',
      excerpt: 'Discover how ancient fire rituals can bring peace, prosperity, and positive energy to your life in today\'s world.',
      author: 'Pandit Suresh Gupta',
      date: '12 Dec 2024',
      readTime: '6 min read',
      views: '1.8k',
      category: 'Spiritual Guide',
      image: '🔥',
      featured: false
    },
    {
      title: 'Auspicious Dates for Wedding Ceremonies in 2025',
      excerpt: 'A comprehensive list of the most favorable dates for Hindu weddings in the coming year according to Panchang.',
      author: 'Pandit Mohan Tiwari',
      date: '10 Dec 2024',
      readTime: '10 min read',
      views: '3.2k',
      category: 'Astrology',
      image: '💒',
      featured: false
    },
    {
      title: 'Benefits of Regular Satyanarayan Pooja',
      excerpt: 'Explore the spiritual and material benefits of performing this powerful pooja for family prosperity and divine blessings.',
      author: 'Pandit Vikram Joshi',
      date: '8 Dec 2024',
      readTime: '7 min read',
      views: '1.5k',
      category: 'Pooja Guide',
      image: '🙏',
      featured: false
    },
    {
      title: 'Vastu Tips for Positive Energy in Your Home',
      excerpt: 'Simple yet effective Vastu principles that can transform your living space into a haven of positive energy and harmony.',
      author: 'Pandit Rajesh Sharma',
      date: '5 Dec 2024',
      readTime: '12 min read',
      views: '2.1k',
      category: 'Vastu',
      image: '🧭',
      featured: false
    },
    {
      title: 'Festival Season: Preparing for Makar Sankranti',
      excerpt: 'Everything you need to know about celebrating Makar Sankranti with proper rituals, traditions, and spiritual significance.',
      author: 'Pandit Suresh Gupta',
      date: '3 Dec 2024',
      readTime: '9 min read',
      views: '1.9k',
      category: 'Festivals',
      image: '🪁',
      featured: false
    }
  ];

  const categories = ['All', 'Ceremonies', 'Spiritual Guide', 'Astrology', 'Pooja Guide', 'Vastu', 'Festivals'];

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Spiritual <span className="gradient-text">Insights & Blogs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deepen your spiritual knowledge with expert articles, guides, and insights 
            from our experienced pandits and spiritual teachers
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "gradient-spiritual text-white" : "hover:bg-spiritual-50 hover:text-spiritual-600"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Blog */}
        <div className="mb-16 animate-fade-in">
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-r from-spiritual-50 to-saffron-50">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="gradient-spiritual text-white">Featured</Badge>
                    <Badge variant="secondary">{blogs[0].category}</Badge>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                    {blogs[0].title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {blogs[0].excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blogs[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{blogs[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{blogs[0].views} views</span>
                    </div>
                  </div>
                  
                  <Button className="gradient-spiritual text-white w-fit group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="bg-gradient-to-br from-spiritual-100 to-saffron-100 flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
                  <div className="text-8xl">{blogs[0].image}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(1).map((blog, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="bg-gradient-to-br from-spiritual-100 to-saffron-100 h-48 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-5xl">{blog.image}</div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {blog.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{blog.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-spiritual-600 transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{blog.author.split(' ').slice(-1)[0]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-spiritual-600 hover:text-spiritual-700 p-0 h-auto group"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-spiritual-50 to-saffron-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Stay Updated with Spiritual Wisdom
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest spiritual insights, 
              ceremony guides, and expert advice delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spiritual-500"
              />
              <Button className="gradient-spiritual text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
