import React, { useState } from 'react';
import { Search as SearchIcon, MapPin, Filter, Star } from 'lucide-react';
import { MOCK_USERS, MOCK_PRODUCTS } from '../constants';
import { UserRole } from '../types';
import { Link } from 'react-router-dom';

export const Search: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'PROFESSIONALS' | 'PRODUCTS'>('PROFESSIONALS');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = MOCK_USERS.filter(u => 
    u.role === UserRole.PROFESSIONAL && 
    (u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     u.profession?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredProducts = MOCK_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto pb-20 pt-20 md:pt-4 px-4">
      
      {/* Search Header */}
      <div className="sticky top-16 md:top-0 bg-[#f8fafc] dark:bg-slate-950 z-10 pb-4 transition-colors">
        <div className="flex gap-2 mb-4 bg-gray-200 dark:bg-slate-800 p-1 rounded-lg w-fit transition-colors">
          <button 
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'PROFESSIONALS' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            onClick={() => setActiveTab('PROFESSIONALS')}
          >
            Profissionais
          </button>
          <button 
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'PRODUCTS' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            onClick={() => setActiveTab('PRODUCTS')}
          >
            Produtos
          </button>
        </div>

        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder={activeTab === 'PROFESSIONALS' ? "Buscar pedreiro, eletricista..." : "Buscar cimento, tintas..."}
            className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg text-gray-500 transition-colors">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeTab === 'PROFESSIONALS' ? (
          filteredUsers.map(user => (
            <Link to={`/profile`} key={user.id} className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md transition-shadow flex flex-col gap-3 group">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{user.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-slate-400">{user.profession}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg">
                  <Star size={14} className="text-yellow-500 fill-current" />
                  <span className="text-xs font-bold text-yellow-700 dark:text-yellow-400">{user.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <MapPin size={14} />
                {user.location}
              </div>

              <div className="mt-auto pt-2 border-t border-gray-50 dark:border-slate-800 flex gap-2">
                {user.portfolio?.slice(0, 2).map((img, idx) => (
                  <img key={idx} src={img} alt="Portfolio" className="w-16 h-16 rounded-lg object-cover bg-gray-100 dark:bg-slate-800" />
                ))}
                {user.portfolio && user.portfolio.length > 2 && (
                  <div className="w-16 h-16 rounded-lg bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-xs text-gray-500 font-medium">
                    +{user.portfolio.length - 2}
                  </div>
                )}
              </div>
            </Link>
          ))
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} className="bg-white dark:bg-slate-900 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-100 dark:bg-slate-800 rounded-lg mb-3 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-slate-900 dark:text-white line-clamp-2 text-sm">{product.name}</h3>
              </div>
              <p className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-2">R$ {product.price.toFixed(2)}</p>
              <button className="w-full py-2 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors">
                Ver Detalhes
              </button>
            </div>
          ))
        )}
      </div>
      
      {((activeTab === 'PROFESSIONALS' && filteredUsers.length === 0) || (activeTab === 'PRODUCTS' && filteredProducts.length === 0)) && (
         <div className="text-center py-12 text-gray-400">
           <SearchIcon className="mx-auto mb-2 opacity-50" size={48} />
           <p>Nenhum resultado encontrado para "{searchTerm}"</p>
         </div>
      )}
    </div>
  );
};