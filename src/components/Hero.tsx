import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { AIHeroCard } from './AIHeroCard'

interface HeroProps {
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={`relative min-h-screen ${className}`}>
      {/* Clean Background - No decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-64px)]">
          
          {/* Left Content - Value Proposition */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span className="text-sm font-medium text-emerald-400">Trusted by 500+ businesses worldwide</span>
              </div>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block">Advanced</span>
                <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Fresh-Keeping
                </span>
                <span className="block">Packaging Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed">
                Extend produce shelf life by <span className="text-white font-semibold">50-200%</span> with our patented micro-perforated membrane technology. Trusted by leading supermarkets and distributors in 50+ countries.
              </p>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Countries</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">200%</div>
                <div className="text-sm text-slate-400">Max Extension</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-400">Partners</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-500/25">
                Get Free Samples
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-colors">
                View Products
              </button>
            </div>
            
            {/* Trust Logos */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">ISO 9001</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">FDA Certified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">EU Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium">CNAS Accredited</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - AI Assistant Card */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <AIHeroCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
