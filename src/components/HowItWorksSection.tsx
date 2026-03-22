import React from 'react'
import { Card, CardContent } from './ui/card'
import { Beaker, Droplets, Wind, Shield, Thermometer, Leaf, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Beaker,
    title: 'Micro-Perforation Technology',
    description: 'Our proprietary manufacturing process creates precisely calibrated micro-perforations in the film, sized between 0.1-0.5 micrometers.',
    detail: 'These microscopic holes allow exact control over gas exchange rates, creating the optimal atmosphere for each produce type.'
  },
  {
    icon: Droplets,
    title: 'Moisture Balance Control',
    description: 'Advanced moisture-wicking technology prevents condensation while maintaining optimal humidity levels inside the package.',
    detail: 'The membrane selectively allows water vapor to escape, preventing mold growth while keeping produce crisp and fresh.'
  },
  {
    icon: Wind,
    title: 'Gas Exchange Optimization',
    description: 'Precisely balanced O2 and CO2 levels slow down produce respiration, extending freshness without anaerobic conditions.',
    detail: 'This creates a "sleep mode" for fresh produce, significantly reducing metabolic activity while maintaining quality.'
  },
  {
    icon: Thermometer,
    title: 'Temperature Adaptation',
    description: 'The membrane technology works across temperature ranges, from cold storage to room temperature environments.',
    detail: 'Each product variant is optimized for specific temperature conditions common in supply chains worldwide.'
  },
  {
    icon: Shield,
    title: 'Food Safety First',
    description: 'All materials are FDA, EU, and CNAS certified for direct food contact. No chemical preservatives or treatments.',
    detail: 'Our technology is 100% physical - it extends freshness through environmental control, not chemical intervention.'
  },
  {
    icon: Leaf,
    title: 'Sustainability Impact',
    description: 'By extending shelf life, EPXFresh packaging significantly reduces food waste throughout the supply chain.',
    detail: 'Every roll of EPXFresh packaging saves approximately 50kg of produce from being discarded.'
  }
]

const comparisons = [
  { produce: 'Strawberries', standard: '3-5 days', withEPX: '7-12 days', improvement: '140%' },
  { produce: 'Leafy Greens', standard: '4-6 days', withEPX: '10-14 days', improvement: '130%' },
  { produce: 'Mushrooms', standard: '3-5 days', withEPX: '8-12 days', improvement: '160%' },
  { produce: 'Tomatoes', standard: '7-10 days', withEPX: '15-21 days', improvement: '110%' },
  { produce: 'Bell Peppers', standard: '10-14 days', withEPX: '20-28 days', improvement: '100%' },
  { produce: 'Bananas', standard: '3-5 days', withEPX: '7-14 days', improvement: '180%' }
]

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="container-professional">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-fresh-primary/10 text-fresh-primary text-sm font-medium rounded-full mb-4">
            The Science
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How EPXFresh Technology Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our patented micro-perforated membrane technology creates the optimal storage environment for fresh produce, extending shelf life by 50-200%.
          </p>
        </div>

        {/* Technology Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="hover:shadow-fresh transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <p className="text-sm text-muted-foreground/80 italic">{step.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-card">
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Real Shelf Life Extension Results
            </h3>
            <p className="text-muted-foreground">
              Actual performance data from independent laboratory testing
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Produce Type</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Standard Storage</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">With EPXFresh</th>
                  <th className="text-center py-4 px-4 font-semibold text-fresh-primary">Extension</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">{item.produce}</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">{item.standard}</td>
                    <td className="text-center py-4 px-4 text-foreground font-medium">{item.withEPX}</td>
                    <td className="text-center py-4 px-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        <CheckCircle className="w-4 h-4" />
                        {item.improvement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 bg-fresh-primary/5 rounded-xl">
            <p className="text-sm text-muted-foreground text-center">
              * Results may vary based on produce origin, initial freshness, and storage conditions.
              Testing conducted under controlled laboratory conditions per ISO 17025 standards.
            </p>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-fresh-primary mb-2">0.1-0.5μm</div>
              <p className="text-sm text-muted-foreground">Micro-perforation size range</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-fresh-primary mb-2">50-200%</div>
              <p className="text-sm text-muted-foreground">Shelf life extension</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-fresh-primary mb-2">0%</div>
              <p className="text-sm text-muted-foreground">Chemical additives</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-fresh-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Countries certified</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
