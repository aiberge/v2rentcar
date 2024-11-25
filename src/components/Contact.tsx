import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contactez-nous
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-[#EE8391]" />
              <div>
                <h3 className="text-xl font-semibold text-white">Adresse</h3>
                <p className="text-gray-300">Belle vue Av Allal Fassi rue G n°, Rue 2 (BIS), Tangier 90000</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-[#EE8391]" />
              <div>
                <h3 className="text-xl font-semibold text-white">Téléphone</h3>
                <p className="text-gray-300">06 44 46 55 55</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-[#EE8391]" />
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-gray-300">contact@v2rentcar.com</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.2435650831144!2d-5.800130098034859!3d35.76360107763365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b816706ada6d5%3A0x314299b50fd51e!2sV2%20RENT%20CAR!5e0!3m2!1sfr!2sma!4v1732528163491!5m2!1sfr!2sma"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}