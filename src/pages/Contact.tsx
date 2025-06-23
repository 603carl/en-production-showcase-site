
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formStep, setFormStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [budgetRange, setBudgetRange] = useState(50000);

  const services = [
    "Film Production",
    "Graphics Design", 
    "YouTube Content",
    "Photography",
    "Business Branding",
    "Custom Package"
  ];

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
              <Link to="/portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link>
              <Link to="/about" className="hover:text-purple-400 transition-colors">About</Link>
              <Link to="/contact" className="text-purple-400">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Let's Create Together
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your vision to life? Get in touch with our team for a free consultation and custom project proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Project Inquiry Form
              </h2>
              
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50">
                <CardContent className="p-8">
                  {formStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">Step 1: Basic Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-300 mb-2">First Name *</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2">Last Name *</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2">Email Address *</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                          placeholder="your.email@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2">Company/Organization</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                          placeholder="Your company name"
                        />
                      </div>

                      <Button 
                        onClick={() => setFormStep(2)}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        Next Step
                      </Button>
                    </div>
                  )}

                  {formStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">Step 2: Project Details</h3>
                      
                      <div>
                        <label className="block text-gray-300 mb-3">Service Needed *</label>
                        <div className="grid grid-cols-2 gap-3">
                          {services.map((service) => (
                            <button
                              key={service}
                              onClick={() => setSelectedService(service)}
                              className={`p-3 border rounded-lg text-left transition-all ${
                                selectedService === service
                                  ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                                  : 'border-gray-700 hover:border-gray-600 text-gray-300'
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-3">Budget Range: ${budgetRange.toLocaleString()}</label>
                        <input
                          type="range"
                          min="10000"
                          max="500000"
                          step="10000"
                          value={budgetRange}
                          onChange={(e) => setBudgetRange(Number(e.target.value))}
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-sm text-gray-400 mt-1">
                          <span>$10K</span>
                          <span>$500K+</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2">Project Timeline</label>
                        <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500">
                          <option>ASAP - Rush Job</option>
                          <option>1-2 weeks</option>
                          <option>1 month</option>
                          <option>2-3 months</option>
                          <option>3+ months</option>
                          <option>Flexible timeline</option>
                        </select>
                      </div>

                      <div className="flex gap-4">
                        <Button 
                          onClick={() => setFormStep(1)}
                          variant="outline"
                          className="flex-1 border-gray-600 text-gray-300"
                        >
                          Previous
                        </Button>
                        <Button 
                          onClick={() => setFormStep(3)}
                          className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  )}

                  {formStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-white mb-4">Step 3: Project Description</h3>
                      
                      <div>
                        <label className="block text-gray-300 mb-2">Project Description *</label>
                        <textarea
                          rows={6}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                          placeholder="Tell us about your project vision, goals, and any specific requirements..."
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2">File Upload</label>
                        <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
                          <p className="text-gray-400 mb-2">Drag & drop files here or click to browse</p>
                          <p className="text-sm text-gray-500">Support: PDF, DOC, Images, Videos (Max 50MB)</p>
                          <input type="file" multiple className="hidden" />
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button 
                          onClick={() => setFormStep(2)}
                          variant="outline"
                          className="flex-1 border-gray-600 text-gray-300"
                        >
                          Previous
                        </Button>
                        <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                          Submit Inquiry
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Primary Contact */}
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Primary Contact</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-purple-400" />
                        <span className="text-gray-300">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-purple-400" />
                        <span className="text-gray-300">info@enproduction.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-purple-400" />
                        <span className="text-gray-300">newbusiness@enproduction.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Location */}
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Main Office</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-purple-400 mt-1" />
                        <div>
                          <p className="text-gray-300">123 Creative Boulevard</p>
                          <p className="text-gray-300">Los Angeles, CA 90210</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-purple-400" />
                        <span className="text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM PST</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400">
                        <Instagram className="h-4 w-4 mr-2" />
                        Instagram
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-400">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="bg-gradient-to-br from-red-900/20 to-gray-900/50 border-red-500/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Emergency/Rush Projects</h3>
                    <p className="text-gray-300 mb-3">24/7 availability for time-sensitive projects</p>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-red-400" />
                      <span className="text-red-400 font-semibold">+1 (555) 911-RUSH</span>
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. Simple projects can be completed in 1-2 weeks, while comprehensive campaigns may take 2-3 months. We provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer flexible payment options including milestone-based payments and financing options for larger projects. We'll work with you to create a payment structure that fits your budget."
              },
              {
                question: "Can you work with international clients?",
                answer: "Absolutely! We work with clients worldwide and have experience managing remote projects. We use secure collaboration tools and can accommodate different time zones for meetings and updates."
              },
              {
                question: "What's included in the initial consultation?",
                answer: "Our free 30-minute consultation includes project assessment, timeline discussion, budget estimation, and creative strategy overview. We'll also provide examples of similar work and answer any questions you have."
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
