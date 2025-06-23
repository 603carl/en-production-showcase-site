
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

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
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
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
                  className={`px-6 py-3 rounded-full bg-gradient-to-r backdrop-blur-sm border transition-all duration-300 hover:scale-105 text-white font-medium ${
                    item.to === "/about" 
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About EN Production
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Award-winning creative studio based in Kenya, delivering exceptional visual experiences to clients worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2017, EN Production emerged as Kenya's premier creative studio with a vision to deliver world-class visual content. What started as a passionate pursuit has grown into an award-winning company serving clients across Africa and beyond.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We've won numerous international awards including the African Film Festival Excellence Award, Kenya Creative Industry Recognition, and multiple client choice awards for outstanding service delivery.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">147+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">98%</div>
                  <div className="text-gray-400 text-sm">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">8+</div>
                  <div className="text-gray-400 text-sm">Awards</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Studio"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-300">
              Our excellence recognized by industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "African Film Festival Excellence Award 2023",
              "Kenya Creative Industry Recognition 2022",
              "Best Production Company - East Africa 2021",
              "Client Choice Award - Outstanding Service 2023"
            ].map((award, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-white font-medium text-sm">{award}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-300">
              Creative professionals passionate about visual excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card 
                key={member.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto object-cover ring-4 ring-blue-500/30 group-hover:ring-blue-400 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3 text-sm">{member.position}</p>
                  <p className="text-gray-300 text-xs mb-4 line-clamp-3">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.skills.slice(0, 2).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="ghost" className="p-2 hover:text-blue-400">
                      <Mail className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 hover:text-green-400">
                      <MessageCircle className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 hover:text-pink-400">
                      <Instagram className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 hover:text-blue-500">
                      <Facebook className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/20 to-transparent border-blue-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To create extraordinary visual experiences that elevate brands and captivate audiences through innovative storytelling, cutting-edge technology, and unwavering commitment to excellence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-900/20 to-transparent border-purple-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be Africa's leading creative production company, setting new standards in visual storytelling while empowering brands to connect authentically with their audiences worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
