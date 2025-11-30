import React from 'react';
import { Home, Search, MessageSquare, User, Briefcase, Menu, LogOut, HardHat, Moon, Sun } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserRole } from '../types';

interface NavigationProps {
  currentUserRole: UserRole | null;
  onLogout: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentUserRole, onLogout, isDarkMode, toggleTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: Home, label: 'Feed', path: '/feed' },
    { icon: Search, label: 'Buscar', path: '/search' },
    { icon: MessageSquare, label: 'Chat', path: '/chat' },
    { icon: User, label: 'Perfil', path: '/profile' },
  ];

  if (currentUserRole === UserRole.PROFESSIONAL || currentUserRole === UserRole.SUPPLIER) {
    navItems.splice(3, 0, { icon: Briefcase, label: 'Dashboard', path: '/dashboard' });
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 fixed left-0 top-0 z-50 shadow-sm transition-colors duration-300">
        <div className="p-6">
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white shadow-md">
              <HardHat size={20} />
            </div>
            Casa Pronta Já
          </h1>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive(item.path) 
                  ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 font-semibold shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:pl-5'
              }`}
            >
              <item.icon size={20} className={isActive(item.path) ? "text-orange-600 dark:text-orange-400" : ""} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100 dark:border-slate-800 space-y-2">
           <button
            onClick={toggleTheme}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
           >
             {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
             {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
           </button>
           <button 
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors font-medium"
           >
             <LogOut size={20} />
             Sair
           </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 z-50 px-4 py-3 flex justify-between items-center shadow-sm transition-colors duration-300">
        <h1 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center text-white text-xs">
            <HardHat size={14} />
          </div>
          Casa Pronta Já
        </h1>
        <div className="flex items-center gap-2">
          <button 
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors" 
            onClick={toggleTheme}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors" onClick={onLogout}>
            <LogOut size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 z-50 flex justify-around items-center px-2 py-3 safe-area-pb shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] transition-colors duration-300">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${
              isActive(item.path) ? 'text-orange-600 dark:text-orange-400 -translate-y-1' : 'text-slate-500 dark:text-slate-500'
            }`}
          >
            <item.icon size={24} className={isActive(item.path) ? "fill-current opacity-20" : ""} />
            <span className="text-[10px] font-bold">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
};