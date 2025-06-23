
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail, Phone, Award, Users, Calendar, Star, Play, ChevronRight, Sparkles, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "EN Production transformed our brand story into a cinematic masterpiece that exceeded every expectation.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp Industries",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Their creative vision and technical expertise delivered results that drove 300% engagement growth.",
      author: "Michael Chen",
      role: "Marketing Director, InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Professional, innovative, and deadline-focused. EN Production is our go-to creative partner.",
      author: "Emma Rodriguez",
      role: "Brand Manager, FutureScale",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Glassmorphism Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              EN Production
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              {[
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" }
              ].map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/70 to-blue-900/80"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-1000 opacity-60"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-500 opacity-60"></div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center px-6 max-w-6xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-400/30 text-purple-300 backdrop-blur-sm animate-pulse">
              <Sparkles className="w-4 h-4 mr-2" />
              Award-Winning Creative Studio
            </Badge>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 via-white to-blue-400 bg-clip-text text-transparent animate-gradient">
              Visual Stories
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">That Captivate</span>
          </h1>
          
          <p className={`text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We craft exceptional visual experiences that transform brands and captivate audiences across all platforms worldwide.
          </p>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link to="/contact">
              <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-xl px-12 py-8 rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
                <Zap className="w-6 h-6 mr-3 group-hover:animate-spin" />
                Start Your Project
                <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="group border-2 border-white/30 text-white hover:bg-white hover:text-black text-xl px-12 py-8 rounded-full transform hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                <Play className="w-6 h-6 mr-3 group-hover:scale-125 transition-transform" />
                Watch Our Reel
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-400/30 text-purple-300 backdrop-blur-sm mb-6">
              <Target className="w-4 h-4 mr-2" />
              Our Core Values
            </Badge>
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Excellence Redefined
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Three foundational pillars that drive every project we create
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Sparkles,
                title: "Creative Excellence",
                description: "Pushing creative boundaries with original storytelling and innovative artistic vision that sets your brand apart",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Award,
                title: "Technical Mastery",
                description: "State-of-the-art equipment and cutting-edge expertise delivering cinema-quality results every time",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Zap,
                title: "Rapid Delivery",
                description: "Lightning-fast turnaround times with transparent communication and guaranteed on-schedule completion",
                gradient: "from-emerald-500 to-teal-500"
              }
            ].map((item, index) => (
              <Card key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm">
                <CardContent className="p-10 text-center">
                  <div className={`w-20 h-20 mx-auto mb-8 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-purple-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-32 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M50%2050L0%200h100L50%2050z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22/%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Impact in Numbers
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Measurable results that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", description: "Successful campaigns delivered" },
              { number: "98%", label: "Client Satisfaction", description: "Return customer rate" },
              { number: "12+", label: "Years Experience", description: "Industry expertise" },
              { number: "25+", label: "Awards Won", description: "Industry recognition" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25">
                  <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 group-hover:scale-125 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white font-bold text-xl mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Client Success Stories
            </h2>
            <p className="text-2xl text-gray-300">
              Hear from industry leaders who chose EN Production
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <img 
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-purple-400/50"
                  />
                  <blockquote className="text-3xl text-white font-light italic mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="text-purple-400 font-bold text-xl">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-purple-400 scale-125' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Stay Ahead of Trends
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Join 10,000+ creative professionals receiving exclusive insights and industry updates
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your professional email"
                className="flex-1 px-8 py-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/20 transition-all text-lg"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-12 py-6 rounded-2xl text-lg font-semibold hover:scale-105 transition-all duration-300">
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-gray-400 mt-6">
              Premium content including trend reports, case studies, and exclusive project previews
            </p>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-gradient-to-t from-black via-gray-900 to-black border-t border-white/10">
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                EN Production
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Transforming visions into visual masterpieces that captivate audiences and drive meaningful connections worldwide.
              </p>
              <div className="flex space-x-4">
                {['Instagram', 'LinkedIn', 'Behance', 'Vimeo'].map((social) => (
                  <Button key={social} size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all">
                    {social}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Services</h4>
              <ul className="space-y-3">
                {['Film Production', 'Motion Graphics', 'YouTube Content', 'Photography', 'Brand Design'].map((service) => (
                  <li key={service}>
                    <Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors text-base">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: 'About Us', to: '/about' },
                  { label: 'Portfolio', to: '/portfolio' },
                  { label: 'Case Studies', to: '/portfolio' },
                  { label: 'Careers', to: '/about' }
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-gray-400 hover:text-purple-400 transition-colors text-base">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>hello@enproduction.com</span>
                </div>
                <div className="text-gray-400 text-sm">
                  Los Angeles • New York • Miami
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-base">
              © 2025 EN Production. All rights reserved. Crafted with excellence.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
