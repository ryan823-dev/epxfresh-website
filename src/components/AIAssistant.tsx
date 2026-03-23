import React, { useState, useRef, useEffect } from 'react'
import { Send, Minimize2, X, MessageCircle, ShoppingBag, FileText, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface AIAssistantProps {
  className?: string
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm EPXFresh AI Assistant. I can help you with product information, pricing, and fresh-keeping solutions. How can I assist you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
      // Call OpenRouter API
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
              content: `You are EPXFresh AI Assistant, a helpful customer service representative for EPXFresh, a company specializing in advanced fresh-keeping packaging solutions for fruits and vegetables.

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

Be helpful, professional, and concise. If asked about specific orders or technical specifications, suggest contacting the sales team at sales@epxfresh.com.`
            },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: input }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      })

      const data = await response.json()
      const aiContent = data.choices?.[0]?.message?.content || 'I apologize, I encountered an error. Please try again.'

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
        content: 'I apologize, there was a connection issue. Please try again or contact us at sales@epxfresh.com',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickAction = (query: string) => {
    setInput(query)
  }

  // Floating Button (when closed)
  if (!isOpen) {
    return (
      <div className={cn('fixed bottom-6 right-6 z-50', className)}>
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium hidden sm:inline">Chat with AI</span>
        </button>
        <div className="absolute -top-12 right-0 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700">
          Ask about products, pricing & more
          <div className="absolute bottom-0 right-4 translate-y-1/2 w-2 h-2 bg-slate-800 border-r border-b border-slate-700 transform rotate-45" />
        </div>
      </div>
    )
  }

  // Chat Window (when open)
  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900',
        isMinimized ? 'h-16' : 'h-[520px]',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-emerald-600 text-white">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">EPXFresh Assistant</h3>
            <p className="text-xs text-white/80">Powered by AI</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-900">
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
                    'max-w-[85%] rounded-xl px-3 py-2 text-sm',
                    message.role === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-md'
                      : 'bg-slate-800 text-slate-200 rounded-bl-md border border-slate-700'
                  )}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-400 rounded-xl px-3 py-2 text-sm border border-slate-700">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce delay-200" />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-slate-700 bg-slate-900">
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.query)}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
                >
                  <action.icon className="w-3 h-3" />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-700 bg-slate-900">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}