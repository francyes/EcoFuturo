import React from 'react';
import { Newspaper, Leaf, ArrowDown } from 'lucide-react';
import NewsSection from './components/NewsSection';
import SolutionsSection from './components/SolutionsSection';
import Header from './components/Header';

function App() {
  const scrollToContent = () => {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <div className="min-h-screen relative flex flex-col items-center justify-center text-center px-4">
        <Header />
        <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-6">
          EcoFuturo Italia
        </h1>
        <p className="text-xl text-emerald-700 max-w-2xl mb-8">
          Insieme per un futuro sostenibile: notizie sull'inquinamento e soluzioni per un mondo più pulito
        </p>
        <button
          onClick={scrollToContent}
          className="animate-bounce absolute bottom-8 text-emerald-600 hover:text-emerald-800 transition-colors"
          aria-label="Scorri verso il basso"
        >
          <ArrowDown size={32} />
        </button>
      </div>

      {/* Content Sections */}
      <div id="content" className="container mx-auto px-4 py-16 space-y-20">
        <NewsSection />
        <SolutionsSection />
      </div>

      {/* Footer */}
      <footer className="bg-white py-4">
        <div className="container mx-auto px-4 text-right">
          <p className="text-black">Progetto di: Francesco Zita</p>
        </div>
      </footer>
    </div>
  );
}

export default App;