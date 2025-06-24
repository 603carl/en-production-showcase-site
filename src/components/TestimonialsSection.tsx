
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTestimonials } from "@/hooks/usePlaybookAPI";

const TestimonialsSection = () => {
  const { data: testimonials, isLoading } = useTestimonials();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (testimonials && testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [testimonials]);

  if (isLoading) {
    return (
      <section className="py-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-800 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-800 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-lg text-gray-300">
            Hear from the brands we've helped transform
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 ring-4 ring-purple-500/30"
                  />
                  <blockquote className="text-lg md:text-xl text-gray-100 italic leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-purple-400 font-medium text-sm">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
