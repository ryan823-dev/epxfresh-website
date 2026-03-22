import React, { useState, useRef, useEffect } from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
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
      content: "Hi! I'm your EPXFresh AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickActions = [
    { icon: ShoppingBag, label: 'Shop Products', query: 'Show me household fresh-keeping bags' },
    { icon: FileText, label: 'Get a Quote', query: 'I need bulk pricing for fresh-keeping bags' },
    { icon: Lightbulb, label: 'Product Help', query: 'What bags should I use for leafy vegetables?' },
  ]

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Great question! Our fresh-keeping bags are designed to extend produce freshness by creating an optimal micro-environment. Would you like me to recommend a specific product for your needs?",
        "I'd be happy to help! For bulk orders, I can connect you with our sales team for custom pricing. What's your estimated order quantity?",
        "Our technology helps manage moisture and gas exchange to reduce spoilage. What type of produce are you looking to store?",
      ]
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  const handleQuickAction = (query: string) => {
    setInput(query)
  }

  if (!isOpen) {
    // Floating Button
    return (
      <div className={cn('fixed bottom-6 right-6 z-50', className)}>
        <Button
          onClick={() => setIsOpen(true)}
          size="xl"
          className="rounded-full shadow-fresh bg-gradient-fresh hover:opacity-90 group"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="ml-2 text-white font-semibold hidden md:inline">EPX Assistant</span>
        </Button>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us!
        </div>
      </div>
    )
  }

  return (
    <Card
      className={cn(
        'fixed bottom-6 right-6 z-50 w-full max-w-md h-[600px] flex flex-col shadow-fresh overflow-hidden',
        isMinimized && 'h-16',
        className
      )}
    >
      {/* Header */}
      <div className="bg-gradient-fresh text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold">EPXFresh Assistant</h3>
            <p className="text-xs text-white/80">Usually responds instantly</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                    'max-w-[80%] rounded-2xl px-4 py-3',
                    message.role === 'user'
                      ? 'bg-fresh-primary text-white rounded-br-md'
                      : 'bg-muted text-foreground rounded-bl-md'
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p
                    className={cn(
                      'text-xs mt-1',
                      message.role === 'user' ? 'text-white/70' : 'text-muted-foreground'
                    )}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.query)}
                  className="flex items-center space-x-2 px-3 py-1.5 bg-fresh-primary/10 text-fresh-primary text-xs font-medium rounded-full hover:bg-fresh-primary/20 transition-colors"
                >
                  <action.icon className="w-3 h-3" />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-background">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-fresh-primary/50 text-sm"
              />
              <Button
                onClick={handleSend}
                size="icon"
                disabled={!input.trim()}
                className="bg-fresh-primary hover:bg-fresh-primary-dark"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  )
}
