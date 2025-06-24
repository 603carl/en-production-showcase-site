
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Play, Eye, Heart, Calendar, ExternalLink, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { usePortfolioByCategory } from "@/hooks/usePlaybookAPI";

const portfolioCategories = [
  "All",
  "Online Bestie",
  "About/show reel", 
  "Adds / Short Clips",
  "Cars",
  "Film",
  "GRAPHICS",
  "Photography, Designing, Behan...",
  "Podcast",
  "Trailer",
  "Tv"
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const { data: projects, isLoading, error } = usePortfolioByCategory(
    selectedCategory === "All" ? undefined : selectedCategory
  );

  const filteredProjects = projects?.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  }) || [];

  const featuredProject = filteredProjects.find(p => p.category === "About/show reel") || filteredProjects[0];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
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
                    item.to === "/portfolio" 
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Creative Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse collection of creative work across multiple industries and formats, directly from our Playbook portfolio
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Navigation */}
      <section className="py-8 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Real-time Update Indicator */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Live from Playbook
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {portfolioCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                    : "border-gray-600 text-gray-300 hover:border-blue-500 glass"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <section className="py-16 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-400">Loading portfolio from Playbook...</p>
            </div>
          </div>
        </section>
      )}

      {/* Error State */}
      {error && (
        <section className="py-16 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <p className="text-red-400">Failed to load portfolio. Please try again later.</p>
            </div>
          </div>
        </section>
      )}

      {/* Featured Project */}
      {featuredProject && !isLoading && (
        <section className="py-16 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Project
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className="glass-card border-blue-500/30 overflow-hidden group">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={featuredProject.thumbnail}
                      alt={featuredProject.title}
                      className="w-full h-80 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-20 h-20 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/50">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600/80 backdrop-blur-sm text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 w-fit mb-4">
                      {featuredProject.category}
                    </Badge>
                    
                    <h3 className="text-3xl font-bold mb-4 text-white">
                      {featuredProject.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {featuredProject.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.tags.map((tag, index) => (
                        <Badge 
                          key={index}
                          variant="outline" 
                          className="border-blue-400/50 text-blue-300 hover:bg-blue-600/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-6 mb-6 text-gray-400">
                      {featuredProject.views && (
                        <div className="flex items-center gap-2">
                          <Eye className="h-5 w-5 text-blue-400" />
                          <span>{featuredProject.views.toLocaleString()} views</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-purple-400" />
                        <span>{new Date(featuredProject.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Play className="h-4 w-4 mr-2" />
                        Watch Project
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:border-blue-500">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on Playbook
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      {!isLoading && (
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">
                {selectedCategory === "All" ? "All Projects" : selectedCategory}
                <span className="text-gray-400 ml-2">({filteredProjects.length})</span>
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Filter className="h-4 w-4" />
                Filtered by: {selectedCategory}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.filter(p => p.id !== featuredProject?.id).map((project) => (
                <Card 
                  key={project.id} 
                  className="glass-card border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group overflow-hidden cursor-pointer transform hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/50">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600/80 backdrop-blur-sm text-blue-300 text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 2).map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="border-gray-600 text-gray-400 text-xs hover:border-blue-500"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      {project.views && (
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{project.views.toLocaleString()}</span>
                        </div>
                      )}
                      <span>{new Date(project.created_at).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && !isLoading && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No projects found for "{selectedCategory}"</p>
                <p className="text-gray-500 text-sm mt-2">Try selecting a different category or adjusting your search terms</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with the same excellence showcased in our portfolio
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-full">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
