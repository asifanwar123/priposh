import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onCategoryClick: (category: string) => void;
  onHomeClick: () => void;
  onPageClick: (pageName: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onCategoryClick, onHomeClick, onPageClick }) => {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Top Section - Gray Background */}
      <div className="bg-[#ededed] py-12">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Shop Column */}
            <div>
              <h2 className="text-[15px] font-heading font-semibold text-primary uppercase tracking-wider mb-4">Shop</h2>
              <ul className="space-y-2">
                <li><button onClick={onHomeClick} className="text-[12px] text-primary hover:underline hover:text-secondary">Home</button></li>
                <li><button onClick={() => onCategoryClick('New Arrivals')} className="text-[12px] text-primary hover:underline hover:text-secondary">New Arrivals</button></li>
                <li><button onClick={() => onCategoryClick('Casual')} className="text-[12px] text-primary hover:underline hover:text-secondary">Casual</button></li>
                <li><button onClick={() => onCategoryClick('Festive')} className="text-[12px] text-primary hover:underline hover:text-secondary">Festive</button></li>
                <li><button onClick={() => onCategoryClick('Kids')} className="text-[12px] text-primary hover:underline hover:text-secondary">Kids</button></li>
                <li><button onClick={() => onCategoryClick('Sale')} className="text-[12px] text-primary hover:underline hover:text-secondary">Sale</button></li>
              </ul>
            </div>

            {/* Customer Care Column */}
            <div>
              <h2 className="text-[15px] font-heading font-semibold text-primary uppercase tracking-wider mb-4">Customer Care</h2>
              <ul className="space-y-2">
                <li><button onClick={() => onPageClick('Our Story')} className="text-[12px] text-primary hover:underline hover:text-secondary">Our Story</button></li>
                <li><button onClick={() => onPageClick('Exchange & Return Policy')} className="text-[12px] text-primary hover:underline hover:text-secondary">Exchange & Return Policy</button></li>
                <li><button onClick={() => onPageClick('Size Chart')} className="text-[12px] text-primary hover:underline hover:text-secondary">Size Chart</button></li>
                <li><button onClick={() => onPageClick('Wholesale')} className="text-[12px] text-primary hover:underline hover:text-secondary">Wholesale</button></li>
                <li><button onClick={() => onPageClick('Contact Us')} className="text-[12px] text-primary hover:underline hover:text-secondary">Contact Us</button></li>
              </ul>
            </div>

            {/* Information Column */}
            <div>
              <h2 className="text-[15px] font-heading font-semibold text-primary uppercase tracking-wider mb-4">Information</h2>
              <ul className="space-y-2">
                <li><button onClick={() => onPageClick('Our Policies')} className="text-[12px] text-primary hover:underline hover:text-secondary">Our Policies</button></li>
                <li><button onClick={() => onPageClick('Terms and Conditions')} className="text-[12px] text-primary hover:underline hover:text-secondary">Terms and Conditions</button></li>
                <li><button onClick={() => onPageClick('Privacy Policy')} className="text-[12px] text-primary hover:underline hover:text-secondary">Privacy Policy</button></li>
                <li><button onClick={() => onPageClick('Shipping Policy')} className="text-[12px] text-primary hover:underline hover:text-secondary">Shipping Policy</button></li>
                <li><button onClick={() => onPageClick('Refund Policy')} className="text-[12px] text-primary hover:underline hover:text-secondary">Refund Policy</button></li>
                <li><button onClick={() => onPageClick('FAQ')} className="text-[12px] text-primary hover:underline hover:text-secondary">FAQ</button></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="text-[15px] font-heading font-semibold text-primary uppercase tracking-wider mb-2">Newsletter Sign Up</h2>
              <p className="text-[12px] text-primary mb-4">Sign up for exclusive updates, new arrivals & insider only discounts</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="enter your email address" 
                  className="flex-1 bg-primary text-gray-300 border border-gray-400 px-3 py-2 text-[12px] placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-white text-primary border border-white px-6 py-2 text-[12px] font-bold uppercase hover:bg-primary hover:text-white hover:border-primary transition-colors">
                  Submit
                </button>
              </div>
              
              <div className="mt-8">
                 <div className="flex space-x-4">
                    <a href="#" className="w-8 h-8 flex items-center justify-center bg-white border border-white hover:bg-primary hover:border-white group">
                       <Facebook className="h-3 w-3 text-primary group-hover:text-white" fill="currentColor" />
                    </a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center bg-white border border-white hover:bg-primary hover:border-white group">
                       <Instagram className="h-3 w-3 text-primary group-hover:text-white" />
                    </a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center bg-white border border-white hover:bg-primary hover:border-white group">
                       <span className="text-[10px] font-bold text-primary group-hover:text-white">TK</span>
                    </a>
                 </div>
              </div>
              <div className="mt-6">
                 <p className="text-[12px] font-semibold text-primary mb-2">We Accept:</p>
                 <div className="flex space-x-2">
                    <div className="h-6 w-10 bg-white border border-gray-200 flex items-center justify-center">
                        <span className="text-[8px] font-bold text-blue-600 italic">VISA</span>
                    </div>
                    <div className="h-6 w-10 bg-white border border-gray-200 flex items-center justify-center">
                        <div className="flex -space-x-1">
                            <div className="w-3 h-3 rounded-full bg-red-500 opacity-80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#727272] py-5">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <p className="text-[12px] text-white">
            © 2025 Bahzad. Powered By <a href="https://asifanwar.online" target="_blank" rel="noopener noreferrer" className="hover:underline">asifanwar.online</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
