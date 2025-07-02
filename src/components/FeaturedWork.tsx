
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Eye, Heart, ExternalLink, Calendar } from "lucide-react";
import { useBehanceProjects } from "@/hooks/useBehanceAPI";

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
  const { data: behanceProjects, isLoading } = useBehanceProjects();
  
  // Combine static projects with Behance data
  const allProjects = [
    ...(behanceProjects?.map(project => ({
      title: project.name,
      category: project.fields[0] || 'Creative Work',
      description: project.description,
      image: project.covers.original,
      tags: project.tags.slice(0, 3),
      stats: project.stats,
      url: project.url,
      source: 'behance' as const
    })) || []),
    ...projects.map(project => ({ ...project, source: 'static' as const }))
  ];

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
      {!isLoading && allProjects.length > 0 && (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up-fade">
            <div className="flex items-center gap-4">
              <Badge className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border-blue-600/30 backdrop-blur-sm">
                {allProjects[activeProject].category}
              </Badge>
              {allProjects[activeProject].source === 'behance' && (
                <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                  Portfolio Featured
                </Badge>
              )}
            </div>
            
            <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-scale-in-bounce">
              {allProjects[activeProject].title}
            </h3>
            
            <p className="text-xl text-gray-300 leading-relaxed animate-fade-in">
              {allProjects[activeProject].description}
            </p>

            {/* Stats for Behance projects */}
            {allProjects[activeProject].source === 'behance' && 'stats' in allProjects[activeProject] && (
              <div className="flex items-center gap-6 text-gray-400 animate-slide-up-fade">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-blue-400" />
                  <span>{allProjects[activeProject].stats?.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-400" />
                  <span>{allProjects[activeProject].stats?.appreciations.toLocaleString()}</span>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2 animate-slide-up-fade">
              {allProjects[activeProject].tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-blue-400/50 text-blue-300 hover:bg-blue-600/20 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4 animate-slide-up-fade">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20"
              >
                <Play className="mr-2 h-5 w-5" />
                View Case Study
              </Button>
              
              {allProjects[activeProject].source === 'behance' && (
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-full font-medium transition-all duration-300"
                  onClick={() => window.open((allProjects[activeProject] as any).url, '_blank')}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View on Behance
                </Button>
              )}
            </div>
          </div>

          <div className="relative animate-scale-in-bounce">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 group cursor-pointer shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500">
              <img 
                src={allProjects[activeProject].image}
                alt={allProjects[activeProject].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-20 h-20 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/50 shadow-xl hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              
              {/* Premium overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      )}

      {/* Project Thumbnails */}
      {!isLoading && allProjects.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {allProjects.map((project, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-500 transform hover:scale-105 group portfolio-thumbnail animate-slide-up-fade ${
                activeProject === index 
                  ? 'ring-2 ring-blue-500 bg-gradient-to-br from-blue-900/20 to-purple-900/20 shadow-xl shadow-blue-500/20' 
                  : 'bg-gray-800/30 hover:bg-gray-800/50 hover:shadow-lg'
              }`}
              onClick={() => setActiveProject(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-3 group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Source indicator */}
                  {project.source === 'behance' && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-orange-500/80 backdrop-blur-sm text-white text-xs">
                        Portfolio
                      </Badge>
                    </div>
                  )}
                  
                  {/* Active indicator */}
                  {activeProject === index && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="h-4 w-4 text-white ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="space-y-1">
                  <h4 className={`font-medium text-sm truncate transition-colors duration-300 ${
                    activeProject === index 
                      ? 'text-blue-400' 
                      : 'text-white group-hover:text-blue-300'
                  }`}>
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-xs flex items-center gap-1">
                    {project.category}
                  </p>
                  
                  {/* Stats for Behance projects */}
                  {project.source === 'behance' && 'stats' in project && (
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{project.stats?.views > 1000 ? `${Math.floor(project.stats.views / 1000)}k` : project.stats?.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        <span>{project.stats?.appreciations > 1000 ? `${Math.floor(project.stats.appreciations / 1000)}k` : project.stats?.appreciations}</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedWork;
