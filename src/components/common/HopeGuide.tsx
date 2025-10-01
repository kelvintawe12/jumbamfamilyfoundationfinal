import React, { useState } from 'react';
import { MessageCircleIcon, XIcon, SendIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export const HopeGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{
    text: string;
    sender: 'user' | 'bot';
  }>>([{
    text: "Hello! I'm your Hope Guide. How can I help you learn more about the Jumbam Family Foundation?",
    sender: 'bot'
  }]);
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Add user message
    setMessages([...messages, {
      text: message,
      sender: 'user'
    }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thank you for your message. Our team is working to provide you with the best information about our foundation's work in Cameroon.",
        sender: 'bot'
      }]);
    }, 1000);
    setMessage('');
  };
  return <>
      {/* Chat toggle button */}
      <motion.button onClick={toggleChat} className="fixed bottom-6 right-6 bg-primary text-secondary p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all z-50" whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.95
    }} initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 2
    }}>
        {isOpen ? <XIcon size={24} /> : <MessageCircleIcon size={24} />}
      </motion.button>
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        scale: 0.9,
        y: 20
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.9,
        y: 20
      }} transition={{
        duration: 0.3
      }} className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden">
            <div className="bg-gradient-to-r from-secondary to-accent text-white p-4">
              <h3 className="font-heading font-bold text-lg">Hope Guide</h3>
              <p className="text-sm text-white/80">
                How can I assist you today?
              </p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} className={`${msg.sender === 'user' ? 'ml-auto bg-primary/10 text-secondary' : 'mr-auto bg-secondary/10 text-secondary'} p-3 rounded-lg max-w-[80%] shadow-sm`}>
                  {msg.text}
                </motion.div>)}
            </div>
            <form onSubmit={handleSend} className="border-t p-3 flex">
              <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Type your message..." className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:border-primary" />
              <button type="submit" className="bg-primary text-secondary px-4 py-2 rounded-r-lg hover:bg-primary/90 flex items-center justify-center">
                <SendIcon size={18} />
              </button>
            </form>
          </motion.div>}
      </AnimatePresence>
    </>;
};