import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PageType } from '../types';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType, memberId?: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Projects', page: 'projects' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavigate = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full top-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigate('home')}
          >
            <div className="flex items-center gap-3">
              {/* Animated logo icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center group-hover:rotate-180 transition-transform duration-500 shadow-lg shadow-yellow-400/30">
                <span className="text-slate-900 font-black text-xl">D</span>
              </div>
              {/* Logo text */}
              <div className="text-2xl font-black tracking-tight">
                <span className="text-white group-hover:text-yellow-400 transition-colors">DevUnite</span>
                <span className="text-gradient ml-2">Studio</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  currentPage === item.page
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 shadow-lg shadow-yellow-400/30'
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                }`}
                style={{
                  animation: `slideInRight 0.5s ease-out backwards`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Active indicator */}
                {currentPage === item.page && (
                  <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-12 h-12 flex items-center justify-center glass rounded-xl border border-white/10 hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-all group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 w-6 h-6 text-yellow-400 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
              />
              <X 
                className={`absolute inset-0 w-6 h-6 text-yellow-400 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden glass-dark border-t border-white/5 transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              className={`block w-full text-left px-6 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                currentPage === item.page
                  ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 shadow-lg shadow-yellow-400/30'
                  : 'text-gray-300 hover:bg-white/5 hover:text-yellow-400'
              }`}
              style={{
                animation: mobileMenuOpen ? `slideInLeft 0.4s ease-out backwards` : 'none',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
