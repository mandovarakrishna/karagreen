import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/sonner';
import { toast } from 'sonner';
import { companyInfo, inquiryTypes, saveInquiry } from '../mock';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    inquiryType: '',
    monthlyQuantity: '',
    application: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      try {
        // Save to mock storage
        saveInquiry(formData);
        
        toast.success('Inquiry submitted successfully!', {
          description: 'We will get back to you within 24-48 hours.',
        });
        
        // Reset form
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          inquiryType: '',
          monthlyQuantity: '',
          application: '',
          message: '',
        });
      } catch (error) {
        toast.error('Failed to submit inquiry', {
          description: 'Please try again or contact us directly.',
        });
      } finally {
        setIsSubmitting(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              We're here to discuss your biomass pellet requirements
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <Card className="border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">
                          <Mail className="h-5 w-5 text-emerald-700" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-1">Email</p>
                          <a 
                            href={`mailto:${companyInfo.email}`} 
                            className="text-emerald-700 hover:text-emerald-800 transition-colors"
                          >
                            {companyInfo.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">
                          <Phone className="h-5 w-5 text-emerald-700" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-1">Phone</p>
                          <a 
                            href={`tel:${companyInfo.phone}`} 
                            className="text-emerald-700 hover:text-emerald-800 transition-colors"
                          >
                            {companyInfo.phone}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">
                          <MapPin className="h-5 w-5 text-emerald-700" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-1">Location</p>
                          <p className="text-gray-600">{companyInfo.address}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-sm text-emerald-900">
                    <strong>Response Time:</strong> We typically respond to inquiries within 24-48 hours during business days.
                  </p>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-2">
                <Card className="border-gray-200">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit an Inquiry</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="companyName">Company Name *</Label>
                          <Input
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            className="mt-1"
                            placeholder="Your company name"
                          />
                        </div>

                        <div>
                          <Label htmlFor="contactPerson">Contact Person *</Label>
                          <Input
                            id="contactPerson"
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleChange}
                            required
                            className="mt-1"
                            placeholder="Your name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1"
                            placeholder="you@company.com"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select onValueChange={handleSelectChange} value={formData.inquiryType}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="monthlyQuantity">Monthly Quantity Required</Label>
                          <Input
                            id="monthlyQuantity"
                            name="monthlyQuantity"
                            value={formData.monthlyQuantity}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder="e.g., 100 tonnes"
                          />
                        </div>

                        <div>
                          <Label htmlFor="application">Intended Application</Label>
                          <Input
                            id="application"
                            name="application"
                            value={formData.application}
                            onChange={handleChange}
                            className="mt-1"
                            placeholder="e.g., Industrial boiler"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="mt-1"
                          rows={5}
                          placeholder="Please provide details about your requirements, specifications, or any specific questions..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full md:w-auto bg-emerald-700 hover:bg-emerald-800 text-white"
                      >
                        {isSubmitting ? (
                          'Submitting...'
                        ) : (
                          <>
                            Submit Inquiry
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-gray-500">
                        * Required fields. Your information will be used solely to respond to your inquiry.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;