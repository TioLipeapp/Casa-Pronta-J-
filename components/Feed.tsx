import React, { useState, useEffect } from 'react';
import { Post, UserRole } from '../types';
import { MOCK_POSTS } from '../constants';
import { Heart, MessageCircle, Share2, MoreHorizontal, Wand2, Zap, ArrowRight, Star } from 'lucide-react';
import { Button } from './Button';
import { enhanceTextWithGemini } from '../services/geminiService';

interface FeedProps {
  currentUserRole: UserRole;
}

// Mock Ads Data
const ADS = [
  {
    id: 1,
    title: "Oferta Relâmpago: Pisos Porcelanato",
    description: "Renove sua sala com até 40% de desconto na ConstruMais.",
    bgGradient: "from-orange-500 to-red-600",
    icon: <Zap className="text-yellow-300" size={24} />,
    cta: "Ver Ofertas"
  },
  {
    id: 2,
    title: "Eletricista 24 Horas",
    description: "Emergência elétrica? Chegamos em até 30 minutos.",
    bgGradient: "from-blue-600 to-indigo-700",
    icon: <Zap className="text-yellow-300" size={24} />,
    cta: "Chamar Agora"
  },
  {
    id: 3,
    title: "Feirão de Tintas Premium",
    description: "Sua casa com cores novas. Compre 3 leve 4.",
    bgGradient: "from-green-500 to-teal-600",
    icon: <Star className="text-yellow-300" size={24} />,
    cta: "Confira o Catálogo"
  }
];

export const Feed: React.FC<FeedProps> = ({ currentUserRole }) => {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [newPostContent, setNewPostContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  
  // Ad Banner State
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % ADS.length);
    }, 5000); // Change ad every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(p => 
      p.id === postId ? { ...p, likes: p.likes + 1 } : p
    ));
  };

  const handleEnhanceText = async () => {
    if (!newPostContent.trim()) return;
    setIsGenerating(true);
    const enhanced = await enhanceTextWithGemini(newPostContent, 'post');
    setNewPostContent(enhanced);
    setIsGenerating(false);
  };

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost: Post = {
      id: Date.now().toString(),
      userId: 'current-user', // Mock ID
      userName: 'Você',
      userAvatar: 'https://picsum.photos/id/64/150/150',
      userRole: currentUserRole,
      content: newPostContent,
      likes: 0,
      comments: 0,
      timestamp: 'Agora'
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
    setShowNewPostModal(false);
  };

  const currentAd = ADS[currentAdIndex];

  return (
    <div className="max-w-2xl mx-auto pb-20 pt-20 md:pt-4 px-4">
      
      {/* Dynamic Ad Banner with Animation */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg mb-8 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] active:scale-95">
        <div className={`absolute inset-0 bg-gradient-to-r ${currentAd.bgGradient} transition-colors duration-700`}></div>
        
        {/* Shimmer Effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] absolute -left-full animate-shimmer"></div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
        <div className="absolute -left-10 -top-20 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>

        <div className="relative z-10 p-6 text-white flex justify-between items-center">
          <div className="flex-1 pr-4 opacity-0 animate-fade-in">
             <div className="flex items-center gap-2 mb-2">
                <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">Patrocinado</span>
                {currentAd.icon}
             </div>
             <h3 className="text-xl md:text-2xl font-bold mb-1 leading-tight">{currentAd.title}</h3>
             <p className="text-white/90 text-sm md:text-base font-medium">{currentAd.description}</p>
          </div>
          <button className="hidden md:flex bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-100 transition-transform active:scale-95 items-center gap-2 shadow-sm">
            {currentAd.cta}
            <ArrowRight size={16} />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {ADS.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1 rounded-full transition-all duration-300 ${idx === currentAdIndex ? 'w-6 bg-white' : 'w-2 bg-white/40'}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Create Post Widget */}
      <div 
        className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 mb-6 flex gap-4 items-center cursor-pointer hover:shadow-md hover:border-orange-100 dark:hover:border-slate-700 transition-all duration-300 group" 
        onClick={() => setShowNewPostModal(true)}
      >
        <img src="https://picsum.photos/id/64/150/150" alt="Avatar" className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-50 dark:ring-slate-800 group-hover:ring-orange-100 transition-all" />
        <div className="bg-gray-50 dark:bg-slate-800 rounded-full px-5 py-3 flex-1 text-gray-500 dark:text-slate-400 text-sm group-hover:bg-white dark:group-hover:bg-slate-700 group-hover:shadow-inner transition-all flex justify-between items-center">
          <span>No que você está pensando?</span>
          <Wand2 size={16} className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Feed Posts */}
      <div className="space-y-6">
        {posts.map((post, index) => (
          <article 
            key={post.id} 
            className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={post.userAvatar} alt={post.userName} className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-slate-700" />
                  {/* Status Indicator Mock */}
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm hover:underline cursor-pointer">{post.userName}</h3>
                    {post.userRole === UserRole.PROFESSIONAL && (
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold shadow-sm">PRO</span>
                    )}
                    {post.userRole === UserRole.SUPPLIER && (
                      <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold shadow-sm">LOJA</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 font-medium">{post.timestamp}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-full transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="px-4 pb-3">
              <p className="text-slate-800 dark:text-slate-200 text-sm whitespace-pre-wrap leading-relaxed">{post.content}</p>
            </div>
            {post.image && (
              <div className="w-full h-72 md:h-96 bg-gray-100 dark:bg-slate-800 relative group cursor-pointer">
                 <img src={post.image} alt="Post content" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
            )}

            {/* Footer */}
            <div className="p-4 flex items-center gap-6 border-t border-gray-50 dark:border-slate-800">
              <button 
                onClick={() => handleLike(post.id)}
                className={`flex items-center gap-2 transition-all active:scale-90 ${post.likes > 0 ? "text-red-500" : "text-gray-500 dark:text-gray-400 hover:text-red-500"}`}
              >
                <Heart size={22} className={post.likes > 0 ? "fill-current" : ""} />
                <span className="text-sm font-bold">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">
                <MessageCircle size={22} />
                <span className="text-sm font-bold">{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors ml-auto hover:bg-green-50 dark:hover:bg-green-900/20 p-2 rounded-full">
                <Share2 size={20} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* New Post Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="p-4 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
              <h2 className="font-bold text-lg text-slate-800 dark:text-white">Criar Publicação</h2>
              <button onClick={() => setShowNewPostModal(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full p-1 transition-colors">&times;</button>
            </div>
            <form onSubmit={handlePostSubmit} className="p-4">
              <textarea 
                className="w-full h-32 p-4 border border-gray-200 dark:border-slate-700 rounded-xl resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none mb-4 bg-gray-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 transition-colors"
                placeholder="Compartilhe uma obra, dica ou promoção..."
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              />
              <div className="flex justify-between items-center">
                 <button
                  type="button"
                  onClick={handleEnhanceText}
                  disabled={isGenerating || !newPostContent}
                  className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-sm font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 px-3 py-2 rounded-lg transition-colors disabled:opacity-50"
                 >
                   <Wand2 size={16} className={isGenerating ? "animate-spin" : ""} />
                   {isGenerating ? "Melhorando..." : "Melhorar com IA"}
                 </button>
                <div className="flex gap-2">
                  <Button type="button" variant="ghost" onClick={() => setShowNewPostModal(false)}>Cancelar</Button>
                  <Button type="submit" disabled={!newPostContent} className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-orange-600 dark:to-orange-700 hover:from-slate-800 hover:to-slate-700">Publicar</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};