
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Image, Youtube, Instagram, Mail, ArrowRight, Play, Star, CheckCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageBackgrounds } from "@/hooks/usePlaybookAPI";

const services = [
  {
    id: "film-production",
    title: "Film Production",
    description: "Cinematic storytelling with professional-grade equipment and creative vision",
    icon: Camera,
    color: "from-purple-500 to-pink-500",
    features: ["4K/8K Video Production", "Drone Cinematography", "Post-Production", "Color Grading"],
    process: ["Pre-production Planning", "Location Scouting", "Filming & Direction", "Post-Production", "Final Delivery"],
    portfolio: [
      {
        title: "Tech Startup Launch",
        thumbnail: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "3:45"
      }
    ]
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    description: "Motion graphics, visual effects, and compelling visual narratives",
    icon: Image,
    color: "from-blue-500 to-cyan-500",
    features: ["Motion Graphics", "VFX & Animation", "Title Sequences", "Digital Compositing"],
    process: ["Creative Briefing", "Concept Development", "Design Creation", "Animation & Effects", "Final Rendering"],
    portfolio: [
      {
        title: "Brand Animation",
        thumbnail: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "1:20"
      }
    ]
  },
  {
    id: "youtube-content",
    title: "YouTube Content",
    description: "Channel optimization, content strategy, and audience growth solutions",
    icon: Youtube,
    color: "from-red-500 to-orange-500",
    features: ["Content Strategy", "Video Editing", "Thumbnail Design", "Channel Growth"],
    process: ["Channel Analysis", "Content Planning", "Video Production", "Optimization", "Growth Tracking"],
    portfolio: [
      {
        title: "Tech Channel Growth",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "8:45"
      }
    ]
  },
  {
    id: "photography",
    title: "Photography",
    description: "Professional photography for events, products, and corporate needs",
    icon: Camera,
    color: "from-green-500 to-teal-500",
    features: ["Event Photography", "Product Shoots", "Corporate Headshots", "Photo Retouching"],
    process: ["Consultation", "Location Setup", "Photo Session", "Post-Processing", "Final Delivery"],
    portfolio: [
      {
        title: "Corporate Event",
        thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "Gallery"
      }
    ]
  },
  {
    id: "business-branding",
    title: "Business Branding",
    description: "Complete brand identity development and marketing material creation",
    icon: Mail,
    color: "from-indigo-500 to-purple-500",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"],
    process: ["Brand Discovery", "Strategy Development", "Design Creation", "Brand Guidelines", "Implementation"],
    portfolio: [
      {
        title: "Startup Rebrand",
        thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "Case Study"
      }
    ]
  }
];

const Services = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const { data: backgrounds } = usePageBackgrounds('services');

  useEffect(() => {
    if (backgrounds && backgrounds.length > 0) {
      const interval = setInterval(() => {
        setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [backgrounds]);

  const currentBg = backgrounds?.[currentBgIndex] || 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              EN Production
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" }
              ].map((item, index) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className={`px-6 py-3 rounded-full bg-gradient-to-r backdrop-blur-sm border transition-all duration-500 hover:scale-105 text-white font-medium animate-slide-up-fade ${
                    item.to === "/services" 
                      ? "from-blue-500/30 to-purple-500/30 border-blue-400/50 shadow-lg shadow-blue-500/20" 
                      : "from-blue-500/10 to-purple-500/10 border-blue-400/20 hover:border-purple-400/50"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-in-out transform scale-110"
          style={{ backgroundImage: `url(${currentBg})` }}
        />
        
        {/* Advanced Overlay Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/30 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="animate-slide-up-fade">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium animate-pulse-glow">
                <Sparkles className="h-4 w-4" />
                Premium Creative Services
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight animate-scale-in-bounce" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Services
              </span>
            </h1>
            
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
              From cinematic productions to digital branding, we deliver exceptional creative solutions that elevate your brand and drive meaningful connections with your audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up-fade" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-10 py-6 rounded-full btn-glow transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/30">
                <Play className="mr-3 h-6 w-6" />
                Explore Our Work
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 text-xl px-10 py-6 rounded-full backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50">
                  Start Your Project
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Indicators */}
        {backgrounds && backgrounds.length > 1 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {backgrounds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBgIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === currentBgIndex 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125 shadow-lg shadow-blue-400/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Services Grid with Advanced Animations */}
      <section className="py-32 bg-gradient-to-br from-gray-900/90 via-black to-purple-900/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-slide-up-fade">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              What We Offer
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive creative solutions tailored to your unique vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card 
                key={service.id}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-700 group cursor-pointer transform hover:scale-105 hover:-translate-y-4 backdrop-blur-sm portfolio-card animate-slide-up-fade"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setSelectedService(service.id)}
              >
                <CardContent className="p-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} p-5 mb-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: `${featureIndex * 0.1}s` }}>
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-purple-400 font-semibold text-lg">Explore Service</span>
                    <ArrowRight className="h-6 w-6 text-purple-400 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-slide-up-fade">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-2xl text-gray-300">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>
            
            <div className="space-y-16">
              {["Discovery", "Strategy", "Creation", "Refinement", "Delivery"].map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slide-up-fade`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex-1 px-8">
                    <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{step}</h3>
                        <p className="text-gray-300">
                          {index === 0 && "Understanding your vision and requirements through detailed consultation"}
                          {index === 1 && "Developing the perfect approach tailored to your specific needs"}
                          {index === 2 && "Bringing your project to life with cutting-edge tools and techniques"}
                          {index === 3 && "Perfecting every detail to exceed your expectations"}
                          {index === 4 && "Final delivery with comprehensive support and guidance"}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-pulse-glow">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-slide-up-fade">
            <h2 className="text-5xl font-bold mb-8 text-white">Ready to Start Your Project?</h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let's discuss how we can bring your vision to life with our professional services
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-12 py-8 rounded-full btn-glow transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/30">
                <Star className="mr-3 h-6 w-6" />
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
