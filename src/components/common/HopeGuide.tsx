import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Heart, 
  GraduationCap, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Sparkles,
  Star,
  Clock,
  HelpCircle,
  ChevronDown,
  Bot,
  User,
  Mic,
  MicOff,
  Minimize2,
  Maximize2,
  Volume2,
  VolumeX
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'quick-reply' | 'contact' | 'loading';
}

interface QuickReply {
  id: string;
  text: string;
  response: string;
  category: 'info' | 'donation' | 'scholarship' | 'contact';
}

export const HopeGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [chatHeight, setChatHeight] = useState('500px');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hello! I'm your Hope Guide. I'm here to help you learn about the Jumbam Family Foundation and how we're restoring hope in Cameroon. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ]);

  const quickReplies: QuickReply[] = [
    {
      id: '1',
      text: '🎓 Scholarship Information',
      response: "I'd be happy to help with scholarship information! The Ngek Constantine Jumbam Scholarship Fund provides full tuition, accommodation, mentorship, and mental health support for students affected by the Anglophone crisis. Would you like to know about eligibility requirements or how to apply?",
      category: 'scholarship'
    },
    {
      id: '2',
      text: '❤️ How to Donate',
      response: "Thank you for your interest in supporting our mission! You can donate through MTN Mobile Money (+237 671-196-020), credit/debit cards, or bank transfer. Every donation directly supports education, healthcare, and women empowerment programs. Would you like specific donation instructions?",
      category: 'donation'
    },
    {
      id: '3',
      text: '🏥 Our Core Areas',
      response: "We focus on three main areas: Healthcare & Wellness (mobile clinics, mental health support), Women Empowerment (business training, microfinance), and Education & Child Protection (scholarships, safe learning environments). Which area interests you most?",
      category: 'info'
    },
    {
      id: '4',
      text: '📞 Contact Information',
      response: "You can reach us at:\n📧 Email: jumbamfamilyfoundation@gmail.com\n📱 WhatsApp: (+237) 691-51-32-45\n📍 Location: North West Region, Cameroon\n\nWe typically respond within 24 hours. Is there a specific inquiry you'd like to make?",
      category: 'contact'
    },
    {
      id: '5',
      text: '📊 Our Impact',
      response: "Since our founding, we've supported 17 widows with 5.5M FCFA, helped 500+ children return to school, treated 3,000+ patients, and provided scholarships to promising students. Our work continues to grow thanks to supporters like you!",
      category: 'info'
    },
    {
      id: '6',
      text: '🤝 Partnership Opportunities',
      response: "We welcome partnerships with universities, NGOs, corporations, and government agencies. Our current partners include the University of Notre Dame and Open Dreams. Interested in collaborating? I can connect you with our partnership team!",
      category: 'contact'
    }
  ];

  const botResponses = {
    greeting: [
      "Hello! How can I help you learn about our foundation today?",
      "Hi there! I'm excited to share information about our work in Cameroon.",
      "Welcome! I'm here to answer any questions about the Jumbam Family Foundation."
    ],
    thanks: [
      "You're very welcome! Is there anything else you'd like to know?",
      "Happy to help! Feel free to ask more questions.",
      "My pleasure! I'm here whenever you need assistance."
    ],
    default: [
      "That's a great question! Let me connect you with our team for detailed information. You can reach us at jumbamfamilyfoundation@gmail.com or (+237) 691-51-32-45.",
      "I'd love to help with that! For specific details, our team can provide personalized assistance. Contact us directly and we'll get back to you quickly!",
      "Thank you for your interest! Our experts can give you comprehensive information. Feel free to reach out via email or WhatsApp - we're here to help!"
    ]
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const playNotificationSound = () => {
    if (isSoundEnabled) {
      // In a real app, you'd play an actual sound file
      console.log('🔔 Notification sound played');
    }
  };

  const getRandomResponse = (category: keyof typeof botResponses) => {
    const responses = botResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const addMessage = (text: string, sender: 'user' | 'bot', type: Message['type'] = 'text') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      type
    };
    setMessages(prev => [...prev, newMessage]);
    
    if (sender === 'bot') {
      playNotificationSound();
    }
  };

  const handleQuickReply = (quickReply: QuickReply) => {
    addMessage(quickReply.text, 'user');
    setShowQuickReplies(false);
    
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage(quickReply.response, 'bot');
      }, 1500);
    }, 500);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    addMessage(message, 'user');
    const userMessage = message.toLowerCase();
    setMessage('');
    setShowQuickReplies(false);

    setTimeout(() => {
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        
        let response = '';
        if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
          response = getRandomResponse('greeting');
        } else if (userMessage.includes('thank') || userMessage.includes('thanks')) {
          response = getRandomResponse('thanks');
        } else if (userMessage.includes('scholarship') || userMessage.includes('education')) {
          response = "I'd love to help with scholarship information! The Ngek Constantine Jumbam Scholarship covers full tuition, accommodation, and mentorship. You can apply by sending documents to jumbamfamilyfoundation@gmail.com. Would you like specific eligibility details?";
        } else if (userMessage.includes('donate') || userMessage.includes('donation') || userMessage.includes('money')) {
          response = "Thank you for wanting to support our mission! You can donate via MTN Mobile Money (+237 671-196-020), visit our donate page, or contact us for other options. Every contribution helps transform lives in Cameroon!";
        } else if (userMessage.includes('contact') || userMessage.includes('reach') || userMessage.includes('phone')) {
          response = "You can contact us at:\n📧 jumbamfamilyfoundation@gmail.com\n📱 (+237) 691-51-32-45\n💬 WhatsApp available\n\nWe typically respond within 24 hours!";
        } else {
          response = getRandomResponse('default');
        }
        
        addMessage(response, 'bot');
      }, 1500);
    }, 500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-[9999]"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6, ease: "easeOut" }}
      >
        <motion.button
          onClick={toggleChat}
          className={`relative p-4 rounded-full shadow-2xl backdrop-blur-sm border border-white/20 transition-all duration-300 ${
            isOpen 
              ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white' 
              : 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-800'
          }`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle size={24} />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Notification Badge */}
          {!isOpen && (
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3, type: "spring" }}
            >
              1
            </motion.div>
          )}
          
          {/* Pulse Animation */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 rounded-full bg-yellow-500"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed bottom-24 right-6 z-[9998] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden ${
              isMinimized ? 'h-16' : 'h-[600px]'
            } w-80 sm:w-96 max-w-[calc(100vw-3rem)]`}
            style={{ 
              backdropFilter: 'blur(20px)',
              background: 'rgba(255, 255, 255, 0.95)'
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <Bot size={20} className="text-slate-800" />
                  </div>
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg">Hope Guide</h3>
                  <p className="text-sm text-slate-200 flex items-center">
                    <Sparkles size={12} className="mr-1" />
                    Online & Ready to Help
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isSoundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </motion.button>
                
                <motion.button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </motion.button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-end space-x-2 max-w-[80%] ${
                        msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          msg.sender === 'user' 
                            ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' 
                            : 'bg-gradient-to-br from-slate-600 to-slate-700'
                        }`}>
                          {msg.sender === 'user' ? (
                            <User size={16} className="text-white" />
                          ) : (
                            <Bot size={16} className="text-white" />
                          )}
                        </div>
                        
                        {/* Message Bubble */}
                        <div className={`relative px-4 py-3 rounded-2xl shadow-sm ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-800'
                            : 'bg-white border border-gray-200 text-gray-800'
                        }`}>
                          <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                          <p className={`text-xs mt-1 ${
                            msg.sender === 'user' ? 'text-slate-700' : 'text-gray-500'
                          }`}>
                            {formatTime(msg.timestamp)}
                          </p>
                          
                          {/* Message Tail */}
                          <div className={`absolute top-4 w-3 h-3 transform rotate-45 ${
                            msg.sender === 'user'
                              ? '-right-1 bg-gradient-to-br from-yellow-500 to-yellow-600'
                              : '-left-1 bg-white border-l border-b border-gray-200'
                          }`} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  <AnimatePresence>
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex justify-start"
                      >
                        <div className="flex items-end space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                            <Bot size={16} className="text-white" />
                          </div>
                          <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl shadow-sm">
                            <div className="flex space-x-1">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-2 h-2 bg-gray-400 rounded-full"
                                  animate={{ y: [0, -4, 0] }}
                                  transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Quick Replies */}
                  <AnimatePresence>
                    {showQuickReplies && messages.length === 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-2"
                      >
                        <p className="text-sm text-gray-600 text-center mb-3">
                          <Sparkles size={14} className="inline mr-1" />
                          Quick questions to get you started:
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                          {quickReplies.map((reply, index) => (
                            <motion.button
                              key={reply.id}
                              onClick={() => handleQuickReply(reply)}
                              className="p-3 text-left text-sm bg-gray-100 hover:bg-yellow-50 border border-gray-200 hover:border-yellow-300 rounded-lg transition-all duration-200"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02, x: 4 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {reply.text}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-200 p-4 bg-white">
                  <form onSubmit={handleSend} className="flex items-end space-x-3">
                    <div className="flex-1 relative">
                      <input
                        ref={inputRef}
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none bg-gray-50"
                        disabled={isTyping}
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={!message.trim() || isTyping}
                      className="p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-800 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      whileHover={{ scale: message.trim() ? 1.05 : 1 }}
                      whileTap={{ scale: message.trim() ? 0.95 : 1 }}
                    >
                      <Send size={20} />
                    </motion.button>
                  </form>
                  
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Powered by Hope Guide • Typically replies in under 1 minute
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
