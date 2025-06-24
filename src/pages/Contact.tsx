
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    projectDetails: ""
  });

  const services = [
    "Film Production",
    "Graphics Design", 
    "YouTube Content",
    "Photography",
    "Business Branding",
    "Custom Package"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

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
                    item.to === "/contact" 
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
              Let's Create Together
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your vision to life? Get in touch with Kenya's premier creative studio for a free consultation and custom project proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Start Your Project
              </h2>
              
              <Card className="glass-card border-gray-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="+254 700 000 000"
                        required
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Service Needed *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-gray-800">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Project Details *</label>
                      <textarea
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 glass border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        placeholder="Tell us about your project vision, goals, timeline, and budget..."
                        required
                      ></textarea>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Send Project Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Primary Contact */}
                <Card className="glass-card border-gray-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Primary Contact</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-blue-400" />
                        <span className="text-gray-300">+254 700 123 456</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-400" />
                        <span className="text-gray-300">info@enproduction.co.ke</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-400" />
                        <span className="text-gray-300">projects@enproduction.co.ke</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Location */}
                <Card className="glass-card border-gray-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Nairobi Office</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                        <div>
                          <p className="text-gray-300">Westlands, Nairobi</p>
                          <p className="text-gray-300">Kenya</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-blue-400" />
                        <span className="text-gray-300">Mon-Fri: 8:00 AM - 6:00 PM EAT</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="glass-card border-gray-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Follow Our Work</h3>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 glass">
                        <Instagram className="h-4 w-4 mr-2" />
                        Instagram
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 glass">
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="glass-card border-red-500/50 bg-gradient-to-br from-red-900/10 to-gray-900/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Urgent Projects</h3>
                    <p className="text-gray-300 mb-3">24/7 availability for time-sensitive projects</p>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-red-400" />
                      <span className="text-red-400 font-semibold">+254 701 URGENT</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300">Common questions from our Kenyan and international clients</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Do you work with clients outside Kenya?",
                answer: "Yes! While we're based in Nairobi, we serve clients across East Africa and internationally. We have experience managing remote projects and can accommodate different time zones for consultations and project updates."
              },
              {
                question: "What's your typical project timeline in Kenya?",
                answer: "Project timelines vary based on scope and complexity. Simple corporate videos can be completed in 1-2 weeks, while comprehensive brand campaigns may take 4-8 weeks. We always provide realistic timelines during our initial consultation."
              },
              {
                question: "Do you accept payment in Kenyan Shillings?",
                answer: "Absolutely! We accept payments in KES via M-Pesa, bank transfer, and other local payment methods. For international clients, we also accept USD and other major currencies."
              },
              {
                question: "Can you travel within Kenya for shoots?",
                answer: "Yes, we regularly travel throughout Kenya for shoots - from the coastal regions of Mombasa to the northern conservancies. Travel costs are factored into project quotes based on location and duration."
              },
              {
                question: "What equipment do you use for filming?",
                answer: "We use professional-grade equipment including 4K/8K cameras, professional lighting setups, and drone technology. All our equipment meets international broadcast standards for both local and international distribution."
              },
              {
                question: "How do you handle post-production and revisions?",
                answer: "Post-production is handled in-house by our team in Nairobi. We provide 3 rounds of revisions included in our standard packages, with additional revisions available if needed. Turnaround time is typically 5-7 business days for initial cuts."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass-card border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
