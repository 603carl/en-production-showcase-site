
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Image, Youtube, Instagram, Mail } from "lucide-react";

const services = [
  {
    title: "Film Production",
    description: "Cinematic storytelling with professional-grade equipment and creative vision",
    icon: Camera,
    color: "from-purple-500 to-pink-500",
    features: ["4K/8K Video Production", "Drone Cinematography", "Post-Production", "Color Grading"]
  },
  {
    title: "Graphics Design",
    description: "Motion graphics, visual effects, and compelling visual narratives",
    icon: Image,
    color: "from-blue-500 to-cyan-500",
    features: ["Motion Graphics", "VFX & Animation", "Title Sequences", "Digital Compositing"]
  },
  {
    title: "YouTube Content",
    description: "Channel optimization, content strategy, and audience growth solutions",
    icon: Youtube,
    color: "from-red-500 to-orange-500",
    features: ["Content Strategy", "Video Editing", "Thumbnail Design", "Channel Growth"]
  },
  {
    title: "Photography",
    description: "Professional photography for events, products, and corporate needs",
    icon: Camera,
    color: "from-green-500 to-teal-500",
    features: ["Event Photography", "Product Shoots", "Corporate Headshots", "Photo Retouching"]
  },
  {
    title: "Business Branding",
    description: "Complete brand identity development and marketing material creation",
    icon: Mail,
    color: "from-indigo-500 to-purple-500",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"]
  }
];

const ServicesGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card 
          key={index}
          className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-500 group cursor-pointer transform hover:scale-105"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
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

            <div className={`space-y-2 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 max-h-40' : 'opacity-70 max-h-32 overflow-hidden'}`}>
              {service.features.map((feature, featureIndex) => (
                <Badge 
                  key={featureIndex}
                  variant="secondary" 
                  className="bg-gray-700/50 text-gray-300 mr-2 mb-2 hover:bg-purple-600/20 transition-colors"
                >
                  {feature}
                </Badge>
              ))}
            </div>

            <div className={`mt-6 text-purple-400 font-medium transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-x-2' : 'opacity-0'}`}>
              Learn More →
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServicesGrid;
