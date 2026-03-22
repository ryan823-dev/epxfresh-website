import React from 'react'
import { Card, CardContent } from './ui/card'
import { Star, Quote, Building2 } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    role: 'Produce Manager',
    company: 'FreshMart Supermarkets',
    location: 'Los Angeles, USA',
    quote: 'Since implementing EPXFresh packaging, our produce waste has dropped by 35%. Customers are amazed at how long their vegetables stay fresh. This has become one of our biggest selling points.',
    rating: 5,
    avatar: 'MR'
  },
  {
    id: 2,
    name: 'Chen Wei',
    role: 'Supply Chain Director',
    company: 'Metro Asia Distribution',
    location: 'Shanghai, China',
    quote: 'We supply produce to over 200 retail locations. EPXFresh has dramatically reduced our spoilage during transit and storage. The ROI was visible within the first month.',
    rating: 5,
    avatar: 'CW'
  },
  {
    id: 3,
    name: 'Hans Mueller',
    role: 'Owner',
    company: 'Mueller Organic Farms',
    location: 'Munich, Germany',
    quote: 'As an organic producer, we needed packaging that aligns with our values. EPXFresh is chemical-free, extends freshness naturally, and has helped us reach customers in distant markets.',
    rating: 5,
    avatar: 'HM'
  },
  {
    id: 4,
    name: 'Sarah Thompson',
    role: 'Head of Procurement',
    company: 'GreenLeaf Restaurant Group',
    location: 'London, UK',
    quote: 'Food cost control is critical in our business. With EPXFresh, we order less frequently but maintain consistent quality. Our kitchen waste has decreased by 40%.',
    rating: 5,
    avatar: 'ST'
  }
]

const caseStudies = [
  {
    company: 'FreshMart USA',
    challenge: 'High produce spoilage rates (28%) in California distribution centers',
    solution: 'Implemented EPXFresh Professional Series across all produce categories',
    results: [
      { metric: 'Spoilage Reduction', value: '67%' },
      { metric: 'Annual Savings', value: '$2.3M' },
      { metric: 'Customer Satisfaction', value: '+45%' },
      { metric: 'ROI Period', value: '3 months' }
    ]
  },
  {
    company: 'Metro Asia Distribution',
    challenge: 'Long-distance supply chain causing 35% produce loss before retail',
    solution: 'EPXFresh bulk packaging for temperature-controlled logistics',
    results: [
      { metric: 'Loss Reduction', value: '82%' },
      { metric: 'Shelf Life Extension', value: '150%' },
      { metric: 'New Markets Reached', value: '15 cities' },
      { metric: 'Revenue Growth', value: '+28%' }
    ]
  }
]

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-warm" id="testimonials">
      <div className="container-professional">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-fresh-primary/10 text-fresh-primary text-sm font-medium rounded-full mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Leading Businesses Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how EPXFresh packaging solutions have transformed operations for supermarkets, distributors, and producers around the globe.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-fresh transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-fresh-primary/20" />
                  <p className="text-foreground leading-relaxed pl-4 relative z-10">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-fresh-primary">{testimonial.company}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm">{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Case Studies
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="bg-gradient-primary p-6">
                  <h4 className="text-xl font-bold text-white">{study.company}</h4>
                </div>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-fresh-primary mb-1">CHALLENGE</p>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-fresh-primary mb-1">SOLUTION</p>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-fresh-primary mb-3">RESULTS</p>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-muted/50 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-fresh-primary">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-dark rounded-3xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-white/60">Business Partners</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <div className="text-white/60">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">35%</div>
              <div className="text-white/60">Average Waste Reduction</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">99%</div>
              <div className="text-white/60">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
