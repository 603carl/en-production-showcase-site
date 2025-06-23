
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Star, Calendar, Users, ExternalLink, Play } from "lucide-react";
import { Link } from "react-router-dom";

// This would be replaced with actual API calls to Behance/Dribbble
const portfolioProjects = [
  {
    id: 1,
    title: "SafariCom Brand Campaign",
    category: "Film Production",
    year: "2024",
    client: "SafariCom",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A compelling brand story showcasing innovation and connectivity across Kenya.",
    views: "1.2M",
    engagement: "18.5%",
    tags: ["Brand Story", "Corporate", "Kenya"],
    behanceUrl: "https://behance.net/gallery/example1",
    featured: true
  },
  {
    id: 2,
    title: "Kenyan Fashion Week Highlight",
    category: "Event Documentation",
    year: "2024",
    client: "Fashion Week Nairobi",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "High-energy coverage of Kenya's premier fashion event with cinematic excellence.",
    views: "850K",
    engagement: "24.3%",
    tags: ["Fashion", "Event", "Documentary"],
    behanceUrl: "https://behance.net/gallery/example2"
  },
  {
    id: 3,
    title: "Tech Startup Launch Campaign",
    category: "Commercial",
    year: "2023",
    client: "TechHub Kenya",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Dynamic product launch video that drove 400% increase in user sign-ups.",
    views: "650K",
    engagement: "31.2%",
    tags: ["Product Launch", "Startup", "Animation"],
    behanceUrl: "https://behance.net/gallery/example3"
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState(portfolioProjects);
  const [loading, setLoading] = useState(false);

  const categories = ["All", "Film Production", "Commercial", "Event Documentation", "Graphics Design"];

  // Simulate API call to fetch portfolio data
  useEffect(() => {
    const fetchPortfolioData = async () => {
      setLoading(true);
      // This would be replaced with actual API calls to Behance/Dribbble
      // const response = await fetch('https://api.behance.net/v2/users/your-username/projects');
      // const data = await response.json();
      setTimeout(() => {
        setProjects(portfolioProjects);
        setLoading(false);
      }, 1000);
    };

    fetchPortfolioData();
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our latest projects and creative achievements across multiple industries
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Navigation */}
      <section className="py-8 bg-gray-900">
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
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600" 
                    : "border-gray-600 text-gray-300 hover:border-blue-500"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {filteredProjects.find(p => p.featured) && (
        <section className="py-16 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Project
              </h2>
            </div>

            {(() => {
              const featured = filteredProjects.find(p => p.featured);
              return (
                <div className="max-w-6xl mx-auto">
                  <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="relative group">
                        <img 
                          src={featured.image}
                          alt={featured.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-8">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge className="bg-blue-600">{featured.category}</Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">{featured.year}</Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">{featured.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {featured.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <Star className="h-5 w-5 text-blue-400" />
                            <span className="text-gray-300">{featured.views} Views</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-blue-400" />
                            <span className="text-gray-300">{featured.engagement} Engagement</span>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            View on Behance
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="text-gray-400 mt-4">Loading portfolio data...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.filter(p => !p.featured).map((project) => (
                <Card key={project.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group overflow-hidden">
                  <div className="relative">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-blue-600/80 backdrop-blur-sm">{project.category}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-gray-400 text-sm">{project.year}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{project.views} views</span>
                        <span>{project.engagement} engagement</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="border-gray-600 text-gray-400 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400">
                      View on Behance
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Create Your Story?
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
