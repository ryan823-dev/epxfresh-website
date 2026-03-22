import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Factory, MapPin, Users, Calendar, Shield, CheckCircle, FileText, Eye, Award, Building2, Truck, Clock, BarChart3, Globe } from 'lucide-react'

export const SupplierSection: React.FC = () => {
  const factoryStats = [
    { value: '15,000', label: 'Factory Size (m²)', icon: Factory },
    { value: '50+', label: 'Countries Export', icon: Globe },
    { value: '200+', label: 'Employees', icon: Users },
    { value: '8', label: 'Years Experience', icon: Calendar },
  ]

  const certifications = [
    { name: 'ISO 9001:2015', scope: 'Quality Management System', icon: Shield },
    { name: 'ISO 14001', scope: 'Environmental Management', icon: Shield },
    { name: 'FDA Registration', scope: 'US Food Contact Materials', icon: Shield },
    { name: 'EU Food Contact', scope: 'Regulation (EC) No 1935/2004', icon: Shield },
    { name: 'CNAS Accredited', scope: 'Laboratory Testing', icon: Shield },
    { name: 'BRC Global Standard', scope: 'Food Safety Certification', icon: Shield },
  ]

  const capabilities = [
    { icon: Factory, title: 'Advanced Production Lines', description: '4 automated production lines with precision micro-perforation technology' },
    { icon: Eye, title: 'Quality Control', description: 'In-house lab testing + third-party verification (SGS, Intertek)' },
    { icon: BarChart3, title: 'R&D Center', description: 'Dedicated R&D team with 12 engineers continuously improving technology' },
    { icon: FileText, title: 'Custom Solutions', description: 'OEM/ODM capabilities with custom branding and packaging design' },
  ]

  const tradeTerms = [
    { label: 'Payment Terms', value: 'T/T 30% deposit, 70% against BL', icon: FileText },
    { label: 'FOB Ports', value: 'Shenzhen / Guangzhou / Hong Kong', icon: Truck },
    { label: 'Lead Time', value: '15-25 days after deposit', icon: Clock },
    { label: 'MOQ', value: '10,000 rolls (varies by product)', icon: Factory },
    { label: 'Sample Policy', value: 'Free samples available', icon: Award },
    { label: 'QC Report', value: 'Available before shipment', icon: FileText },
  ]

  return (
    <section className="py-20 bg-neutral-warm" id="supplier">
      <div className="container-professional">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-fresh-primary/10 text-fresh-primary text-sm font-medium rounded-full mb-4">
            Verified Supplier
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Global Buyers Choose EPXFresh
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As a verified manufacturer with 8+ years of experience, we provide enterprise-grade fresh-keeping solutions to partners worldwide.
          </p>
        </div>

        {/* Factory Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {factoryStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-fresh transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-fresh-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Production Capabilities */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-fresh-primary" />
              Production Capabilities
            </h3>
            <div className="space-y-4">
              {capabilities.map((cap, index) => (
                <Card key={index} className="hover:shadow-fresh transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-fresh-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <cap.icon className="w-5 h-5 text-fresh-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{cap.title}</h4>
                        <p className="text-sm text-muted-foreground">{cap.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trade Terms */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-fresh-primary" />
              Trade Terms & Conditions
            </h3>
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {tradeTerms.map((term, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div className="flex items-center gap-3">
                        <term.icon className="w-5 h-5 text-muted-foreground" />
                        <span className="text-muted-foreground">{term.label}</span>
                      </div>
                      <span className="font-medium text-foreground text-right">{term.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-semibold text-foreground">Custom Terms:</span> Available for repeat orders and long-term partners
                  </p>
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    Request Full Trade Terms
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Certifications & Compliance
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-fresh transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.scope}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 ml-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Factory Location */}
        <Card className="bg-gradient-dark text-white overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-fresh-primary" />
                Factory Location
              </h3>
              <p className="text-white/80 mb-4">
                EPXFresh Technology Co., Ltd.<br />
                Guangzhou Economic and Technological Development Zone<br />
                Guangdong Province, China 510000
              </p>
              <div className="space-y-2 text-white/60 text-sm">
                <p>• 30 minutes from Guangzhou Baiyun International Airport</p>
                <p>• 1 hour from Shenzhen Port</p>
                <p>• Close to major logistics hubs</p>
              </div>
              <div className="mt-6 flex gap-3">
                <Button variant="secondary" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Virtual Factory Tour
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Factory Profile
                </Button>
              </div>
            </CardContent>
            <div className="bg-gradient-to-br from-fresh-primary/20 to-fresh-secondary/20 flex items-center justify-center p-12">
              <div className="text-center">
                <MapPin className="w-24 h-24 text-white/50 mx-auto mb-4" />
                <p className="text-white/70">Strategic Location</p>
                <p className="text-white/50 text-sm">Guangzhou, China</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Verification Badges */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Verified & Trusted By</p>
          <div className="flex flex-wrap justify-center gap-6">
            {['SGS Verified', 'Made in China', 'Alibaba Gold Supplier', 'TUV Rheinland'].map((badge, index) => (
              <div key={index} className="px-6 py-3 bg-white rounded-full border border-border shadow-sm flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium text-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
