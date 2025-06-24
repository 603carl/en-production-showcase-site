import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Award, Users, Calendar, TrendingUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import StatsCounter from "@/components/StatsCounter";
import FeaturedWork from "@/components/FeaturedWork";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactCTA from "@/components/ContactCTA";
import TrailersSection from "@/components/TrailersSection";
import { useCompanyStats, useHeroImages } from "@/hooks/usePlaybookAPI";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { data: stats } = useCompanyStats();
  const { data: heroImages } = useHeroImages();

  // Cycle through hero images
  useEffect(() => {
    if (heroImages && heroImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [heroImages]);

  const currentBgImage = heroImages?.[currentImageIndex] || 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              EN Production
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" }
              ].map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className={`px-6 py-3 rounded-full bg-gradient-to-r backdrop-blur-sm border transition-all duration-300 hover:scale-105 text-white font-medium ${
                    item.to === "/" 
                      ? "from-blue-500/20 to-purple-500/20 border-blue-400/50" 
                      : "from-blue-500/10 to-purple-500/10 border-blue-400/20 hover:border-purple-400/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Dynamic Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ 
            backgroundImage: `url(${currentBgImage})`,
            transform: 'scale(1.1)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 animate-slide-up-fade">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                🏆 Award-Winning Creative Studio in Kenya
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up-fade" style={{animationDelay: '0.2s'}}>
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Cinematic
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-slide-up-fade max-w-2xl" style={{animationDelay: '0.4s'}}>
              Creating award-winning films, commercials, and digital content that captivates audiences and elevates brands across Kenya and East Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-fade" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-full btn-glow transform hover:scale-105 transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Reel
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300">
                  Start Your Project
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Quick Stats from API */}
            {stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-slide-up-fade" style={{animationDelay: '0.8s'}}>
                <div className="text-center glass-card p-4 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-blue-400">{stats.total_projects}+</div>
                  <div className="text-sm text-gray-300">Projects</div>
                </div>
                <div className="text-center glass-card p-4 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">{stats.years_experience}</div>
                  <div className="text-sm text-gray-300">Years</div>
                </div>
                <div className="text-center glass-card p-4 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-pink-400">{stats.client_satisfaction}%</div>
                  <div className="text-sm text-gray-300">Satisfaction</div>
                </div>
                <div className="text-center glass-card p-4 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-green-400">{(stats.total_views / 1000000).toFixed(1)}M</div>
                  <div className="text-sm text-gray-300">Views</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Image Indicators */}
        {heroImages && heroImages.length > 1 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-blue-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gradient-to-br from-gray-900/90 via-black to-purple-900/20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up-fade">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Crafting Stories That Matter
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Since 2017, EN Production has been at the forefront of Kenya's creative industry, delivering exceptional visual content that resonates with audiences and drives meaningful connections.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                From intimate documentaries to large-scale commercial campaigns, we combine technical excellence with authentic storytelling to create content that not only looks beautiful but makes a lasting impact.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-blue-400" />
                  <div>
                    <div className="font-semibold text-white">Award Winning</div>
                    <div className="text-sm text-gray-400">8+ Industry Awards</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-purple-400" />
                  <div>
                    <div className="font-semibold text-white">Expert Team</div>
                    <div className="text-sm text-gray-400">15+ Professionals</div>
                  </div>
                </div>
              </div>

              <Link to="/about">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full">
                  Learn More About Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative animate-slide-up-fade" style={{animationDelay: '0.2s'}}>
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 group cursor-pointer relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Behind the scenes"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trailers Section - Replacing Services */}
      <TrailersSection />

      {/* Featured Work */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Featured Work
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most impactful projects and creative achievements
            </p>
          </div>
          <FeaturedWork />
        </div>
      </section>

      {/* Dynamic Stats Counter */}
      <StatsCounter />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact CTA */}
      <ContactCTA />

      {/* Professional Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                EN Production
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Creating exceptional visual experiences that transform brands and captivate audiences across Kenya and globally.
              </p>
              <div className="flex space-x-4">
                {['Instagram', 'Facebook', 'LinkedIn', 'Behance'].map((social) => (
                  <Button key={social} size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all">
                    {social}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {['Film Production', 'Graphics Design', 'Digital Marketing', 'Photography'].map((service) => (
                  <li key={service}>
                    <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>+254 700 000 000</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>hello@enproduction.co.ke</span>
                </div>
                <div className="text-gray-400 text-sm">
                  Nairobi, Kenya • Remote Services Available
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 EN Production. All rights reserved. Proudly Kenyan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
