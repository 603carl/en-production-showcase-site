
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Eye, Heart, Calendar, Search, Filter, Grid, List, ArrowRight, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { usePortfolioByCategory, usePageBackgrounds } from "@/hooks/usePlaybookAPI";

const categories = [
  "All",
  "Online Bestie",
  "About/show reel", 
  "Adds / Short Clips",
  "Cars",
  "Film",
  "GRAPHICS",
  "Photography, Designing, Behan...",
  "Podcast",
  "Tv"
];

const Portfolio = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const { data: backgrounds } = usePageBackgrounds('portfolio');
  const { data: portfolio, isLoading } = usePortfolioByCategory(selectedCategory === "All" ? undefined : selectedCategory);

  useEffect(() => {
    if (backgrounds && backgrounds.length > 0) {
      const interval = setInterval(() => {
        setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [backgrounds]);

  const currentBg = backgrounds?.[currentBgIndex] || 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

  const filteredPortfolio = portfolio?.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  ) || [];

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
                    item.to === "/portfolio" 
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/30 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float`}
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="animate-slide-up-fade">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium animate-pulse-glow">
                <Sparkles className="h-4 w-4" />
                Award-Winning Portfolio
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight animate-scale-in-bounce" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Portfolio
              </span>
            </h1>
            
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
              Explore our collection of award-winning projects that have transformed brands and captivated audiences across Kenya and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up-fade" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-10 py-6 rounded-full btn-glow transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/30">
                <Play className="mr-3 h-6 w-6" />
                Watch Showreel
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 text-xl px-10 py-6 rounded-full backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50">
                  Start Your Project
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
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

      {/* Portfolio Content */}
      <section className="py-32 bg-gradient-to-br from-gray-900/90 via-black to-purple-900/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-32 left-16 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Search and Filter Controls */}
          <div className="mb-16 animate-slide-up-fade">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 bg-gray-800/50 border-gray-700 focus:border-blue-500 text-white placeholder-gray-400 h-12 rounded-full"
                />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-800/50 rounded-full p-1">
                  <Button
                    size="sm"
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    onClick={() => setViewMode("grid")}
                    className="rounded-full"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant={viewMode === "list" ? "default" : "ghost"}
                    onClick={() => setViewMode("list")}
                    className="rounded-full"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-500 category-filter animate-slide-up-fade ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 category-filter active'
                      : 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid/List */}
          {isLoading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-400 text-xl">Loading portfolio...</p>
            </div>
          ) : (
            <div className={`${
              viewMode === "grid" 
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
                : "space-y-8"
            }`}>
              {filteredPortfolio.map((project, index) => (
                <Card 
                  key={project.id}
                  className={`bg-gradient-to-br from-gray-800/30 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-700 group cursor-pointer portfolio-card animate-slide-up-fade ${
                    viewMode === "list" ? "flex flex-row overflow-hidden h-48" : "overflow-hidden"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative ${viewMode === "list" ? "w-80 flex-shrink-0" : "aspect-video"} overflow-hidden`}>
                    <img 
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 portfolio-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-16 h-16 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/50 shadow-xl">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600/80 backdrop-blur-sm text-white">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className={`${viewMode === "list" ? "flex-1 flex flex-col justify-center" : ""} p-8`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex}
                          variant="outline" 
                          className="border-blue-400/50 text-blue-300 hover:bg-blue-600/20 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-300 mb-6 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-blue-400" />
                          <span>{project.views?.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-purple-400" />
                          <span>{new Date(project.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between group-hover:transform group-hover:translate-x-2 transition-all duration-300">
                      <span className="text-purple-400 font-semibold">View Project</span>
                      <ArrowRight className="h-5 w-5 text-purple-400 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-20 animate-slide-up-fade">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with our award-winning creative expertise
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-10 py-6 rounded-full btn-glow transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/30">
                <Star className="mr-3 h-6 w-6" />
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
