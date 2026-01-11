
import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Mail, Facebook, Instagram } from 'lucide-react';

const CEO_MESSAGES = [
  "Fashion is the armor to survive the reality of everyday life. Welcome to Pari Posh.",
  "We don't just design clothes; we design dreams. Thank you for choosing us.",
  "Elegance is not standing out, but being remembered. Enjoy your shopping experience.",
  "Tradition meets modernity in every stitch we sew. Welcome to the family.",
  "Style is a way to say who you are without having to speak.",
  "Quality is not an act, it is a habit. We promise you the best."
];

const CEO_IMAGE = "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/480096217_122098691768772817_5002006631407603851_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0wKAytSaz3gQ7kNvwE1JmvU&_nc_oc=AdnQ5c3JqW2hAc0u3fIBOZwH0JhPMHrzQlFQOP3MeAYgFmZCXd6YZooHyVn84op_AqU&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=7zR6OvYUirWJxE7n7iwkoQ&oh=00_Afpt8ZrstJJ_jCFR8hYw3RfxLj_uVllwsqFRq61m5osL-Q&oe=69692035";

const PromotionalModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Pick random message
    setMessage(CEO_MESSAGES[Math.floor(Math.random() * CEO_MESSAGES.length)]);
    
    // Open after delay
    const timer = setTimeout(() => {
        // Check if already shown in this session
        const hasShown = sessionStorage.getItem('promoShown');
        if (!hasShown) {
            setIsOpen(true);
            sessionStorage.setItem('promoShown', 'true');
        }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in-down" onClick={() => setIsOpen(false)} />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-[340px] overflow-hidden animate-fade-in-up transform transition-all scale-100 p-6">
        
        {/* Close Button */}
        <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-300 hover:text-gray-500 transition-colors z-20"
        >
            <X className="h-5 w-5" />
        </button>

        {/* Brand Logo - Top & Center (Matching Website Style) */}
        <div className="flex flex-col items-center justify-center mb-6 pt-2">
            <h1 className="font-serif text-3xl font-bold tracking-widest text-primary relative z-10 whitespace-nowrap">
            PARI POSH
            <span className="inline-block w-2 h-2 bg-pink-500 rounded-full ml-1 mb-2 shadow-sm ring-2 ring-white"></span>
            </h1>
            <span className="text-[9px] font-sans font-medium tracking-[0.4em] text-gray-400 uppercase text-center -mt-1">
            Premium Wear
            </span>
        </div>

        {/* CEO Section */}
        <div className="flex flex-col items-center text-center">
            {/* CEO Picture */}
            <div className="w-16 h-16 rounded-full border border-gray-100 p-1 shadow-sm mb-3">
                <img src={CEO_IMAGE} alt="Muhammad Behzad Faisal" className="w-full h-full object-cover rounded-full" />
            </div>
            
            {/* Random Message */}
            <div className="mb-6 relative px-1">
                <p className="text-gray-600 italic font-serif text-xs leading-relaxed">
                    "{message}"
                </p>
                <div className="mt-2">
                    <p className="text-xs font-bold text-primary">Muhammad Behzad Faisal</p>
                    <p className="text-[9px] text-gray-400 uppercase tracking-wider">Founder & CEO</p>
                </div>
            </div>
        </div>

        {/* Actions */}
        <div className="space-y-4">
            {/* WhatsApp Quick Link */}
            <a 
                href="https://wa.me/923275247247" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-md group"
            >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Chat on WhatsApp
            </a>
            
            {/* Social Links & Email */}
            <div className="pt-2 border-t border-gray-50">
                <p className="text-[10px] text-center text-gray-300 font-medium uppercase tracking-wide mb-3">Stay Connected</p>
                <div className="flex justify-center gap-6">
                    <a href="mailto:mbfaisal247@gmail.com" className="group flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <div className="p-2 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
                            <Mail className="w-4 h-4" />
                        </div>
                    </a>
                    <a href="#" className="group flex flex-col items-center gap-1 text-gray-400 hover:text-[#1877F2] transition-colors">
                        <div className="p-2 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors">
                            <Facebook className="w-4 h-4" />
                        </div>
                    </a>
                    <a href="#" className="group flex flex-col items-center gap-1 text-gray-400 hover:text-[#E4405F] transition-colors">
                        <div className="p-2 bg-gray-50 rounded-full group-hover:bg-pink-50 transition-colors">
                            <Instagram className="w-4 h-4" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalModal;
