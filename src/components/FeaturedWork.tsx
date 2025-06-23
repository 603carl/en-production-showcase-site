
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Tech Startup Launch Campaign",
    category: "Film Production",
    description: "A compelling brand story that secured $2M in funding",
    image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Cinematic", "Corporate", "Brand Story"]
  },
  {
    title: "Fashion Brand Visual Identity",
    category: "Graphics Design",
    description: "Complete rebrand including motion graphics and digital assets",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Branding", "Motion Graphics", "Digital"]
  },
  {
    title: "YouTube Channel Growth",
    category: "YouTube Content",
    description: "Grew subscriber base from 10K to 500K in 8 months",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Content Strategy", "Editing", "Growth"]
  },
  {
    title: "Corporate Event Coverage",
    category: "Photography",
    description: "Multi-day conference with 500+ professional portraits",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Event", "Corporate", "Professional"]
  }
];

const FeaturedWork = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="space-y-8">
      {/* Project Filter Tabs */}
      <div className="flex flex-wrap gap-4 justify-center">
        {["All", "Film Production", "Graphics Design", "YouTube Content", "Photography"].map((filter, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              index === 0 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Featured Project Showcase */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30">
            {projects[activeProject].category}
          </Badge>
          
          <h3 className="text-4xl font-bold text-white">
            {projects[activeProject].title}
          </h3>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            {projects[activeProject].description}
          </p>

          <div className="flex flex-wrap gap-2">
            {projects[activeProject].tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="border-gray-600 text-gray-300">
                {tag}
              </Badge>
            ))}
          </div>

          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            View Case Study
          </button>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 group cursor-pointer">
            <img 
              src={projects[activeProject].image}
              alt={projects[activeProject].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <Card 
            key={index}
            className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              activeProject === index 
                ? 'ring-2 ring-purple-500 bg-gray-800' 
                : 'bg-gray-800/50 hover:bg-gray-800'
            }`}
            onClick={() => setActiveProject(index)}
          >
            <CardContent className="p-4">
              <div className="aspect-video rounded-lg overflow-hidden mb-3">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-white text-sm truncate">
                {project.title}
              </h4>
              <p className="text-gray-400 text-xs">
                {project.category}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedWork;
