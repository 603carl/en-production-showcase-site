
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Star, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const portfolioProjects = [
  {
    id: 1,
    title: "TechCorp Brand Documentary",
    category: "Commercial Films",
    year: "2024",
    client: "TechCorp Industries",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A compelling brand story showcasing innovation and leadership in the tech industry.",
    views: "2.5M",
    engagement: "15.2%",
    tags: ["Brand Story", "Corporate", "Documentary"]
  },
  {
    id: 2,
    title: "Fashion Week Highlights",
    category: "Event Documentation",
    year: "2024",
    client: "Fashion Forward Events",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "High-energy coverage of fashion week with cinematic flair and artistic vision.",
    views: "1.8M",
    engagement: "22.7%",
    tags: ["Fashion", "Event", "Cinematic"]
  },
  {
    id: 3,
    title: "StartupX Product Launch",
    category: "Corporate Projects",
    year: "2023",
    client: "StartupX",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Dynamic product launch video that drove 300% increase in pre-orders.",
    views: "980K",
    engagement: "28.4%",
    tags: ["Product Launch", "Startup", "Marketing"]
  },
  {
    id: 4,
    title: "Viral Marketing Campaign",
    category: "Creative Campaigns",
    year: "2023",
    client: "BrandHub",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Creative campaign that reached 10M+ users across social platforms.",
    views: "10.2M",
    engagement: "35.1%",
    tags: ["Viral", "Social Media", "Creative"]
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Commercial Films", "Corporate Projects", "Creative Campaigns", "Event Documentation"];

  const filteredProjects = portfolioProjects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              EN Production
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="hover:text-purple-400 transition-colors">Services</Link>
              <Link to="/portfolio" className="text-purple-400">Portfolio</Link>
              <Link to="/about" className="hover:text-purple-400 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our latest projects and creative achievements across multiple industries and platforms
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Navigation */}
      <section className="py-12 bg-gray-900">
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
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
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
                    ? "bg-gradient-to-r from-purple-600 to-blue-600" 
                    : "border-gray-600 text-gray-300 hover:border-purple-500"
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
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Project
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Featured Project"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-purple-600">Commercial Films</Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">2024</Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">TechCorp Brand Documentary</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    A compelling 15-minute brand documentary that showcases TechCorp's innovation journey and market leadership. This project involve extensive interviews with C-level executives and on-location filming across three countries.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-purple-400" />
                      <span className="text-gray-300">2.5M Views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-400" />
                      <span className="text-gray-300">15.2% Engagement</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Client Results:</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• 40% increase in brand awareness</li>
                        <li>• 25% boost in investor interest</li>
                        <li>• Featured in 15+ industry publications</li>
                      </ul>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      View Case Study
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-purple-600/80 backdrop-blur-sm">{project.category}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
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
                  
                  <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400">
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Ready to Create Your Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with the same excellence showcased in our portfolio
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 rounded-full">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
