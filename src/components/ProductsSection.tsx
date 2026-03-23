import React from 'react'
import { Leaf, ShoppingCart, Building2, Package, ArrowRight, CheckCircle, Sparkles } from 'lucide-react'

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
  popular?: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: 'FreshKeeper Pro',
    category: 'Professional Series',
    description: 'Industrial-grade fresh-keeping film for supermarkets and distribution centers.',
    features: [
      'Ultra-high barrier micro-perforation',
      'Anti-fog technology',
      'Tamper-evident sealing',
      'Customizable dimensions'
    ],
    shelfLife: '50-200% extension',
    applications: ['Supermarkets', 'Distribution Centers', 'Food Processing'],
    icon: Building2,
    badge: 'Best Seller',
    popular: true
  },
  {
    id: 2,
    name: 'FreshKeeper Home',
    category: 'Consumer Series',
    description: 'Premium fresh-keeping bags for household use. Keep produce fresh for weeks.',
    features: [
      'BPA-free materials',
      'Washable and reusable',
      'Multiple size options',
      'Leak-proof closure'
    ],
    shelfLife: '30-150% extension',
    applications: ['Household Kitchen', 'Office Pantry', 'Dorm Rooms'],
    icon: ShoppingCart
  },
  {
    id: 3,
    name: 'FreshKeeper Select',
    category: 'Specialty Series',
    description: 'Specialized packaging for delicate produce like berries and leafy greens.',
    features: [
      'Extra-soft membrane',
      'Moisture control optimized',
      'Breathable design',
      'Pre-formed pouches'
    ],
    shelfLife: '40-180% extension',
    applications: ['Berry Packaging', 'Mushroom Storage', 'Herb Preservation'],
    icon: Leaf
  },
  {
    id: 4,
    name: 'FreshKeeper Bulk',
    category: 'Wholesale Series',
    description: 'Cost-effective bulk packaging for wholesale distributors.',
    features: [
      'Volume pricing available',
      'Custom printing options',
      'Pallet quantities',
      'Dedicated account manager'
    ],
    shelfLife: '50-200% extension',
    applications: ['Wholesale Distribution', 'Import/Export', 'Restaurant Supply'],
    icon: Package,
    badge: 'Bulk Savings'
  }
]

export const ProductsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50" id="products">
      <div className="container-professional">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Products
          </div>
          <h2 className="responsive-h2 text-gray-900 mb-6">
            Fresh-Keeping Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From industrial-scale operations to household kitchens, EPXFresh offers specialized packaging technology tailored to your requirements.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                product.popular 
                  ? 'bg-gradient-to-br from-green-600 to-teal-600 text-white' 
                  : 'bg-white border border-gray-100 hover:shadow-card-hover'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {product.badge && (
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold z-10 ${
                  product.popular 
                    ? 'bg-white/20 text-white backdrop-blur-sm' 
                    : 'bg-gradient-primary text-white'
                }`}>
                  {product.badge}
                </div>
              )}
              
              {/* Icon Area */}
              <div className={`p-8 pb-0 ${product.popular ? '' : ''}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  product.popular 
                    ? 'bg-white/20' 
                    : 'bg-green-50'
                }`}>
                  <product.icon className={`w-8 h-8 ${
                    product.popular ? 'text-white' : 'text-green-600'
                  }`} />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 pt-0">
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  product.popular ? 'text-white/70' : 'text-green-600'
                }`}>
                  {product.category}
                </span>
                <h3 className={`text-xl font-bold mt-2 mb-3 ${
                  product.popular ? 'text-white' : 'text-gray-900'
                }`}>
                  {product.name}
                </h3>
                <p className={`text-sm mb-4 line-clamp-2 ${
                  product.popular ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {product.description}
                </p>
                
                {/* Shelf Life Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 ${
                  product.popular 
                    ? 'bg-white/20 text-white' 
                    : 'bg-green-50 text-green-700'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    product.popular ? 'bg-white' : 'bg-green-500'
                  }`} />
                  {product.shelfLife}
                </div>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className={`flex items-center gap-2 text-sm ${
                      product.popular ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                        product.popular ? 'text-white/70' : 'text-green-500'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  product.popular 
                    ? 'bg-white text-green-600 hover:bg-white/90' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Request Quote
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Need a custom solution? We offer OEM and private label services.
          </p>
          <button className="btn-outline">
            Contact Our Sales Team
          </button>
        </div>
      </div>
    </section>
  )
}