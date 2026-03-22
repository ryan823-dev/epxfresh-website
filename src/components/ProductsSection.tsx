import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Leaf, ShoppingCart, Building2, Package, ArrowRight } from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  description: string
  features: string[]
  shelfLife: string
  applications: string[]
  icon: React.ElementType
  badge?: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'FreshKeeper Pro',
    category: 'Professional Series',
    description: 'Industrial-grade fresh-keeping film designed for supermarkets, distribution centers, and large-scale operations. Maximum freshness extension for commercial produce handling.',
    features: [
      'Ultra-high barrier micro-perforation',
      'Anti-fog technology',
      'Tamper-evident sealing',
      'Customizable dimensions'
    ],
    shelfLife: '50-200% extension',
    applications: ['Supermarkets', 'Distribution Centers', 'Food Processing', 'Export Packaging'],
    icon: Building2,
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'FreshKeeper Home',
    category: 'Consumer Series',
    description: 'Premium fresh-keeping bags for household use. Keep your fruits and vegetables fresh for weeks instead of days. Eco-friendly and reusable design.',
    features: [
      'BPA-free materials',
      'Washable and reusable',
      'Multiple size options',
      'Leak-proof closure'
    ],
    shelfLife: '30-150% extension',
    applications: ['Household Kitchen', 'Office Pantry', 'Dorm Rooms', 'Outdoor Camping'],
    icon: ShoppingCart
  },
  {
    id: 3,
    name: 'FreshKeeper Select',
    category: 'Specialty Series',
    description: 'Specialized packaging for delicate produce like berries, mushrooms, and leafy greens. Gentle yet effective freshness protection.',
    features: [
      'Extra-soft membrane',
      'Moisture control optimized',
      'Breathable design',
      'Pre-formed pouches'
    ],
    shelfLife: '40-180% extension',
    applications: ['Berry Packaging', 'Mushroom Storage', 'Herb Preservation', 'Salad Mix'],
    icon: Leaf
  },
  {
    id: 4,
    name: 'FreshKeeper Bulk',
    category: 'Wholesale Series',
    description: 'Cost-effective bulk packaging solution for wholesale distributors and large-volume buyers. Maximum value with professional-grade performance.',
    features: [
      'Volume pricing available',
      'Custom printing options',
      'Pallet quantities',
      'Dedicated account manager'
    ],
    shelfLife: '50-200% extension',
    applications: ['Wholesale Distribution', 'Import/Export', 'Restaurant Supply', 'Catering Services'],
    icon: Package,
    badge: 'Bulk Savings'
  }
]

export const ProductsSection: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-warm" id="products">
      <div className="container-professional">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-fresh-primary/10 text-fresh-primary text-sm font-medium rounded-full mb-4">
            Our Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fresh-Keeping Solutions for Every Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From industrial-scale operations to household kitchens, EPXFresh offers specialized packaging technology tailored to your requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="h-full flex flex-col hover:shadow-fresh transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-fresh-primary/5 to-fresh-secondary/5 flex items-center justify-center">
                  <product.icon className="w-20 h-20 text-fresh-primary/30 group-hover:scale-110 transition-transform duration-300" />
                </div>
                {product.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <CardContent className="flex-1 flex flex-col p-6">
                <div className="mb-2">
                  <span className="text-xs text-fresh-primary font-medium uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{product.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm font-medium text-green-600">Shelf Life: {product.shelfLife}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">KEY FEATURES:</p>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-fresh-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">APPLICATIONS:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.applications.map((app, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-muted text-xs rounded">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90 mt-auto">
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We offer OEM and private label services.
          </p>
          <Button variant="outline" size="lg">
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  )
}
