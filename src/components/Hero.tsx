import React from 'react'
import { ArrowRight, Play, CheckCircle, Leaf, Globe, Shield, TrendingUp } from 'lucide-react'

interface HeroProps {
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${className}`}>
      {/* Multi-layer Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-primary rounded-full opacity-20 blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500 rounded-full opacity-15 blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-400 rounded-full opacity-10 blur-[80px] animate-pulse-glow" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen">
          
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-up">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/90">Trusted by 500+ businesses</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white/70">FDA & EU Certified</span>
              </div>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4 animate-fade-up animate-delay-100">
              <h1 className="responsive-h1 text-white leading-[1.1]">
                <span className="block">Advanced</span>
                <span className="block text-gradient">Fresh-Keeping</span>
                <span className="block">Packaging Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed">
                Extend produce shelf life by <span className="text-white font-semibold">50-200%</span> with our patented micro-perforated membrane technology. Trusted by leading supermarkets and distributors worldwide.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-200">
              <button className="btn-primary text-lg">
                Get Free Samples
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 animate-fade-up animate-delay-300">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-white">50+</div>
                <div className="text-sm text-white/50">Countries</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-gradient">200%</div>
                <div className="text-sm text-white/50">Max Extension</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-white/50">Partners</div>
              </div>
            </div>
            
            {/* Trust Logos */}
            <div className="flex flex-wrap items-center gap-6 pt-4 animate-fade-up animate-delay-400">
              <div className="flex items-center gap-2 text-white/40">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">ISO 9001</span>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">FDA Certified</span>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">EU Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-white/40">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">CNAS Accredited</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Product Showcase */}
          <div className="relative lg:pl-10 animate-fade-up animate-delay-200">
            {/* Main Product Card */}
            <div className="relative">
              {/* Glow Effect Behind */}
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
              
              {/* Product Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-white/40 font-mono">FreshKeeper Pro™</span>
                </div>
                
                {/* Product Visual */}
                <div className="p-8 sm:p-12">
                  <div className="aspect-square relative">
                    {/* Animated Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
                      <div className="absolute w-[90%] h-[90%] rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]" />
                      <div className="absolute w-[80%] h-[80%] rounded-full border border-white/15 animate-[spin_10s_linear_infinite]" />
                    </div>
                    
                    {/* Center Logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-primary flex items-center justify-center shadow-glow animate-float">
                        <Leaf className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
                      </div>
                    </div>
                    
                    {/* Floating Stats */}
                    <div className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                      <div className="text-2xl font-bold text-white">150%</div>
                      <div className="text-xs text-white/60">Extension</div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                      <div className="text-2xl font-bold text-green-400">70%</div>
                      <div className="text-xs text-white/60">Less Waste</div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Info */}
                <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-white/40" />
                    <span className="text-sm text-white/60">Ships to 50+ countries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400 font-medium">In Stock</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Feature Cards */}
              <div className="absolute -left-4 top-1/4 p-4 rounded-2xl bg-white/95 shadow-xl border border-gray-100 animate-float hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Eco-Friendly</div>
                    <div className="text-xs text-gray-500">100% recyclable</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 p-4 rounded-2xl bg-white/95 shadow-xl border border-gray-100 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Food Safe</div>
                    <div className="text-xs text-gray-500">FDA & EU certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animate-delay-500">
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}