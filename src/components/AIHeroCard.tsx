import React, { useState, useRef, useEffect } from 'react'
import { Send, MessageCircle, ShoppingBag, FileText, Lightbulb, Bot, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface AIHeroCardProps {
  className?: string
}

export const AIHeroCard: React.FC<AIHeroCardProps> = ({ className }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Tell me what you need, and I'll help you find the perfect fresh-keeping solution!",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isExpanded])

  const quickActions = [
    { icon: ShoppingBag, label: 'Products', query: 'What products do you offer for supermarkets?' },
    { icon: FileText, label: 'Pricing', query: 'What is your pricing for bulk orders?' },
    { icon: Lightbulb, label: 'Technology', query: 'How does your fresh-keeping technology work?' },
  ]

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
          'HTTP-Referer': 'https://epxfresh.uniscore.top',
          'X-Title': 'EPXFresh AI Assistant'
        },
        body: JSON.stringify({
          model: 'anthropic/claude-3-haiku',
          messages: [
            {
              role: 'system',
              content: `You are EPXFresh AI Assistant, a helpful B2B sales representative for EPXFresh, a company specializing in advanced fresh-keeping packaging solutions for produce.

Key information about EPXFresh:
- Proprietary micro-perforated membrane technology
- Extends produce shelf life by 50-200%
- Certified: FDA, EU, CNAS, ISO 9001, ISO 14001
- Products: FreshKeeper Pro (commercial), FreshKeeper Home (consumer), FreshKeeper Select (specialty), FreshKeeper Bulk (wholesale)
- Serves 50+ countries, 500+ business partners
- Offers free samples, OEM/private label services
- Trade terms: T/T 30% deposit, FOB Shenzhen/Guangzhou/Hong Kong
- Lead time: 15-25 days after deposit
- MOQ: 10,000 rolls (varies by product)

Be professional, helpful, and concise. Guide users toward requesting samples or getting quotes. Always offer to connect with human sales team for detailed orders.`
            },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: input }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      })

      const data = await response.json()
      const aiContent = data.choices?.[0]?.message?.content || 'I apologize, I encountered an error. Please try again or email us at sales@epxfresh.com.'

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiContent,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Connection issue. Please try again or contact sales@epxfresh.com',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickAction = (query: string) => {
    setInput(query)
    handleSend()
  }

  return (
    <div className={cn(
      'bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col',
      'h-full min-h-[480px]',
      className
    )}>
      {/* Header */}
      <div className="px-5 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">AI Sourcing Assistant</h3>
              <p className="text-xs text-white/80">Powered by AI</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/90">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="hidden sm:inline">Online · &lt;2s</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              'flex',
              message.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            <div
              className={cn(
                'max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed',
                message.role === 'user'
                  ? 'bg-emerald-600 text-white rounded-br-sm'
                  : 'bg-white text-gray-700 rounded-bl-sm shadow-sm border border-gray-100'
              )}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-500 rounded-xl px-4 py-3 text-sm shadow-sm border border-gray-100">
              <span className="inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-200" />
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-3 border-t border-gray-100 bg-white">
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.query)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
            >
              <action.icon className="w-3.5 h-3.5" />
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="e.g. I need fresh-keeping bags for bananas..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer Trust */}
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 text-center">
        <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
          <Clock className="w-3 h-3" />
          24/7 AI Support · Response within 2 seconds
        </p>
      </div>
    </div>
  )
}
