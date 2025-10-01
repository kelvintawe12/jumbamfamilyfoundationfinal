import React, { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };
  return <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Contact Us" subtitle="Connect with us to learn more or get involved" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {isSuccess ? <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 animate-fade-in">
                Thank you for your message! We will get back to you soon.
              </div> : <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-body font-medium mb-2">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-body font-medium mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block font-body font-medium mb-2">
                    Subject
                  </label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary" required>
                    <option value="">Select a subject</option>
                    <option value="Donation">Donation Inquiry</option>
                    <option value="Volunteer">Volunteer Opportunities</option>
                    <option value="Partnership">Partnership Proposal</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block font-body font-medium mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary" required></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className={`w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>}
          </div>
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-tertiary p-6 rounded-lg">
              <h3 className="font-heading text-xl font-bold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:info@jumbamfamilyfoundation.org" className="text-primary hover:underline">
                      info@jumbamfamilyfoundation.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <a href="tel:+237123456789" className="text-primary hover:underline">
                      +237 123 456 789
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div>Bamenda, North West Region, Cameroon</div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-heading font-bold mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <a href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                    <Facebook className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                    <Twitter className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                    <Instagram className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-primary mx-auto mb-2" />
                  <div className="font-body">Interactive Map of Cameroon</div>
                  <div className="text-sm text-dark/60">
                    (NW/SW Regions Highlighted)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Donation Section */}
        <div className="mt-16 bg-primary/10 p-8 rounded-lg text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">
            Support Our Mission
          </h3>
          <p className="font-body max-w-2xl mx-auto mb-6">
            Your donation helps us restore hope to widows, orphans, and
            communities affected by the Anglophone crisis in Cameroon.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-md transition-transform hover:scale-105">
            Donate Now
          </button>
        </div>
      </div>
    </section>;
};