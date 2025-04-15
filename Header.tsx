import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('it-IT', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="https://i.ibb.co/JjhxqDFf/A-logo-Francy.png" 
              alt="EcoFuturo Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold text-emerald-800">EcoFuturo</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-medium text-emerald-700">{formatTime(dateTime)}</span>
            <span className="text-sm text-emerald-600">{formatDate(dateTime)}</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#notizie" className="text-emerald-700 hover:text-emerald-900">Notizie</a>
            <a href="#soluzioni" className="text-emerald-700 hover:text-emerald-900">Soluzioni</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;