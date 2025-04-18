import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';    
import './App.css';

import TopUsers from './components/TopUsers';
import TrendingPosts from './components/TrendingPosts';
import Feed from './components/Feed';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`px-4 py-2 rounded-md transition duration-300 ${
        isActive 
          ? 'bg-indigo-600 text-white shadow-md' 
          : 'text-gray-200 hover:bg-indigo-700 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

function App() {
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className={`min-h-screen font-sans transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gray-900 text-gray-100' 
          : 'bg-gray-100 text-gray-800'
      }`}>
        <nav className={`fixed w-full z-10 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg' 
            : 'bg-gray-800'
        }`}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 py-4">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold tracking-wide text-white">
                Social<span className="text-indigo-400">Pulse</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <NavLink to="/">Top Users</NavLink>
                <NavLink to="/trending">Trending</NavLink>
                <NavLink to="/feed">Feed</NavLink>
              </div>
              
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="ml-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
        
        <main className="max-w-7xl mx-auto px-4 py-6 pt-24">
          <Routes>
            <Route path="/" element={<TopUsers />} />
            <Route path="/trending" element={<TrendingPosts />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-800 text-center py-6 text-gray-400">
          <div className="max-w-7xl mx-auto px-4">
            <p>© 2025 SocialPulse Analytics. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;