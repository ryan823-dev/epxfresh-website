import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, Package, Truck, MessageCircle } from 'lucide-react'

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    interest: 'samples',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container-professional">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-fresh-primary/10 text-fresh-primary text-sm font-medium rounded-full mb-4">
              Get Started
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Request Free Samples
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the EPXFresh difference firsthand. Request complimentary samples to test with your produce.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-fresh-primary/50 focus:border-fresh-primary"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-fresh-primary/50 focus:border-fresh-primary"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-fresh-primary/50 focus:border-fresh-primary"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Country *</label>
                    <select
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-fresh-primary/50 focus:border-fresh-primary"
                    >
                      <option value="">Select country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="CN">China</option>
                      <option value="JP">Japan</option>
                      <option value="AU">Australia</option>
                      <option value="CA">Canada</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">I am interested in *</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-fresh-primary/50 focus:border-fresh-primary"
                  >
                    <option value="samples">Free Product Samples</option>
                    <option value="bulk">Bulk Order Pricing</option>
                    <option value="oem">OEM / Private Label</option>
                    <option value="partnership">Distribution Partnership</option>
                    <option value="technical">Technical Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-fresh-primary/50 focus:border-fresh-primary"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Request
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our Privacy Policy and consent to be contacted regarding your inquiry.
                </p>
              </form>
            ) : (
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Request Submitted!</h3>
                  <p className="text-green-700">
                    Thank you for your interest in EPXFresh. Our team will review your request and get back to you within 24 hours.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-fresh-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-fresh-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:sales@epxfresh.com" className="text-fresh-primary hover:underline">sales@epxfresh.com</a>
                      <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-fresh-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-fresh-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:+862012345678" className="text-fresh-primary hover:underline">+86 20 1234 5678</a>
                      <p className="text-sm text-muted-foreground">Business hours: Mon-Fri 9AM-6PM CST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-fresh-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-fresh-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Headquarters</p>
                      <p className="text-muted-foreground">
                        EPXFresh Technology Co., Ltd.<br />
                        Guangzhou, Guangdong Province<br />
                        China 510000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-fresh-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-fresh-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Business Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Options */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="text-center hover:shadow-fresh transition-all cursor-pointer">
                <CardContent className="p-4">
                  <Package className="w-8 h-8 text-fresh-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Free Samples</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-fresh transition-all cursor-pointer">
                <CardContent className="p-4">
                  <Truck className="w-8 h-8 text-fresh-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Track Order</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-fresh transition-all cursor-pointer">
                <CardContent className="p-4">
                  <MessageCircle className="w-8 h-8 text-fresh-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Live Chat</p>
                </CardContent>
              </Card>
            </div>

            {/* Regional Offices */}
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-4">Regional Offices</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">North America</span>
                    <span className="text-foreground">Los Angeles, USA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Europe</span>
                    <span className="text-foreground">London, UK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Asia Pacific</span>
                    <span className="text-foreground">Shanghai, China</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Southeast Asia</span>
                    <span className="text-foreground">Singapore</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
