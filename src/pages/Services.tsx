
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Image, Youtube, Instagram, Mail, ArrowRight, Play } from "lucide-react";

const services = [
  {
    id: "film-production",
    title: "Film Production",
    description: "Cinematic storytelling with professional-grade equipment and creative vision",
    icon: Camera,
    color: "from-purple-500 to-pink-500",
    features: ["4K/8K Video Production", "Drone Cinematography", "Post-Production", "Color Grading"],
    process: [
      "Pre-production Planning",
      "Location Scouting",
      "Filming & Direction",
      "Post-Production",
      "Final Delivery"
    ],
    portfolio: [
      {
        title: "Tech Startup Launch",
        thumbnail: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "3:45"
      },
      {
        title: "Corporate Documentary",
        thumbnail: "https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "12:30"
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
    process: [
      "Creative Briefing",
      "Concept Development",
      "Design Creation",
      "Animation & Effects",
      "Final Rendering"
    ],
    portfolio: [
      {
        title: "Brand Animation",
        thumbnail: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "1:20"
      },
      {
        title: "Motion Graphics Reel",
        thumbnail: "https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "2:15"
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
    process: [
      "Channel Analysis",
      "Content Planning",
      "Video Production",
      "Optimization",
      "Growth Tracking"
    ],
    portfolio: [
      {
        title: "Tech Channel Growth",
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "8:45"
      },
      {
        title: "Educational Series",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "15:20"
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
    process: [
      "Consultation",
      "Location Setup",
      "Photo Session",
      "Post-Processing",
      "Final Delivery"
    ],
    portfolio: [
      {
        title: "Corporate Event",
        thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "Gallery"
      },
      {
        title: "Product Photography",
        thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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
    process: [
      "Brand Discovery",
      "Strategy Development",
      "Design Creation",
      "Brand Guidelines",
      "Implementation"
    ],
    portfolio: [
      {
        title: "Startup Rebrand",
        thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "Case Study"
      },
      {
        title: "Restaurant Brand",
        thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        duration: "Case Study"
      }
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    window.location.href = `/services/${serviceId}`;
  };

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
              <a href="/services" className="text-purple-400">Services</a>
              <a href="/portfolio" className="hover:text-purple-400 transition-colors">Portfolio</a>
              <a href="/about" className="hover:text-purple-400 transition-colors">About</a>
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
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From cinematic productions to digital branding, we deliver exceptional creative solutions that elevate your brand and drive meaningful connections with your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id}
                className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-500 group cursor-pointer transform hover:scale-105"
                onClick={() => handleServiceClick(service.id)}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className="bg-gray-700/50 text-gray-300 mr-2 mb-2 hover:bg-purple-600/20 transition-colors"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-medium">Learn More</span>
                    <ArrowRight className="h-5 w-5 text-purple-400 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-gray-300">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {["Discovery", "Strategy", "Creation", "Refinement", "Delivery"].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step}</h3>
                <p className="text-gray-400 text-sm">
                  {index === 0 && "Understanding your vision and requirements"}
                  {index === 1 && "Developing the perfect approach"}
                  {index === 2 && "Bringing your project to life"}
                  {index === 3 && "Perfecting every detail"}
                  {index === 4 && "Final delivery and support"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our professional services
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 rounded-full">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
