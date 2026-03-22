import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Calculator, TrendingUp, ArrowRight, Info } from 'lucide-react'

export const PricingCalculator: React.FC = () => {
  const [monthlyVolume, setMonthlyVolume] = useState(10000)
  const [produceCost, setProduceCost] = useState(50000)
  const [spoilageRate, setSpoilageRate] = useState(25)
  const [showResults, setShowResults] = useState(false)

  // Calculate savings
  const currentLoss = produceCost * (spoilageRate / 100)
  const newLossWithEPX = produceCost * (spoilageRate / 100) * 0.3 // 70% reduction
  const monthlySavings = currentLoss - newLossWithEPX
  const epXCostPerMonth = monthlyVolume * 0.15 // Estimated $0.15 per roll
  const netSavings = monthlySavings - epXCostPerMonth
  const roi = ((netSavings * 12) / epXCostPerMonth * 12) * 100

  const handleCalculate = () => {
    setShowResults(true)
  }

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container-professional">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-fresh-primary/10 text-fresh-primary text-sm font-medium rounded-full mb-4">
            ROI Calculator
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Calculate Your Savings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how EPXFresh can reduce your produce spoilage and increase your bottom line. Our customers typically see 3-6x ROI within the first year.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-6 h-6 text-fresh-primary" />
                <h3 className="text-xl font-bold text-foreground">Enter Your Numbers</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Monthly Packaging Volume (rolls)
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={monthlyVolume}
                    onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-fresh-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>1,000</span>
                    <span className="font-semibold text-fresh-primary">{monthlyVolume.toLocaleString()} rolls</span>
                    <span>100,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Monthly Produce Cost (USD)
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={produceCost}
                    onChange={(e) => setProduceCost(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-fresh-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>$10,000</span>
                    <span className="font-semibold text-fresh-primary">${produceCost.toLocaleString()}</span>
                    <span>$500,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Current Spoilage Rate (%)
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="1"
                    value={spoilageRate}
                    onChange={(e) => setSpoilageRate(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-fresh-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>5%</span>
                    <span className="font-semibold text-fresh-primary">{spoilageRate}%</span>
                    <span>50%</span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Industry average spoilage rate is 20-30%. EPXFresh typically reduces this by 60-80%.</span>
                  </p>
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full bg-gradient-primary hover:opacity-90"
                  size="lg"
                >
                  Calculate My Savings
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className={showResults ? 'shadow-fresh' : 'shadow-card'}>
            <CardContent className="p-8 bg-gradient-card">
              {!showResults ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <Calculator className="w-16 h-16 text-muted-foreground/30 mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">See Your Potential</h3>
                  <p className="text-muted-foreground">
                    Enter your numbers and click calculate to see your estimated savings
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-foreground">Your Estimated Savings</h3>
                  </div>

                  <div className="space-y-6">
                    {/* Primary Savings */}
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <div className="text-center">
                        <p className="text-sm text-green-600 font-medium mb-2">Annual Net Savings</p>
                        <div className="text-4xl lg:text-5xl font-bold text-green-700">
                          ${(netSavings * 12).toLocaleString()}
                        </div>
                        <p className="text-sm text-green-600/80 mt-2">After EPXFresh packaging cost</p>
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-muted-foreground">Current Monthly Loss</span>
                        <span className="font-semibold text-red-600">-${currentLoss.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-muted-foreground">Loss with EPXFresh</span>
                        <span className="font-semibold text-green-600">${newLossWithEPX.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-muted-foreground">Monthly Spoilage Savings</span>
                        <span className="font-semibold text-green-600">+${monthlySavings.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-border">
                        <span className="text-muted-foreground">EPXFresh Monthly Cost</span>
                        <span className="font-semibold text-foreground">-${epXCostPerMonth.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-4">
                        <span className="font-semibold text-foreground">Net Monthly Benefit</span>
                        <span className="font-bold text-green-700">${netSavings.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* ROI Badge */}
                    <div className="flex items-center justify-center gap-6 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-fresh-primary">{roi.toFixed(0)}%</div>
                        <div className="text-xs text-muted-foreground">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-fresh-primary">70%</div>
                        <div className="text-xs text-muted-foreground">Spoilage Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-fresh-primary">3 Mo</div>
                        <div className="text-xs text-muted-foreground">Avg. Payback</div>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-primary hover:opacity-90 mt-4">
                      Get Custom Quote Based on My Numbers
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Estimates based on average results. Actual savings may vary.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Bulk Pricing Tiers */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Volume Pricing Tiers
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { tier: 'Starter', minQty: '10,000', pricePerRoll: '$0.18', annualSavings: 'Baseline' },
              { tier: 'Professional', minQty: '50,000', pricePerRoll: '$0.15', annualSavings: 'Save 17%', popular: true },
              { tier: 'Enterprise', minQty: '100,000', pricePerRoll: '$0.12', annualSavings: 'Save 33%' },
              { tier: 'Strategic', minQty: '500,000+', pricePerRoll: 'Custom', annualSavings: 'Best Value' },
            ].map((tier, index) => (
              <Card key={index} className={tier.popular ? 'border-fresh-primary shadow-fresh relative' : ''}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-bold text-foreground mb-2">{tier.tier}</h4>
                  <div className="text-2xl font-bold text-fresh-primary mb-1">{tier.pricePerRoll}</div>
                  <div className="text-sm text-muted-foreground mb-3">per roll</div>
                  <p className="text-sm text-muted-foreground mb-4">Min. {tier.minQty} rolls/mo</p>
                  <p className="text-sm font-medium text-green-600">{tier.annualSavings}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
