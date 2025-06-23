
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Mail, Phone, Award, Users, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              EN Production
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="hover:text-purple-400 transition-colors">Services</Link>
              <Link to="/portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link>
              <Link to="/about" className="hover:text-purple-400 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Content */}
        <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-white to-blue-400 bg-clip-text text-transparent">
              Crafting Visual Stories
            </span>
            <br />
            <span className="text-white">That Captivate Audiences</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Award-winning film production company delivering exceptional content across all media platforms worldwide
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300">
                Start Your Project
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300">
                Watch Our Reel
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/60" />
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Brand Promise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three pillars that define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Creative Excellence</h3>
                <p className="text-gray-300">Original storytelling and artistic vision that sets your brand apart from the competition</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Technical Mastery</h3>
                <p className="text-gray-300">State-of-the-art equipment and expertise delivering cinema-quality results</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Timely Delivery</h3>
                <p className="text-gray-300">On-schedule project completion guarantee with transparent communication throughout</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L0 0h100L50 50z' fill='%23ffffff' fill-opacity='0.02'/%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300">
              Proven results that speak to our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  500+
                </div>
                <div className="text-gray-300 font-medium text-lg">
                  Projects Completed
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  98%
                </div>
                <div className="text-gray-300 font-medium text-lg">
                  Client Satisfaction
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  12+
                </div>
                <div className="text-gray-300 font-medium text-lg">
                  Years in Business
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  25+
                </div>
                <div className="text-gray-300 font-medium text-lg">
                  Awards Won
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Industry Recognition
            </h2>
            <p className="text-xl text-gray-300">
              Awards and acknowledgments from industry leaders
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Featured Testimonial</h3>
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/30">
                <blockquote className="text-xl text-gray-200 mb-6 italic">
                  "EN Production transformed our brand story into a cinematic masterpiece. Their attention to detail and creative vision exceeded all our expectations."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah Johnson</div>
                    <div className="text-gray-400">CEO, TechCorp Industries</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Awards & Certifications</h3>
              <div className="space-y-4">
                {[
                  "Best Commercial Production 2024",
                  "Creative Excellence Award 2023", 
                  "Industry Innovation Recognition 2023",
                  "Client Choice Award 2022"
                ].map((award, index) => (
                  <div key={index} className="flex items-center p-4 border border-gray-700 rounded-lg hover:border-purple-500/50 transition-colors">
                    <Award className="h-6 w-6 text-purple-400 mr-3" />
                    <span className="text-gray-200">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Get Industry Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 5,000+ industry professionals receiving exclusive content and project updates
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              Sample content: Behind-the-scenes insights, industry trends, and exclusive project previews
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                EN Production
              </div>
              <p className="text-gray-400">
                Creating exceptional visual experiences that captivate and inspire.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services" className="hover:text-purple-400 transition-colors">Film Production</Link></li>
                <li><Link to="/services" className="hover:text-purple-400 transition-colors">Graphics Design</Link></li>
                <li><Link to="/services" className="hover:text-purple-400 transition-colors">YouTube Content</Link></li>
                <li><Link to="/services" className="hover:text-purple-400 transition-colors">Photography</Link></li>
                <li><Link to="/services" className="hover:text-purple-400 transition-colors">Business Branding</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-purple-400 transition-colors">Our Team</Link></li>
                <li><Link to="/portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link></li>
                <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@enproduction.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EN Production. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
