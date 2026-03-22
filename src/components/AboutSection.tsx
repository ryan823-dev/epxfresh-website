import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ArrowRight, Beaker, Leaf, Shield, Truck, Globe, Award, CheckCircle } from 'lucide-react'

interface TechnologyFeatureProps {
  icon: React.ElementType
  title: string
  description: string
  details: string[]
}

const TechnologyFeature: React.FC<TechnologyFeatureProps> = ({ icon: Icon, title, description, details }) => (
  <Card className="h-full hover:shadow-fresh transition-all duration-300">
    <CardContent className="p-8">
      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-fresh-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{detail}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
)

interface AboutSectionProps {
  className?: string
}

export const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  const stats = [
    { value: '50+', label: 'Countries Served' },
    { value: '200%', label: 'Max Freshness Extension' },
    { value: '50%', label: 'Food Waste Reduction' },
    { value: '100%', label: 'FDA Certified' },
  ]

  const techFeatures = [
    {
      icon: Beaker,
      title: 'Micro-Perforated Membrane',
      description: 'Our proprietary membrane technology creates precise micro-perforations that allow optimal gas exchange while maintaining moisture levels.',
      details: [
        'Precisely calibrated perforation sizes',
        'Balanced O2 and CO2 levels',
        'Maintains optimal humidity',
        'Extends shelf life 50-200%',
      ],
    },
    {
      icon: Leaf,
      title: 'Natural Freshness Preservation',
      description: 'The technology naturally extends produce freshness without chemical preservatives or treatments.',
      details: [
        'No chemical additives',
        'Preserves natural flavors',
        'Maintains nutritional value',
        'Zero residue on produce',
      ],
    },
    {
      icon: Shield,
      title: 'Food-Safe Materials',
      description: 'All materials are thoroughly tested and certified for direct food contact safety.',
      details: [
        'FDA food-contact approved',
        'EU regulation compliant',
        'CNAS accredited testing',
        'ISO quality management',
      ],
    },
    {
      icon: Globe,
      title: 'Global Compatibility',
      description: 'Designed to work across different climate zones and storage conditions worldwide.',
      details: [
        'Temperature adaptive',
        'Humidity resistant',
        'Works in all climates',
        '50+ countries served',
      ],
    },
  ]

  const certifications = [
    { name: 'FDA', fullName: 'U.S. Food and Drug Administration', description: 'Food-contact material compliance' },
    { name: 'EU', fullName: 'European Union', description: 'EC regulation compliance' },
    { name: 'CNAS', fullName: 'China National Accreditation Service', description: 'ISO 17025 accredited lab testing' },
    { name: 'ISO', fullName: 'International Organization for Standardization', description: 'ISO 9001:2015 quality management' },
  ]

  return (
    <section className={className} id="about">
      {/* Hero */}
      <section className="py-20 bg-gradient-dark text-white">
        <div className="container-professional">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About EPXFresh
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Pioneering fresh-keeping technology since 2020. We transform how the world preserves fresh produce.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-professional">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-fresh-primary/10 text-fresh-primary text-sm font-medium rounded-full mb-4">
                Our Mission
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Reducing Food Waste Through Innovation
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Every year, approximately 30-40% of all food produced globally goes to waste. A significant portion of this waste occurs during storage and transportation of fresh produce. EPXFresh was founded to address this critical issue through innovative packaging technology.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our proprietary micro-perforated membrane technology creates the optimal micro-environment for each type of produce, extending freshness by 50-200% while maintaining nutritional value and natural flavors. By keeping produce fresh longer, we help businesses reduce losses and consumers enjoy fresher food.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Headquartered in Guangzhou, China, we serve supermarkets, retailers, distributors, and households in over 50 countries, making fresh produce more accessible and sustainable worldwide.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-card rounded-3xl p-8 shadow-card">
                <img
                  src="/images/sustainability.png"
                  alt="EPXFresh sustainability mission"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-neutral-warm">
        <div className="container-professional">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-fresh-primary/10 text-fresh-primary text-sm font-medium rounded-full mb-4">
              Our Technology
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Science Behind Freshness
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our innovative membrane technology is the result of years of research in produce preservation and food science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techFeatures.map((feature, index) => (
              <TechnologyFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                details={feature.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-white">
        <div className="container-professional">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-fresh-primary/10 text-fresh-primary text-sm font-medium rounded-full mb-4">
              Quality Assurance
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Certified & Accredited
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All EPXFresh products meet the highest international standards for food-contact safety and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-fresh transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{cert.name}</h3>
                  <p className="text-sm font-medium text-fresh-primary mb-2">{cert.fullName}</p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="group">
              View All Certifications
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-professional">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full mb-4">
                Global Reach
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Serving 50+ Countries Worldwide
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                From our headquarters in Guangzhou, China, EPXFresh products reach businesses and households across six continents. Our global logistics network ensures timely delivery and reliable service wherever you are.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-fresh-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Fast Delivery</h4>
                    <p className="text-sm text-white/60">7-14 business days standard</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-fresh-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Worldwide Coverage</h4>
                    <p className="text-sm text-white/60">50+ countries served</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Key Markets</h3>
              <div className="grid grid-cols-2 gap-4">
                {['North America', 'Europe', 'Asia Pacific', 'Middle East', 'South America', 'Africa', 'Australia', 'Southeast Asia'].map((region, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-fresh-primary rounded-full" />
                    <span className="text-white/80">{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-professional text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Partner With EPXFresh
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Whether you are a supermarket, distributor, or retailer, we have solutions tailored to your needs. Contact us today to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-white text-fresh-primary hover:bg-white/90">
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </section>
  )
}
