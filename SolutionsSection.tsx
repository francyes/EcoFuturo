import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Mobilità Sostenibile",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2000&q=80",
      description: "Incentivare l'uso di trasporti pubblici e veicoli elettrici per ridurre le emissioni di CO2.",
      tips: ["Usa la bicicletta per brevi tragitti", "Condividi l'auto con colleghi", "Scegli veicoli elettrici"],
      url: "https://www.minambiente.it/pagina/mobilita-sostenibile"
    },
    {
      title: "Riduzione dei Rifiuti",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=2000&q=80",
      description: "Adottare pratiche di consumo consapevole e riciclo per minimizzare l'impatto ambientale.",
      tips: ["Usa contenitori riutilizzabili", "Pratica la raccolta differenziata", "Composta i rifiuti organici"],
      url: "https://www.enea.it/it/seguici/pubblicazioni/pdf-volumi/2020/guida-economia-circolare.pdf"
    },
    {
      title: "Energia Pulita",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80",
      description: "Passare alle energie rinnovabili per ridurre la dipendenza dai combustibili fossili.",
      tips: ["Installa pannelli solari", "Usa lampadine LED", "Scegli elettrodomestici efficienti"],
      url: "https://www.gse.it/servizi-per-te/fotovoltaico"
    }
  ];

  return (
    <section id="soluzioni" className="scroll-mt-16">
      <div className="flex items-center space-x-3 mb-8">
        <Leaf className="text-emerald-600" size={32} />
        <h2 className="text-3xl font-bold text-emerald-800">Soluzioni per l'Ambiente</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <ul className="space-y-2 mb-4">
                {solution.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    <span className="text-sm text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
              <a
                href={solution.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-800 transition-colors"
              >
                Scopri di più
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;