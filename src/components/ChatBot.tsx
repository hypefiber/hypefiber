import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi! I'm here to help you with internet, TV, and streaming services. How can I assist you today?", 
      sender: 'bot' 
    }
  ]);
  const [input, setInput] = useState('');

  const quickReplies = [
    "Internet plans",
    "TV packages",
    "Bundle deals",
    "Speak to an agent"
  ];

  const handleQuickReply = (reply: string) => {
    if (reply === "Speak to an agent") {
      window.location.href = "tel:8884187872";
      return;
    }
    
    setMessages([
      ...messages,
      { id: messages.length + 1, text: reply, sender: 'user' },
      { 
        id: messages.length + 2, 
        text: `Great! For detailed information about ${reply.toLowerCase()}, please call our assistance line at (888) 418-7872. Our team is available 24/7 to help you.`, 
        sender: 'bot' 
      }
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([
      ...messages,
      { id: messages.length + 1, text: input, sender: 'user' },
      { 
        id: messages.length + 2, 
        text: "Thank you for your message! For the best assistance, please call us at (888) 418-7872. Our team is ready to help you 24/7.", 
        sender: 'bot' 
      }
    ]);
    setInput('');
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-2xl flex items-center justify-center neon-glow"
        style={{ boxShadow: '0 10px 40px rgba(0, 255, 255, 0.3)' }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-8 z-50 w-96 max-w-[calc(100vw-4rem)] h-[500px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">HYPEFIBER Assistant</h3>
                  <p className="text-xs opacity-90">Always here to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="p-3 border-t border-border bg-card">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors border border-primary/30"
                  >
                    {reply}
                  </button>
                ))}
              </div>

              {/* Call Now Button */}
              <a
                href="tel:8884187872"
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity mb-3"
              >
                <Phone className="w-4 h-4" />
                Call Now: (888) 418-7872
              </a>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-muted border border-border rounded-full text-sm focus:outline-none focus:border-primary"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
