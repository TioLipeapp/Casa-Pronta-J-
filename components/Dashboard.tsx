import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Eye, Briefcase, Star, TrendingUp } from 'lucide-react';

const data = [
  { name: 'Seg', views: 40, requests: 2 },
  { name: 'Ter', views: 30, requests: 1 },
  { name: 'Qua', views: 20, requests: 0 },
  { name: 'Qui', views: 27, requests: 3 },
  { name: 'Sex', views: 18, requests: 4 },
  { name: 'Sab', views: 23, requests: 2 },
  { name: 'Dom', views: 34, requests: 1 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pb-20 pt-20 md:pt-4 px-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Profissional</h1>
        <p className="text-gray-500 dark:text-slate-400">Acompanhe o desempenho do seu perfil.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400 mb-2">
            <Eye size={18} />
            <span className="text-sm font-medium">Visualizações</span>
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">1,234</p>
          <span className="text-xs text-green-600 flex items-center gap-1">
            <TrendingUp size={12} /> +12% essa semana
          </span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400 mb-2">
            <Briefcase size={18} />
            <span className="text-sm font-medium">Serviços</span>
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">15</p>
          <span className="text-xs text-gray-400">Neste mês</span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm">
           <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400 mb-2">
            <Star size={18} />
            <span className="text-sm font-medium">Avaliação</span>
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">4.8</p>
          <span className="text-xs text-gray-400">Baseado em 124 avaliações</span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm">
           <div className="flex items-center gap-2 text-gray-500 dark:text-slate-400 mb-2">
            <TrendingUp size={18} />
            <span className="text-sm font-medium">Renda Est.</span>
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">R$ 4.5k</p>
           <span className="text-xs text-gray-400">Neste mês</span>
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <h3 className="font-bold text-slate-900 dark:text-white mb-6">Alcance do Perfil</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                <XAxis dataKey="name" tick={{fontSize: 12, fill: '#94a3b8'}} />
                <YAxis tick={{fontSize: 12, fill: '#94a3b8'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                  itemStyle={{ color: '#f8fafc' }}
                />
                <Bar dataKey="views" fill="#ea580c" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <h3 className="font-bold text-slate-900 dark:text-white mb-6">Pedidos de Orçamento</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.3} />
                 <XAxis dataKey="name" tick={{fontSize: 12, fill: '#94a3b8'}} />
                 <YAxis tick={{fontSize: 12, fill: '#94a3b8'}} />
                 <Tooltip 
                   contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                   itemStyle={{ color: '#f8fafc' }}
                 />
                 <Line type="monotone" dataKey="requests" stroke="#3b82f6" strokeWidth={3} dot={{r: 4, fill: '#3b82f6'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};