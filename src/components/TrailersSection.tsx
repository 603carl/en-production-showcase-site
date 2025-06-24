
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Eye, Heart, Calendar, ExternalLink } from "lucide-react";
import { useTrailers } from "@/hooks/usePlaybookAPI";

const TrailersSection = () => {
  const { data: trailers, isLoading, error } = useTrailers();
  const [selectedTrailer, setSelectedTrailer] = useState<string | null>(null);

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900/90 via-black to-blue-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading latest trailers...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900/90 via-black to-blue-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-red-400">Failed to load trailers. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900/90 via-black to-blue-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Latest Trailers & Showcases
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our most recent cinematic creations and brand campaigns that have captivated audiences across Kenya and beyond
          </p>
        </div>

        {/* Featured Trailer */}
        {trailers && trailers[0] && (
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Trailer
              </h3>
              <Card className="glass-card border-blue-500/30 overflow-hidden group">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={trailers[0].thumbnail}
                      alt={trailers[0].title}
                      className="w-full h-80 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Button 
                        size="lg"
                        className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/50 hover:bg-blue-600/40 text-white rounded-full w-20 h-20"
                        onClick={() => setSelectedTrailer(trailers[0].id)}
                      >
                        <Play className="h-8 w-8 ml-1" />
                      </Button>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600/80 backdrop-blur-sm text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {trailers[0].tags.map((tag, index) => (
                        <Badge 
                          key={index}
                          variant="outline" 
                          className="border-blue-400/50 text-blue-300 hover:bg-blue-600/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h4 className="text-3xl font-bold mb-4 text-white">
                      {trailers[0].title}
                    </h4>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {trailers[0].description}
                    </p>
                    
                    <div className="flex items-center gap-6 mb-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Eye className="h-5 w-5 text-blue-400" />
                        <span>{trailers[0].views?.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-pink-400" />
                        <span>{trailers[0].likes?.toLocaleString()} likes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-purple-400" />
                        <span>{new Date(trailers[0].created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => setSelectedTrailer(trailers[0].id)}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Watch Trailer
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
        )}

        {/* Trailer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trailers?.slice(1).map((trailer, index) => (
            <Card 
              key={trailer.id}
              className="glass-card border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedTrailer(trailer.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={trailer.thumbnail}
                  alt={trailer.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/50">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-1">
                    {trailer.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        className="bg-blue-600/20 backdrop-blur-sm text-blue-300 border border-blue-400/30 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {trailer.title}
                </h4>
                
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {trailer.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>{trailer.views?.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    <span>{trailer.likes?.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-full"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrailersSection;
