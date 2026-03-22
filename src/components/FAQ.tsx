import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { ChevronDown, HelpCircle, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqsData = [
  {
    question: 'How does EPXFresh fresh-keeping packaging work?',
    answer: 'EPXFresh uses proprietary micro-perforated membrane technology that creates an optimal micro-environment for produce. It controls humidity levels and balances gas exchange (O2 and CO2), extending produce shelf life by 50-200% compared to standard storage methods.',
  },
  {
    question: 'What certifications does EPXFresh have?',
    answer: 'EPXFresh products are certified by FDA, EU, CNAS, and ISO. All products undergo rigorous third-party testing to ensure food-contact safety and quality standards.',
  },
  {
    question: 'How much longer does produce last with EPXFresh packaging?',
    answer: 'EPXFresh packaging extends produce shelf life by 50-200% depending on the produce type. Leafy greens can stay fresh for 7-10 days instead of 3-4 days.',
  },
  {
    question: 'What types of produce work best with EPXFresh?',
    answer: 'EPXFresh works with all types of produce including leafy greens, fruits, root vegetables, tomatoes, peppers, mushrooms, and herbs.',
  },
  {
    question: 'Do you offer OEM or private label solutions?',
    answer: 'Yes, EPXFresh offers OEM and private label solutions for businesses with custom branding, volume discounts, and dedicated account management.',
  },
  {
    question: 'What is the minimum order quantity for bulk orders?',
    answer: 'Minimum order quantities vary by product type. We offer free samples for evaluation before placing bulk orders.',
  },
  {
    question: 'How long does international shipping take?',
    answer: 'EPXFresh ships to 50+ countries worldwide. Standard delivery takes 7-14 business days. Free shipping for orders over 500 USD.',
  },
  {
    question: 'Is EPXFresh packaging eco-friendly?',
    answer: 'Yes, EPXFresh helps reduce food waste by extending freshness and uses eco-friendly materials in production.',
  },
  {
    question: 'Can I get samples before placing a bulk order?',
    answer: 'We offer free sample service for evaluation. Contact us through our website or AI assistant to request samples.',
  },
  {
    question: 'What is modified atmosphere packaging (MAP)?',
    answer: 'MAP is a technology that alters the gas composition inside a package to extend shelf life. EPXFresh uses micro-perforated membrane technology to achieve optimal gas balance.',
  },
]

export const faqStructuredData = faqsData.map((faq) => ({
  '@type': 'Question',
  name: faq.question,
  acceptedAnswer: {
    '@type': 'Answer',
    text: faq.answer,
  },
}))

const FAQItem: React.FC<{question: string; answer: string; isOpen: boolean; onToggle: () => void}> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-border last:border-0">
    <button onClick={onToggle} className="w-full flex items-center justify-between py-5 text-left" aria-expanded={isOpen}>
      <span className="font-semibold text-foreground pr-4">{question}</span>
      <ChevronDown className={cn('w-5 h-5 text-fresh-primary transition-transform duration-300', isOpen && 'rotate-180')} />
    </button>
    <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-96 pb-5' : 'max-h-0')}>
      <p className="text-muted-foreground leading-relaxed">{answer}</p>
    </div>
  </div>
)

export const FAQ: React.FC<{className?: string}> = ({ className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = searchQuery
    ? faqsData.filter(faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    : faqsData

  return (
    <section className={cn('section-padding bg-white', className)} id="faq">
      <div className="container-professional">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-fresh-primary/10 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-fresh-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to know about EPXFresh fresh-keeping technology</p>
        </div>
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input type="text" placeholder="Search questions..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-fresh-primary/50" />
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-6 lg:p-8">
              <div role="list" aria-label="Frequently Asked Questions">
                {filteredFaqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? null : index)} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions? Our AI assistant can help!</p>
          <Button className="bg-gradient-primary hover:opacity-90">Chat with EPX Assistant</Button>
        </div>
      </div>
    </section>
  )
}
