
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail, Phone, Award, Users, Calendar, Star, Play, ChevronRight, Sparkles, Zap, Target, CheckCircle, Globe, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [stats, setStats] = useState({
    projectsCompleted: 0,
    yearsExperience: 0,
    clientSatisfaction: 0
  });

  useEffect(() => {
    setIsLoaded(true);
    // Simulate fetching stats from portfolio API
    const timer = setTimeout(() => {
      setStats({
        projectsCompleted: 147,
        yearsExperience: 8,
        clientSatisfaction: 98
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Glassmorphism Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
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
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20 hover:border-purple-400/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-white font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        </div>

        {/* Hero Content - Left Aligned */}
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-3xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-blue-300 backdrop-blur-sm mb-6">
              <Award className="w-4 h-4 mr-2" />
              Award-Winning Creative Studio in Kenya
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-white">Creating</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Visual Excellence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              We craft exceptional visual experiences that transform brands and captivate audiences across Kenya and globally through remote services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Start Your Project
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Play className="w-5 h-5 mr-2" />
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stats.projectsCompleted}+
                </div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stats.yearsExperience}+
                </div>
                <div className="text-gray-400 text-sm">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stats.clientSatisfaction}%
                </div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Professional creative services delivered with excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Play,
                title: "Film Production",
                description: "Professional video production from concept to completion",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Sparkles,
                title: "Graphics Design",
                description: "Stunning visual designs that make your brand stand out",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Globe,
                title: "Digital Marketing",
                description: "Strategic online presence and content optimization",
                gradient: "from-green-500 to-blue-500"
              }
            ].map((service, index) => (
              <Card key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose EN Production?
              </h2>
              <div className="space-y-6">
                {[
                  "Award-winning creative team with international recognition",
                  "Kenya-based with global remote service capabilities",
                  "Fast turnaround times without compromising quality",
                  "Comprehensive services from concept to completion"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Team at Work"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-300">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 border-t border-white/10">
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
