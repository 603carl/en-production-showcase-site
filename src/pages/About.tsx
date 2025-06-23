
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Alex Rodriguez",
    position: "Creative Director & Founder",
    bio: "With over 8 years in film production, Alex leads our creative vision and ensures every project exceeds expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    skills: ["Film Direction", "Creative Strategy", "Team Leadership"],
    email: "alex@enproduction.com",
    phone: "+1 (555) 123-4567",
    instagram: "@alex_enproduction",
    linkedin: "alex-rodriguez-ep"
  },
  {
    id: 2,
    name: "Sarah Chen",
    position: "Head of Graphics Design",
    bio: "Sarah brings visual stories to life through motion graphics and innovative design solutions for top-tier brands.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    skills: ["Motion Graphics", "Brand Design", "Visual Effects"],
    email: "sarah@enproduction.com",
    phone: "+1 (555) 123-4568",
    instagram: "@sarah_designs",
    linkedin: "sarah-chen-design"
  },
  {
    id: 3,
    name: "Marcus Johnson",
    position: "Lead Cinematographer",
    bio: "Marcus captures breathtaking visuals with cutting-edge equipment and an artistic eye for cinematic excellence.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    skills: ["Cinematography", "Drone Operations", "Color Grading"],
    email: "marcus@enproduction.com",
    phone: "+1 (555) 123-4569",
    instagram: "@marcus_cinema",
    linkedin: "marcus-johnson-cinema"
  },
  {
    id: 4,
    name: "Emma Thompson",
    position: "Content Strategy Manager",
    bio: "Emma develops comprehensive content strategies that drive engagement and growth for YouTube channels and digital platforms.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    skills: ["Content Strategy", "YouTube Growth", "Analytics"],
    email: "emma@enproduction.com",
    phone: "+1 (555) 123-4570",
    instagram: "@emma_content",
    linkedin: "emma-thompson-content"
  }
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              EN Production
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-purple-400 transition-colors">Home</a>
              <a href="/services" className="hover:text-purple-400 transition-colors">Services</a>
              <a href="/portfolio" className="hover:text-purple-400 transition-colors">Portfolio</a>
              <a href="/about" className="text-purple-400">About</a>
              <a href="/contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About EN Production
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a passionate team of creative professionals dedicated to bringing your vision to life through exceptional film production, design, and digital storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2019, EN Production emerged from a shared vision to create extraordinary visual content that goes beyond traditional boundaries. What started as a small creative studio has grown into a full-service production company serving clients worldwide.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our journey began with a simple belief: every brand has a unique story worth telling. Through innovative filmmaking, cutting-edge design, and strategic content creation, we help brands connect with their audiences on a deeper level.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">250+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">98%</div>
                  <div className="text-gray-400">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-gray-400">Team Members</div>
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

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300">
              Creative professionals passionate about bringing your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card 
                key={member.id}
                className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-500 group cursor-pointer"
                onClick={() => setSelectedMember(member.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-purple-500/30 group-hover:ring-purple-400 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.skills.slice(0, 2).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="ghost" className="p-2">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-purple-900/20 to-transparent border-purple-500/30">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-purple-400">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To create extraordinary visual experiences that captivate audiences and elevate brands through cutting-edge film production, innovative design, and strategic digital storytelling that drives meaningful connections and business growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-900/20 to-transparent border-blue-500/30">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-blue-400">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the world's most innovative and trusted creative production partner, setting new standards in visual storytelling while empowering brands to connect authentically with their audiences in the digital age.
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
