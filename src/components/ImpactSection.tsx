import React from 'react'
import { Card, CardContent } from './ui/card'
import { Leaf, Droplets, Recycle, Globe, TrendingUp, Heart } from 'lucide-react'

const environmentalStats = [
  {
    icon: Leaf,
    value: '30%',
    label: 'Food Waste Reduction',
    description: 'Average reduction in produce spoilage across all users'
  },
  {
    icon: Droplets,
    value: '40%',
    label: 'Water Conservation',
    description: 'Less water wasted when food doesnt spoil'
  },
  {
    icon: Recycle,
    value: '25%',
    label: 'Plastic Reduction',
    description: 'Our packaging uses less material than alternatives'
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Countries Impacted',
    description: 'Reducing food waste on a global scale'
  }
]

const sdgGoals = [
  { number: 2, name: 'Zero Hunger', progress: 85 },
  { number: 12, name: 'Responsible Consumption', progress: 92 },
  { number: 13, name: 'Climate Action', progress: 78 },
  { number: 14, name: 'Life Below Water', progress: 65 },
  { number: 15, name: 'Life on Land', progress: 70 }
]

const partners = [
  { name: 'ISO 9001', type: 'Quality' },
  { name: 'FDA', type: 'Food Safety' },
  { name: 'EU Compliant', type: 'Regulation' },
  { name: 'CNAS', type: 'Accreditation' },
  { name: 'SGS', type: 'Testing' },
  { name: 'Intertek', type: 'Certification' }
]

export const ImpactSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-dark text-white" id="impact">
      <div className="container-professional">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Making a Real Difference
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            EPXFresh is committed to sustainability and reducing food waste globally. Every package helps create a more sustainable future.
          </p>
        </div>

        {/* Environmental Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {environmentalStats.map((stat, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-fresh-primary mb-2">{stat.label}</div>
                <p className="text-sm text-white/60">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* UN Sustainable Development Goals */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Aligned with UN Sustainable Development Goals
            </h3>
            <p className="text-white/60">
              Our technology directly contributes to multiple SDGs
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {sdgGoals.map((goal) => (
              <div key={goal.number} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-white">{goal.number}</span>
                </div>
                <p className="text-sm font-medium text-white mb-2">{goal.name}</p>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <p className="text-xs text-white/60 mt-1">{goal.progress}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-green-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Economic Impact</h4>
            <p className="text-white/60 text-sm mb-4">
              Reduce losses, increase profits, and create new market opportunities
            </p>
            <ul className="text-left text-sm text-white/70 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Lower operational costs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Higher profit margins
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Expanded market reach
              </li>
            </ul>
          </div>

          <div className="text-center p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-10 h-10 text-blue-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Environmental Impact</h4>
            <p className="text-white/60 text-sm mb-4">
              Protect our planet by reducing waste and conserving resources
            </p>
            <ul className="text-left text-sm text-white/70 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                Less food in landfills
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                Reduced carbon emissions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                Sustainable materials
              </li>
            </ul>
          </div>

          <div className="text-center p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-purple-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Social Impact</h4>
            <p className="text-white/60 text-sm mb-4">
              Improve food security and quality of life for communities
            </p>
            <ul className="text-left text-sm text-white/70 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                Better food access
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                Healthier communities
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                Education & awareness
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications & Partners */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-6">
            Certified & Accredited
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="px-6 py-3 bg-white/10 rounded-full border border-white/20"
              >
                <span className="font-semibold text-white">{partner.name}</span>
                <span className="text-white/50 text-sm ml-2">({partner.type})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
