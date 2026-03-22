import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, MessageCircle, ShoppingBag, Leaf } from 'lucide-react'

interface HeroProps {
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={`relative min-h-screen flex items-center bg-gradient-hero overflow-hidden ${className}`}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-fresh-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-eco-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warm-earth/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Decorative Icons */}
      <div className="absolute top-32 right-20 animate-float opacity-20">
        <Leaf className="w-24 h-24 text-fresh-primary" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <ShoppingBag className="w-20 h-20 text-eco-teal" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-fresh-primary/10 rounded-full border border-fresh-primary/20">
              <div className="w-2 h-2 bg-fresh-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-fresh-primary">
                FDA & EU Food-Contact Certified
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-foreground">Advanced </span>
              <span className="text-gradient-fresh">Fresh-Keeping</span>
              <br />
              <span className="text-foreground">Packaging Solutions</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              For produce businesses and modern homes. Our technology helps reduce 
              food waste while keeping fruits and vegetables fresher, longer.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="xl" className="group">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white rounded-lg shadow-soft flex items-center justify-center">
                  <span className="text-lg font-bold text-fresh-primary">50+</span>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Countries</div>
                  <div className="text-muted-foreground">Served</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white rounded-lg shadow-soft flex items-center justify-center">
                  <span className="text-lg font-bold text-fresh-primary">24/7</span>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">AI Assistant</div>
                  <div className="text-muted-foreground">Available</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white rounded-lg shadow-soft flex items-center justify-center">
                  <span className="text-lg font-bold text-warm-earth">2-5x</span>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">Extended</div>
                  <div className="text-muted-foreground">Freshness</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Product Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-fresh-primary/20 to-eco-teal/20 rounded-3xl shadow-fresh overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-32 h-32 mx-auto bg-gradient-fresh rounded-2xl flex items-center justify-center shadow-fresh">
                      <Leaf className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-fresh-primary-dark">
                      Fresh-Keeping Bags
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tested & Certified
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-fresh p-4 max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-fresh-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🍎</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Extended Freshness
                    </p>
                    <p className="text-xs text-muted-foreground">
                      50-200% longer than standard bags
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-fresh p-4 max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-eco-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🌍</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Eco-Friendly
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Reduce food waste, save resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
