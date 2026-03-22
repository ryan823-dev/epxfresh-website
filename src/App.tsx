import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Footer } from "./components/Footer"
import { AIAssistant } from "./components/AIAssistant"
import { Shield, Truck, Award, Users } from "lucide-react"

function App() {
  const trustFeatures = [
    { icon: Shield, title: "Food-Contact Certified", description: "FDA, EU, and CNAS approved" },
    { icon: Truck, title: "Global Shipping", description: "Fast delivery to 50+ countries" },
    { icon: Award, title: "Quality Assured", description: "ISO certified manufacturing" },
    { icon: Users, title: "Expert Support", description: "24/7 AI & human assistance" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section className="py-16 bg-white">
        <div className="container-professional">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-3">
                <f.icon className="w-8 h-8 text-fresh-primary" />
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <AIAssistant />
    </div>
  )
}

export default App
