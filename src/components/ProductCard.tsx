import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ShoppingCart, Leaf, Shield, Star } from 'lucide-react'

interface ProductCardProps {
  name: string
  description: string
  price: string
  image?: string
  badge?: string
  features?: string[]
  className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
  badge,
  features = [],
  className,
}) => {
  return (
    <Card className={`group hover:shadow-fresh transition-all duration-300 overflow-hidden ${className}`}>
      {/* Image Area */}
      <div className="relative aspect-square bg-gradient-to-br from-fresh-primary/10 to-eco-teal/10 overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-fresh rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-12 h-12 text-white" />
            </div>
          </div>
        )}
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-warm-earth text-white text-xs font-semibold rounded-full">
              {badge}
            </span>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white">
            <Shield className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Product Info */}
        <div className="space-y-3 mb-4">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-fresh-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="space-y-2 mb-4">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-fresh-primary rounded-full" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-2xl font-bold text-fresh-primary">{price}</p>
            <p className="text-xs text-muted-foreground">per pack</p>
          </div>
          <Button size="sm" className="group">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

interface FeaturedProductCardProps {
  name: string
  category: string
  price: string
  rating?: number
  reviews?: number
  className?: string
}

export const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({
  name,
  category,
  price,
  rating = 4.5,
  reviews = 128,
  className,
}) => {
  return (
    <Card className={`group cursor-pointer hover:shadow-fresh transition-all duration-300 overflow-hidden ${className}`}>
      <div className="relative aspect-[4/3] bg-gradient-to-br from-fresh-primary/5 to-eco-teal/5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-gradient-fresh rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Leaf className="w-10 h-10 text-white" />
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-fresh-primary rounded-md">
            {category}
          </span>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground group-hover:text-fresh-primary transition-colors line-clamp-1">
            {name}
          </h4>
          
          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(rating)
                      ? 'text-warm-earth fill-warm-earth'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-2">
            <p className="text-lg font-bold text-fresh-primary">{price}</p>
            <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity">
              View
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
