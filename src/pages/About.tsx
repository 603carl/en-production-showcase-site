
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Facebook, MessageCircle, Award, Users, Calendar, TrendingUp, Sparkles, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageBackgrounds } from "@/hooks/usePlaybookAPI";

const teamMembers = [
  {
    id: 1,
    name: "Alex Mwangi",
    position: "Creative Director & Founder",
    bio: "Award-winning filmmaker with 8+ years of experience in creating compelling visual stories for local and international clients.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    skills: ["Film Direction", "Creative Strategy", "Brand Development"],
    email: "alex@enproduction.co.ke",
    phone: "+254 700 000 001",
    instagram: "@alex_enproduction",
    facebook: "alex.enproduction"
  },
  {
    id: 2,
    name: "Grace Nyambura",
    position: "Head of Graphics Design",
    bio: "Creative designer specializing in motion graphics and brand identity, bringing visual stories to life for top-tier brands.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    skills: ["Motion Graphics", "Brand Design", "Visual Effects"],
    email: "grace@enproduction.co.ke",
    phone: "+254 700 000 002",
    instagram: "@grace_designs",
    facebook: "grace.enproduction"
  },
  {
    id: 3,
    name: "James Ochieng",
    position: "Lead Cinematographer",
    bio: "Master of visual storytelling with expertise in cinematography and cutting-edge equipment operation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    skills: ["Cinematography", "Drone Operations", "Color Grading"],
    email: "james@enproduction.co.ke",
    phone: "+254 700 000 003",
    instagram: "@james_cinema",
    facebook: "james.enproduction"
  },
  {
    id: 4,
    name: "Mary Wanjiku",
    position: "Content Strategy Manager",
    bio: "Strategic content expert developing comprehensive campaigns that drive engagement and growth across digital platforms.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    skills: ["Content Strategy", "Digital Marketing", "Analytics"],
    email: "mary@enproduction.co.ke",
    phone: "+254 700 000 004",
    instagram: "@mary_content",
    facebook: "mary.enproduction"
  }
];

const About = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const { data: backgrounds } = usePageBackgrounds('about');

  useEffect(() => {
    if (backgrounds && backgrounds.length > 0) {
      const interval = setInterval(() => {
        setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [backgrounds]);

  const currentBg = backgrounds?.[currentBgIndex] || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

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
                    item.to === "/about" 
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-blue-900/30 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float`}
              style={{
                left: `${5 + (i * 9)}%`,
                top: `${15 + Math.random() * 70}%`,
                animationDelay: `${i * 0.4}s`,
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
                Est. 2017 • Award-Winning Studio
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight animate-scale-in-bounce" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                EN Production
              </span>
            </h1>
            
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
              Award-winning creative studio based in Kenya, delivering exceptional visual experiences to clients worldwide through innovative storytelling and cutting-edge technology.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-slide-up-fade" style={{ animationDelay: '0.6s' }}>
              {[
                { icon: Award, label: "Awards", value: "15+" },
                { icon: Users, label: "Team", value: "20+" },
                { icon: Calendar, label: "Years", value: "8+" },
                { icon: TrendingUp, label: "Projects", value: "200+" }
              ].map((stat, index) => (
                <div key={index} className="text-center glass-card p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105">
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
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
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125 shadow-lg shadow-blue-400/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Company Story */}
      <section className="py-32 bg-gradient-to-br from-gray-900/90 via-black to-purple-900/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up-fade">
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Founded in 2017, EN Production emerged as Kenya's premier creative studio with a vision to deliver world-class visual content. What started as a passionate pursuit has grown into an award-winning company serving clients across Africa and beyond.
              </p>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                We've won numerous international awards including the African Film Festival Excellence Award, Kenya Creative Industry Recognition, and multiple client choice awards for outstanding service delivery.
              </p>
              
              <div className="grid grid-cols-3 gap-8 mb-10">
                {[
                  { value: "147+", label: "Projects", color: "text-blue-400" },
                  { value: "98%", label: "Satisfaction", color: "text-purple-400" },
                  { value: "8+", label: "Awards", color: "text-pink-400" }
                ].map((stat, index) => (
                  <div key={index} className="text-center animate-scale-in-bounce" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                    <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/portfolio">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-full btn-glow transform hover:scale-105 transition-all duration-300">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 group cursor-pointer relative transform hover:scale-105 transition-all duration-700 shadow-2xl shadow-blue-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Studio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2">Our Creative Studio</h3>
                  <p className="text-gray-200">Where innovation meets artistry</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up-fade">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-300">
              Our excellence recognized by industry leaders worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "African Film Festival Excellence Award", year: "2023", icon: Award },
              { title: "Kenya Creative Industry Recognition", year: "2022", icon: Star },
              { title: "Best Production Company - East Africa", year: "2021", icon: TrendingUp },
              { title: "Client Choice Award - Outstanding Service", year: "2023", icon: Users }
            ].map((award, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-700 group text-center transform hover:scale-105 hover:-translate-y-2 animate-slide-up-fade"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl">
                    <award.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                    {award.title}
                  </h3>
                  <Badge className="bg-blue-600/20 text-blue-300 border-blue-400/30">
                    {award.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900/90 via-black to-purple-900/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-32 left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up-fade">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300">
              Creative professionals passionate about visual excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.id}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-700 group transform hover:scale-105 hover:-translate-y-4 animate-slide-up-fade"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-blue-500/30 group-hover:ring-blue-400 transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-4 text-sm">{member.position}</p>
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.skills.slice(0, 2).map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-gray-700/50 text-gray-300 text-xs hover:bg-blue-600/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3">
                    {[
                      { icon: Mail, color: "hover:text-blue-400" },
                      { icon: MessageCircle, color: "hover:text-green-400" },
                      { icon: Instagram, color: "hover:text-pink-400" },
                      { icon: Facebook, color: "hover:text-blue-500" }
                    ].map((social, socialIndex) => (
                      <Button 
                        key={socialIndex}
                        size="sm" 
                        variant="ghost" 
                        className={`p-2 ${social.color} transition-all duration-300 hover:scale-110`}
                      >
                        <social.icon className="h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/30 hover:border-blue-400/50 transition-all duration-700 group transform hover:scale-105 animate-slide-up-fade">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-6 text-blue-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To create extraordinary visual experiences that elevate brands and captivate audiences through innovative storytelling, cutting-edge technology, and unwavering commitment to excellence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30 hover:border-purple-400/50 transition-all duration-700 group transform hover:scale-105 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-6 text-purple-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To be Africa's leading creative production company, setting new standards in visual storytelling while empowering brands to connect authentically with their audiences worldwide.
                </p>
              </CardContent>
            </Card>
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
            <h2 className="text-5xl font-bold mb-8 text-white">Ready to Work Together?</h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let's create something extraordinary that will captivate your audience and elevate your brand
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-12 py-8 rounded-full btn-glow transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/30">
                  <Star className="mr-3 h-6 w-6" />
                  Start Your Project
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 text-xl px-12 py-8 rounded-full backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50">
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

export default About;
