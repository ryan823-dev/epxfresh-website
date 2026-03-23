import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Footer } from "./components/Footer"
import { AIAssistant } from "./components/AIAssistant"
import { FAQ } from "./components/FAQ"
import { AboutSection } from "./components/AboutSection"
import { ProductsSection } from "./components/ProductsSection"
import { HowItWorksSection } from "./components/HowItWorksSection"
import { TestimonialsSection } from "./components/TestimonialsSection"
import { ComparisonSection } from "./components/ComparisonSection"
import { ImpactSection } from "./components/ImpactSection"
import { ContactSection } from "./components/ContactSection"
import { SupplierSection } from "./components/SupplierSection"
import { PricingCalculator } from "./components/PricingCalculator"
import { Shield, Truck, Award, Users } from "lucide-react"

function App() {
  const trustFeatures = [
    { icon: Shield, title: "Food-Contact Certified", description: "FDA, EU, and CNAS approved" },
    { icon: Truck, title: "Global Shipping", description: "Fast delivery to 50+ countries" },
    { icon: Award, title: "Quality Assured", description: "ISO certified manufacturing" },
    { icon: Users, title: "Expert Support", description: "24/7 AI & human assistance" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <Hero />
      
      {/* Trust Features Bar */}
      <section className="py-12 bg-slate-900/50 border-y border-white/5">
        <div className="container-app">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <f.icon className="w-6 h-6 text-emerald-400" />
                <h3 className="font-semibold text-white text-sm">{f.title}</h3>
                <p className="text-xs text-slate-500">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Supplier/Vfactory Section - B2B Trust */}
      <SupplierSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* Pricing Calculator - B2B ROI */}
      <PricingCalculator />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
      <AIAssistant />
    </div>
  )
}

export default App