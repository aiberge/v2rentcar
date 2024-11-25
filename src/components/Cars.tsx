import { MessageCircle } from 'lucide-react';

const cars = [
  {
    id: 1,
    name: 'Dacia Logan',
    image: '/logan.webp', 
    price: '349 DH/jour',
    features: ['Boîte manuelle', 'Diesel', '5 places confortables', 'Coffre 310L'],
  },
  {
    id: 2,
    name: 'Dacia Stepway',
    image: '/stepway.webp',
    price: '349 DH/jour', 
    features: ['Boîte manuelle', 'Essence', '5 places confortables', 'Coffre 320L'],
  },
  {
    id: 3,
    name: 'Clio 5',
    image: '/clio24.jpg',
    price: '399 DH/jour',
    features: ['Boîte automatique', 'Essence', '5 places confortables', 'Coffre 391L'],
  },
  {
    id: 4,
    name: 'Peugeot 208',
    image: '/208.jpeg',
    price: '349 DH/jour',
    features: ['Boîte automatique', 'Essence', '5 places confortables', 'Coffre 311L'],
  },
  {
    id: 5,
    name: 'Dacia Duster',
    image: '/duster.jpg',
    price: '349 DH/jour',
    features: ['Boîte manuelle', 'Diesel', '5 places confortables', 'Coffre 478L'],
  },
  {
    id: 6,
    name: 'Peugeot C-Elysée',
    image: '/Clise.jpg',
    price: '399 DH/jour',
    features: ['Boîte manuelle', 'Essence', '5 places confortables', 'Coffre 506L'],
  },
  {
    id: 7,
    name: 'T-Roc',
    image: '/te.jpg',
    price: '799 DH/jour',
    features: ['Boîte automatique', 'Essence', '5 places confortables', 'Coffre 445L'],
  },
  {
    id: 8,
    name: 'Range Rover Velar',
    image: '/range.jpg',
    price: '999 DH/jour',
    features: ['Boîte automatique', 'Diesel', '5 places confortables', 'Coffre 632L'],
  },
  {
    id: 9,
    name: 'Golf 8',
    image: '/8.jpg',
    price: '799 DH/jour',
    features: ['Boîte automatique', 'Essence', '5 places confortables', 'Coffre 380L'],
  },
  {
    id: 10,
    name: 'Hyundai Accent',
    image: '/accent.png',
    price: '449 DH/jour',
    features: ['Boîte manuelle', 'Essence', '5 places confortables', 'Coffre 387L'],
  },
  {
    id: 11,
    name: 'Opel Corsa',
    image: '/corsa.webp',
    price: '349 DH/jour',
    features: ['Boîte manuelle', 'Essence', '5 places confortables', 'Coffre 309L'],
  },
  {
    id: 12,
    name: 'Opel Crossland',
    image: '/land.jpg',
    price: '349 DH/jour',
    features: ['Boîte automatique', 'Essence', '5 places confortables', 'Coffre 410L'],
  },
  {
    id: 13,
    name: 'Citroën C3',
    image: '/c3e.jpg',
    price: '349 DH/jour',
    features: ['Boîte manuelle', 'Essence', '5 places confortables', 'Coffre 300L'],
  },
];

export default function Cars() {
  const handleWhatsAppClick = (carName: string) => {
    const message = `Bonjour, je souhaite réserver la ${carName}`;
    const whatsappUrl = `https://wa.me/212644465555?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="cars" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#432F25] mb-4">
          Notre Flotte de Véhicules
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Découvrez notre sélection variée de véhicules pour tous vos besoins. De la citadine économique au SUV luxueux,
          nous avons le véhicule parfait pour votre séjour.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div 
              key={car.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-[#EE8391] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {car.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#432F25] mb-3 group-hover:text-[#EE8391] transition-colors">
                  {car.name}
                </h3>
                
                <div className="space-y-2 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EE8391] mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => handleWhatsAppClick(car.name)}
                  className="w-full bg-white text-[#EE8391] border-2 border-[#EE8391] px-4 py-2.5 rounded-lg flex items-center justify-center 
                           hover:bg-[#EE8391] hover:text-white transition-all duration-300 font-medium"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Réserver via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Tous nos véhicules sont régulièrement entretenus et nettoyés pour votre confort et votre sécurité.
            Prix incluant l'assurance et l'assistance 24/7.
          </p>
        </div>
      </div>
    </section>
  );
}