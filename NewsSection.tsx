import React, { useState, useEffect } from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const [news, setNews] = useState([
    {
      title: "L'Inquinamento Atmosferico nelle Città Italiane",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=2000&q=80",
      description: "Le ultime rilevazioni mostrano un aumento dei livelli di PM10 nelle principali città italiane.",
      date: new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' }),
      url: "https://www.ansa.it/canale_ambiente/",
    },
    {
      title: "Emergenza Plastica nel Mediterraneo",
      image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=2000&q=80",
      description: "Nuovi studi rivelano l'accumulo crescente di microplastiche nelle acque del Mare Mediterraneo.",
      date: new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' }),
      url: "https://www.nationalgeographic.it/ambiente",
    },
    {
      title: "Innovazioni nella Gestione dei Rifiuti",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=2000&q=80",
      description: "Nuove tecnologie per il riciclo automatizzato stanno rivoluzionando la gestione dei rifiuti urbani.",
      date: new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' }),
      url: "https://www.rinnovabili.it/rifiuti/",
    }
  ]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Using RSS2JSON API to fetch news from environmental news sources
        const rssFeeds = [
          'https://www.ansa.it/sito/notizie/ambiente/ambiente_rss.xml',
          'https://www.rinnovabili.it/feed/',
          'https://www.greenme.it/feed/'
        ];

        const proxyUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
        
        // Fetch first feed as fallback
        const response = await fetch(proxyUrl + encodeURIComponent(rssFeeds[0]));
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const newNews = data.items.slice(0, 3).map(item => ({
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').slice(0, 150) + '...',
            image: item.enclosure?.link || "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=2000&q=80",
            date: new Date(item.pubDate).toLocaleDateString('it-IT', { 
              day: '2-digit', 
              month: 'short', 
              year: 'numeric' 
            }),
            url: item.link
          }));

          setNews(newNews);
        }
      } catch (error) {
        console.log('Usando notizie di fallback');
      }
    };

    // Fetch news immediately
    fetchNews();

    // Set up daily updates at midnight
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    const timeout = setTimeout(() => {
      fetchNews();
      // Then set up daily interval
      setInterval(fetchNews, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section id="notizie" className="scroll-mt-16">
      <div className="flex items-center space-x-3 mb-8">
        <Newspaper className="text-emerald-600" size={32} />
        <h2 className="text-3xl font-bold text-emerald-800">Ultime Notizie</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-emerald-600 text-sm">{item.date}</span>
              <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-800 transition-colors"
              >
                Leggi di più
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;