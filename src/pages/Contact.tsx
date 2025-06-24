
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Sparkles, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageBackgrounds } from "@/hooks/usePlaybookAPI";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    contact: "+254 700 000 000",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed message",
    contact: "hello@enproduction.co.ke",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick chat and file sharing",
    contact: "+254 700 000 000",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our creative studio",
    contact: "Nairobi, Kenya",
    color: "from-purple-500 to-pink-500"
  }
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Simple projects take 1-2 weeks, while comprehensive campaigns can take 4-8 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! While we're based in Kenya, we serve clients globally. We use digital collaboration tools and can accommodate different time zones for seamless project management."
  },
  {
    question: "What's included in your video production service?",
    answer: "Our video production includes pre-production planning, professional filming with 4K/8K equipment, drone cinematography when needed, post-production editing, color grading, and final delivery in your preferred formats."
  },
  {
    question: "Can you handle last-minute projects?",
    answer: "We understand urgent needs and will do our best to accommodate rush projects. Additional fees may apply for expedited delivery, but we'll always be transparent about costs and timelines."
  },
  {
    question: "Do you provide revisions?",
    answer: "Yes! We include up to 3 rounds of revisions in all our packages. Additional revisions can be requested at a nominal fee. Our goal is your complete satisfaction with the final product."
  }
];

const Contact = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const { data: backgrounds } = usePageBackgrounds('contact');

  useEffect(() => {
    if (backgrounds && backgrounds.length > 0) {
      const interval = setInterval(() => {
        setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [backgrounds]);

  const currentBg = backgrounds?.[currentBgIndex] || 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

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
                    item.to === "/contact" 
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-green-900/20 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="animate-slide-up-fade">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-300 text-sm font-medium animate-pulse-glow">
                <Sparkles className="h-4 w-4" />
                Let's Create Something Amazing Together
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight animate-scale-in-bounce" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent">
                Get In
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Touch
              </span>
            </h1>
            
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
              Ready to bring your vision to life? Let's discuss your project and create something extraordinary that will captivate your audience.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-slide-up-fade" style={{ animationDelay: '0.6s' }}>
              {[
                { icon: Clock, label: "Response", value: "< 2hrs" },
                { icon: CheckCircle, label: "Success Rate", value: "98%" },
                { icon: Star, label: "Rating", value: "5.0★" },
                { icon: MessageCircle, label: "Languages", value: "EN/SW" }
              ].map((stat, index) => (
                <div key={index} className="text-center glass-card p-4 rounded-xl border border-white/10 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105">
                  <stat.icon className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </div>
              ))}
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
                    ? 'bg-gradient-to-r from-green-400 to-blue-400 scale-125 shadow-lg shadow-green-400/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Contact Methods */}
      <section className="py-32 bg-gradient-to-br from-gray-900/90 via-black to-green-900/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up-fade">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              How to Reach Us
            </h2>
            <p className="text-xl text-gray-300">
              Multiple ways to connect - choose what works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-700 group cursor-pointer transform hover:scale-105 hover:-translate-y-4 text-center animate-slide-up-fade"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} p-4 mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm">{method.description}</p>
                  
                  <p className="text-green-400 font-semibold group-hover:text-blue-400 transition-colors">
                    {method.contact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Card className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm animate-slide-up-fade">
              <CardHeader>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Start Your Project
                </CardTitle>
                <p className="text-gray-300">Tell us about your vision and we'll bring it to life</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500 text-white placeholder-gray-400 h-12"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500 text-white placeholder-gray-400 h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500 text-white placeholder-gray-400 h-12"
                      />
                    </div>
                    <div>
                      <Input
                        name="company"
                        placeholder="Company/Organization"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-gray-800/50 border-gray-700 focus:border-green-500 text-white placeholder-gray-400 h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full h-12 bg-gray-800/50 border border-gray-700 focus:border-green-500 text-white rounded-md px-3"
                      >
                        <option value="">Select Service</option>
                        <option value="film-production">Film Production</option>
                        <option value="graphics-design">Graphics Design</option>
                        <option value="youtube-content">YouTube Content</option>
                        <option value="photography">Photography</option>
                        <option value="business-branding">Business Branding</option>
                      </select>
                    </div>
                    <div>
                      <select 
                        name="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full h-12 bg-gray-800/50 border border-gray-700 focus:border-green-500 text-white rounded-md px-3"
                      >
                        <option value="">Budget Range (KES)</option>
                        <option value="50k-100k">50,000 - 100,000</option>
                        <option value="100k-300k">100,000 - 300,000</option>
                        <option value="300k-500k">300,000 - 500,000</option>
                        <option value="500k+">500,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project, goals, and timeline... *"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-gray-800/50 border-gray-700 focus:border-green-500 text-white placeholder-gray-400"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg py-6 rounded-full btn-glow transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="mr-3 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card 
                    key={index}
                    className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 border border-gray-700/50 hover:border-green-500/30 transition-all duration-500 cursor-pointer"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-white text-lg pr-4">{faq.question}</h4>
                        <div className={`transform transition-transform duration-300 ${expandedFaq === index ? 'rotate-45' : ''}`}>
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-lg font-bold">+</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`mt-4 text-gray-300 leading-relaxed transition-all duration-500 overflow-hidden ${
                        expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p>{faq.answer}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl border border-green-400/20">
                <h4 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h4>
                <p className="text-gray-300 mb-6">
                  Can't find what you're looking for? Our team is here to help with any specific questions about your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </Button>
                  <Button variant="outline" className="border-green-400/50 text-green-400 hover:bg-green-400/10 rounded-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-green-900/30 via-black to-blue-900/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-slide-up-fade">
            <h2 className="text-5xl font-bold mb-8 text-white">Let's Create Magic Together</h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Your vision combined with our expertise - that's where extraordinary projects are born
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-xl px-12 py-8 rounded-full btn-glow transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-green-500/30">
                <Star className="mr-3 h-6 w-6" />
                Start Your Project Today
              </Button>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 text-xl px-12 py-8 rounded-full backdrop-blur-sm transition-all duration-300 hover:border-green-400/50">
                  View Our Work
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
