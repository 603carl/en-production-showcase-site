
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO & Founder",
    content: "EN Production transformed our vision into a compelling story that helped us secure Series A funding. Their attention to detail and creative approach exceeded all expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Michael Chen",
    company: "Creative Agency",
    role: "Creative Director",
    content: "Working with EN Production elevated our client campaigns to award-winning levels. Their technical expertise and artistic vision are unmatched in the industry.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Emma Rodriguez",
    company: "Fashion Forward",
    role: "Brand Manager",
    content: "The complete rebrand and visual identity work delivered by EN Production increased our brand recognition by 300%. Simply outstanding results.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300">
            Hear from the brands we've helped transform
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="mb-8">
                  <img 
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 ring-4 ring-purple-500/30"
                  />
                  <blockquote className="text-2xl md:text-3xl text-gray-100 italic leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-purple-400 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
