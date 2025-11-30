import React, { useState } from 'react';
import { MOCK_CONVERSATIONS } from '../constants';
import { ChatMessage, Conversation } from '../types';
import { Send, ArrowLeft, MessageCircle } from 'lucide-react';

export const Chat: React.FC = () => {
  const [activeChat, setActiveChat] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', senderId: 'u1', text: 'Olá! Vi seu perfil e gostaria de um orçamento.', timestamp: '10:00', isMe: true },
    { id: '2', senderId: 'other', text: 'Bom dia! Claro, pode me mandar fotos do local?', timestamp: '10:05', isMe: false },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, {
      id: Date.now().toString(),
      senderId: 'u1',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    }]);
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-6rem)] md:h-screen md:pt-4 md:pb-4 flex gap-4 px-4 pt-20 pb-20">
      
      {/* Conversation List */}
      <div className={`w-full md:w-1/3 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col ${activeChat ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-4 border-b border-gray-100 dark:border-slate-800">
          <h2 className="font-bold text-lg text-slate-900 dark:text-white">Mensagens</h2>
        </div>
        <div className="overflow-y-auto flex-1">
          {MOCK_CONVERSATIONS.map(conv => (
            <div 
              key={conv.id}
              onClick={() => setActiveChat(conv)}
              className={`p-4 flex gap-3 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer transition-colors border-b border-gray-50 dark:border-slate-800 ${activeChat?.id === conv.id ? 'bg-orange-50 dark:bg-orange-900/20' : ''}`}
            >
              <img src={conv.participantAvatar} alt={conv.participantName} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-slate-900 dark:text-white truncate">{conv.participantName}</h3>
                  {conv.unreadCount > 0 && (
                    <span className="bg-orange-600 text-white text-[10px] px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center">
                      {conv.unreadCount}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-slate-400 truncate">{conv.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className={`w-full md:w-2/3 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 flex-col ${activeChat ? 'flex' : 'hidden md:flex'}`}>
        {activeChat ? (
          <>
            <div className="p-4 border-b border-gray-100 dark:border-slate-800 flex items-center gap-3">
              <button className="md:hidden text-gray-500" onClick={() => setActiveChat(null)}>
                <ArrowLeft size={20} />
              </button>
              <img src={activeChat.participantAvatar} alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">{activeChat.participantName}</h3>
                <span className="text-xs text-green-600 flex items-center gap-1">● Online agora</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-950/50">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[75%] p-3 rounded-2xl ${msg.isMe ? 'bg-orange-600 text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-none'}`}>
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-[10px] mt-1 text-right ${msg.isMe ? 'text-orange-200' : 'text-gray-400'}`}>{msg.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-gray-100 dark:border-slate-800 flex gap-2">
              <input 
                type="text" 
                className="flex-1 border border-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Digite sua mensagem..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-slate-900 dark:bg-orange-600 text-white p-2 rounded-lg hover:bg-slate-800 dark:hover:bg-orange-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8 text-center">
            <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-full mb-4">
              <MessageCircle className="w-8 h-8 opacity-50" />
            </div>
            <p>Selecione uma conversa para começar</p>
          </div>
        )}
      </div>
    </div>
  );
};