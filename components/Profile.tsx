import React from 'react';
import { MOCK_USERS } from '../constants';
import { MapPin, Star, Calendar, MessageSquare, Briefcase } from 'lucide-react';
import { Button } from './Button';

export const Profile: React.FC = () => {
  // Mocking viewing a specific professional profile (Carlos Silva)
  const user = MOCK_USERS[0];

  return (
    <div className="max-w-4xl mx-auto pb-20 pt-20 md:pt-4 px-4">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden mb-6">
        {/* Cover Image */}
        <div className="h-48 md:h-64 relative bg-slate-200 dark:bg-slate-800">
           {user.coverImage && <img src={user.coverImage} alt="Cover" className="w-full h-full object-cover" />}
        </div>
        
        {/* Profile Info */}
        <div className="px-6 pb-6 relative">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-end -mt-12 mb-4">
            <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-xl border-4 border-white dark:border-slate-900 shadow-md object-cover bg-white dark:bg-slate-800" />
            <div className="flex-1 mt-2 md:mt-0">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{user.name}</h1>
              <p className="text-slate-600 dark:text-slate-400 font-medium">{user.profession}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-500 mt-1">
                <MapPin size={16} />
                {user.location}
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto mt-2 md:mt-0">
              <Button className="flex-1 md:flex-none">
                <MessageSquare size={18} className="mr-2" />
                Chat
              </Button>
              <Button variant="secondary" className="flex-1 md:flex-none">Contratar</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
               <section>
                 <h2 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Sobre</h2>
                 <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{user.bio}</p>
               </section>

               <section>
                 <h2 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Portfólio</h2>
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                   {user.portfolio?.map((img, i) => (
                     <img key={i} src={img} alt="Work" className="aspect-square rounded-lg object-cover w-full bg-gray-100 dark:bg-slate-800 hover:opacity-90 transition-opacity cursor-pointer" />
                   ))}
                 </div>
               </section>

               <section>
                 <h2 className="font-bold text-lg mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                   Avaliações
                   <span className="text-sm font-normal text-gray-500">({user.reviewCount})</span>
                 </h2>
                 
                 {/* Mock Reviews */}
                 <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="bg-gray-50 dark:bg-slate-800/50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex text-yellow-400">
                             {[...Array(5)].map((_, stars) => <Star key={stars} size={14} fill="currentColor" />)}
                          </div>
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Excelente profissional</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-slate-400">Serviço muito bem feito e limpo. Recomendo a todos!</p>
                        <p className="text-xs text-gray-400 mt-2">Maria S. - Há 2 dias</p>
                      </div>
                    ))}
                 </div>
               </section>
            </div>

            <div className="space-y-4">
              <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-xl border border-orange-100 dark:border-orange-900/20">
                <h3 className="font-bold text-orange-800 dark:text-orange-400 mb-2 flex items-center gap-2">
                  <Calendar size={18} /> Disponibilidade
                </h3>
                <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-medium bg-white dark:bg-slate-800 p-2 rounded-lg shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Disponível Agora
                </div>
                <p className="text-xs text-orange-600 dark:text-orange-400/80 mt-2">Responde geralmente em 1 hora</p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-200 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Briefcase size={18} /> Especialidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Elétrica Residencial', 'Quadros', 'Iluminação', 'Reparos', 'Automação'].map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};