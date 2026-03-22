/**
 * EPXFresh AI Chat Service
 * Uses OpenRouter API with Claude Haiku for intelligent conversations
 */

const OPENROUTER_API_KEY = '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';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// EPXFresh Knowledge Base for context
const EPXFRESH_CONTEXT = `You are EPXFresh AI Assistant, an expert in fresh-keeping packaging solutions for produce. 

EPXFresh is a technology company specializing in advanced fresh-keeping packaging that extends produce shelf life by 50-200%.

Key Products:
- Household Fresh-Keeping Bags (various sizes)
- Commercial/Bulk Solutions for supermarkets
- OEM/Private Label packaging
- Custom packaging solutions

Core Technology:
- Proprietary micro-perforated membrane technology
- Optimal humidity control
- Balanced gas exchange (O2/CO2)
- Temperature adaptability

Certifications:
- FDA (U.S. Food and Drug Administration)
- EU (European Union food-contact compliant)
- CNAS (China National Accreditation Service)
- ISO (Manufacturing quality)

Benefits:
- Extends produce freshness 50-200% vs standard storage
- Reduces food waste
- Eco-friendly materials
- FDA & EU approved for food-contact safety

Shipping:
- Global delivery to 50+ countries
- Standard: 7-14 business days
- Express options available
- Free shipping for orders over $500

Company Info:
- Based in Guangzhou, China
- Serving supermarkets, retailers, distributors, and households worldwide

Always be helpful, professional, and knowledgeable about fresh-keeping technology.`;

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatOptions {
  temperature?: number;
  maxTokens?: number;
}

class EPXChatService {
  private messageHistory: ChatMessage[] = [];

  /**
   * Send a message and get AI response
   */
  async sendMessage(
    userMessage: string,
    options: ChatOptions = {}
  ): Promise<string> {
    const { temperature = 0.7, maxTokens = 500 } = options;

    try {
      // Build messages with system context
      const messages = [
        { role: 'system', content: EPXFRESH_CONTEXT },
        ...this.messageHistory.map(m => ({
          role: m.role,
          content: m.content
        })),
        { role: 'user', content: userMessage }
      ];

      const response = await fetch(OPENROUTER_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'https://epxfresh-prototype.vercel.app',
          'X-Title': 'EPXFresh AI Assistant',
        },
        body: JSON.stringify({
          model: 'anthropic/claude-3-haiku',
          messages,
          temperature,
          max_tokens: maxTokens,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('OpenRouter API Error:', response.status, errorData);
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid API response format');
      }

      const assistantMessage = data.choices[0].message.content;

      // Save to history
      this.messageHistory.push({
        id: Date.now().toString(),
        role: 'user',
        content: userMessage,
        timestamp: new Date(),
      });

      this.messageHistory.push({
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantMessage,
        timestamp: new Date(),
      });

      // Keep only last 20 messages to prevent context overflow
      if (this.messageHistory.length > 20) {
        this.messageHistory = this.messageHistory.slice(-20);
      }

      return assistantMessage;
    } catch (error) {
      console.error('Chat Error:', error);
      throw error;
    }
  }

  /**
   * Clear conversation history
   */
  clearHistory(): void {
    this.messageHistory = [];
  }

  /**
   * Get conversation history
   */
  getHistory(): ChatMessage[] {
    return [...this.messageHistory];
  }
}

// Export singleton instance
export const chatService = new EPXChatService();

// Export for use in React components
export default chatService;
