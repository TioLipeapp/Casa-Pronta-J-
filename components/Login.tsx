import React, { useState } from 'react';
import { UserRole } from '../types';
import { User, Hammer, Store, ArrowRight, HardHat, Moon, Sun } from 'lucide-react';

interface LoginProps {
  onLogin: (role: UserRole) => void;
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin, isDarkMode, toggleTheme }) => {
  const [loadingRole, setLoadingRole] = useState<UserRole | null>(null);

  const handleRoleSelect = (role: UserRole) => {
    setLoadingRole(role);
    // Simulate network delay
    setTimeout(() => {
      onLogin(role);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden flex items-center justify-center p-4">
      {/* Theme Toggle (Absolute) */}
      {toggleTheme && (
        <button 
          onClick={toggleTheme}
          className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      )}

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row relative z-10 transition-all duration-500 hover:shadow-orange-500/10">
        
        {/* Left Side - Welcome */}
        <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center bg-slate-50 dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-600/30">
                <HardHat size={24} />
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Casa Pronta Já</h1>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">Sua obra do início ao fim, na palma da mão. Conecte-se com quem entende de construção.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm transition-all duration-300">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-2.5 rounded-lg text-orange-600 dark:text-orange-400 mt-1">
                <User size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Para Clientes</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Encontre profissionais qualificados e peça orçamentos rápidos.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm transition-all duration-300">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-lg text-blue-600 dark:text-blue-400 mt-1">
                <Hammer size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Para Profissionais</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Mostre seu talento, conquiste clientes e gerencie seus serviços.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-900 hover:shadow-sm transition-all duration-300">
              <div className="bg-green-100 dark:bg-green-900/30 p-2.5 rounded-lg text-green-600 dark:text-green-400 mt-1">
                <Store size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Para Fornecedores</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Venda materiais e anuncie ofertas para quem precisa agora.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Selection */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-slate-900">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Bem-vindo(a)!</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Escolha como você deseja acessar a plataforma.</p>
          
          <div className="space-y-4">
            <button
              onClick={() => handleRoleSelect(UserRole.CLIENT)}
              disabled={!!loadingRole}
              className={`w-full p-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-50/50 dark:hover:bg-orange-900/10 transition-all duration-300 group relative flex items-center justify-between ${loadingRole === UserRole.CLIENT ? 'opacity-50 cursor-wait' : 'hover:-translate-y-1 hover:shadow-md'}`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300">
                  <User size={24} />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-lg text-slate-900 dark:text-white">Sou Cliente</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Quero contratar ou comprar</span>
                </div>
              </div>
              <ArrowRight size={24} className="text-slate-300 dark:text-slate-700 group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
            </button>

            <button
              onClick={() => handleRoleSelect(UserRole.PROFESSIONAL)}
              disabled={!!loadingRole}
              className={`w-full p-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-300 group relative flex items-center justify-between ${loadingRole === UserRole.PROFESSIONAL ? 'opacity-50 cursor-wait' : 'hover:-translate-y-1 hover:shadow-md'}`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Hammer size={24} />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-lg text-slate-900 dark:text-white">Sou Profissional</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Prestador de serviços</span>
                </div>
              </div>
              <ArrowRight size={24} className="text-slate-300 dark:text-slate-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
            </button>

            <button
              onClick={() => handleRoleSelect(UserRole.SUPPLIER)}
              disabled={!!loadingRole}
              className={`w-full p-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-all duration-300 group relative flex items-center justify-between ${loadingRole === UserRole.SUPPLIER ? 'opacity-50 cursor-wait' : 'hover:-translate-y-1 hover:shadow-md'}`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">
                  <Store size={24} />
                </div>
                <div className="text-left">
                  <span className="block font-bold text-lg text-slate-900 dark:text-white">Sou Fornecedor</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Loja de materiais</span>
                </div>
              </div>
              <ArrowRight size={24} className="text-slate-300 dark:text-slate-700 group-hover:text-green-600 dark:group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-400 dark:text-slate-500">Ao entrar, você concorda com nossos Termos de Uso e Política de Privacidade.</p>
          </div>
        </div>
      </div>
    </div>
  );
};