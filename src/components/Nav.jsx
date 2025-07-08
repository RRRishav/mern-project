import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
    { name: 'Login', to: '/login' },
    { name: 'Signup', to: '/signup' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-black/60 backdrop-blur-xl border-b border-purple-500/40 shadow-lg'
        : 'bg-black/30 backdrop-blur-md border-b border-purple-500/20'
    }`}>
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="group">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 animate-gradient-x group-hover:scale-105 transition-transform duration-300">
              Rishav Bhardwaj
            </h1>
            <div className="h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex space-x-4">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.to}
                className={`relative px-3 py-2 text-sm xl:text-base font-medium transition ${
                  location.pathname === item.to ? 'text-white' : 'text-gray-300'
                } hover:text-white group`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative p-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
            >
              <div className="relative">
                <span className={`block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mb-1 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}/>
                <span className={`block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 mb-1 transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}/>
                <span className={`block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}/>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-2 pb-3 bg-black/80 backdrop-blur-xl border-t border-purple-500/30">
          {navItems.map((item, idx) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 text-base font-medium transition ${
                location.pathname === item.to ? 'text-white' : 'text-gray-300'
              } hover:text-white rounded-lg mb-1`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact">
         
          </Link>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,100% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        @keyframes float {
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(-5px) }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
}

export default Nav;
