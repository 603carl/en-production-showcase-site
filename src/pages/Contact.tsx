
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
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
    "Digital Marketing",
    "Photography",
    "Brand Development",
    "Custom Package"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

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
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Create Together
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your vision to life? Get in touch with our team for a free consultation and custom project proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Start Your Project
              </h2>
              
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        placeholder="+254 700 000 000"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Service Needed *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Project Details *</label>
                      <textarea
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        placeholder="Tell us about your project vision, goals, and any specific requirements..."
                        required
                      ></textarea>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-4"
                    >
                      Submit Project Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Primary Contact */}
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Primary Contact</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-blue-400" />
                        <span className="text-gray-300">+254 700 000 000</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-400" />
                        <span className="text-gray-300">hello@enproduction.co.ke</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageCircle className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">WhatsApp: +254 700 000 000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Location */}
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Office Location</h3>
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
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:border-pink-500 hover:text-pink-400">
                        <Instagram className="h-4 w-4 mr-2" />
                        Instagram
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400">
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-400">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Do you serve clients outside Kenya?",
                answer: "Yes! While we're based in Nairobi, Kenya, we offer remote services to clients across Africa and globally. We use advanced collaboration tools and can work with different time zones to ensure seamless project delivery."
              },
              {
                question: "What are your typical project timelines?",
                answer: "Project timelines vary based on scope and complexity. Simple projects like social media content can be completed in 3-5 days, while comprehensive brand campaigns may take 2-4 weeks. We always provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you accept payments in Kenyan Shillings?",
                answer: "Absolutely! We accept payments in KES through M-Pesa, bank transfers, and other local payment methods. For international clients, we also accept USD and other major currencies through secure online payment platforms."
              },
              {
                question: "Can you work with Kenyan businesses of all sizes?",
                answer: "Yes, we work with everyone from small startups and local businesses to large corporations and NGOs across Kenya. We offer flexible packages and payment plans to accommodate different budget requirements."
              },
              {
                question: "What's included in your free consultation?",
                answer: "Our free 30-minute consultation includes project assessment, creative strategy discussion, timeline estimation, and budget overview. We'll also share examples of similar work and answer all your questions about our services."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
