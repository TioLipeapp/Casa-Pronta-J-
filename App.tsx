import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Login } from './components/Login';
import { Feed } from './components/Feed';
import { Search } from './components/Search';
import { Chat } from './components/Chat';
import { Profile } from './components/Profile';
import { Dashboard } from './components/Dashboard';
import { UserRole } from './types';

function App() {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  if (!userRole) {
    return <Login onLogin={handleLogin} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
  }

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navigation 
          currentUserRole={userRole} 
          onLogout={handleLogout} 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
        />
        
        <main className="md:ml-64 min-h-screen transition-all duration-300">
          <Routes>
            <Route path="/" element={<Navigate to="/feed" replace />} />
            <Route path="/feed" element={<Feed currentUserRole={userRole} />} />
            <Route path="/search" element={<Search />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            
            {(userRole === UserRole.PROFESSIONAL || userRole === UserRole.SUPPLIER) && (
              <Route path="/dashboard" element={<Dashboard />} />
            )}
            
            <Route path="*" element={<Navigate to="/feed" replace />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;