import React from 'react'
import { Card } from './ui/card'
import { Check, X, Minus, ArrowRight } from 'lucide-react'

interface ComparisonItem {
  feature: string
  standard: boolean | 'partial'
  epXFresh: boolean
  note?: string
}

const comparisons: ComparisonItem[] = [
  { feature: 'Shelf Life Extension', standard: 'partial', epXFresh: true, note: '50-200% improvement' },
  { feature: 'Food Safety Certified', standard: 'partial', epXFresh: true, note: 'FDA, EU, CNAS' },
  { feature: 'No Chemical Additives', standard: false, epXFresh: true },
  { feature: 'Moisture Control', standard: 'partial', epXFresh: true },
  { feature: 'Gas Exchange Balance', standard: false, epXFresh: true },
  { feature: 'Anti-Fog Technology', standard: false, epXFresh: true },
  { feature: 'Temperature Adaptive', standard: false, epXFresh: true },
  { feature: 'Eco-Friendly Materials', standard: 'partial', epXFresh: true },
  { feature: 'Bulk Order Available', standard: true, epXFresh: true },
  { feature: 'Custom Sizing Options', standard: 'partial', epXFresh: true },
  { feature: 'OEM/Private Label', standard: false, epXFresh: true },
  { feature: '24/7 Technical Support', standard: false, epXFresh: true }
]

export const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="comparison">
      <div className="container-professional">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-fresh-primary/10 text-fresh-primary text-sm font-medium rounded-full mb-4">
            Why Choose EPXFresh
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            EPXFresh vs. Standard Packaging
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our advanced fresh-keeping technology compares to traditional plastic wrap and standard packaging solutions.
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-primary text-white">
                  <th className="text-left py-4 px-6 font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold w-1/4">Standard Plastic</th>
                  <th className="text-center py-4 px-6 font-semibold w-1/4 bg-gradient-success">
                    EPXFresh
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-border ${index % 2 === 0 ? 'bg-muted/30' : 'bg-white'}`}
                  >
                    <td className="py-4 px-6">
                      <span className="font-medium text-foreground">{item.feature}</span>
                      {item.note && (
                        <span className="block text-xs text-muted-foreground mt-1">{item.note}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {item.standard === true && (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                          <Check className="w-5 h-5 text-green-600" />
                        </span>
                      )}
                      {item.standard === false && (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                          <X className="w-5 h-5 text-red-600" />
                        </span>
                      )}
                      {item.standard === 'partial' && (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100">
                          <Minus className="w-5 h-5 text-yellow-600" />
                        </span>
                      )}
                    </td>
                    <td className="text-center py-4 px-6 bg-gradient-success/5">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-primary">
                        <Check className="w-5 h-5 text-white" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-muted/50 p-4 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-600" />
              </span>
              <span className="text-muted-foreground">Included</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-yellow-100 flex items-center justify-center">
                <Minus className="w-3 h-3 text-yellow-600" />
              </span>
              <span className="text-muted-foreground">Limited/Basic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-3 h-3 text-red-600" />
              </span>
              <span className="text-muted-foreground">Not Available</span>
            </div>
          </div>
        </Card>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-blue-600">1/3</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Reduce Food Waste</h3>
            <p className="text-muted-foreground">
              By extending shelf life, EPXFresh helps reduce the 1.3 billion tons of food wasted globally each year.
            </p>
          </Card>
          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-green-600">$</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Save Money</h3>
            <p className="text-muted-foreground">
              Reduced spoilage means lower costs for businesses and less frequent replacement purchases for households.
            </p>
          </Card>
          <Card className="text-center p-8">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-teal-600">CO₂</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Lower Carbon Footprint</h3>
            <p className="text-muted-foreground">
              Less wasted food means fewer resources used in production, transportation, and disposal.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-primary text-white p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Request free samples today and see how EPXFresh can transform your produce handling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-fresh-primary font-semibold rounded-full hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                Get Free Samples
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                Contact Sales Team
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
